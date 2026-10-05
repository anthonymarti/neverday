import{mkdir,copyFile,readFile,writeFile}from'node:fs/promises';
import{fileURLToPath}from'node:url';
import path from'node:path';
const root=fileURLToPath(new URL('../',import.meta.url)),out=path.join(root,'dist');await mkdir(out,{recursive:true});
for(const file of['index.html','styles.css','core.js','services.js','app.js','favicon.svg'])await copyFile(path.join(root,file),path.join(out,file));
let html=await readFile(path.join(root,'index.html'),'utf8'),scripts='';
html=html.replace('<link rel="stylesheet" href="styles.css">','<style>'+await readFile(path.join(root,'styles.css'),'utf8')+'</style>').replace('<link rel="icon" href="favicon.svg">','');
for(const file of['core.js','services.js','app.js']){html=html.replace('<script src="'+file+'" defer></script>','');scripts+='<script>'+await readFile(path.join(root,file),'utf8')+'</script>';}
await writeFile(path.join(root,'neverday-demo.html'),html.replace('</body>',scripts+'</body>'));
console.log('Build passed: dist/ and standalone neverday-demo.html. No runtime dependencies.');
