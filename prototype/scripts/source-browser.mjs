import{createRequire}from'node:module';
const require=createRequire('/tmp/neverday-browser/package.json'),{chromium}=require('playwright'),browser=await chromium.launch({headless:true}),page=await browser.newPage();
const seen=new Set();
const urls=['https://esimaccess.com/faq/','https://esimaccess.com/docs/terms-of-service/','https://esimaccess.com/docs/how-do-i-refund-an-unused-order/','https://www.t-mobile.com/news/business/t-mobile-closes-acquisition-mint-and-ultra-mobile','https://www.mintmobile.com/help/what-is-mint-mobile/','https://popcorn.space/rules','https://popcorn.space/terms','https://vercel.com/docs/limits/fair-use-guidelines.md','https://partners.airalo.com/solutions/reseller-platform','https://partners.airalo.com/solutions/affiliate-program'];
try{
for(const url of urls){if(seen.has(url))continue;seen.add(url);console.log('BROWSER_SOURCE_BEGIN '+url);
try{const response=await page.goto(url,{waitUntil:'domcontentloaded',timeout:25000});console.log('BROWSER_HTTP '+response?.status()+' FINAL '+page.url());if(response?.status()>=400){console.log('BLOCKED_HTTP');continue;}await page.waitForTimeout(1800);
if(url==='https://esimaccess.com/faq/'){for(const q of ['What is required to start selling eSIMs?','Can I get a demo of the product?','What are your prices?','What are my payment options?','How can I request a refund?','What is the validity of your eSIMs?']){try{await page.getByText(q,{exact:true}).first().click({timeout:2000});}catch{}}}
const text=await page.locator('body').innerText(),terms=/pre.?pay|deposit|minimum|fee|credit|wallet|balance|fund|payout|settle|refund|disput|commercial|personal|profit|api|onboard|wholesale|voice|sms|port|coverage|data.only|affiliat|fair.use/ig;
const ranges=[];for(const m of text.matchAll(terms)){const a=Math.max(0,m.index-150),b=Math.min(text.length,m.index+420);if(!ranges.length||a>ranges[ranges.length-1][1])ranges.push([a,b]);else ranges[ranges.length-1][1]=Math.max(ranges[ranges.length-1][1],b);}
console.log('BROWSER_CONTENT '+(ranges.length?ranges.map(([a,b])=>text.slice(a,b)).join('\n'):text).slice(0,22000));
const links=await page.locator('a[href]').evaluateAll(a=>a.map(x=>({text:x.textContent.trim(),url:x.href})).filter(x=>/pricing|faq|terms|rules|refund|balance|deposit|prepaid|account setup/i.test(x.text+' '+x.url)).slice(0,35));console.log('BROWSER_LINKS '+JSON.stringify(links));
}catch(e){console.log('BROWSER_FETCH_BLOCKED '+e.message);}finally{console.log('BROWSER_SOURCE_END '+url);}
}
const url='https://neverday-9yeb9yzu2-anthonyrmarti-7489s-projects.vercel.app/prototype/index.html';
console.log('DEPLOY_VERIFY_BEGIN '+url);
const response=await page.goto(url,{waitUntil:'networkidle',timeout:30000});
console.log('DEPLOY_HTTP '+response?.status()+' FINAL '+page.url());
console.log('DEPLOY_TITLE '+await page.title());
console.log('DEPLOY_APP_VISIBLE '+await page.getByRole('heading',{name:/A little data/}).count());
console.log('DEPLOY_STYLES '+await page.locator('body').evaluate(el=>getComputedStyle(el).backgroundColor));
console.log('DEPLOY_VERIFY_END');
}finally{await browser.close();}
