import {readFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
export function check(){
 const html=readFileSync('index.html','utf8');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);const set=new Set(ids);
 if(set.size!==ids.length)throw Error('Duplicate IDs');
 for(const id of ['v3-page','v3-main','v3-header','v3-home','v3-product','v3-industries','v3-how','v3-value','v3-start','v3-features','v3-contact','v3-footer','v3-contact-dialog'])if(!set.has(id))throw Error('Missing '+id);
 for(const m of html.matchAll(/\b(?:aria-controls|aria-labelledby|aria-describedby)="([^"]+)"/g))for(const id of m[1].split(/\s+/))if(!set.has(id))throw Error('Broken ARIA '+id);
 for(const m of html.matchAll(/href="#([^"]+)"/g))if(!set.has(m[1]))throw Error('Broken anchor '+m[1]);
 for(const m of html.matchAll(/src="\.\/(assets\/[^" ]+\.png)"/g))if(!existsSync(m[1]))throw Error('Missing asset '+m[1]);
 console.log(`OK: ${ids.length} unique IDs; anchors, ARIA and image paths.`);
}
if(process.argv[1]===fileURLToPath(import.meta.url))check();
