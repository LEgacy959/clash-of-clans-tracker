CLASH NINJA STYLE – VERSION 1.8.4

Änderungen in 1.8.3
- Mehrfach vorhandene Verteidigungsgebäude und Fallen werden einzeln und separat bearbeitbar angezeigt
- Andere mehrfach vorhandene Einträge bleiben gruppiert
- Beim Klicken auf ein Element öffnet sich eine eigene Ebene mit allen verfügbaren Leveldaten
- Kosten und Upgradezeiten werden aus dem Spieldatenkatalog angezeigt; das aktuelle Level ist hervorgehoben

Änderungen in 1.8.2
- Maximallevel für Heimatdorf und Bauarbeiterbasis werden aus Tabellen des Clash of Clans Wiki gelesen
- Importierte Rathaus-, Bauarbeiterhallen-, Labor-, Heldenhallen-, Sternlabor-, Schmiede- und Haustierhaus-Level steuern die jeweiligen Caps
- Wiki-Daten werden bis zu 24 Stunden lokal zwischengespeichert; der Zeitstempel wird in der App angezeigt
- Bei einem Wiki-Ausfall wird ein vorhandener Cache ausdrücklich als veraltet markiert; ohne Cache bleiben Caps unbekannt
- Katalog-Levelwerte und die vorherige manuelle Heldenliste werden nicht als Ersatz verwendet

Projektstruktur
- index.html: Seitenstruktur und Navigation
- style.css: Design und responsive Darstellung
- app.js: Import, lokale Speicherung, Wiki-Leveltabellen, Fortschritt, Upgrades und Planer
- LICENSE-THIRD-PARTY.txt: Lizenzhinweis des Katalogs, der ausschließlich Namen und Metadaten zuordnet

Installation
Für Vercel index.html, app.js und style.css gemeinsam im Projekt-Hauptordner bereitstellen. Ein data/-Ordner ist nicht erforderlich.

Wiki-Daten
Die App lädt Leveltabellen über die öffentliche MediaWiki-API von https://clashofclans.fandom.com/. Die Wiki-Seiten sind community-gepflegt, nicht offiziell, und können sich ändern. Zum Aktualisieren im Bereich „Daten“ auf „Wiki-Maximallevel neu laden“ klicken. Die erste Aktualisierung benötigt eine Internetverbindung. Der Cache ist ein Abruf-Snapshot (kein Veröffentlichungsdatum des Wikis), wird höchstens 24 Stunden verwendet und kann bei einem Netzwerkausfall als veraltet gekennzeichnet angezeigt werden. Wenn weder Wiki noch Cache verfügbar sind, zeigt die App keine Maximallevel an.

Der Katalog clash-of-clans-data (derzeit Version 0.19.1) wird weiterhin nur für Namen und Ausrüstungs-Seltenheiten genutzt. Seine Levelreihen werden nicht als Maximallevel verwendet. Einträge, die sich keiner Wiki-Tabelle zuordnen lassen, werden als „Keine passenden Wiki-Leveldaten“ markiert, statt einen Wert zu schätzen.

Speicherung
Spielstand, Notizen und Wiki-Cache bleiben lokal im Browser (localStorage). Vor Updates ein Backup über „Daten“ exportieren. Für Gerätewechsel das Backup auf dem anderen Gerät importieren.

Fanprojekt, nicht mit Supercell verbunden.
