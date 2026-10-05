(function(root){
'use strict';
async function simulate(fail,message){await new Promise(r=>setTimeout(r,500));if(fail)throw Error(message);}
root.NeverdayServices=Object.freeze({
payments:{async authorize({fail=false}={}){await simulate(fail,'Demo payment declined. Nothing was charged.');return {simulated:true};},async refund(){await simulate(false);return {simulated:true,moneyMoved:false};}},
connectivity:{
async provision({fail=false}={}){await simulate(fail,'Demo provider unavailable. No charge or order was created.');return {simulated:true,activationCredentials:null};},
async install({fail=false}={}){await simulate(fail,'Demo installation interrupted. Retry the success scenario.');return {simulated:true};},
async activate({fail=false}={}){await simulate(fail,'Demo network unavailable. The pack remains installed.');return {simulated:true};},
async topup({fail=false}={}){await simulate(fail,'Demo top-up failed. Balance and receipt are unchanged.');return {simulated:true};}}
});
})(globalThis);
