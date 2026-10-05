import test from'node:test';
import assert from'node:assert/strict';
import{readFile}from'node:fs/promises';
import vm from'node:vm';
const context=vm.createContext({});vm.runInContext(await readFile(new URL('../core.js',import.meta.url),'utf8'),context);
const C=context.NeverdayCore,today='2026-10-05',ready=()=>({...C.initial(),tripDate:today,compatible:true,unlocked:true});
test('complete purchase, installation, arrival, usage, exhaustion, top-up and expiry',()=>{
let s=C.purchase(ready(),'D1',today);assert.equal(C.current(s).planId,'japan-5');assert.throws(()=>C.activate(s,today));
s=C.install(s,today);s=C.activate(s,today);assert.equal(C.current(s).expiresOn,'2026-11-04');
s=C.use(s,.25,today);assert.equal(C.current(s).usedGb,.25);s=C.use(s,100,today);assert.equal(C.status(C.current(s),today),'exhausted');
s=C.topup(s,'T1',today);assert.equal(C.current(s).totalGb,8);assert.equal(C.current(s).expiresOn,'2026-11-04');
assert.throws(()=>C.topup(s,'T1',today));assert.equal(C.status(C.current(s),'2026-11-04'),'expired');
s=C.expire(s,today);assert.throws(()=>C.topup(s,'T2',today));
});
test('device, plan and date validation',()=>{
assert.throws(()=>C.purchase(C.initial(),'BAD',today));
for(const tripDate of['2026-10-04','2026-02-30','2027-10-06','invalid'])assert.throws(()=>C.validate({...ready(),tripDate},today));
assert.throws(()=>C.validate({...ready(),device:'unknown'},today));assert.throws(()=>C.selection(ready(),'missing'));
});
test('immutable updates and duplicate orders',()=>{
const s=ready(),next=C.purchase(s,'D',today);assert.equal(s.orders.length,0);assert.equal(next.orders.length,1);assert.throws(()=>C.purchase(next,'D',today));
});
test('multiple trips and refund eligibility',()=>{
let s=C.purchase(ready(),'D1',today);s=C.install(s,today);s=C.refund(s,today);assert.equal(C.status(C.current(s),today),'refunded');assert.throws(()=>C.activate(s,today));
s=C.purchase(C.selection(s,'europe-10'),'D2',today);assert.equal(s.orders.length,2);s=C.activate(C.install(s,today),today);assert.throws(()=>C.refund(s,today));
});
test('storage validates progress and rejects corruption and tampering',()=>{
const s=C.purchase(ready(),'D',today);assert.equal(JSON.stringify(C.restore(JSON.stringify(s))),JSON.stringify(s));assert.equal(C.restore('{bad'),null);
assert.equal(C.restore(JSON.stringify({...s,version:99})),null);const bad=JSON.parse(JSON.stringify(s));bad.orders[0].totalGb=100;assert.equal(C.restore(JSON.stringify(bad)),null);
assert.equal(C.restore(JSON.stringify({...s,currentOrderId:'missing'})),null);
});
test('quota and numeric usage bounds',()=>{
let s=C.activate(C.install(C.purchase(ready(),'D',today),today),today);
for(const gb of[-1,NaN,Infinity,0])assert.throws(()=>C.use(s,gb,today));s=C.use(s,100,today);assert.equal(C.current(s).usedGb,5);assert.throws(()=>C.use(s,1,today));
});
