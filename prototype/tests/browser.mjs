import assert from'node:assert/strict';
import{createRequire}from'node:module';
import{spawn}from'node:child_process';
import{readFile}from'node:fs/promises';
const require=createRequire('/tmp/neverday-browser/package.json'),{chromium}=require('playwright');
const server=spawn(process.execPath,['scripts/serve.mjs'],{stdio:'inherit'});
let browser;
try{
for(let i=0;i<30;i++){try{if((await fetch('http://127.0.0.1:4173')).ok)break;}catch{}await new Promise(r=>setTimeout(r,200));}
browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[],external=[];
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
page.on('request',r=>{if(!r.url().startsWith('http://127.0.0.1:4173')&&!r.url().startsWith('blob:'))external.push(r.url());});
page.setDefaultTimeout(12000);
async function snap(name){const b=await page.screenshot({type:'jpeg',quality:55});console.log('NEVERDAY_SCREEN_'+name+'='+b.toString('base64'));}
async function fits(){assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'horizontal overflow');}
async function saved(){return page.evaluate(()=>JSON.parse(localStorage.getItem('neverday.demo.v1')));}
await page.goto('http://127.0.0.1:4173');await page.getByRole('heading',{name:/A little data/}).waitFor();await fits();await snap('desktop-home');
await page.locator('#destination-search').fill('Atlantis');await page.getByRole('heading',{name:'No demo destination found.'}).waitFor();
await page.getByRole('button',{name:'Clear search'}).click();await page.locator('#destination-search').fill('France');assert.equal(await page.locator('.destination').count(),1);
await page.locator('#destination-search').fill('');await page.getByRole('button',{name:'Explore Japan demo plans',exact:true}).click();
await page.locator('#japan-5').check();await page.getByRole('link',{name:/Continue with 5 GB/}).click();
await page.getByRole('button',{name:/Simulate purchase/}).click();assert.equal(new URL(page.url()).hash,'#checkout');
await page.locator('[name=compatible]').check();await page.locator('[name=unlocked]').check();await page.locator('[name=demoConsent]').check();
await page.locator('.lab summary').click();await page.locator('#checkout-scenario').selectOption('payment');
await page.getByRole('button',{name:/Simulate purchase/}).click();await page.locator('#form-error').filter({hasText:'Demo payment declined'}).waitFor();assert.equal((await saved()).orders.length,0);
await page.locator('#checkout-scenario').selectOption('provider');await page.getByRole('button',{name:/Simulate purchase/}).click();await page.locator('#form-error').filter({hasText:'Demo provider unavailable'}).waitFor();assert.equal((await saved()).orders.length,0);
await page.locator('#checkout-scenario').selectOption('success');await page.getByRole('button',{name:/Simulate purchase/}).click();await page.getByRole('heading',{name:'Your trip, ready to go.'}).waitFor();
await page.getByRole('button',{name:/Continue/}).click();await page.getByRole('button',{name:/Continue/}).click();
await page.locator('.lab summary').click();await page.locator('#install-fail').check();await page.getByRole('button',{name:/Finish demo installation/}).click();await page.locator('#form-error').filter({hasText:'Demo installation interrupted'}).waitFor();
assert.equal((await saved()).orders[0].installed,false);await page.locator('#install-fail').uncheck();await page.getByRole('button',{name:/Finish demo installation/}).click();
await page.getByRole('heading',{name:'Ready when you are.'}).waitFor();await page.getByRole('link',{name:/Go to my trip/}).click();
await page.locator('.lab summary').click();await page.locator('#service-fail').check();await page.getByRole('button',{name:/Simulate arrival/}).click();await page.locator('#form-error').filter({hasText:'Demo network unavailable'}).waitFor();assert.equal((await saved()).orders[0].activatedAt,null);
await page.locator('#service-fail').uncheck();await page.getByRole('button',{name:/Simulate arrival/}).click();await page.getByRole('button',{name:/Simulate 3 GB top-up/}).waitFor();
await page.locator('.lab summary').click();await page.getByRole('button',{name:'Use 0.25 GB',exact:true}).click();assert.equal((await saved()).orders[0].usedGb,.25);
await page.locator('.lab summary').click();await page.getByRole('button',{name:'Use all data',exact:true}).click();await page.getByText('Data used up',{exact:true}).waitFor();
await page.locator('.lab summary').click();await page.locator('#service-fail').check();await page.getByRole('button',{name:/Simulate 3 GB top-up/}).click();await page.locator('#form-error').filter({hasText:'Demo top-up failed'}).waitFor();assert.equal((await saved()).orders[0].totalGb,5);
await page.locator('#service-fail').uncheck();await page.getByRole('button',{name:/Simulate 3 GB top-up/}).click();await page.getByText('Demo active',{exact:true}).waitFor();assert.equal((await saved()).orders[0].totalGb,8);await fits();await snap('desktop-dashboard');
await page.getByRole('link',{name:/View demo receipt/}).click();const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Download demo receipt'}).click();const dl=await downloadPromise,receipt=JSON.parse(await readFile(await dl.path(),'utf8'));assert.equal(receipt.actualCharged,0);assert.equal(receipt.sampleTotal,21);assert.equal(receipt.activationCredentials,null);
await page.getByRole('link',{name:/My trip/,exact:false}).first().click();
await page.goto('http://127.0.0.1:4173/#dashboard');await page.locator('.lab summary').click();await page.getByRole('button',{name:'Simulate expiry',exact:true}).click();await page.getByText('Expired',{exact:true}).waitFor();
await page.reload();await page.getByText('Expired',{exact:true}).waitFor();
await page.goto('http://127.0.0.1:4173/#home');await page.getByRole('button',{name:'Explore Europe demo plans',exact:true}).click();await page.getByRole('link',{name:/Continue with 5 GB/}).click();await page.locator('[name=demoConsent]').check();await page.getByRole('button',{name:/Simulate purchase/}).click();await page.getByRole('heading',{name:'Your trip, ready to go.'}).waitFor();
await page.goto('http://127.0.0.1:4173/#dashboard');await page.locator('.lab summary').click();await page.getByRole('button',{name:'Simulate unused-pack refund',exact:true}).click();await page.getByText('Demo refunded',{exact:true}).waitFor();assert.equal((await saved()).orders.length,2);
await page.locator('.trip-list button').filter({hasText:'Japan'}).click();await page.getByText('Expired',{exact:true}).waitFor();
await page.setViewportSize({width:390,height:844});await page.goto('http://127.0.0.1:4173/#home');await fits();await snap('mobile-home');
await page.goto('http://127.0.0.1:4173/#dashboard');await fits();await snap('mobile-dashboard');
for(const width of[390,320]){await page.setViewportSize({width,height:844});for(const route of['home','plans','checkout','install','dashboard','receipt','help','brief']){await page.goto('http://127.0.0.1:4173/#'+route);await fits();}}
await page.locator('.banner [data-action=reset]').click();await page.getByRole('dialog').waitFor();await page.getByRole('dialog').getByRole('button',{name:'Keep my demo'}).click();assert.equal((await saved()).orders.length,2);
await page.locator('.banner [data-action=reset]').click();await page.getByRole('dialog').getByRole('button',{name:'Reset demo',exact:true}).click();assert.equal(await page.evaluate(()=>localStorage.getItem('neverday.demo.v1')),null);
await page.goto('http://127.0.0.1:4173/#dashboard');await page.getByRole('heading',{name:'Your next chapter is waiting.'}).waitFor();
await page.evaluate(()=>localStorage.setItem('neverday.demo.v1','{broken'));await page.reload();await page.getByRole('heading',{name:'Your next chapter is waiting.'}).waitFor();
assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
console.log('BROWSER_PASS: complete journey, native validation, five failure scenarios, balances, receipts, refund, expiry, multiple trips, reload/corrupt storage, reset, desktop/mobile/320px layouts; zero browser errors or external app requests.');
}finally{if(browser)await browser.close();server.kill();}
