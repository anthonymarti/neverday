(function(root){
'use strict';
const regions=[
{id:'japan',name:'Japan',code:'JP',symbol:'日',tone:'rose',countries:['Japan'],plans:[{gb:3,days:15,price:7},{gb:5,days:30,price:11},{gb:10,days:30,price:18}]},
{id:'europe',name:'Europe',code:'EU',symbol:'↗',tone:'sage',countries:['France','Italy','Spain','Portugal','Greece','Germany','Netherlands','Austria'],plans:[{gb:3,days:7,price:11},{gb:5,days:15,price:18},{gb:10,days:30,price:29}]},
{id:'uk',name:'United Kingdom',code:'GB',symbol:'UK',tone:'blue',countries:['United Kingdom'],plans:[{gb:3,days:7,price:8},{gb:5,days:15,price:13},{gb:10,days:30,price:22}]},
{id:'canada',name:'Canada',code:'CA',symbol:'北',tone:'sand',countries:['Canada'],plans:[{gb:3,days:7,price:12},{gb:5,days:15,price:19},{gb:10,days:30,price:32}]},
{id:'mexico',name:'Mexico',code:'MX',symbol:'M',tone:'rose',countries:['Mexico'],plans:[{gb:3,days:7,price:10},{gb:5,days:15,price:16},{gb:10,days:30,price:27}]},
{id:'thailand',name:'Thailand',code:'TH',symbol:'泰',tone:'sage',countries:['Thailand'],plans:[{gb:3,days:7,price:7},{gb:5,days:15,price:11},{gb:10,days:30,price:19}]}
].map(r=>Object.freeze({...r,countries:Object.freeze(r.countries),plans:Object.freeze(r.plans.map(p=>Object.freeze({...p,id:r.id+'-'+p.gb})))}));
const day=(d=new Date())=>new Date(d).toISOString().slice(0,10);
function addDays(v,n){const d=new Date(v+'T00:00:00Z');d.setUTCDate(d.getUTCDate()+n);return day(d);}
function validDate(v){try{return typeof v==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v)&&day(v)===v;}catch{return false;}}
function region(id){const r=regions.find(x=>x.id===id);if(!r)throw Error('Choose a demo destination.');return r;}
function plan(id){for(const r of regions){const p=r.plans.find(p=>p.id===id);if(p)return {...p,regionId:r.id};}throw Error('Choose an available demo plan.');}
const initial=()=>({version:1,planId:'japan-5',device:'iphone',compatible:false,unlocked:false,tripDate:day(),orders:[],currentOrderId:null});
function selection(s,id){plan(id);return {...s,planId:id};}
function validate(s,today=day()){
plan(s.planId);
if(!['iphone','pixel','samsung','other'].includes(s.device))throw Error('Choose a device family.');
if(!s.compatible||!s.unlocked)throw Error('Confirm exact-device eSIM support and carrier unlock.');
if(!validDate(s.tripDate)||s.tripDate<today||s.tripDate>addDays(today,365))throw Error('Choose a valid trip date from today to one year ahead.');
return true;
}
const current=s=>s.orders.find(o=>o.id===s.currentOrderId)||null;
function required(s){const o=current(s);if(!o)throw Error('Complete demo checkout first.');return o;}
const replace=(s,o)=>({...s,orders:s.orders.map(x=>x.id===o.id?o:x)});
function status(o,today=day()){if(o.refunded)return 'refunded';if(!o.installed)return 'ready';if(!o.activatedAt)return 'installed';if(today>=o.expiresOn)return 'expired';return o.usedGb>=o.totalGb?'exhausted':'active';}
function purchase(s,id,today=day()){
validate(s,today);if(s.orders.some(o=>o.id===id))throw Error('Duplicate demo order.');
const p=plan(s.planId),o={id,planId:p.id,regionId:p.regionId,gb:p.gb,totalGb:p.gb,days:p.days,price:p.price,tripDate:s.tripDate,device:s.device,installed:false,activatedAt:null,expiresOn:null,usedGb:0,refunded:false,purchasedOn:today,topups:[],events:[{label:'Demo order created',date:today}]};
return {...s,orders:[o,...s.orders],currentOrderId:id};
}
function install(s,today=day()){const o=required(s);if(status(o,today)!=='ready')throw Error('This pack cannot be installed again.');return replace(s,{...o,installed:true,events:[{label:'Installation simulated',date:today},...o.events]});}
function activate(s,today=day()){const o=required(s);if(status(o,today)!=='installed')throw Error('Complete installation first.');return replace(s,{...o,activatedAt:today,expiresOn:addDays(today,o.days),events:[{label:'Arrival simulated',date:today},...o.events]});}
function use(s,gb,today=day()){const o=required(s);if(status(o,today)!=='active')throw Error('An active pack with data remaining is required.');if(!Number.isFinite(gb)||gb<=0)throw Error('Usage must be positive.');return replace(s,{...o,usedGb:Math.min(o.totalGb,Math.round((o.usedGb+gb)*100)/100),events:[{label:'Demo usage: '+gb+' GB',date:today},...o.events].slice(0,30)});}
function topup(s,id,today=day()){const o=required(s);if(!['active','exhausted'].includes(status(o,today)))throw Error('Top-ups need an unexpired active or exhausted pack.');if(o.topups.some(t=>t.id===id))throw Error('Duplicate top-up.');const t={id,gb:3,price:7,date:today};return replace(s,{...o,totalGb:o.totalGb+3,topups:[t,...o.topups],events:[{label:'Demo top-up: 3 GB',date:today},...o.events]});}
function expire(s,today=day()){const o=required(s);if(!['active','exhausted'].includes(status(o,today)))throw Error('Activate the pack first.');return replace(s,{...o,expiresOn:today,events:[{label:'Expiry simulated',date:today},...o.events]});}
function refund(s,today=day()){const o=required(s);if(!['ready','installed'].includes(status(o,today)))throw Error('Demo refunds are available before activation only.');return replace(s,{...o,refunded:true,events:[{label:'Demo refund recorded; no money moved',date:today},...o.events]});}
function restore(raw){
try{
const s=JSON.parse(raw);if(s.version!==1||!Array.isArray(s.orders)||s.orders.length>100||!['iphone','pixel','samsung','other'].includes(s.device)||typeof s.compatible!=='boolean'||typeof s.unlocked!=='boolean'||typeof s.tripDate!=='string')return null;
plan(s.planId);
for(const o of s.orders){
const p=plan(o.planId);
if(p.regionId!==o.regionId||o.gb!==p.gb||o.days!==p.days||o.price!==p.price||typeof o.id!=='string'||typeof o.installed!=='boolean'||typeof o.refunded!=='boolean'||!Number.isFinite(o.usedGb)||!Number.isFinite(o.totalGb)||o.usedGb<0||o.usedGb>o.totalGb||!Array.isArray(o.topups)||!Array.isArray(o.events)||!['iphone','pixel','samsung','other'].includes(o.device)||!validDate(o.tripDate)||!validDate(o.purchasedOn))return null;
if(o.activatedAt!==null&&(!validDate(o.activatedAt)||!validDate(o.expiresOn)||!o.installed))return null;
if(o.activatedAt===null&&o.expiresOn!==null)return null;
if(o.topups.some(t=>typeof t.id!=='string'||t.gb!==3||t.price!==7||!validDate(t.date)))return null;
if(o.totalGb!==p.gb+o.topups.length*3||new Set(o.topups.map(t=>t.id)).size!==o.topups.length)return null;
if(o.events.some(e=>typeof e.label!=='string'||!validDate(e.date)))return null;
}
if(new Set(s.orders.map(o=>o.id)).size!==s.orders.length||s.currentOrderId!==null&&!s.orders.some(o=>o.id===s.currentOrderId))return null;
return s;
}catch{return null;}
}
root.NeverdayCore=Object.freeze({regions:Object.freeze(regions),day,addDays,region,plan,initial,selection,validate,current,status,purchase,install,activate,use,topup,expire,refund,restore});
})(globalThis);
