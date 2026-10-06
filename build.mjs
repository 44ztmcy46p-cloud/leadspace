import {build} from 'esbuild';
import {execFileSync} from 'node:child_process';
import {readFileSync,writeFileSync} from 'node:fs';
import {check} from './scripts/check.mjs';
check();
execFileSync(process.execPath,['node_modules/@tailwindcss/cli/dist/index.mjs','-i','src/styles.css','-o','assets/styles.css','--minify'],{stdio:'inherit'});
const license=readFileSync('node_modules/lucide/LICENSE','utf8');
await build({entryPoints:['src/app.js'],bundle:true,minify:true,format:'iife',target:['es2020'],outfile:'assets/app.js',banner:{js:`/*! Lucide icon license notices\n${license}\n*/`}});
let html=readFileSync('index.html','utf8');
html=html.replace(/<link[^>]+href="\.\/assets\/styles.css"[^>]*>/,()=>`<style>${readFileSync('assets/styles.css','utf8')}</style>`);
html=html.replace(/<script[^>]+src="\.\/assets\/app.js"[^>]*>\s*<\/script>/,()=>`<script>${readFileSync('assets/app.js','utf8').replace(/<\/script/gi,'<\\/script')}</script>`);
// Inline JS must execute after the HTML has been parsed.
const script=html.match(/<script>[\s\S]*?<\/script>/)?.[0];
if(script)html=html.replace(script,'').replace('</body>',()=>script+'\n</body>');
html=html.replace(/src="\.\/assets\/([^"/]+\.png)"/g,(_,name)=>`src="data:image/png;base64,${readFileSync('assets/'+name).toString('base64')}"`);
writeFileSync('preview.html',html);
console.log('Built assets/styles.css, assets/app.js and self-contained preview.html');
