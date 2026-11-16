const HERO_CAP_KEYS = window.COC_MAX_LEVEL_DATA?.heroCapKeys || {};
const HERO_CAPS_BY_TH = window.COC_MAX_LEVEL_DATA?.heroCapsByTownHall || {};
function heroCapAtTownHall(heroId,townHall){const key=HERO_CAP_KEYS[Number(heroId)];if(!key||!townHall)return null;const hallTown=Math.min(19,Math.floor(Number(townHall)));let cap=null;for(let th=7;th<=hallTown;th++)if(HERO_CAPS_BY_TH[th]?.[key]!==undefined)cap=HERO_CAPS_BY_TH[th][key];return cap;}

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

let data=null,rows=[],page='dashboard',meta={items:{},builders:{},plans:[]};const META='clash-progress-meta-v3',DATA='clash-progress-preview';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function parse(raw){let x=JSON.parse(String(raw).replace(/^\uFEFF/,''));if(!x||typeof x!=='object'||Array.isArray(x)||typeof x.tag!=='string'||!Array.isArray(x.buildings))throw Error('Kein gültiger Clash-of-Clans-Export: Spieler-Tag oder Gebäude-Liste fehlt.');for(const [k,v] of Object.entries(x)){if(Array.isArray(v)&&keys[k]&&!v.every(o=>o&&typeof o==='object'&&!Array.isArray(o)))throw Error('Ungültige Einträge im Bereich '+keys[k]+'.')}return x}
function load(){try{meta=JSON.parse(localStorage.getItem(META)||localStorage.getItem('clash-progress-meta-v2')||'{"items":{},"builders":{},"plans":[]}');meta={items:meta.items||{},builders:meta.builders||{},plans:Array.isArray(meta.plans)?meta.plans:[]};saveMeta()}catch(e){meta={items:{},builders:{},plans:[]}}try{let s=localStorage.getItem(DATA);if(s){data=parse(s);buildRows();update()}}catch(e){console.warn('Gespeicherter Spielstand konnte nicht geladen werden:',e);}}
function saveMeta(){try{localStorage.setItem(META,JSON.stringify(meta))}catch(e){alert('Speichern fehlgeschlagen. Bitte exportiere ein Backup und prüfe den Speicherplatz im Browser.');throw e}}function key(r){return r.section+':'+r.index}
function itemName(section,id){return names[section]?.[id]||null}
function village(section){return ['buildings2','traps2','decos2','obstacles2','units2','heroes2'].includes(section)?'builder':'home'}
function buildRows(){rows=[];Object.entries(keys).forEach(([k,label])=>(data[k]||[]).forEach((v,i)=>rows.push({section:k,label,id:v.data??v.id??'unbekannt',lvl:Number(v.lvl??0),cnt:Number(v.cnt??1),timer:Number(v.timer??0),extra:v.extra??null,index:i,name:itemName(k,v.data??v.id),village:village(k)})));
 // Migrate metadata saved by the older section:index scheme to stable item keys.
 let changed=false; rows.forEach(r=>{let now=key(r),oldLevel=r.section+':'+r.id+':level:'+r.lvl,oldTimer=r.section+':'+r.id+':timer:'+r.index,old= r.timer>0?oldTimer:oldLevel; if(meta.items[old]&&!meta.items[now]){meta.items[now]=meta.items[old];changed=true} if(meta.builders[old]&&!meta.builders[now]){meta.builders[now]=meta.builders[old];changed=true}}); if(changed)saveMeta();
}
function importRaw(raw){try{let incoming=JSON.parse(String(raw).replace(/^\uFEFF/,''));let nextData, nextMeta=meta;if(incoming&&incoming.export&&incoming.tracker){nextData=parse(JSON.stringify(incoming.export));nextMeta={items:incoming.tracker.items||meta.items||{},builders:incoming.tracker.builders||meta.builders||{},plans:Array.isArray(incoming.tracker.plans)?incoming.tracker.plans:meta.plans||[]}}else nextData=parse(raw);if(data&&!confirm('Vorhandenen Spielstand durch den Import ersetzen? Exportiere vorher ein Backup, wenn du den alten Stand behalten möchtest.'))return;localStorage.setItem(DATA,JSON.stringify(nextData));data=nextData;meta=nextMeta;saveMeta();buildRows();update();document.getElementById('importmsg').textContent='Import erfolgreich: '+rows.length+' Datensätze erkannt. Deine Daten bleiben lokal auf diesem Gerät.';show('dashboard')}catch(e){document.getElementById('importmsg').textContent='Import fehlgeschlagen: '+e.message}}
document.getElementById('file').addEventListener('change',async e=>{let f=e.target.files[0];if(f){try{if(f.size>10*1024*1024)throw Error('Datei ist größer als 10 MB.');importRaw(await f.text())}catch(err){document.getElementById('importmsg').textContent='Datei konnte nicht gelesen werden: '+err.message}e.target.value=''}});function importPaste(){importRaw(document.getElementById('paste').value)}
function exportData(){if(!data)return alert('Noch kein Spielstand importiert.');let backup={app:'Clash Ninja Style',appVersion:'1.5.0',export:data,tracker:meta,backupCreated:new Date().toISOString()};let a=document.createElement('a'),u=URL.createObjectURL(new Blob([JSON.stringify(backup,null,2)],{type:'application/json'}));a.href=u;a.download='clash-progress-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)}
function clearData(){if(confirm('Spielstand und Tracker-Metadaten auf diesem Gerät wirklich löschen?')){localStorage.removeItem(DATA);localStorage.removeItem(META);data=null;rows=[];meta={items:{},builders:{},plans:[]};update();show('dashboard')}}
function count(k){return rows.filter(r=>r.section===k).reduce((n,r)=>n+r.cnt,0)}function timers(){return rows.filter(r=>r.timer>0)}
function countSections(list){return rows.filter(r=>list.includes(r.section)).reduce((n,r)=>n+r.cnt,0)}
function timerText(sec){sec=Math.max(0,Math.floor(sec));let d=Math.floor(sec/86400),h=Math.floor(sec%86400/3600),m=Math.floor(sec%3600/60);return [d?d+' T':'',h?h+' Std.':'',m?m+' Min.':''].filter(Boolean).join(' ')||(sec>0?'< 1 Min.':'Abgeschlossen')}
function remainingTimer(r){let stamp=Number(data?.timestamp||0);if(!stamp)return r.timer;let elapsed=Math.max(0,Date.now()/1000-stamp);return Math.max(0,r.timer-elapsed)}
let gameCatalog=new Map(),gameCatalogPromise=null,gameCatalogError='';
const GAME_DATA_VERSION='0.19.1'; // Nicht alle TH19-Neuerungen sind in diesem Paket enthalten; Helden-Caps werden separat gepflegt.
const GAME_DATA_URL=`https://cdn.jsdelivr.net/npm/clash-of-clans-data@${GAME_DATA_VERSION}/+esm`;
function queryData(q){try{return q&&typeof q.get==='function'?q.get():[]}catch{return []}}
async function loadGameCatalog(force=false){
 if(gameCatalogPromise&&!force)return gameCatalogPromise;
 if(gameCatalog.size&&!force)return true;
 gameCatalogError='';
 gameCatalogPromise=(async()=>{
  try{
   const coc=await import(GAME_DATA_URL),home=coc.home(),builder=coc.builder();
   const groups={
    buildings:[...queryData(home.defenses()),...queryData(home.craftedDefenses()),...queryData(home.resourceBuildings()),...queryData(home.armyBuildings()),...queryData(home.otherBuildings()),...queryData(home.townHall()),...queryData(home.walls())],
    traps:queryData(home.traps()),units:queryData(home.troops()),siege_machines:queryData(home.siegeMachines()),heroes:queryData(home.heroes()),spells:queryData(home.spells()),pets:queryData(home.pets()),equipment:queryData(home.heroEquipment()),guardians:queryData(home.guardians()),
    buildings2:[...queryData(builder.defenses()),...queryData(builder.resourceBuildings()),...queryData(builder.armyBuildings()),...queryData(builder.builderHall()),...queryData(builder.otherBuildings()),...queryData(builder.walls())],
    traps2:queryData(builder.traps()),units2:queryData(builder.troops()),heroes2:queryData(builder.heroes())
   };
   const next=new Map();
   Object.entries(groups).forEach(([section,items])=>items.forEach(item=>{const id=Number(item.dataId??item.id);if(Number.isFinite(id)&&Array.isArray(item.levels))next.set(section+':'+id,item)}));
   if(next.size<80)throw new Error('Die Spieldatenbank wurde unvollständig geladen.');
   gameCatalog=next;
   return true;
  }catch(e){gameCatalogError=e?.message||'Spieldaten konnten nicht geladen werden.';gameCatalog=new Map();return false}
 })();
 return gameCatalogPromise;
}
function catalogItem(section,id){return gameCatalog.get(section+':'+Number(id))||null}
function maxLevelByRequirement(item,requirementKey,limit){if(!item||!Array.isArray(item.levels))return null;const levels=item.levels.filter(l=>l&&Number.isFinite(Number(l.level))&&(l[requirementKey]===undefined||Number(l[requirementKey])<=limit));return levels.length?Math.max(...levels.map(l=>Number(l.level))):null}
function maxBuildingAtTownHall(id,th){return maxLevelByRequirement(catalogItem('buildings',id),'townHallRequired',th)}
function maxBuilderBuildingAtHall(id,bh){
 const item=catalogItem('buildings2',id);if(!item)return null;
 const reqKeys=['builderHallRequired','builderHallLevelRequired'];
 const levels=item.levels.filter(l=>l&&reqKeys.every(k=>l[k]===undefined||Number(l[k])<=bh));
 return levels.length?Math.max(...levels.map(l=>Number(l.level))):null;
}
function capContext(){
 const th=getTownHallLevel()||0,bhRow=rows.find(r=>Number(r.id)===1000034&&r.village==='builder'),bh=bhRow?.lvl||0;
 return {th,bh,lab:maxBuildingAtTownHall(1000007,th)||0,heroHall:maxBuildingAtTownHall(1000071,th)||0,blacksmith:maxBuildingAtTownHall(1000070,th)||0,petHouse:maxBuildingAtTownHall(1000068,th)||0,starLab:maxBuilderBuildingAtHall(1000046,bh)||0};
}
function autoMaxLevel(r,ctx=capContext()){
 if(r.village==='home'&&!ctx.th)return null;
 if(r.village==='builder'&&!ctx.bh)return null;
 if(r.section==='heroes'){
  // Hero caps are maintained here because the bundled community data package can lag behind live balance updates.
  const fallback=heroCapAtTownHall(r.id,ctx.th);
  if(fallback!==null)return fallback;
  const item=catalogItem(r.section,r.id);
  if(!item)return null;
  const hall=catalogItem('buildings',1000071),maxHall=ctx.heroHall;
  const hallLevel=hall?.levels?.filter(l=>(l.townHallRequired===undefined||Number(l.townHallRequired)<=ctx.th)&&Number(l.level)<=maxHall).sort((a,b)=>b.level-a.level)[0];
  const cap=hallLevel?.heroLevelCaps?.[HERO_CAP_KEYS[Number(r.id)]];
  return Number.isFinite(Number(cap))?Number(cap):maxLevelByRequirement(item,'heroHallLevelRequired',maxHall);
 }
 const item=catalogItem(r.section,r.id);if(!item)return null;
 const eligible=item.levels.filter(l=>{
  if(l.townHallRequired!==undefined&&Number(l.townHallRequired)>ctx.th&&r.village!=='builder')return false;
  if(r.section==='units'||r.section==='spells'||r.section==='siege_machines'){
   if(l.laboratoryRequired!==undefined&&Number(l.laboratoryRequired)>ctx.lab)return false;
  }
  if(r.section==='equipment'&&l.blacksmithLevelRequired!==undefined&&Number(l.blacksmithLevelRequired)>ctx.blacksmith)return false;
  if(r.section==='pets'&&l.petHouseLevelRequired!==undefined&&Number(l.petHouseLevelRequired)>ctx.petHouse)return false;
  if(r.village==='builder'){
   const hallReq=l.builderHallRequired??l.builderHallLevelRequired;
   if(hallReq!==undefined&&Number(hallReq)>ctx.bh)return false;
   const labReq=l.starLabRequired??l.starLaboratoryRequired;
   if(labReq!==undefined&&Number(labReq)>ctx.starLab)return false;
  }
  return true;
 });
 return eligible.length?Math.max(...eligible.map(l=>Number(l.level))):null;
}
function progressStats(){let total=0,done=0,known=0,unknown=0;const ctx=capContext();rows.forEach(r=>{if(['decos','obstacles','decos2','obstacles2','helpers'].includes(r.section))return;const max=autoMaxLevel(r,ctx);if(max>0){total+=max*r.cnt;done+=Math.min(r.lvl,max)*r.cnt;known+=r.cnt}else unknown+=r.cnt});return {total,done,known,unknown,pct:total?Math.round(done/total*100):null}}

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
 document.getElementById('progresssummary').innerHTML=ps.pct===null?'Noch keine auswertbaren Upgrade-Level gefunden. Prüfe den Import und die Spieldaten.':`<b>${ps.pct}%</b> gewichteter Fortschritt (${ps.done} von ${ps.total} Levelpunkten) für ${ps.known} Einheiten.`;
 if(status){status.textContent=gameCatalog.size?`Spieldaten geladen · ${gameCatalog.size} Einheiten · Datenpaket ${GAME_DATA_VERSION}${ps.unknown?` · ${ps.unknown} Einträge ohne passende Leveldaten`:''}`:gameCatalogError?`Spieldaten konnten nicht geladen werden: ${gameCatalogError} `:'Spieldaten werden geladen …';}
}
function retryGameData(){gameCatalogPromise=null;gameCatalogError='';loadGameCatalog(true).then(()=>{if(data)update()});}

function update(){if(!data)return;document.getElementById('playerline').textContent='Letzter Import: '+new Date(Number(data.timestamp)*1000).toLocaleString('de-DE');document.getElementById('sbuild').textContent=countSections(['buildings','traps','buildings2','traps2']);document.getElementById('sheroes').textContent=countSections(['heroes','heroes2']);document.getElementById('stroops').textContent=countSections(['units','units2','spells','siege_machines']);document.getElementById('stimers').textContent=timers().length;
let cats=[['buildings','Gebäude'],['traps','Fallen'],['heroes','Helden'],['units','Truppen'],['units2','Bauarbeiterbasis-Truppen'],['spells','Zauber'],['siege_machines','Belagerungsmaschinen'],['pets','Begleiter'],['equipment','Ausrüstung'],['helpers','Helfer'],['guardians','Wächter']];document.getElementById('bars').innerHTML=cats.map(([k,n])=>`<div class="rowitem split"><div><b>${n}</b><div class="mini">${count(k)} Einheiten</div></div><span>${count(k)}</span></div>`).join('');
let home=countSections(['buildings','traps','units','siege_machines','heroes','spells','pets','equipment']),builder=countSections(['buildings2','traps2','units2','heroes2']);document.getElementById('villagebars').innerHTML=`<div class="rowitem"><div class="split"><b>Heimatdorf</b><b>${home}</b></div><div class="mini">Gebäude, Fallen, Truppen, Helden, Zauber & Ausrüstung</div></div><div class="rowitem"><div class="split"><b>Bauarbeiterbasis</b><b>${builder}</b></div><div class="mini">Gebäude, Fallen, Truppen & Helden</div></div>`;
let t=timers();document.getElementById('timers').innerHTML=t.length?t.slice(0,5).map(timerHtml).join(''):'<div class="empty">Keine Timer erkannt.</div>';document.getElementById('alltimers').innerHTML=t.length?t.map(timerHtml).join(''):'<div class="empty">Keine laufenden Timer vorhanden.</div>';document.getElementById('timerwarning').textContent='Timer-Rohwerte werden unverändert angezeigt. Einheit/Umrechnung ist ohne bestätigte Export-Spezifikation nicht aktiviert.';
let ps=progressStats();updateProgressOnly();document.getElementById('profiletag').textContent='Dein Dorf';let town=getTownHallLevel();document.getElementById('profiletitle').textContent=town?'Town Hall '+town:'Town Hall nicht erkannt';document.getElementById('profiletown').textContent=town?'Rathaus-Level '+town:'Rathaus-Level im Export nicht gefunden';let townImage=document.getElementById('profiletownimage');if(town){townImage.innerHTML=`<img class="townhall-art" src="https://assets.clashk.ing/buildings/home-village/town_hall/level_${town}.webp" alt="Rathaus Level ${town}" loading="lazy" onerror="this.replaceWith(document.createTextNode('🏰'))">`}else{townImage.textContent='🏰'}let pb=[['Structures',countSections(['buildings','traps'])],['Lab',countSections(['units','spells','siege_machines'])],['Heroes',countSections(['heroes'])],['Equipment',count('equipment')],['Pets',count('pets')]];document.getElementById('profilebars').innerHTML=pb.map(([n,v])=>`<div class="profilebar"><div class="progress"><i style="width:${ps.pct||0}%"></i></div><small>${n} · ${v}</small></div>`).join('');renderList();renderBuilders();renderPlans();if(!gameCatalog.size&&!gameCatalogError)loadGameCatalog().then(()=>{if(data)update()})}
function timerHtml(r){let b=meta.builders[key(r)]||'Nicht zugeordnet';return `<div class="timer"><div class="split"><strong>${esc(r.name||r.label)}</strong><span class="pill">${esc(village(r.section)==='builder'?'Bauarbeiterbasis':'Heimatdorf')}</span></div><small>${esc(keys[r.section])} · Level ${r.lvl}</small><div class="mini">Timer-Rohwert: <b>${Number(r.timer).toLocaleString('de-DE')}</b> · Bauarbeiter-Zuordnung: ${esc(b)}</div></div>`}
function show(p){page=p;document.querySelectorAll('.nav').forEach(b=>b.classList.toggle('active',b.dataset.page===p));['dashboard','listpage','upgrades','planner','import'].forEach(id=>document.getElementById(id).classList.add('hide'));if(['buildings','heroes','troops'].includes(p)){document.getElementById('listpage').classList.remove('hide');document.getElementById('listtitle').textContent=p==='buildings'?'Gebäude & Verteidigung':p==='heroes'?'Helden':'Truppen, Zauber & Begleiter';setupCategories();renderList()}else document.getElementById(p).classList.remove('hide')}
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
function renderList(){
 if(!document.getElementById('items'))return;
 let ks=sections(),q=(document.getElementById('search')?.value||'').toLowerCase(),cat=document.getElementById('category')?.value||'all',sort=document.getElementById('sort')?.value||'name',vf=document.getElementById('villagefilter')?.value||'all';
 let a=rows.filter(r=>ks.includes(r.section)&&(vf==='all'||r.village===vf)&&(cat==='all'||cat===r.section)&&(`${r.name||''} ${keys[r.section]} ${r.lvl}`).toLowerCase().includes(q));
 if(sort==='level')a.sort((x,y)=>y.lvl-x.lvl);else if(sort==='name')a.sort((x,y)=>(x.name||keys[x.section]).localeCompare(y.name||keys[y.section]));else a.sort((x,y)=>(x.name||keys[x.section]).localeCompare(y.name||keys[y.section]));
 document.getElementById('listcount').textContent=a.reduce((n,r)=>n+r.cnt,0)+' Einheiten · '+a.length+' Datensätze';
 let groups={};a.forEach(r=>(groups[r.section]??=[]).push(r));
 const ctx=capContext();
 const icons={buildings:'🏰',traps:'💣',heroes:'🦸',units:'⚔️',spells:'✨',siege_machines:'🚜',pets:'🐾',equipment:'🛡️',buildings2:'🏗️',traps2:'💣',units2:'⚔️',heroes2:'🦸'};
 document.getElementById('items').innerHTML=Object.entries(groups).map(([section,list])=>{
   let total=list.reduce((n,r)=>n+r.cnt,0);
   const byName={};
   list.forEach(r=>{const title=r.name||'Unbekanntes Element';(byName[title]??=[]).push(r)});
   return `<section class="ninja-section"><div class="ninja-heading">${esc(keys[section])}</div><div class="ninja-summary">${total} Einheiten · <b>${list.length}</b> Einträge · Levelübersicht</div>`+
   Object.entries(byName).map(([title,items])=>`<div class="ninja-item-group"><div class="ninja-item-heading">${esc(title)} <small>${items.reduce((n,r)=>n+r.cnt,0)}×</small></div>`+
     items.map(r=>{let m=meta.items[key(r)]||{},max=autoMaxLevel(r,ctx),done=max>0&&r.lvl>=max,icon=entityImage(r),capText=max?(r.village==='builder'?`Maximallevel Bauarbeiterhalle ${ctx.bh||'—'}: ${max}`:`Maximallevel Rathaus ${ctx.th||'—'}: ${max}`):'Keine passenden Spieldaten';
       return `<article class="ninja-row"><div class="ninja-left"><div class="ninja-icon">${icon}</div><div class="ninja-level">${r.lvl}${max?'/'+max:''} <small>×${r.cnt}</small></div><button class="ninja-up" title="Upgrade vormerken" onclick="quickPlan('${r.section}',${r.index})">⬆</button></div><div class="ninja-right">${done?`<div class="ninja-full">Fully upgraded</div>`:`<div class="lvl">Lvl ${r.lvl}:</div><div class="cost">${max?'Max. '+max:'Keine Spieldaten'}</div><div class="duration">—</div>`}</div></article>`+
       `<div class="ninja-edit"><label>Level <input type="number" min="0" value="${r.lvl}" onchange="changeLevel('${r.section}',${r.index},this.value)"></label><span class="cap-note">${esc(capText)}</span><input aria-label="Notiz" placeholder="Notiz" value="${esc(m.note||'')}" onchange="changeNote('${r.section}',${r.index},this.value)"></div>`;
     }).join('')+'</div>').join('')+'</section>';
 }).join('')||'<div class="ninja-empty">Keine Einträge gefunden. Importiere zuerst deinen Dorfexport.</div>';
}
function quickPlan(k,i){let r=rows.find(x=>x.section===k&&x.index===i);if(!r)return;meta.plans.push({id:Date.now(),done:false,name:r.name||keys[k],level:r.lvl,target:'',builder:'',start:'',note:'Aus Gebäudeübersicht vorgemerkt'});saveMeta();renderPlans();alert('Upgrade wurde im Planer vorgemerkt.')}
function changeLevel(k,i,v){if(!data[k]?.[i])return;data[k][i].lvl=Math.max(0,Number(v)||0);localStorage.setItem(DATA,JSON.stringify(data));buildRows();update()}function changeNote(k,i,v){let z=meta.items[k+':'+i]||{};z.note=v;meta.items[k+':'+i]=z;saveMeta()}

function autoAssignBuilders(){let n={home:0,builder:0};timers().forEach(r=>{let k=key(r);if(meta.builders[k])return;let v=r.village==='builder'?'builder':'home';n[v]++;meta.builders[k]=v==='builder'?'Vorschlag Bauarbeiterbasis '+n[v]:'Vorschlag Bauarbeiter '+n[v]});saveMeta();renderBuilders()}function renderBuilders(){let t=timers();document.getElementById('builderassign').innerHTML=t.length?'<div class="actions" style="margin-bottom:12px"><button class="btn gold" onclick="autoAssignBuilders()">Automatisch zuordnen (Vorschläge)</button></div>'+t.map(r=>`<div class="rowitem split"><div><b>${esc(r.name||keys[r.section])}</b><br><small>${esc(village(r.section)==='builder'?'Bauarbeiterbasis':'Heimatdorf')} · Level ${r.lvl} · Timer-Rohwert ${Number(r.timer).toLocaleString('de-DE')}</small></div><input class="field" style="max-width:220px" placeholder="Bauarbeiter-Zuordnung" value="${esc(meta.builders[key(r)]||'')}" onchange="setBuilder('${r.section}',${r.index},this.value)"></div>`).join(''):'<div class="empty">Keine Timer zum Zuordnen vorhanden.</div>'}function setBuilder(k,i,v){let r=rows.find(x=>x.section===k&&x.index===i);if(!r)return;meta.builders[key(r)]=v;saveMeta()}
function addPlan(){let name=document.getElementById('planname').value.trim();if(!name)return alert('Bitte einen Namen für das Upgrade eingeben.');let current=Number(document.getElementById('planlevel').value),target=Number(document.getElementById('plantarget').value);if(document.getElementById('plantarget').value&&document.getElementById('planlevel').value&&target<=current)return alert('Das Ziel-Level muss höher als das aktuelle Level sein.');meta.plans.push({id:Date.now(),done:false,name,level:document.getElementById('planlevel').value,target:document.getElementById('plantarget').value,builder:document.getElementById('planbuilder').value,start:document.getElementById('planstart').value,note:document.getElementById('plannote').value});saveMeta();renderPlans();['planname','planlevel','plantarget','planbuilder','planstart','plannote'].forEach(id=>document.getElementById(id).value='')}
function renderPlans(){let p=meta.plans||[];document.getElementById('plans').innerHTML=p.length?p.map(x=>`<div class="rowitem split"><div><b>${x.done?'✓ ':''}${esc(x.name)}</b><div class="mini">Level ${esc(x.level||'?')} → ${esc(x.target||'?')} · ${esc(x.builder||'Kein Bauarbeiter')} · ${esc(x.start||'Start offen')}</div><small>${esc(x.note||'')}</small></div><div class="actions"><button class="btn" onclick="togglePlan(${x.id})">${x.done?'Offen':'Erledigt'}</button><button class="btn danger" onclick="removePlan(${x.id})">Entfernen</button></div></div>`).join(''):'<div class="empty">Noch keine Upgrades geplant.</div>'}function togglePlan(id){let x=meta.plans.find(x=>x.id===id);if(x)x.done=!x.done;saveMeta();renderPlans()}function removePlan(id){meta.plans=meta.plans.filter(x=>x.id!==id);saveMeta();renderPlans()}

load();
setInterval(()=>{if(data){let t=timers();document.getElementById('timers').innerHTML=t.length?t.slice(0,5).map(timerHtml).join():'<div class="empty">Keine Timer erkannt.</div>';document.getElementById('alltimers').innerHTML=t.length?t.map(timerHtml).join():'<div class="empty">Keine laufenden Timer vorhanden.</div>'; }},30000);
