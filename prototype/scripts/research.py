"""Read current official public pages; logs only, no accounts or service activation."""
from urllib.request import Request,urlopen
from html.parser import HTMLParser
import re,datetime
class Text(HTMLParser):
    def __init__(self):super().__init__();self.parts=[];self.hidden=0
    def handle_starttag(self,t,a):
        if t in ('script','style','noscript'):self.hidden+=1
    def handle_endtag(self,t):
        if t in ('script','style','noscript'):self.hidden=max(0,self.hidden-1)
    def handle_data(self,s):
        if not self.hidden and s.strip():self.parts.append(s.strip())
urls=[
'https://www.mintmobile.com/',
'https://popcorn.space/',
'https://esimgo.com/',
'https://docs.esim-go.com/',
'https://www.esimaccess.com/',
'https://docs.esimaccess.com/',
'https://www.airalo.com/partners',
'https://www.1global.com/',
'https://gigs.com/',
'https://stripe.com/pricing',
'https://docs.stripe.com/payouts',
'https://docs.stripe.com/refunds',
'https://docs.stripe.com/disputes',
'https://vercel.com/docs/plans/hobby',
'https://vercel.com/docs/plans/hobby#commercial-usage',
'https://www.usac.org/service-providers/contributing-to-the-usf/who-must-contribute/',
'https://www.fcc.gov/general/universal-service',
]
print('RESEARCH_DATE',datetime.datetime.now(datetime.timezone.utc).isoformat())
terms=re.compile(r'pre.?pay|deposit|minimum|fee|credit|wallet|balance|fund|payout|settle|refund|disput|commercial|personal|profit|free|api|onboard|wholesale|voice|sms|phone|port|coverage|data.only|affiliat',re.I)
for url in urls:
    print('SOURCE_BEGIN',url)
    try:
        response=urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0 Neverday prototype research'}),timeout=25)
        html=response.read(1500000).decode('utf8','replace');p=Text();p.feed(html)
        text=' '.join(p.parts);print('FINAL_URL',response.url,'HTTP',response.status)
        ranges=[]
        for match in terms.finditer(text):
            start=max(0,match.start()-120);end=min(len(text),match.end()+280)
            if not ranges or start>ranges[-1][1]:ranges.append([start,end])
            else:ranges[-1][1]=max(ranges[-1][1],end)
        excerpt='\n'.join(text[a:b] for a,b in ranges)
        print('CONTENT',excerpt[:18000] if excerpt else text[:6000])
    except Exception as e:print('FETCH_BLOCKED',type(e).__name__,str(e))
    print('SOURCE_END',url)
