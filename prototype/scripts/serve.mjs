import http from'node:http';
import path from'node:path';
import{readFile,stat}from'node:fs/promises';
import{fileURLToPath}from'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.svg':'image/svg+xml'};
http.createServer(async(req,res)=>{try{
if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end();return;}
const uri=decodeURIComponent(new URL(req.url,'http://localhost').pathname),file=path.resolve(root,'.'+uri+(uri.endsWith('/')?'index.html':'')),relative=path.relative(root,file);
if(relative.startsWith('..')||path.isAbsolute(relative)){res.writeHead(403);res.end();return;}
if(!(await stat(file)).isFile())throw Error('not a file');
const content=await readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'text/plain; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:content);
}catch{res.writeHead(404);res.end('Not found');}}).listen(4173,'127.0.0.1',()=>console.log('Neverday: http://127.0.0.1:4173'));
