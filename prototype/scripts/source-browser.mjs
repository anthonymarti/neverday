import{createRequire}from'node:module';
const require=createRequire('/tmp/neverday-browser/package.json'),{chromium}=require('playwright'),browser=await chromium.launch({headless:true}),page=await browser.newPage();
const seen=new Set();
const urls=['https://esimaccess.com/','https://esimaccess.com/faq/','https://docs.esimaccess.com/','https://esimgo.com/pricing/','https://popcorn.space/','https://www.mintmobile.com/','https://vercel.com/docs/plans/hobby','https://vercel.com/docs/plans/hobby.md','https://partners.airalo.com/'];
try{
for(const url of urls){if(seen.has(url))continue;seen.add(url);console.log('BROWSER_SOURCE_BEGIN '+url);
try{const response=await page.goto(url,{waitUntil:'domcontentloaded',timeout:25000});console.log('BROWSER_HTTP '+response?.status()+' FINAL '+page.url());if(response?.status()>=400){console.log('BLOCKED_HTTP');continue;}await page.waitForTimeout(1800);
const text=await page.locator('body').innerText(),terms=/pre.?pay|deposit|minimum|fee|credit|wallet|balance|fund|payout|settle|refund|disput|commercial|personal|profit|api|onboard|wholesale|voice|sms|port|coverage|data.only|affiliat|fair.use/ig;
const ranges=[];for(const m of text.matchAll(terms)){const a=Math.max(0,m.index-150),b=Math.min(text.length,m.index+420);if(!ranges.length||a>ranges[ranges.length-1][1])ranges.push([a,b]);else ranges[ranges.length-1][1]=Math.max(ranges[ranges.length-1][1],b);}
console.log('BROWSER_CONTENT '+(ranges.length?ranges.map(([a,b])=>text.slice(a,b)).join('\n'):text).slice(0,22000));
const links=await page.locator('a[href]').evaluateAll(a=>a.map(x=>({text:x.textContent.trim(),url:x.href})).filter(x=>/pricing|faq|terms|rules|refund|balance|deposit|prepaid|account setup/i.test(x.text+' '+x.url)).slice(0,35));console.log('BROWSER_LINKS '+JSON.stringify(links));
}catch(e){console.log('BROWSER_FETCH_BLOCKED '+e.message);}finally{console.log('BROWSER_SOURCE_END '+url);}
}
const url='https://neverday-jit6he7xo-anthonyrmarti-7489s-projects.vercel.app/prototype/';
console.log('DEPLOY_VERIFY_BEGIN '+url);
const response=await page.goto(url,{waitUntil:'networkidle',timeout:30000});
console.log('DEPLOY_HTTP '+response?.status()+' FINAL '+page.url());
console.log('DEPLOY_TITLE '+await page.title());
console.log('DEPLOY_APP_VISIBLE '+await page.getByRole('heading',{name:/A little data/}).count());
console.log('DEPLOY_STYLES '+await page.locator('body').evaluate(el=>getComputedStyle(el).backgroundColor));
console.log('DEPLOY_VERIFY_END');
}finally{await browser.close();}
