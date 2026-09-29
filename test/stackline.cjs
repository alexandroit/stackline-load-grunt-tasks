const assert=require('assert'),path=require('path');
const load=require(process.env.STACKLINE_TEST_PACKAGE || '..');
let called=[];const grunt={loadNpmTasks:n=>called.push(n),loadTasks:n=>{if(!n)throw new Error('missing');called.push(n);},log:{error:n=>called.push(n)},fail:{fatal:n=>{throw new Error(n);}}};
const config={dependencies:{'grunt-alpha':'*','non-plugin':'*','grunt':'*'},devDependencies:{'grunt-beta':'*','grunt-cli':'*','@team/grunt-gamma':'*'},peerDependencies:{'grunt-peer':'*'}};
load(grunt,{config});assert.deepStrictEqual(called,['grunt-alpha','grunt-beta','grunt-peer','@team/grunt-gamma']);
called=[];load(grunt,{config,scope:'devDependencies',pattern:['grunt-*','!grunt-beta']});assert.deepStrictEqual(called,[]);
called=[];load(grunt,{config:{devDependencies:{'grunt-svgmin':'*'}},scope:'devDependencies',requireResolution:true});assert.equal(called.length,1);assert(called[0].endsWith(path.join('grunt-svgmin','tasks')));
called=[];load(grunt,{config:{dependencies:{'grunt-stackline-does-not-exist':'*'}},requireResolution:true});assert.equal(called.length,1);assert(called[0].includes('not found'));
console.log('Packed task discovery, filtering, scope and resolution contracts passed');
