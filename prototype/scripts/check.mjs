import{spawnSync}from'node:child_process';
import{fileURLToPath}from'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
for(const file of['core.js','services.js','app.js','scripts/build.mjs','scripts/serve.mjs','tests/core.test.mjs','tests/browser.mjs']){
const result=spawnSync(process.execPath,['--check',file],{cwd:root,stdio:'inherit'});if(result.status!==0)process.exit(result.status||1);
}
console.log('Syntax checks passed. Plain JavaScript; no compiled type checker or full lint claim.');
