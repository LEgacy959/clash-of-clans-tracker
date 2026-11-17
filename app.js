const keys={buildings:'Gebäude',traps:'Fallen',decos:'Dekorationen',obstacles:'Hindernisse',units:'Truppen',siege_machines:'Belagerungsmaschinen',heroes:'Helden',spells:'Zauber',pets:'Begleiter',equipment:'Ausrüstung',helpers:'Helfer',guardians:'Wächter',buildings2:'Bauarbeiterbasis-Gebäude',traps2:'Bauarbeiterbasis-Fallen',decos2:'Bauarbeiterbasis-Dekorationen',obstacles2:'Bauarbeiterbasis-Hindernisse',units2:'Bauarbeiterbasis-Truppen',heroes2:'Bauarbeiterbasis-Helden'};
const names={
 buildings:{
  1000000:'Armeelager',1000001:'Rathaus',1000002:'Elixiersammler',1000003:'Elixierlager',1000004:'Goldmine',1000005:'Goldlager',1000006:'Kaserne',1000007:'Labor',1000008:'Kanone',1000009:'Bogenschützenturm',1000010:'Mauer',1000011:'Magierturm',1000012:'Luftabwehr',1000013:'Mörser',1000014:'Clanburg',1000015:'Bauhütte',1000019:'Verborgener Tesla',1000020:'Zauberfabrik',1000021:'X-Bogen',1000023:'Dunkler-Elixier-Bohrer',1000024:'Dunkles-Elixier-Lager',1000026:'Dunkle Kaserne',1000027:'Infernoturm',1000028:'Luftfeger',1000029:'Dunkle Zauberfabrik',1000031:'Adlerartillerie',1000032:'Bombenturm',1000059:'Belagerungswerkstatt',1000064:'B.O.B.-Hütte',1000067:'Streuschuss',1000068:'Haustierhaus',1000070:'Schmiede',1000071:'Heldenhalle',1000072:'Zauberturm',1000077:'Monolith',1000079:'Mehrfach-Gear-Turm',1000084:'Multi-Bogenschützenturm',1000085:'Abprallkanone',1000086:'Racheturm',1000089:'Feuerspeier',1000093:'Helferhütte',1000097:'Konstruktionsstation',1000102:'Super-Magierturm'
 },
 traps:{12000000:'Bombe',12000001:'Sprungfalle',12000002:'Riesenbombe',12000005:'Luftbombe',12000006:'Suchende Luftmine',12000008:'Skelettfalle',12000016:'Tornadofalle',12000020:'Giga-Bombe'},
 buildings2:{1000033:'Mauer (Bauarbeiterbasis)',1000034:'Bauarbeiterhalle',1000035:'Elixiersammler',1000036:'Elixierlager',1000037:'Goldmine',1000038:'Goldlager',1000039:'Uhrenturm',1000040:'Bauarbeiterkaserne',1000041:'Doppelkanone',1000042:'Armeelager',1000043:'Verborgener Tesla',1000044:'Kanone',1000045:'Mehrfachmörser',1000046:'Sternlabor',1000047:"B.O.T.O.-Hütte",1000048:'Bogenschützenturm',1000049:'Verstärkungslager',1000050:'Knallkörper',1000051:'Wachposten',1000052:'Mega-Tesla',1000053:'Kampfmaschinenaltar',1000054:'Luftbomben',1000055:'Zertrümmerer',1000056:'Röster',1000057:'Riesenkanone',1000058:'Edelsteinmine',1000063:'Lavalauncher',1000065:'B.O.B.-Steuerung',1000078:'O.T.T.O.-Außenposten',1000080:'Kampfhubschrauberaltar',1000081:'X-Bogen',1000082:'Heilungshütte'},
 traps2:{12000010:'Sprungfalle',12000011:'Schubfalle',12000013:'Mine',12000014:'Megamine'},
 heroes:{28000000:'Barbarenkönig',28000001:'Bogenschützen-Königin',28000002:'Großer Wächter',28000004:'Königliche Heldin',28000006:'Minion-Prinz',28000007:'Drachenherzog'},
 heroes2:{28000003:'Kampfmaschine',28000005:'Kampfhubschrauber'},
 units:{4000000:'Barbar',4000001:'Bogenschütze',4000002:'Goblin',4000003:'Riese',4000004:'Mauerbrecher',4000005:'Ballon',4000006:'Magier',4000007:'Heilerin',4000008:'Drache',4000009:'P.E.K.K.A.',4000010:'Lakaie',4000011:'Schweinereiter',4000012:'Walküre',4000013:'Golem',4000015:'Hexe',4000017:'Lavahund',4000022:'Bowler',4000023:'Babydrache',4000024:'Minenarbeiter',4000053:'Yeti',4000058:'Eisgolem',4000059:'Elektrodrache',4000065:'Drachenreiter',4000082:'Kopfgeldjäger',4000095:'Elektro-Titan',4000097:'Wächterlehrling',4000109:'Ruinenhexe',4000110:'Wurzelreiter',4000123:'Druide',4000132:'Werfer',4000150:'Ofen'},
 units2:{4000031:'Wütender Barbar',4000032:'Schleichbogenschütze',4000033:'Beta-Lakai',4000034:'Boxer-Riese',4000035:'Bomber',4000036:'Power-P.E.K.K.A.',4000037:'Kanonenkarre',4000038:'Dropship',4000041:'Babydrache',4000042:'Nachthexe',4000070:'Schweinegleiter',4000106:'Elektrofeuermagier'},
 siege_machines:{4000051:'Mauervernichter',4000052:'Luftschiff',4000062:'Steinschleuder',4000075:'Belagerungskaserne',4000087:'Holzwerfer',4000091:'Flammenwerfer',4000092:'Kampfbohrer',4000135:'Truppenwerfer'},
 spells:{26000000:'Blitzzauber',26000001:'Heilungszauber',26000002:'Wutzauber',26000003:'Sprungzauber',26000005:'Frostzauber',26000009:'Giftzauber',26000010:'Erdbebenzauber',26000011:'Tempohastzauber',26000016:'Klonzauber',26000017:'Skelettzauber',26000028:'Fledermauszauber',26000035:'Unsichtbarkeitszauber',26000053:'Rückrufzauber',26000070:'Überwucherungszauber',26000098:'Wiederbelebungszauber',26000109:'Eisblockzauber',26000120:'Totemzauber',26000123:'Wutiger Zauber'},
 pets:{73000000:'L.A.S.S.I.',73000001:'Mächtiger Yak',73000002:'Elektro-Eule',73000003:'Einhorn',73000004:'Phönix',73000007:'Gift-Eidechse',73000008:'Diggy',73000009:'Frosty',73000010:'Geisterfuchs',73000011:'Wütendes Jelly',73000016:'Niesi'},
 helpers:{93000000:'Bauarbeiter-Lehrling',93000001:'Laborassistent',93000002:'Prospektor',93000003:'Helfer'},
 guardians:{107000000:'Longshot',107000001:'Smasher',107000008:'Logger'},
 equipment:{90000000:'Barbarenpuppe',90000001:'Wutphiole',90000002:'Bogenschützenpuppe',90000003:'Unsichtbarkeitsphiole',90000004:'Ewiger Foliant',90000005:'Wutjuwel',90000006:'Suchender Schild',90000007:'Königsjuwel',90000008:'Erdbebenstiefel',90000009:'Lebensjuwel',90000010:'Riesenhandschuh',90000011:'Vampstache',90000012:'Heilerpuppe',90000013:'Riesenpfeil',90000014:'Gefrorener Pfeil',90000015:'Heilender Foliant',90000016:'Drachenflamme',90000017:'Spitze Kugel',90000019:'Spiky Ball',90000020:'Schlangenarmband',90000022:'Magic Mirror',90000024:'Haste Vial',90000032:'Fireball',90000034:'Rocket Spear',90000035:'Action Figure',90000039:'Stick Horse',90000040:'Dark Orb',90000041:'Metal Pants',90000042:'Noble Iron',90000043:'Henchmen Puppet',90000044:'Electro Boots',90000047:'Lavaloons',90000048:'Action Figure',90000049:'Snake Bracelet',90000050:'Heroic Torch',90000051:'Flame Bracelet',90000052:'Frost Flake',90000053:'Guardian Puppet',90000056:'Meteor Staff',90000057:'Totem',90000059:'Spirit Walk',90000060:'Frost Blast',90000061:'Giant Arrow'}
};
const OCR_NAME_ALIASES={'buildings:1000013':['Minenwerfer']};

let data=null,rows=[],page='dashboard',detailReturnPage='dashboard',detailLevels=[],detailCurrentLevel=0,detailPageIndex=0,detailPageSize=10,meta={items:{},builders:{},plans:[]};const META='clash-progress-meta-v3',DATA='clash-progress-preview';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function parse(raw){let x=JSON.parse(String(raw).replace(/^\uFEFF/,''));if(!x||typeof x!=='object'||Array.isArray(x)||typeof x.tag!=='string'||!Array.isArray(x.buildings))throw Error('Kein gültiger Clash-of-Clans-Export: Spieler-Tag oder Gebäude-Liste fehlt.');for(const [k,v] of Object.entries(x)){if(Array.isArray(v)&&keys[k]&&!v.every(o=>o&&typeof o==='object'&&!Array.isArray(o)))throw Error('Ungültige Einträge im Bereich '+keys[k]+'.')}return x}
function load(){try{meta=JSON.parse(localStorage.getItem(META)||localStorage.getItem('clash-progress-meta-v2')||'{"items":{},"builders":{},"plans":[]}');meta={items:meta.items||{},builders:meta.builders||{},plans:Array.isArray(meta.plans)?meta.plans:[]};saveMeta()}catch(e){meta={items:{},builders:{},plans:[]}}try{let s=localStorage.getItem(DATA);if(s){data=parse(s);buildRows();update()}}catch(e){console.warn('Gespeicherter Spielstand konnte nicht geladen werden:',e);}}renderPlans();
function saveMeta(){try{localStorage.setItem(META,JSON.stringify(meta))}catch(e){alert('Speichern fehlgeschlagen. Bitte exportiere ein Backup und prüfe den Speicherplatz im Browser.');throw e}}function key(r){return r.section+':'+r.index}
function itemName(section,id){return names[section]?.[id]||null}
function village(section){return ['buildings2','traps2','decos2','obstacles2','units2','heroes2'].includes(section)?'builder':'home'}
function splitDefenseStacks(){
 if(!data||!defenseKeys.size)return false;
 let changed=false;
 ['buildings','traps','buildings2','traps2'].forEach(section=>{
  const items=data[section]||[];
  for(let i=0;i<items.length;i++){
   const item=items[i],count=Number(item.cnt??1),id=Number(item.data??item.id);
   if(!defenseKeys.has(section+':'+id)||!Number.isSafeInteger(count)||count<=1)continue;
   const original={...item};
   item.cnt=1;
   for(let instance=1;instance<count;instance++)items.push({...original,cnt:1,timer:0});
   changed=true;
  }
 });
 if(changed)localStorage.setItem(DATA,JSON.stringify(data));
 return changed;
}
function buildRows(){splitDefenseStacks();rows=[];Object.entries(keys).forEach(([k,label])=>(data[k]||[]).forEach((v,i)=>rows.push({section:k,label,id:v.data??v.id??'unbekannt',lvl:Number(v.lvl??0),cnt:Number(v.cnt??1),timer:Number(v.timer??0),extra:v.extra??null,index:i,name:itemName(k,v.data??v.id),village:village(k)})));
 // Migrate metadata saved by the older section:index scheme to stable item keys.
 let changed=false; rows.forEach(r=>{let now=key(r),oldLevel=r.section+':'+r.id+':level:'+r.lvl,oldTimer=r.section+':'+r.id+':timer:'+r.index,old= r.timer>0?oldTimer:oldLevel; if(meta.items[old]&&!meta.items[now]){meta.items[now]=meta.items[old];changed=true} if(meta.builders[old]&&!meta.builders[now]){meta.builders[now]=meta.builders[old];changed=true}}); if(changed)saveMeta();
}
function importRaw(raw){try{let incoming=JSON.parse(String(raw).replace(/^\uFEFF/,''));let nextData, nextMeta=meta;if(incoming&&incoming.export&&incoming.tracker){nextData=parse(JSON.stringify(incoming.export));nextMeta={items:incoming.tracker.items||meta.items||{},builders:incoming.tracker.builders||meta.builders||{},plans:Array.isArray(incoming.tracker.plans)?incoming.tracker.plans:meta.plans||[]}}else nextData=parse(raw);if(data&&!confirm('Vorhandenen Spielstand durch den Import ersetzen? Exportiere vorher ein Backup, wenn du den alten Stand behalten möchtest.'))return;localStorage.setItem(DATA,JSON.stringify(nextData));data=nextData;meta=nextMeta;saveMeta();buildRows();update();document.getElementById('importmsg').textContent='Import erfolgreich: '+rows.length+' Datensätze erkannt. Deine Daten bleiben lokal auf diesem Gerät.';show('dashboard')}catch(e){document.getElementById('importmsg').textContent='Import fehlgeschlagen: '+e.message}}
document.getElementById('file').addEventListener('change',async e=>{let f=e.target.files[0];if(f){try{if(f.size>10*1024*1024)throw Error('Datei ist größer als 10 MB.');importRaw(await f.text())}catch(err){document.getElementById('importmsg').textContent='Datei konnte nicht gelesen werden: '+err.message}e.target.value=''}});function importPaste(){importRaw(document.getElementById('paste').value)}
function exportData(){if(!data)return alert('Noch kein Spielstand importiert.');let backup={app:'Clash Ninja Style',appVersion:'1.8.11',export:data,tracker:meta,backupCreated:new Date().toISOString()};let a=document.createElement('a'),u=URL.createObjectURL(new Blob([JSON.stringify(backup,null,2)],{type:'application/json'}));a.href=u;a.download='clash-progress-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)}
function clearData(){if(confirm('Spielstand und Tracker-Metadaten auf diesem Gerät wirklich löschen?')){localStorage.removeItem(DATA);localStorage.removeItem(META);data=null;rows=[];meta={items:{},builders:{},plans:[]};update();show('dashboard')}}
function count(k){return rows.filter(r=>r.section===k).reduce((n,r)=>n+r.cnt,0)}function timers(){return rows.filter(r=>r.timer>0)}
function countSections(list){return rows.filter(r=>list.includes(r.section)).reduce((n,r)=>n+r.cnt,0)}
function timerText(sec){sec=Math.max(0,Math.floor(sec));let d=Math.floor(sec/86400),h=Math.floor(sec%86400/3600),m=Math.floor(sec%3600/60);return [d?d+' T':'',h?h+' Std.':'',m?m+' Min.':''].filter(Boolean).join(' ')||(sec>0?'< 1 Min.':'Abgeschlossen')}
function remainingTimer(r){let stamp=Number(data?.timestamp||0);if(!stamp)return r.timer;let elapsed=Math.max(0,Date.now()/1000-stamp);return Math.max(0,r.timer-elapsed)}
let gameCatalog=new Map(),gameCatalogPromise=null,gameCatalogError='',defenseKeys=new Set();
let wikiLevelData=null,wikiLevelPromise=null,wikiLevelError='',wikiLevelStale=false;
let wikiItemPromise=null;
const WIKI_CACHE_KEY='clash-progress-wiki-levels-v4';
const WIKI_CACHE_MAX_AGE=24*60*60*1000;
const WIKI_API='https://clashofclans.fandom.com/api.php';
const GAME_DATA_VERSION='0.19.1';
const GAME_DATA_URL=`https://cdn.jsdelivr.net/npm/clash-of-clans-data@${GAME_DATA_VERSION}/+esm`;
function queryData(q){try{return q&&typeof q.get==='function'?q.get():[]}catch{return []}}
async function loadGameCatalog(force=false){
 if(gameCatalogPromise&&!force)return gameCatalogPromise;
 if(gameCatalog.size&&!force)return true;
 gameCatalogError='';
 gameCatalogPromise=(async()=>{
  try{
   const coc=await import(GAME_DATA_URL),home=coc.home(),builder=coc.builder();
   const homeDefenses=queryData(home.defenses()),homeCraftedDefenses=queryData(home.craftedDefenses()),homeTraps=queryData(home.traps());
   const builderDefenses=queryData(builder.defenses()),builderTraps=queryData(builder.traps());
   const groups={
    buildings:[...homeDefenses,...homeCraftedDefenses,...queryData(home.resourceBuildings()),...queryData(home.armyBuildings()),...queryData(home.otherBuildings()),...queryData(home.townHall()),...queryData(home.walls())],
    traps:homeTraps,units:queryData(home.troops()),siege_machines:queryData(home.siegeMachines()),heroes:queryData(home.heroes()),spells:queryData(home.spells()),pets:queryData(home.pets()),equipment:queryData(home.heroEquipment()),guardians:queryData(home.guardians()),
    buildings2:[...builderDefenses,...queryData(builder.resourceBuildings()),...queryData(builder.armyBuildings()),...queryData(builder.builderHall()),...queryData(builder.otherBuildings()),...queryData(builder.walls())],
    traps2:builderTraps,units2:queryData(builder.troops()),heroes2:queryData(builder.heroes())
   };
   const next=new Map();
   Object.entries(groups).forEach(([section,items])=>items.forEach(item=>{const id=Number(item.dataId??item.id);if(Number.isFinite(id)&&typeof item.name==='string')next.set(section+':'+id,item)}));
   if(next.size<80)throw new Error('Die Spieldatenbank wurde unvollständig geladen.');
   const defenseKeysFor=(section,items)=>items.map(item=>Number(item.dataId??item.id)).filter(Number.isFinite).map(id=>section+':'+id);
   defenseKeys=new Set([...defenseKeysFor('buildings',[...homeDefenses,...homeCraftedDefenses]),...defenseKeysFor('traps',homeTraps),...defenseKeysFor('buildings2',builderDefenses),...defenseKeysFor('traps2',builderTraps)]);
   gameCatalog=next;
   if(data)buildRows();
   return true;
  }catch(e){gameCatalogError=e?.message||'Spieldaten konnten nicht geladen werden.';gameCatalog=new Map();return false}
 })();
 return gameCatalogPromise;
}
function catalogItem(section,id){return gameCatalog.get(section+':'+Number(id))||null}
const WIKI_SPECIAL_NAMES={
 buildings:{1000000:'Army Camp',1000001:'Town Hall',1000002:'Elixir Collector',1000003:'Elixir Storage',1000004:'Gold Mine',1000005:'Gold Storage',1000006:'Barracks',1000007:'Laboratory',1000008:'Cannon',1000009:'Archer Tower',1000010:'Wall',1000011:'Wizard Tower',1000012:'Air Defense',1000013:'Mortar',1000014:'Clan Castle',1000015:"Builder's Hut",1000019:'Hidden Tesla',1000020:'Spell Factory',1000021:'X-Bow',1000023:'Dark Elixir Drill',1000024:'Dark Elixir Storage',1000026:'Dark Barracks',1000027:'Inferno Tower',1000028:'Air Sweeper',1000029:'Dark Spell Factory',1000031:'Eagle Artillery',1000032:'Bomb Tower',1000059:'Workshop',1000064:"B.O.B's Hut",1000067:'Scattershot',1000068:'Pet House',1000070:'Blacksmith',1000071:'Hero Hall',1000072:'Spell Tower',1000077:'Monolith',1000079:'Multi-Gear Tower',1000084:'Multi-Archer Tower',1000085:'Ricochet Cannon',1000086:'Revenge Tower',1000089:'Firespitter',1000093:'Helper Hut',1000097:'Crafting Station',1000102:'Super Wizard Tower'},
 traps:{12000000:'Bomb',12000001:'Spring Trap',12000002:'Giant Bomb',12000005:'Air Bomb',12000006:'Seeking Air Mine',12000008:'Skeleton Trap',12000016:'Tornado Trap',12000020:'Giga Bomb'},
 buildings2:{1000033:'Wall',1000034:'Builder Hall',1000035:'Elixir Collector',1000036:'Elixir Storage',1000037:'Gold Mine',1000038:'Gold Storage',1000039:'Clock Tower',1000040:'Builder Barracks',1000041:'Double Cannon',1000042:'Army Camp',1000043:'Hidden Tesla',1000044:'Cannon',1000045:'Multi Mortar',1000046:'Star Laboratory',1000047:"B.O.T.O's Shack",1000048:'Archer Tower',1000049:'Reinforcement Camp',1000050:'Firecrackers',1000051:'Guard Post',1000052:'Mega Tesla',1000053:'Battle Machine Altar',1000054:'Air Bombs',1000055:'Crusher',1000056:'Roaster',1000057:'Giant Cannon',1000058:'Gem Mine',1000063:'Lava Launcher',1000065:'B.O.B Control',1000078:"O.T.T.O's Outpost",1000080:'Battle Copter Altar',1000081:'X-Bow',1000082:'Healing Hut'},
 traps2:{12000010:'Push Trap',12000011:'Spring Trap',12000013:'Mine',12000014:'Mega Mine'},
 helpers:{93000000:"Builder's Apprentice",93000001:'Lab Assistant',93000002:'Prospector',93000003:'Alchemist'},
 guardians:{107000000:'Longshot',107000001:'Smasher',107000008:'Logger'}
};
function wikiNameKey(name){return String(name||'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]/g,'')}
function wikiItemName(r){return WIKI_SPECIAL_NAMES[r.section]?.[Number(r.id)]||catalogItem(r.section,r.id)?.name||''}
function wikiItemKey(r){return wikiNameKey(wikiItemName(r))}
function wikiCellText(cell){return String(cell?.textContent||'').replace(/\s+/g,' ').trim()}
function expandWikiTable(table){
 const grid=[];
 [...table.rows].forEach((tr,rowIndex)=>{
  grid[rowIndex]=grid[rowIndex]||[];
  let col=0;
  [...tr.cells].forEach(cell=>{
   while(grid[rowIndex][col]!==undefined)col++;
   const rowSpan=Math.max(1,Number(cell.rowSpan)||1),colSpan=Math.max(1,Number(cell.colSpan)||1),text=wikiCellText(cell);
   for(let r=rowIndex;r<rowIndex+rowSpan;r++){
    grid[r]=grid[r]||[];
    for(let c=col;c<col+colSpan;c++)if(grid[r][c]===undefined)grid[r][c]=text;
   }
   col+=colSpan;
  });
 });
 return grid.map(row=>row.map(cell=>cell||''));
}
function wikiNumber(value){
 const text=String(value||'').replace(/,/g,'').trim();
 if(!text||/^[-–—]+$/.test(text)||/^ruin$/i.test(text))return null;
 const bonus=text.match(/(\d+)\s*\+\s*(\d+)/);
 if(bonus)return Number(bonus[1])+Number(bonus[2]);
 const numbers=text.match(/\d+/g);
 return numbers?.length?Math.max(...numbers.map(Number)):null;
}
function wikiHallRange(value){
 const text=String(value||'').trim(),range=text.match(/^(\d+)\s*[-–—]\s*(\d+)$/);
 if(range)return [Number(range[1]),Number(range[2])];
 const level=wikiNumber(text);
 return level===null?null:[level,level];
}
function putWikiCap(map,name,requirement,cap){
 const key=wikiNameKey(name),req=Number(requirement);
 if(!key||!Number.isFinite(req)||!Number.isFinite(cap)||cap<=0)return;
 map[key]=map[key]||{};
 map[key][req]=Math.max(Number(map[key][req])||0,cap);
}
function parseHallTables(tables,map){
 let found=0,maxHall=0;
 tables.forEach(table=>{
  const grid=expandWikiTable(table),headerIndex=grid.findIndex(row=>['thlevel','townhalllevel','builderhall','builderhalllevel'].includes(wikiNameKey(row[0])));
  if(headerIndex<0)return;
  const header=grid[headerIndex];
  for(let rowIndex=headerIndex+1;rowIndex<grid.length;rowIndex++){
   const hallRange=wikiHallRange(grid[rowIndex][0]);
   if(!hallRange)continue;
   for(let hall=hallRange[0];hall<=hallRange[1];hall++)maxHall=Math.max(maxHall,hall);
   for(let col=1;col<header.length;col++){
    const cap=wikiNumber(grid[rowIndex][col]);
    if(cap===null)continue;
    const itemNames=header[col]==='Gold Mine & Elixir Collector'?['Gold Mine','Elixir Collector']:
     header[col]==='Gold Mines & Elixir Collectors'?['Gold Mine','Elixir Collector']:
     /^Gold\s*&\s*Elixir Storages?$/i.test(header[col])?['Gold Storage','Elixir Storage']:
     /^Walls?$/i.test(header[col])?['Wall']:[header[col].replace(/[†*]+/g,'').trim()];
    itemNames.forEach(name=>{for(let hall=hallRange[0];hall<=hallRange[1];hall++)putWikiCap(map,name,hall,cap)});
    found++;
   }
  }
 });
 return {found,maxHall};
}
function parseHeroHallChart(doc){
 const table=[...doc.querySelectorAll('table')].find(t=>expandWikiTable(t).some(row=>row.some(cell=>wikiNameKey(cell)==='herohalllevel')));
 if(!table)throw Error('Die Heldenhallen-Tabelle fehlt im Wiki.');
 const grid=expandWikiTable(table),headIndex=grid.findIndex(row=>wikiNameKey(row[0])==='herohalllevel'),head=grid[headIndex],caps={};
 for(let r=headIndex+1;r<grid.length;r++){
  const hall=wikiNumber(grid[r][0]);if(!hall)continue;
  for(let c=1;c<head.length;c++){const cap=wikiNumber(grid[r][c]);if(cap!==null)putWikiCap(caps,head[c],hall,cap)}
 }
 return caps;
}
function parseUpgradeChart(doc,hallLabel){
 const caps={};let found=0;
 [...doc.querySelectorAll('table')].forEach(table=>{
  const grid=expandWikiTable(table),headerIndex=grid.findIndex(row=>row.length>3&&row.slice(2).filter(value=>/^\d+$/.test(value)).length>=3);
  if(headerIndex<0)return;
  const hallLevels=grid[headerIndex].slice(2).map(value=>wikiNumber(value));
  for(let r=headerIndex+1;r<grid.length;r++){
   if(wikiNameKey(grid[r][1])!=='level'||!grid[r][0])continue;
   const name=grid[r][0],nameKey=wikiNameKey(name);
   if(!nameKey)continue;
   caps[nameKey]=caps[nameKey]||{};
   let cap=0;
   const firstHall=hallLevels.find(level=>Number.isFinite(level));
   if(firstHall)cap=capAtRequirement(caps[nameKey],firstHall-1)||0;
   hallLevels.forEach((hall,index)=>{
    if(!Number.isFinite(hall))return;
    const value=wikiNumber(grid[r][index+2]);
    if(value!==null)cap=Math.max(cap,value);
    if(cap>0)caps[nameKey][hall]=Math.max(Number(caps[nameKey][hall])||0,cap);
   });
   if(Object.keys(caps[nameKey]).length)found++;
  }
 });
 if(!found)throw Error(`${hallLabel}-Tabelle enthält keine lesbaren Levelwerte.`);
 return caps;
}
function parsePetHouseChart(doc){
 const table=[...doc.querySelectorAll('table')].find(t=>expandWikiTable(t).some(row=>wikiNameKey(row[0])==='pethouselevel'));
 if(!table)throw Error('Die Haustierhaus-Tabelle fehlt im Wiki.');
 const grid=expandWikiTable(table),headerIndex=grid.findIndex(row=>wikiNameKey(row[0])==='pethouselevel'),headers=grid[headerIndex+1]||[],caps={};
 for(let r=headerIndex+2;r<grid.length;r++){
  const house=wikiNumber(grid[r][0]);if(!house)continue;
  for(let c=1;c<headers.length;c++){const cap=wikiNumber(grid[r][c]);if(cap!==null)putWikiCap(caps,headers[c],house,cap)}
 }
 return caps;
}
function parseBlacksmithChart(doc){
 const table=[...doc.querySelectorAll('table')].find(t=>expandWikiTable(t).some(row=>row.some(cell=>wikiNameKey(cell)==='common')&&row.some(cell=>wikiNameKey(cell)==='epic')));
 if(!table)throw Error('Die Schmiede-Tabelle fehlt im Wiki.');
 const grid=expandWikiTable(table),headIndex=grid.findIndex(row=>row.some(cell=>wikiNameKey(cell)==='common')&&row.some(cell=>wikiNameKey(cell)==='epic')),head=grid[headIndex],common=head.findIndex(cell=>wikiNameKey(cell)==='common'),epic=head.findIndex(cell=>wikiNameKey(cell)==='epic'),caps={common:{},epic:{}};
 for(let r=headIndex+1;r<grid.length;r++){
  const level=wikiNumber(grid[r][0]);if(!level)continue;
  const commonCap=wikiNumber(grid[r][common]),epicCap=wikiNumber(grid[r][epic]);
  if(commonCap!==null)caps.common[level]=commonCap;
  if(epicCap!==null)caps.epic[level]=epicCap;
 }
 return caps;
}
function parseRequirementChart(doc,expectedRequirement,itemName){
 const tables=[...doc.querySelectorAll('table')];
 for(const table of tables){
  const grid=expandWikiTable(table),headIndex=grid.findIndex(row=>row.some(cell=>wikiNameKey(cell)==='level')&&row.some(cell=>wikiNameKey(cell)===wikiNameKey(expectedRequirement)));
  if(headIndex<0)continue;
  const head=grid[headIndex],levelColumn=head.findIndex(cell=>wikiNameKey(cell)==='level'),reqColumn=head.findIndex(cell=>wikiNameKey(cell)===wikiNameKey(expectedRequirement)),caps={};
  for(let r=headIndex+1;r<grid.length;r++){
   const level=wikiNumber(grid[r][levelColumn]),req=wikiNumber(grid[r][reqColumn]);
   if(level!==null)putWikiCap(caps,itemName,req===null?1:req,level);
  }
  if(caps[wikiNameKey(itemName)])return caps[wikiNameKey(itemName)];
 }
 throw Error(`Keine Levelwerte mit Voraussetzung „${expectedRequirement}“ gefunden.`);
}
function parseGuardianChart(doc,itemName){
 const table=[...doc.querySelectorAll('table')].find(t=>expandWikiTable(t).some(row=>row.some(cell=>wikiNameKey(cell)==='level')));
 if(!table)throw Error('Die Wächter-Leveltabelle fehlt im Wiki.');
 const grid=expandWikiTable(table),headIndex=grid.findIndex(row=>row.some(cell=>wikiNameKey(cell)==='level')),head=grid[headIndex],levelColumn=head.findIndex(cell=>wikiNameKey(cell)==='level'),thColumn=head.findIndex(cell=>wikiNameKey(cell)==='townhalllevelrequired'),caps={};
 for(let r=headIndex+1;r<grid.length;r++){
  const level=wikiNumber(grid[r][levelColumn]),th=thColumn<0?1:wikiNumber(grid[r][thColumn]);
  if(level!==null)putWikiCap(caps,itemName,th===null?1:th,level);
 }
 return caps[wikiNameKey(itemName)]||{};
}
function parseFixedBuildingChart(doc,itemName,hallLabel){
 const hallHeader=wikiNameKey(hallLabel),caps={};
 [...doc.querySelectorAll('table')].forEach(table=>{
  const grid=expandWikiTable(table);
  for(let r=0;r<grid.length-1;r++){
   const first=wikiNameKey(grid[r][0]),isHallHeader=[hallHeader,`${hallHeader}level`].includes(first),isContinuedHeader=!first&&grid[r].slice(1).filter(value=>/^\d+$/.test(value)).length>=2;
   if(!isHallHeader&&!isContinuedHeader)continue;
   const counts=grid[r+1];if(wikiNameKey(counts[0])!=='numberavailable'&&counts[0]!=='')continue;
   grid[r].slice(1).forEach((value,index)=>{
    const level=wikiNumber(value),count=wikiNumber(counts[index+1]);
    if(level&&count>0)putWikiCap(caps,itemName,level,1);
   });
  }
 });
 return caps[wikiNameKey(itemName)]||{};
}
function parseFixedRequirementChart(doc,itemName,requirement){
 const reqKey=wikiNameKey(requirement);
 for(const table of doc.querySelectorAll('table')){
  const grid=expandWikiTable(table),headIndex=grid.findIndex(row=>row.some(cell=>wikiNameKey(cell)===reqKey));
  if(headIndex<0)continue;
  const column=grid[headIndex].findIndex(cell=>wikiNameKey(cell)===reqKey),value=wikiNumber(grid[headIndex+1]?.[column]);
  if(value)return {[value]:1};
 }
 return {};
}
function parseFixedBuilderAvailability(doc,itemName){
 const caps={};
 [...doc.querySelectorAll('table')].forEach(table=>{
  const grid=expandWikiTable(table);
  for(let r=0;r<grid.length-1;r++){
   if(wikiNameKey(grid[r][0])!=='total')continue;
   const levels=grid[r-1]||[];
   levels.slice(1).forEach((value,index)=>{
    const level=wikiNumber(value),count=wikiNumber(grid[r][index+1]);
    if(level&&count>0)putWikiCap(caps,itemName,level,1);
   });
  }
 });
 return caps[wikiNameKey(itemName)]||{};
}
async function wikiApi(params){
 const url=new URL(WIKI_API);
 Object.entries({...params,origin:'*',format:'json'}).forEach(([key,value])=>url.searchParams.set(key,String(value)));
 const response=await fetch(url.toString());
 if(!response.ok)throw Error(`Clash Wiki antwortet mit HTTP ${response.status}.`);
 const result=await response.json();
 if(result.error){const error=Error(result.error.info||'Clash Wiki lieferte einen API-Fehler.');error.code=result.error.code;throw error}
 return result;
}
async function wikiSections(pageName,sectionNames){
 const sectionResult=await wikiApi({action:'parse',page:pageName,prop:'sections'}),sections=sectionResult.parse?.sections||[];
 const selected=sectionNames.map(name=>({name,section:sections.find(s=>s.line.toLowerCase()===name.toLowerCase())}));
 const missing=selected.find(item=>!item.section);
 if(missing&&sections.length===0&&sectionNames.length===1&&sectionNames[0]==='Statistics'){
  const parsed=await wikiApi({action:'parse',page:pageName,prop:'text'}),html=parsed.parse?.text?.['*'];
  if(typeof html!=='string')throw Error(`Wiki-Seite ${pageName} enthält keinen lesbaren Inhalt.`);
  return {sections:{Statistics:new DOMParser().parseFromString(html,'text/html')},revision:parsed.parse?.revid||sectionResult.parse?.revid||null};
 }
 if(missing)throw Error(`Der Abschnitt „${missing.name}“ fehlt auf der Wiki-Seite ${pageName}.`);
 const results=await Promise.all(selected.map(async item=>{
  const parsed=await wikiApi({action:'parse',page:pageName,prop:'text',section:item.section.index});
  const html=parsed.parse?.text?.['*'];
  if(typeof html!=='string')throw Error(`Wiki-Abschnitt „${item.name}“ auf ${pageName} enthält keinen lesbaren Inhalt.`);
  return {name:item.name,doc:new DOMParser().parseFromString(html,'text/html'),revision:parsed.parse?.revid||sectionResult.parse?.revid||null};
 }));
 return {sections:Object.fromEntries(results.map(result=>[result.name,result.doc])),revision:results[0]?.revision||sectionResult.parse?.revid||null};
}
function missingWikiItemRows(){
 if(!wikiLevelData?.itemCaps)return [];
 return [...new Map(rows.filter(r=>['buildings','traps','buildings2','traps2'].includes(r.section)&&
  !((r.section==='buildings'&&Number(r.id)===1000001)||(r.section==='buildings2'&&Number(r.id)===1000034))&&
  !wikiLevelData.itemCaps.checked?.[r.section+':'+r.id]).map(r=>[r.section+':'+r.id,r])).values()];
}
async function fetchWikiItemCaps(items){
 const result={home:{},builder:{},checked:{},unresolved:[],sources:{}};
 const unique=[...new Map(items.map(r=>[r.section+':'+r.id,r])).values()];
 let cursor=0;
 await Promise.all(Array.from({length:Math.min(5,unique.length)},async()=>{
  while(cursor<unique.length){
   const r=unique[cursor++],id=Number(r.id),name=wikiItemName(r),nameKey=wikiNameKey(name),group=['buildings2','traps2'].includes(r.section)?'builder':'home';
   result.checked[r.section+':'+r.id]=true;
   if(!nameKey){result.unresolved.push(r.section+':'+r.id);continue}
   const slug=name.trim().replace(/\s+/g,'_'),pages=group==='builder'?[`${slug}/Builder_Base`,slug]:[`${slug}/Home_Village`,slug];
   let caps=null,source=null,lastError=null;
   for(const pageName of pages){
    try{
     const parsed=await wikiApi({action:'parse',page:pageName,prop:'text'}),html=parsed.parse?.text?.['*'];
     if(typeof html!=='string')continue;
     const doc=new DOMParser().parseFromString(html,'text/html'),requirement=group==='builder'?'Builder Hall Level Required':'Town Hall Level Required';
     try{caps=parseRequirementChart(doc,requirement,name)}catch(e){
      caps=group==='home'?parseFixedBuildingChart(doc,name,'Town Hall Level'):parseFixedBuilderAvailability(doc,name);
      if(!Object.keys(caps).length&&group==='builder')caps=parseFixedRequirementChart(doc,name,'Builder Hall Level Required');
     }
     if(Object.keys(caps).length){source=pageName;result.sources[pageName]=parsed.parse?.revid||null;break}
    }catch(e){
     if(e?.code==='missingtitle'){lastError=e;continue}
     throw e;
    }
   }
   if(caps&&Object.keys(caps).length)result[group][nameKey]=caps;
   else result.unresolved.push(r.section+':'+id);
  }
 }));
 return result;
}
async function extendWikiItemCaps(){
 const missing=missingWikiItemRows();if(!missing.length)return true;
 if(wikiItemPromise)return wikiItemPromise;
 wikiItemPromise=(async()=>{
  const extra=await fetchWikiItemCaps(missing);
  wikiLevelData.itemCaps=wikiLevelData.itemCaps||{home:{},builder:{},checked:{},unresolved:[],sources:{}};
  Object.assign(wikiLevelData.itemCaps.home,extra.home);
  Object.assign(wikiLevelData.itemCaps.builder,extra.builder);
  Object.assign(wikiLevelData.itemCaps.checked,extra.checked);
  wikiLevelData.itemCaps.unresolved=[...new Set([...(wikiLevelData.itemCaps.unresolved||[]),...extra.unresolved])];
  Object.assign(wikiLevelData.sources,extra.sources);
  try{localStorage.setItem(WIKI_CACHE_KEY,JSON.stringify(wikiLevelData))}catch(e){console.warn('Der erweiterte Wiki-Levelcache konnte nicht gespeichert werden:',e)}
  return true;
 })().finally(()=>{wikiItemPromise=null});
 return wikiItemPromise;
}
async function buildWikiLevelData(){
 const specs=[
  ['townHall','Town_Hall',['Resource Buildings','Army Buildings and Heroes','Defensive Buildings and Traps']],
  ['builderHall','Builder_Hall',['Resource and Army Buildings','Defensive Buildings and Traps']],
  ['heroHall','Hero_Hall',['Hero Hall Level Caps']],
  ['laboratory','Laboratory/Upgrade_Chart',['Upgrade Chart']],
  ['starLaboratory','Star_Laboratory',['Upgrade Chart']],
  ['petHouse','Pet_House',['Max Level Chart']],
  ['blacksmith','Blacksmith',['Statistics']],
  ['battleMachine','Battle_Machine',['Statistics']],
  ['battleCopter','Battle_Copter',['Statistics']],
  ['buildersApprentice',"Builder's_Apprentice",['Statistics']],
  ['labAssistant','Lab_Assistant',['Statistics']],
  ['prospector','Prospector',['Statistics']],
  ['alchemist','Alchemist',['Statistics']],
  ['longshot','Longshot',['Statistics']],
  ['smasher','Smasher',['Statistics']],
  ['logger','Logger',['Statistics']]
 ];
 const loaded=await Promise.all(specs.map(async([key,page,sections])=>({key,page,...await wikiSections(page,sections)})));
 const docs={},sources={};
 loaded.forEach(result=>{docs[result.key]=result.sections;sources[result.page]=result.revision});
 const townHall={},builderHall={};
 const homeResources=parseHallTables([docs.townHall['Resource Buildings'].querySelectorAll('table')[1],docs.townHall['Army Buildings and Heroes'].querySelectorAll('table')[1],docs.townHall['Defensive Buildings and Traps'].querySelectorAll('table')[1]],townHall);
 const homeTraps=parseHallTables([docs.townHall['Defensive Buildings and Traps'].querySelectorAll('table')[3]],townHall);
 const builderResources=parseHallTables([docs.builderHall['Resource and Army Buildings'].querySelectorAll('table')[1],docs.builderHall['Defensive Buildings and Traps'].querySelectorAll('table')[1]],builderHall);
 const builderTraps=parseHallTables([docs.builderHall['Defensive Buildings and Traps'].querySelectorAll('table')[3]],builderHall);
 if(homeResources.found<20||homeTraps.found<5||builderResources.found<15||builderTraps.found<4)throw Error('Die Gebäude- oder Fallen-Tabellen im Wiki sind unvollständig.');
 const heroCaps=parseHeroHallChart(docs.heroHall['Hero Hall Level Caps']);
 const laboratory=parseUpgradeChart(docs.laboratory['Upgrade Chart'],'Labor');
 const starLaboratory=parseUpgradeChart(docs.starLaboratory['Upgrade Chart'],'Sternlabor');
 const pets=parsePetHouseChart(docs.petHouse['Max Level Chart']);
 const equipment=parseBlacksmithChart(docs.blacksmith.Statistics);
 const builderHeroes={
  [wikiNameKey('Battle Machine')]:parseRequirementChart(docs.battleMachine.Statistics,'Builder Hall Level Required','Battle Machine'),
  [wikiNameKey('Battle Copter')]:parseRequirementChart(docs.battleCopter.Statistics,'Builder Hall Level Required','Battle Copter')
 };
 const helpers={
  [wikiNameKey("Builder's Apprentice")]:parseRequirementChart(docs.buildersApprentice.Statistics,'Town Hall Level Required',"Builder's Apprentice"),
  [wikiNameKey('Lab Assistant')]:parseRequirementChart(docs.labAssistant.Statistics,'Town Hall Level Required','Lab Assistant'),
  [wikiNameKey('Prospector')]:parseRequirementChart(docs.prospector.Statistics,'Town Hall Level Required','Prospector'),
  [wikiNameKey('Alchemist')]:parseRequirementChart(docs.alchemist.Statistics,'Town Hall Level Required','Alchemist')
 };
 const guardians={
  [wikiNameKey('Longshot')]:parseGuardianChart(docs.longshot.Statistics,'Longshot'),
  [wikiNameKey('Smasher')]:parseGuardianChart(docs.smasher.Statistics,'Smasher'),
  [wikiNameKey('Logger')]:parseGuardianChart(docs.logger.Statistics,'Logger')
 };
 const itemCaps=await fetchWikiItemCaps(rows.filter(r=>['buildings','traps','buildings2','traps2'].includes(r.section)));
 Object.assign(sources,itemCaps.sources);
 return {schema:4,source:'Clash of Clans Wiki',fetchedAt:new Date().toISOString(),sources,townHall,builderHall,heroCaps,laboratory,starLaboratory,pets,equipment,builderHeroes,helpers,guardians,itemCaps,maxTownHall:Math.max(homeResources.maxHall,homeTraps.maxHall),maxBuilderHall:Math.max(builderResources.maxHall,builderTraps.maxHall)};
}
function applyWikiCache(cache,stale=false,error=''){
 wikiLevelData=cache;wikiLevelStale=stale;wikiLevelError=error;
}
async function loadWikiLevelData(force=false){
 if(wikiLevelPromise&&!force)return wikiLevelPromise;
 if(wikiLevelData&&!force&&!wikiLevelStale)return true;
 let cached=null;
 try{
  const saved=JSON.parse(localStorage.getItem(WIKI_CACHE_KEY)||'null');
  if(saved?.schema===4&&saved.source==='Clash of Clans Wiki'&&saved.townHall&&saved.laboratory&&saved.itemCaps)cached=saved;
 }catch(e){console.warn('Der lokale Wiki-Levelcache konnte nicht gelesen werden:',e)}
 if(cached&&!force&&Date.now()-Date.parse(cached.fetchedAt)<WIKI_CACHE_MAX_AGE){applyWikiCache(cached);return true}
 wikiLevelError='';wikiLevelStale=false;
 wikiLevelPromise=(async()=>{
  try{
   const fresh=await buildWikiLevelData();
   try{localStorage.setItem(WIKI_CACHE_KEY,JSON.stringify(fresh))}catch(e){console.warn('Der Wiki-Levelcache konnte nicht gespeichert werden:',e)}
   applyWikiCache(fresh);return true;
  }catch(e){
   wikiLevelError=e?.message||'Wiki-Maximallevel konnten nicht geladen werden.';
   if(cached){applyWikiCache(cached,true,wikiLevelError);return true}
   wikiLevelData=null;return false;
  }
 })();
 return wikiLevelPromise;
}
function capAtRequirement(caps,requirement){
 const limit=Number(requirement);if(!caps||!Number.isFinite(limit)||limit<=0)return null;
 const eligible=Object.keys(caps).map(Number).filter(level=>Number.isFinite(level)&&level<=limit).sort((a,b)=>a-b);
 return eligible.length?Number(caps[eligible[eligible.length-1]])||null:null;
}
function buildingLevel(id,section='buildings'){const row=rows.find(r=>r.section===section&&Number(r.id)===id);return row?Math.max(0,Number(row.lvl)||0):0}
function capContext(){
 const th=getTownHallLevel()||0,bh=buildingLevel(1000034,'buildings2');
 return {th,bh,lab:buildingLevel(1000007),heroHall:buildingLevel(1000071),blacksmith:buildingLevel(1000070),petHouse:buildingLevel(1000068),starLab:buildingLevel(1000046,'buildings2')};
}
function autoMaxLevel(r,ctx=capContext()){
 if(!wikiLevelData)return null;
 if(r.village==='home'&&!ctx.th)return null;
 if(r.village==='builder'&&!ctx.bh)return null;
 const name=wikiItemKey(r);if(!name)return null;
 if(r.section==='buildings'&&Number(r.id)===1000001)return wikiLevelData.maxTownHall||null;
 if(r.section==='buildings2'&&Number(r.id)===1000034)return wikiLevelData.maxBuilderHall||null;
 if(r.section==='buildings'||r.section==='traps')return capAtRequirement(wikiLevelData.itemCaps?.home?.[name],ctx.th);
 if(r.section==='buildings2'||r.section==='traps2')return capAtRequirement(wikiLevelData.itemCaps?.builder?.[name],ctx.bh);
 if(r.section==='heroes')return capAtRequirement(wikiLevelData.heroCaps[name],ctx.heroHall);
 if(r.section==='heroes2')return capAtRequirement(wikiLevelData.builderHeroes[name],ctx.bh);
 if(r.section==='units2')return capAtRequirement(wikiLevelData.starLaboratory[name],ctx.starLab);
 if(['units','spells','siege_machines'].includes(r.section))return capAtRequirement(wikiLevelData.laboratory[name],ctx.lab);
 if(r.section==='pets')return capAtRequirement(wikiLevelData.pets[name],ctx.petHouse);
 if(r.section==='equipment'){
  const rarity=wikiNameKey(catalogItem(r.section,r.id)?.rarity);
  const category=rarity.includes('epic')?'epic':rarity.includes('common')?'common':null;
  return category?capAtRequirement(wikiLevelData.equipment[category],ctx.blacksmith):null;
 }
 if(r.section==='helpers')return capAtRequirement(wikiLevelData.helpers[name],ctx.th);
 if(r.section==='guardians')return capAtRequirement(wikiLevelData.guardians[name],ctx.th);
 return null;
}
function capSourceText(r,ctx,max){
 if((r.section==='buildings'&&Number(r.id)===1000001)||(r.section==='buildings2'&&Number(r.id)===1000034))return `Maximallevel laut Clash Wiki: ${max}`;
 if(r.section==='heroes')return `Heldenhalle ${ctx.heroHall||'—'}: ${max}`;
 if(r.section==='heroes2'||r.section==='buildings2'||r.section==='traps2')return `Bauarbeiterhalle ${ctx.bh||'—'}: ${max}`;
 if(r.section==='units2')return `Sternlabor ${ctx.starLab||'—'}: ${max}`;
 if(['units','spells','siege_machines'].includes(r.section))return `Labor ${ctx.lab||'—'}: ${max}`;
 if(r.section==='pets')return `Haustierhaus ${ctx.petHouse||'—'}: ${max}`;
 if(r.section==='equipment')return `Schmiede ${ctx.blacksmith||'—'}: ${max}`;
 return `Rathaus ${ctx.th||'—'}: ${max}`;
}
function progressStats(){let total=0,done=0,known=0,unknown=0;const ctx=capContext();rows.forEach(r=>{if(['decos','obstacles','decos2','obstacles2'].includes(r.section))return;const max=autoMaxLevel(r,ctx);if(max>0){total+=max*r.cnt;done+=Math.min(r.lvl,max)*r.cnt;known+=r.cnt}else unknown+=r.cnt});return {total,done,known,unknown,pct:total?Math.round(done/total*100):null}}

function getTownHallLevel(){
 // Prefer an explicit level if a future export/API includes it.
 const direct=Number(data?.townHallLevel??data?.townhallLevel??data?.town_hall_level??data?.townhall_level??0);
 if(direct>0&&direct<30)return direct;
 // The village export stores the Town Hall as a normal building entry.
 const hall=rows.find(r=>['buildings','buildings2'].includes(r.section)&&Number(r.id)===1000001);
 if(hall&&hall.lvl>0)return hall.lvl;
 // Fallback for exports that include a readable building name instead of its numeric ID.
 const named=rows.find(r=>['buildings','buildings2'].includes(r.section)&&/town.?hall|rathaus/i.test(String(r.name||'')));
 return named&&named.lvl>0?named.lvl:null;
}

function updateProgressOnly(){
 const ps=progressStats(),status=document.getElementById('gameDataStatus');
 document.getElementById('knownprogress').textContent=ps.known?ps.known+' Einheiten mit Maximallevel':'Maximallevel werden ermittelt';
 document.getElementById('progresssummary').innerHTML=ps.pct===null?'Noch keine auswertbaren Upgrade-Level gefunden. Prüfe den Import sowie die Wiki- und Katalogdaten.':`<b>${ps.pct}%</b> gewichteter Fortschritt (${ps.done} von ${ps.total} Levelpunkten) für ${ps.known} Einheiten.`;
 if(!status)return;
 if(gameCatalogError)status.textContent=`Spieldaten-Katalog konnte nicht geladen werden: ${gameCatalogError}`;
 else if(!gameCatalog.size)status.textContent='Spieldaten-Katalog wird geladen …';
 else if(wikiLevelData){
  const snapshot=new Date(wikiLevelData.fetchedAt).toLocaleDateString('de-DE');
  status.textContent=`Clash Wiki · Snapshot abgerufen am ${snapshot}${wikiLevelStale?` · veralteter Cache, Aktualisierung fehlgeschlagen: ${wikiLevelError}`:''}${ps.unknown?` · ${ps.unknown} Einträge ohne passende Wiki-Leveldaten`:''}`;
 }else if(wikiLevelError)status.textContent=`Wiki-Maximallevel konnten nicht geladen werden: ${wikiLevelError}`;
 else status.textContent='Clash-Wiki-Maximallevel werden geladen …';
}
function retryGameData(){gameCatalogPromise=null;gameCatalogError='';wikiLevelPromise=null;wikiLevelData=null;wikiLevelError='';wikiLevelStale=false;loadGameCatalog(true).then(ready=>ready?loadWikiLevelData(true):false).then(()=>{if(data)update()});}

function ensureLevelData(){
 if(!gameCatalog.size&&!gameCatalogError&&!gameCatalogPromise){
  loadGameCatalog().then(ready=>ready?loadWikiLevelData():false).then(()=>{if(data)update()});
 }else if(gameCatalog.size&&!wikiLevelData&&!wikiLevelError&&!wikiLevelPromise){
  loadWikiLevelData().then(()=>{if(data)update()});
 }else if(gameCatalog.size&&wikiLevelData&&missingWikiItemRows().length&&!wikiItemPromise){
  extendWikiItemCaps().then(()=>{if(data)update()});
 }
}
function update(){if(!data)return;document.getElementById('playerline').textContent='Letzter Import: '+new Date(Number(data.timestamp)*1000).toLocaleString('de-DE');document.getElementById('sbuild').textContent=countSections(['buildings','traps','buildings2','traps2']);document.getElementById('sheroes').textContent=countSections(['heroes','heroes2']);document.getElementById('stroops').textContent=countSections(['units','units2','spells','siege_machines']);document.getElementById('stimers').textContent=timers().length;
let cats=[['buildings','Gebäude'],['traps','Fallen'],['heroes','Helden'],['units','Truppen'],['units2','Bauarbeiterbasis-Truppen'],['spells','Zauber'],['siege_machines','Belagerungsmaschinen'],['pets','Begleiter'],['equipment','Ausrüstung'],['helpers','Helfer'],['guardians','Wächter']];document.getElementById('bars').innerHTML=cats.map(([k,n])=>`<div class="rowitem split"><div><b>${n}</b><div class="mini">${count(k)} Einheiten</div></div><span>${count(k)}</span></div>`).join('');
let home=countSections(['buildings','traps','units','siege_machines','heroes','spells','pets','equipment']),builder=countSections(['buildings2','traps2','units2','heroes2']);document.getElementById('villagebars').innerHTML=`<div class="rowitem"><div class="split"><b>Heimatdorf</b><b>${home}</b></div><div class="mini">Gebäude, Fallen, Truppen, Helden, Zauber & Ausrüstung</div></div><div class="rowitem"><div class="split"><b>Bauarbeiterbasis</b><b>${builder}</b></div><div class="mini">Gebäude, Fallen, Truppen & Helden</div></div>`;
let t=timers();document.getElementById('timers').innerHTML=t.length?t.slice(0,5).map(timerHtml).join(''):'<div class="empty">Keine Timer erkannt.</div>';document.getElementById('alltimers').innerHTML=t.length?t.map(timerHtml).join(''):'<div class="empty">Keine laufenden Timer vorhanden.</div>';document.getElementById('timerwarning').textContent='Timer-Rohwerte werden unverändert angezeigt. Einheit/Umrechnung ist ohne bestätigte Export-Spezifikation nicht aktiviert.';
let ps=progressStats();updateProgressOnly();document.getElementById('profiletag').textContent='Dein Dorf';let town=getTownHallLevel();document.getElementById('profiletitle').textContent=town?'Town Hall '+town:'Town Hall nicht erkannt';document.getElementById('profiletown').textContent=town?'Rathaus-Level '+town:'Rathaus-Level im Export nicht gefunden';let townImage=document.getElementById('profiletownimage');if(town){townImage.innerHTML=`<img class="townhall-art" src="https://assets.clashk.ing/buildings/home-village/town_hall/level_${town}.webp" alt="Rathaus Level ${town}" loading="lazy" onerror="this.replaceWith(document.createTextNode('🏰'))">`}else{townImage.textContent='🏰'}let pb=[['Structures',countSections(['buildings','traps'])],['Lab',countSections(['units','spells','siege_machines'])],['Heroes',countSections(['heroes'])],['Equipment',count('equipment')],['Pets',count('pets')]];document.getElementById('profilebars').innerHTML=pb.map(([n,v])=>`<div class="profilebar"><div class="progress"><i style="width:${ps.pct||0}%"></i></div><small>${n} · ${v}</small></div>`).join('');renderList();renderBuilders();renderPlans();ensureLevelData()}
function timerHtml(r){let b=meta.builders[key(r)]||'Nicht zugeordnet';return `<div class="timer"><div class="split"><strong>${esc(r.name||r.label)}</strong><span class="pill">${esc(village(r.section)==='builder'?'Bauarbeiterbasis':'Heimatdorf')}</span></div><small>${esc(keys[r.section])} · Level ${r.lvl}</small><div class="mini">Timer-Rohwert: <b>${Number(r.timer).toLocaleString('de-DE')}</b> · Bauarbeiter-Zuordnung: ${esc(b)}</div></div>`}
function show(p){page=p;document.querySelectorAll('.nav').forEach(b=>b.classList.toggle('active',b.dataset.page===p));['dashboard','listpage','detailpage','upgrades','planner','import'].forEach(id=>document.getElementById(id).classList.add('hide'));if(['buildings','heroes','troops'].includes(p)){document.getElementById('listpage').classList.remove('hide');document.getElementById('listtitle').textContent=p==='buildings'?'Gebäude & Verteidigung':p==='heroes'?'Helden':'Truppen, Zauber & Begleiter';setupCategories();renderList()}else if(p==='detail')document.getElementById('detailpage').classList.remove('hide');else document.getElementById(p).classList.remove('hide')}
document.querySelectorAll('.nav').forEach(b=>b.onclick=()=>show(b.dataset.page));
function sections(){return page==='buildings'?['buildings','traps','decos','obstacles','buildings2','traps2','decos2','obstacles2']:page==='heroes'?['heroes','heroes2']:['units','units2','spells','siege_machines','pets','equipment','helpers','guardians']}
function setupCategories(){let s=document.getElementById('category'),old=s.value;s.innerHTML='<option value="all">Alle Kategorien</option>'+sections().map(k=>`<option value="${k}">${keys[k]}</option>`).join('');if([...s.options].some(o=>o.value===old))s.value=old}
// Offizielle Spielgrafiken über die ClashKing-Asset-Sammlung. Unbekannte IDs erhalten
// bewusst keinen falschen Platzhalter: nur eindeutig zugeordnete Assets werden angezeigt.
const assetNames={
 buildings:{1000000:'army_camp',1000001:'town_hall',1000002:'elixir_collector',1000003:'elixir_storage',1000004:'gold_mine',1000005:'gold_storage',1000006:'barracks',1000007:'laboratory',1000008:'cannon',1000009:'archer_tower',1000010:'wall',1000011:'wizard_tower',1000012:'air_defense',1000013:'mortar',1000014:'clan_castle',1000015:'builder_hut',1000019:'hidden_tesla',1000020:'spell_factory',1000021:'x_bow',1000023:'dark_elixir_drill',1000024:'dark_elixir_storage',1000026:'dark_barracks',1000027:'inferno_tower',1000028:'air_sweeper',1000029:'dark_spell_factory',1000031:'eagle_artillery',1000032:'bomb_tower',1000059:'workshop',1000064:'b_o_b_hut',1000067:'scattershot',1000068:'pet_house',1000070:'blacksmith',1000071:'hero_hall',1000072:'spell_tower',1000077:'monolith',1000084:'multi_archer_tower',1000085:'ricochet_cannon',1000086:'revenge_tower',1000089:'firespitter',1000093:'helper_hut',1000097:'crafting_station',1000102:'super_wizard_tower'},
 traps:{12000000:'bomb',12000001:'spring_trap',12000002:'giant_bomb',12000005:'air_bomb',12000006:'seeking_air_mine',12000008:'skeleton_trap',12000016:'tornado_trap',12000020:'giga_bomb'},
 heroes:{28000000:'barbarian_king',28000001:'archer_queen',28000002:'grand_warden',28000004:'royal_champion',28000006:'minion_prince',28000007:'dragon_duke'},
 heroes2:{28000003:'battle_machine',28000005:'battle_copter'},
 units:{4000000:'barbarian',4000001:'archer',4000002:'goblin',4000003:'giant',4000004:'wall_breaker',4000005:'balloon',4000006:'wizard',4000007:'healer',4000008:'dragon',4000009:'pekka',4000010:'minion',4000011:'hog_rider',4000012:'valkyrie',4000013:'golem',4000015:'witch',4000017:'lava_hound',4000022:'bowler',4000023:'baby_dragon',4000024:'miner',4000053:'yeti',4000058:'ice_golem',4000059:'electro_dragon',4000065:'dragon_rider',4000082:'headhunter',4000095:'electro_titan',4000097:'apprentice_warden',4000109:'root_rider',4000110:'druid',4000123:'thrower',4000132:'furnace'},
 units2:{4000031:'raged_barbarian',4000032:'sneaky_archer',4000033:'beta_minion',4000034:'boxer_giant',4000035:'bomber',4000036:'power_pekka',4000037:'cannon_cart',4000038:'drop_ship',4000041:'baby_dragon',4000042:'night_witch',4000070:'hog_glider',4000106:'electrofire_wizard'},
 siege_machines:{4000051:'wall_wrecker',4000052:'battle_blimp',4000062:'stone_slammer',4000075:'siege_barracks',4000087:'log_launcher',4000091:'flame_flinger',4000092:'battle_drill',4000135:'troop_launcher'},
 spells:{26000000:'lightning_spell',26000001:'healing_spell',26000002:'rage_spell',26000003:'jump_spell',26000005:'freeze_spell',26000009:'poison_spell',26000010:'earthquake_spell',26000011:'haste_spell',26000016:'clone_spell',26000017:'skeleton_spell',26000028:'bat_spell',26000035:'invisibility_spell',26000053:'recall_spell',26000070:'overgrowth_spell',26000098:'revive_spell'},
 pets:{73000000:'lassi',73000001:'mighty_yak',73000002:'electro_owl',73000003:'unicorn',73000004:'phoenix',73000007:'poison_lizard',73000008:'diggy',73000009:'frosty',73000010:'spirit_fox',73000011:'angry_jelly',73000016:'sneezy'}
};
function entityImage(r){let n=assetNames[r.section]?.[r.id];if(!n)return `<span class="image-fallback" aria-label="${esc(r.name||keys[r.section])}">✦</span>`;let base='https://assets.clashk.ing/';let url='';if(['buildings','buildings2'].includes(r.section))url=base+'buildings/'+(r.section==='buildings2'?'builder-base':'home-village')+'/'+n+'/level_'+Math.max(1,r.lvl)+'.webp';else if(['traps','traps2'].includes(r.section))url=base+'traps/'+n+'.webp';else if(['units','units2','siege_machines','heroes','heroes2','pets'].includes(r.section))url=base+({units:'troops',units2:'troops',siege_machines:'siege-machines',heroes:'heroes',heroes2:'builder-base/heroes',pets:'pets'}[r.section])+'/'+n+'/icon.webp';else if(r.section==='spells')url=base+'spells/'+n+'.webp';if(!url)return `<span class="image-fallback">✦</span>`;return `<img class="game-icon" src="${url}" alt="${esc(r.name||keys[r.section])}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'image-fallback',textContent:'✦',title:this.alt}))">`}
function detailLevelNumber(level,index){
 if(!level||typeof level!=='object')return index+1;
 for(const key of ['level','lvl','levelNumber','townHallLevel','builderHallLevel']){
  if(Number.isFinite(Number(level[key]))&&Number(level[key])>0)return Number(level[key]);
 }
 return index+1;
}
function detailFirstValue(object,keys){
 if(!object||typeof object!=='object')return null;
 for(const key of keys){
  if(object[key]!==undefined&&object[key]!==null&&object[key]!=='')return object[key];
 }
 return null;
}
function detailResourceKey(resource){
 const normalized=String(resource||'').toLowerCase().replace(/[^a-z]/g,'');
 if(normalized.includes('buildergold'))return 'builder_gold';
 if(normalized.includes('builderelixir'))return 'builder_elixir';
 if(normalized.includes('darkelixir'))return 'dark_elixir';
 if(normalized.includes('elixir'))return 'elixir';
 if(normalized.includes('gold'))return 'gold';
 return null;
}
function detailCostItem(value,resource){
 if(value===null||value===''||!Number.isFinite(Number(value)))return '';
 const label=String(resource||'').trim(),icon=detailResourceKey(label);
 const displayLabel=icon?({gold:'Gold',elixir:'Elixier',dark_elixir:'Dunkles Elixier',builder_gold:'Bauarbeiter-Gold',builder_elixir:'Bauarbeiter-Elixier'}[icon]):label;
 const image=icon?`<img class="detail-resource-icon" src="https://assets.clashk.ing/resources/${icon}.webp" alt="${esc(displayLabel)}" title="${esc(displayLabel)}" loading="lazy">`:'';
 return `<span class="detail-cost-item"><b>${Number(value).toLocaleString('de-DE')}</b>${image}${!image&&label?`<small>${esc(label)}</small>`:''}</span>`;
}
function detailCostValues(level){
 const costKeys=['cost','upgradeCost','buildCost','researchCost','trainingCost','elixirCost','goldCost','darkElixirCost','gemCost'];
 const directKey=costKeys.find(key=>level?.[key]!==undefined&&level[key]!==null&&level[key]!=='');
 const direct=directKey?level[directKey]:null;
 if(direct!==null&&typeof direct==='object'){
  return Object.entries(direct).filter(([,value])=>value!==null&&value!==''&&Number.isFinite(Number(value))).map(([resource,value])=>({amount:Number(value),resource}));
 }
 if(direct!==null){
  const resource=detailFirstValue(level,['costResource','buildCostResource','researchCostResource','trainingCostResource','resource','resourceType'])||directKey.replace(/(?:upgrade|build|research|training)?cost/i,'');
  return Number.isFinite(Number(direct))?[{amount:Number(direct),resource}]:[];
 }
 const costParts=[];
 for(const [key,value] of Object.entries(level)){
  if(/cost/i.test(key)&&value!==null&&value!==''&&Number.isFinite(Number(value)))costParts.push({amount:Number(value),resource:key.replace(/cost|Upgrade|Build|Research|Training/gi,'').trim()});
 }
 return costParts;
}
function detailCost(level){
 return detailCostValues(level).map(cost=>detailCostItem(cost.amount,cost.resource)).join('')||'–';
}
function detailDurationSeconds(level){
 const value=detailFirstValue(level,['buildTime','upgradeTime','researchTime','trainingTime','duration','time']);
 if(typeof value==='number')return Number.isFinite(value)&&value>=0?value:null;
 if(!value||typeof value!=='object')return null;
 const parts=['days','hours','minutes','seconds'].map(key=>Number(value[key]||0));
 return parts.every(part=>Number.isFinite(part)&&part>=0)?parts[0]*86400+parts[1]*3600+parts[2]*60+parts[3]:null;
}
function catalogLevelsForItem(item){
 let levels=item?.levels;
 if(!Array.isArray(levels)&&item?.upgradeLevels&&Array.isArray(item.upgradeLevels))levels=item.upgradeLevels;
 if(!Array.isArray(levels)&&item?.levels&&typeof item.levels==='object')levels=Object.values(item.levels);
 return Array.isArray(levels)?levels:[];
}
function formatDetailTime(totalSeconds){
 let remaining=Math.max(0,Math.floor(totalSeconds));
 const days=Math.floor(remaining/86400);remaining%=86400;
 const hours=Math.floor(remaining/3600);remaining%=3600;
 const minutes=Math.floor(remaining/60),seconds=remaining%60;
 return `${days?`${days} T `:''}${hours} Std. ${minutes} Min.${seconds?` ${seconds} Sek.`:''}`;
}
function detailTime(level){
 const value=detailFirstValue(level,['buildTime','upgradeTime','researchTime','trainingTime','duration','time']);
 if(value===null||value==='')return '–';
 if(typeof value==='number')return formatDetailTime(value);
 if(typeof value==='object'){
  const days=Number(value.days||0),hours=Number(value.hours||0),minutes=Number(value.minutes||0),seconds=Number(value.seconds||0);
  return formatDetailTime(days*86400+hours*3600+minutes*60+seconds);
 }
 return String(value);
}
function detailRequirement(level){
 const parts=[];
 const town=detailFirstValue(level,['townHallRequired','townHallLevel','requiredTownHall']);
 const builder=detailFirstValue(level,['builderHallRequired','requiredBuilderHall']);
 const lab=detailFirstValue(level,['laboratoryRequired','labLevel']);
 const star=detailFirstValue(level,['starLaboratoryRequired']);
 const pet=detailFirstValue(level,['petHouseRequired']);
 const blacksmith=detailFirstValue(level,['blacksmithRequired']);
 if(town!==null)parts.push(`Rathaus ${town}`);
 if(builder!==null)parts.push(`Bauarbeiterhalle ${builder}`);
 if(lab!==null)parts.push(`Labor ${lab}`);
 if(star!==null)parts.push(`Sternlabor ${star}`);
 if(pet!==null)parts.push(`Haustierhaus ${pet}`);
 if(blacksmith!==null)parts.push(`Schmiede ${blacksmith}`);
 return parts.join(' · ')||'–';
}
function openItemDetail(section,index){
 const r=rows.find(item=>item.section===section&&item.index===index);
 if(!r)return;
 const item=catalogItem(section,r.id);
 const levels=catalogLevelsForItem(item);
 const ctx=capContext(),max=autoMaxLevel(r,ctx);
 const title=r.name||keys[section]||'Element';
 document.getElementById('detailtitle').textContent=title;
 document.getElementById('detailmeta').textContent=`${keys[section]} · Aktuelles Level: ${r.lvl}${max?` · Maximum: ${max}`:''}`;
 document.getElementById('detaillegend').innerHTML='<span><b class="currentMark"></b>Aktuelles Level</span><span><b class="doneMark"></b>Bereits erreicht</span>';
 detailReturnPage=page==='detail'?detailReturnPage:page;
 detailLevels=levels;
 detailCurrentLevel=r.lvl;
 detailPageSize=10;
 document.getElementById('detailsize').value='10';
 jumpToCurrentDetailLevel();
 show('detail');
 document.getElementById('detailpage').scrollIntoView({block:'start'});
}
function detailLevelIndex(level,index){return detailLevelNumber(level,index)}
function renderDetailLevels(){
 const total=detailLevels.length;
 if(!total){
  document.getElementById('detaillevels').innerHTML='<tr><td colspan="4" class="empty-detail">Für dieses Element liegen keine Leveldaten im Katalog vor.</td></tr>';
  document.getElementById('detailpageinfo').textContent='Keine Leveldaten';
  document.getElementById('detailprev').disabled=true;
  document.getElementById('detailnext').disabled=true;
  return;
 }
 const size=detailPageSize==='all'?total:Number(detailPageSize);
 const pages=Math.ceil(total/size);
 detailPageIndex=Math.max(0,Math.min(detailPageIndex,pages-1));
 const start=detailPageIndex*size,end=Math.min(start+size,total);
 const visible=detailLevels.slice(start,end).map((level,i)=>{
  const levelNumber=detailLevelIndex(level,start+i);
  const current=levelNumber===detailCurrentLevel;
  const completed=levelNumber<=detailCurrentLevel;
  return `<tr class="${current?'current':completed?'completed':''}"><td><b>Level ${levelNumber}</b></td><td class="detail-cost-cell">${detailCost(level)}</td><td>${esc(detailTime(level))}</td><td>${esc(detailRequirement(level))}</td></tr>`;
 }).join('');
 document.getElementById('detaillevels').innerHTML=visible;
 document.getElementById('detailpageinfo').textContent=detailPageSize==='all'?`Alle ${total} Level`:`${start+1}–${end} von ${total}`;
 document.getElementById('detailprev').disabled=detailPageIndex===0;
 document.getElementById('detailnext').disabled=detailPageIndex>=pages-1;
}
function changeDetailPage(offset){
 detailPageIndex+=offset;
 renderDetailLevels();
 document.getElementById('detailpage').scrollIntoView({block:'start'});
}
function setDetailPageSize(value){
 detailPageSize=value;
 detailPageIndex=0;
 renderDetailLevels();
}
function jumpToCurrentDetailLevel(){
 if(!detailLevels.length)return;
 const index=detailLevels.findIndex((level,i)=>detailLevelIndex(level,i)===detailCurrentLevel);
 if(index<0){renderDetailLevels();return}
 if(detailPageSize==='all'){detailPageIndex=0}else detailPageIndex=Math.floor(index/Number(detailPageSize));
 renderDetailLevels();
 requestAnimationFrame(()=>document.querySelector('#detaillevels tr.current')?.scrollIntoView({block:'center'}));
}
function closeItemDetail(){show(detailReturnPage)}
function renderList(){
 if(!document.getElementById('items'))return;
 let ks=sections(),q=(document.getElementById('search')?.value||'').toLowerCase(),cat=document.getElementById('category')?.value||'all',sort=document.getElementById('sort')?.value||'name',vf=document.getElementById('villagefilter')?.value||'all',quickfilter=document.getElementById('quickfilter')?.value||'all';
 const ctx=capContext();
 let a=rows.filter(r=>{
  if(!ks.includes(r.section)||(vf!=='all'&&r.village!==vf)||(cat!=='all'&&cat!==r.section)||!(`${r.name||''} ${keys[r.section]} ${r.lvl}`).toLowerCase().includes(q))return false;
  if(quickfilter==='upgrading')return r.timer>0;
  if(quickfilter==='not-maxed'){const max=autoMaxLevel(r,ctx);return Number.isFinite(max)&&max>0&&r.lvl<max}
  return true;
 });
 if(sort==='level')a.sort((x,y)=>y.lvl-x.lvl);else if(sort==='name')a.sort((x,y)=>(x.name||keys[x.section]).localeCompare(y.name||keys[y.section]));else a.sort((x,y)=>(x.name||keys[x.section]).localeCompare(y.name||keys[y.section]));
 document.getElementById('listcount').textContent=a.reduce((n,r)=>n+r.cnt,0)+' Einheiten · '+a.length+' Datensätze';
 let groups={};a.forEach(r=>(groups[r.section]??=[]).push(r));
 const icons={buildings:'🏰',traps:'💣',heroes:'🦸',units:'⚔️',spells:'✨',siege_machines:'🚜',pets:'🐾',equipment:'🛡️',buildings2:'🏗️',traps2:'💣',units2:'⚔️',heroes2:'🦸'};
 document.getElementById('items').innerHTML=Object.entries(groups).map(([section,list])=>{
   let total=list.reduce((n,r)=>n+r.cnt,0);
   const itemGroups=new Map(),defenseNumbers={};
   list.forEach(r=>{
    const title=r.name||'Unbekanntes Element';
    if(defenseKeys.has(r.section+':'+Number(r.id))){
     const nameKey=r.section+':'+title,number=defenseNumbers[nameKey]=(defenseNumbers[nameKey]||0)+1;
     itemGroups.set('defense:'+r.section+':'+r.index,{title:`${title} #${number}`,items:[r]});
    }else{
     const groupKey='item:'+title;
     if(!itemGroups.has(groupKey))itemGroups.set(groupKey,{title,items:[]});
     itemGroups.get(groupKey).items.push(r);
    }
   });
   return `<section class="ninja-section"><div class="ninja-heading">${esc(keys[section])}</div><div class="ninja-summary">${total} Einheiten · <b>${list.length}</b> Einträge · Levelübersicht</div>`+
   [...itemGroups.values()].map(({title,items})=>{const groupCount=items.reduce((n,r)=>n+r.cnt,0),countLabel=items.length>1||groupCount>1?` <small>${groupCount}×</small>`:'';return `<div class="ninja-item-group"><div class="ninja-item-heading">${esc(title)}${countLabel}</div>`+
     items.map(r=>{let m=meta.items[key(r)]||{},max=autoMaxLevel(r,ctx),done=max>0&&r.lvl>=max,icon=entityImage(r),progress=max?Math.min(100,Math.max(0,Math.round(r.lvl/max*100))):0,remaining=max?Math.max(0,max-r.lvl):null,capText=max?capSourceText(r,ctx,max):'Keine passenden Wiki-Leveldaten';
       return `<article class="ninja-row item-detail-row" role="button" tabindex="0" title="Levelübersicht für ${esc(r.name||keys[section])} öffnen" onclick="openItemDetail('${r.section}',${r.index})" onkeydown="if(event.key==='Enter'||event.key===' ')openItemDetail('${r.section}',${r.index})"><div class="ninja-left"><div class="ninja-icon">${icon}</div><div class="ninja-level">Lvl ${r.lvl}${r.cnt>1?` <small>×${r.cnt}</small>`:''}</div><button class="ninja-up" title="Upgrade vormerken" aria-label="Upgrade für ${esc(r.name||keys[section])} vormerken" onclick="event.stopPropagation();quickPlan('${r.section}',${r.index})">⬆</button></div><div class="ninja-right"><div class="level-overview"><strong>${max?`Level ${r.lvl} von ${max}`:`Level ${r.lvl}`}</strong><span>${r.timer>0?'Upgrade läuft':done?'Maximallevel erreicht':max?`${remaining} Level bis zum Maximum`:'Maximallevel nicht verfügbar'}</span></div>${max?`<div class="level-progress" role="progressbar" aria-label="Fortschritt ${esc(r.name||keys[section])}" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100"><i style="width:${progress}%"></i></div>`:''}</div></article>`+
       `<div class="ninja-edit"><label>Level <input type="number" min="0" ${max?`max="${max}"`:''} step="1" value="${r.lvl}" onchange="changeLevel('${r.section}',${r.index},this.value,${max||'null'})"></label><span class="cap-note">${esc(capText)}</span><input aria-label="Notiz" placeholder="Notiz" value="${esc(m.note||'')}" onchange="changeNote('${r.section}',${r.index},this.value)"></div>`;
     }).join('')+'</div>'}).join('')+'</section>';
 }).join('')||(rows.length?'<div class="ninja-empty">Keine Einträge entsprechen deiner Auswahl.</div>':'<div class="ninja-empty">Keine Einträge gefunden. Importiere zuerst deinen Dorfexport.</div>');
}
async function quickPlan(k,i){
 let r=rows.find(x=>x.section===k&&x.index===i);
 if(!r)return;
 let catalogReady=gameCatalog.size>0;
 if(!catalogReady)catalogReady=await loadGameCatalog();
 r=rows.find(x=>x.section===k&&x.index===i);
 if(!r)return;
 const target=Number(r.lvl)+1,item=catalogItem(k,r.id);
 const level=catalogLevelsForItem(item).find((entry,index)=>detailLevelNumber(entry,index)===target)||null;
 const costs=level?detailCostValues(level):null,duration=level?detailDurationSeconds(level):null;
 const knownCosts=costs?.length?costs:null,automaticData=!!level&&!!knownCosts&&duration!==null;
 meta.plans.push({id:Date.now(),done:false,name:r.name||keys[k],level:r.lvl,target,builder:'',start:'',costs:knownCosts,durationSeconds:duration,note:automaticData?'Aus Gebäudeübersicht vorgemerkt':!catalogReady?`Katalogdaten konnten nicht geladen werden: ${gameCatalogError||'unbekannter Fehler'}`:'Kosten oder Dauer für das Ziel-Level nicht verfügbar'});
 saveMeta();renderPlans();
 alert(automaticData?'Nächstes Level mit Kosten und Dauer wurde im Planer vorgemerkt.':'Nächstes Level wurde vorgemerkt; Kosten oder Dauer waren nicht vollständig verfügbar.');
}
function changeLevel(k,i,v,max){if(!data[k]?.[i])return;const level=Number(v),cap=Number(max);if(!Number.isInteger(level)||level<0||(Number.isFinite(cap)&&cap>0&&level>cap)){alert(Number.isFinite(cap)&&cap>0?`Level muss zwischen 0 und ${cap} liegen.`:'Bitte ein gültiges Level ab 0 eingeben.');update();return}data[k][i].lvl=level;localStorage.setItem(DATA,JSON.stringify(data));buildRows();update()}function changeNote(k,i,v){let z=meta.items[k+':'+i]||{};z.note=v;meta.items[k+':'+i]=z;saveMeta()}

function autoAssignBuilders(){let n={home:0,builder:0};timers().forEach(r=>{let k=key(r);if(meta.builders[k])return;let v=r.village==='builder'?'builder':'home';n[v]++;meta.builders[k]=v==='builder'?'Vorschlag Bauarbeiterbasis '+n[v]:'Vorschlag Bauarbeiter '+n[v]});saveMeta();renderBuilders()}function renderBuilders(){let t=timers();document.getElementById('builderassign').innerHTML=t.length?'<div class="actions" style="margin-bottom:12px"><button class="btn gold" onclick="autoAssignBuilders()">Automatisch zuordnen (Vorschläge)</button></div>'+t.map(r=>`<div class="rowitem split"><div><b>${esc(r.name||keys[r.section])}</b><br><small>${esc(village(r.section)==='builder'?'Bauarbeiterbasis':'Heimatdorf')} · Level ${r.lvl} · Timer-Rohwert ${Number(r.timer).toLocaleString('de-DE')}</small></div><input class="field" style="max-width:220px" placeholder="Bauarbeiter-Zuordnung" value="${esc(meta.builders[key(r)]||'')}" onchange="setBuilder('${r.section}',${r.index},this.value)"></div>`).join(''):'<div class="empty">Keine Timer zum Zuordnen vorhanden.</div>'}function setBuilder(k,i,v){let r=rows.find(x=>x.section===k&&x.index===i);if(!r)return;meta.builders[key(r)]=v;saveMeta()}
function addPlan(){let name=document.getElementById('planname').value.trim();if(!name)return alert('Bitte einen Namen für das Upgrade eingeben.');let current=Number(document.getElementById('planlevel').value),target=Number(document.getElementById('plantarget').value);if(document.getElementById('plantarget').value&&document.getElementById('planlevel').value&&target<=current)return alert('Das Ziel-Level muss höher als das aktuelle Level sein.');meta.plans.push({id:Date.now(),done:false,name,level:document.getElementById('planlevel').value,target:document.getElementById('plantarget').value,builder:document.getElementById('planbuilder').value,start:document.getElementById('planstart').value,note:document.getElementById('plannote').value,costs:null,durationSeconds:null});saveMeta();renderPlans();['planname','planlevel','plantarget','planbuilder','planstart','plannote'].forEach(id=>document.getElementById(id).value='')}
function renderPlanTotals(plans){
 const active=plans.filter(plan=>!plan.done),knownCosts=active.filter(plan=>Array.isArray(plan.costs)),knownTimes=active.filter(plan=>Number.isFinite(plan.durationSeconds)&&plan.durationSeconds>=0),totals=new Map();
 knownCosts.forEach(plan=>plan.costs.forEach(cost=>{
  if(!cost||typeof cost!=='object'||!Number.isFinite(Number(cost.amount)))return;
  const resource=String(cost.resource||''),key=detailResourceKey(resource)||resource.toLowerCase();
  const total=totals.get(key)||{resource,amount:0};
  total.amount+=Number(cost.amount);totals.set(key,total);
 }));
 const costHtml=[...totals.values()].map(total=>detailCostItem(total.amount,total.resource)).join('')||'–';
 const known=active.length?`${knownCosts.length}/${active.length} mit Kostendaten`: 'Keine offenen Upgrades';
 const duration=knownTimes.length?formatDetailTime(knownTimes.reduce((sum,plan)=>sum+plan.durationSeconds,0)):'–';
 const timeCoverage=active.length?`${knownTimes.length}/${active.length} mit Zeitdaten`:'Keine offenen Upgrades';
 document.getElementById('plantotals').innerHTML=`<div class="plan-totals"><div class="plan-total"><b>Geplante Gesamtkosten <small>(${known})</small></b><div class="plan-costs">${costHtml}</div></div><div class="plan-total"><b>Upgradezeit gesamt (aufsummiert) <small>(${timeCoverage})</small></b><div>${duration}</div></div></div><p class="mini">Summen berücksichtigen nur offene Planungen mit verfügbaren Katalogdaten.</p>`;
}
function renderPlans(){
 const plans=meta.plans||[];
 renderPlanTotals(plans);
 document.getElementById('plans').innerHTML=plans.length?plans.map(plan=>{
  const costs=Array.isArray(plan.costs)?plan.costs.filter(cost=>cost&&typeof cost==='object').map(cost=>detailCostItem(cost.amount,cost.resource)).join('')||'–':'nicht ermittelt';
  const duration=Number.isFinite(plan.durationSeconds)?formatDetailTime(plan.durationSeconds):'nicht ermittelt';
  return `<div class="rowitem split"><div><b>${plan.done?'✓ ':''}${esc(plan.name)}</b><div class="mini">Level ${esc(plan.level??'?')} → ${esc(plan.target??'?')} · ${esc(plan.builder||'Kein Bauarbeiter')} · ${esc(plan.start||'Start offen')}</div><div class="mini plan-costs">Kosten: ${costs} · Dauer: ${esc(duration)}</div><small>${esc(plan.note||'')}</small></div><div class="actions"><button class="btn" onclick="togglePlan(${plan.id})">${plan.done?'Offen':'Erledigt'}</button><button class="btn danger" onclick="removePlan(${plan.id})">Entfernen</button></div></div>`;
 }).join(''):'<div class="empty">Noch keine Upgrades geplant.</div>';
}
function togglePlan(id){let x=meta.plans.find(x=>x.id===id);if(x)x.done=!x.done;saveMeta();renderPlans()}function removePlan(id){meta.plans=meta.plans.filter(x=>x.id!==id);saveMeta();renderPlans()}

load();
let trackerBridgeSeenAt='',trackerBridgeRunning=false,trackerBridgeCandidate='',trackerBridgeCandidateCount=0;
function normalizeTrackerText(value){
 return String(value||'').toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
  .replace(/[^a-z0-9]+/gi,' ').replace(/\s+/g,' ').trim();
}
function extractObservedLevel(text){
 const normalizeDigits=value=>value.replace(/[Il|]/g,'1').replace(/[Gg]/g,'6').replace(/[^0-9]/g,'');
 const levelValue='([0-9Il|](?:[\\s&.,\'’`´-]{0,2}[0-9Il|Gg])?)';
 const targetContext=/\b(?:auf|to)\s+(?:level|lvl|stufe)\b/i.test(text);
 const targetMatch=text.match(new RegExp('\\b(?:auf|to)\\s+(?:level|lvl|stufe)\\s*'+levelValue+'\\s*(?=(?:verbessern|upgrade|aufrüsten|aufwerten)\\b)','i'));
 if(targetMatch){
  const digits=normalizeDigits(targetMatch[1]);
  const target=Number(digits);
  return Number.isInteger(target)&&target>1?{level:target-1,target,source:'upgrade-target',ocrNumber:target,ocrDigits:digits.length}:null;
 }
 if(targetContext)return null;
 const currentMatch=text.match(new RegExp('\\b(?:level|lvl|stufe)\\s*[:#.]?\\s*'+levelValue+'\\b','i'));
 if(!currentMatch)return null;
 const digits=normalizeDigits(currentMatch[1]);
 const level=Number(digits);
 return Number.isInteger(level)&&level>0?{level,target:level+1,source:'current-level',ocrNumber:level,ocrDigits:digits.length}:null;
}
async function resolveOcrItem(text){
 if(!data)return null;
 if(!gameCatalog.size)await loadGameCatalog();
 const normalized=normalizeTrackerText(text);
 const candidates=[];
 rows.forEach(r=>{
  const catalogName=catalogItem(r.section,r.id)?.name;
  const namesToCheck=[r.name,wikiItemName(r),catalogName,names[r.section]?.[r.id],...(OCR_NAME_ALIASES[r.section+':'+Number(r.id)]||[])]
   .filter((name,index,all)=>typeof name==='string'&&name.trim()&&all.indexOf(name)===index);
  namesToCheck.forEach(name=>{
   const clean=normalizeTrackerText(name);
   if(clean&&normalized.includes(clean))candidates.push({r,name:name.trim(),matchLength:clean.length});
  });
 });
 if(!candidates.length)return null;
 candidates.sort((a,b)=>b.matchLength-a.matchLength);
 const bestLength=candidates[0].matchLength;
 const bestRows=[...new Map(candidates.filter(candidate=>candidate.matchLength===bestLength).map(candidate=>[key(candidate.r),candidate])).values()];
 if(bestRows.length!==1)return {ambiguous:true,matches:bestRows.length};
 const {r}=bestRows[0];
 let observedLevel=extractObservedLevel(text);
 const item=catalogItem(r.section,r.id);
 const levels=catalogLevelsForItem(item);
 if(observedLevel&&observedLevel.ocrDigits===1){
  const low=observedLevel.ocrNumber,high=low+10;
  const hasHighLevel=levels.some((entry,index)=>detailLevelNumber(entry,index)===high);
  if(hasHighLevel){
   const savedLevel=Number(r.lvl);
   const savedTarget=observedLevel.source==='upgrade-target'?savedLevel+1:savedLevel;
   if(savedTarget===high){
    observedLevel=observedLevel.source==='upgrade-target'
     ?{...observedLevel,level:high-1,target:high,ocrNumber:high}
     :{...observedLevel,level:high,target:high+1,ocrNumber:high};
   }else if(savedTarget!==low){
    return {r,levelAmbiguous:true,low,high,confirmedName:r.name||bestRows[0].name};
   }
  }
 }
 const observedEntry=observedLevel?levels.find((entry,index)=>detailLevelNumber(entry,index)===(observedLevel.source==='upgrade-target'?observedLevel.target:observedLevel.level))||null:null;
 if(observedLevel&&!observedEntry)return {r,observedLevel:null,invalidLevel:true,confirmedName:r.name||bestRows[0].name};
 const targetEntry=observedLevel?levels.find((entry,index)=>detailLevelNumber(entry,index)===observedLevel.target)||null:null;
 const costs=targetEntry?detailCostValues(targetEntry):null;
 const duration=targetEntry?detailDurationSeconds(targetEntry):null;
 return {r,observedLevel,costs:Array.isArray(costs)&&costs.length?costs:null,duration,confirmedName:r.name||bestRows[0].name};
}
async function pollTrackerBridge(){
 if(trackerBridgeRunning)return;
 trackerBridgeRunning=true;
 try{
  const response=await fetch('http://127.0.0.1:4177/status',{cache:'no-store'});
  if(!response.ok){
   document.getElementById('livebridge').textContent='Getrennt';
   document.getElementById('livebridgemsg').textContent=response.status===403?'Website-Origin nicht freigegeben':'Desktop-App antwortet mit HTTP '+response.status;
   return;
  }
  const upgrade=await response.json();
  document.getElementById('livebridge').textContent=upgrade.detected?'OCR':'Verbunden';
  document.getElementById('livebridgemsg').textContent=upgrade.detected?'Gebäude-Infofeld wird ausgewertet':'Desktop-App aktiv · warte auf Gebäude-Infofeld';
  if(!upgrade.detected){
   trackerBridgeCandidate='';trackerBridgeCandidateCount=0;
   return;
  }
  if(!upgrade.detectedAt||upgrade.detectedAt===trackerBridgeSeenAt)return;
  trackerBridgeSeenAt=upgrade.detectedAt;
  if(!data){
   document.getElementById('livebridgemsg').textContent='Zuerst Spielerexport importieren';
   return;
  }
  const timer=String(upgrade.timer||'').trim();
  const text=String(upgrade.text||'').replace(/\s+/g,' ').trim();
  const resolved=await resolveOcrItem(text);
  if(resolved?.ambiguous){
   trackerBridgeCandidate='';trackerBridgeCandidateCount=0;
   document.getElementById('livebridgemsg').textContent='Gebäudetyp mehrfach vorhanden – keine automatische Änderung';
   return;
  }
  if(!resolved){
   trackerBridgeCandidate='';trackerBridgeCandidateCount=0;
   document.getElementById('livebridgemsg').textContent='Gebäudename im Infofeld nicht sicher erkannt';
   return;
  }
  if(resolved.invalidLevel){
   trackerBridgeCandidate='';trackerBridgeCandidateCount=0;
   document.getElementById('livebridgemsg').textContent=`${resolved.confirmedName} erkannt – Level passt nicht zum Katalog`;
   return;
  }
  if(resolved.levelAmbiguous){
   trackerBridgeCandidate='';trackerBridgeCandidateCount=0;
   document.getElementById('livebridgemsg').textContent=`${resolved.confirmedName}: Level ${resolved.low} oder ${resolved.high} – Export-Level prüfen`;
   return;
  }
  const levelInfo=resolved.observedLevel;
  if(!levelInfo){
   trackerBridgeCandidate='';trackerBridgeCandidateCount=0;
   document.getElementById('livebridgemsg').textContent=`${resolved.confirmedName} erkannt – Level im Infofeld nicht lesbar`;
   return;
  }
  const signature='ocr:'+resolved.r.section+':'+resolved.r.id+':'+levelInfo.level+':'+levelInfo.target;
  if(signature===trackerBridgeCandidate)trackerBridgeCandidateCount++;
  else{trackerBridgeCandidate=signature;trackerBridgeCandidateCount=1}
  document.getElementById('livebridgemsg').textContent=`${resolved.confirmedName} · Level ${levelInfo.level} · Bestätigung ${Math.min(trackerBridgeCandidateCount,3)}/3`;
  if(trackerBridgeCandidateCount<3)return;

  const trackedItem=data[resolved.r.section]?.[resolved.r.index];
  if(trackedItem&&Number(trackedItem.lvl)!==levelInfo.level){
   trackedItem.lvl=levelInfo.level;
   localStorage.setItem(DATA,JSON.stringify(data));
   buildRows();update();
  }
  const exists=(meta.plans||[]).some(plan=>plan.sourceSignature===signature);
  if(!exists){
   meta.plans.push({id:Date.now(),done:false,name:resolved.confirmedName,level:levelInfo.level,target:levelInfo.target,builder:'',start:'',costs:resolved.costs||null,durationSeconds:resolved.duration??null,note:['Level dreimal aus dem Gebäude-Infofeld gelesen','Automatisch aus lokaler Clash-Ninja-Live-OCR','Timer: '+(timer||'nicht erkannt'),'OCR-Kontext: '+(text||'nicht verfügbar')].join(' · '),sourceSignature:signature});
   saveMeta();renderPlans();
   document.getElementById('livebridgemsg').textContent=`${resolved.confirmedName} · Level ${levelInfo.level} übernommen und Upgrade vorgemerkt`;
  }
 }catch(e){
  document.getElementById('livebridge').textContent='Getrennt';
  document.getElementById('livebridgemsg').textContent='App nicht erreichbar oder lokaler Zugriff blockiert: '+(e?.message||String(e));
 }finally{
  trackerBridgeRunning=false;
 }
}
setInterval(pollTrackerBridge,3000);
pollTrackerBridge();
setInterval(()=>{if(data){let t=timers();document.getElementById('timers').innerHTML=t.length?t.slice(0,5).map(timerHtml).join():'<div class="empty">Keine Timer erkannt.</div>';document.getElementById('alltimers').innerHTML=t.length?t.map(timerHtml).join():'<div class="empty">Keine laufenden Timer vorhanden.</div>'; }},30000);
