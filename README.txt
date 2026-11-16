CLASH NINJA STYLE – VERSION 1.8

Projektstruktur
- index.html: Seitenstruktur und Navigation
- style.css: gesamtes Design / responsive Darstellung
- app.js: Import, lokale Speicherung, Fortschritt, Filter, Upgrades und Planer
- data/max-levels.js: separat gepflegte Rathaus-Maximallevel für Helden
- LICENSE-THIRD-PARTY.txt: Lizenzhinweis der verwendeten Spieldatenbibliothek

Installation
Alle Dateien und den Ordner data/ gemeinsam in denselben Vercel-Projektordner hochladen. index.html muss im Projekt-Hauptordner liegen. Nicht nur index.html einzeln hochladen.

Daten und Grenzen
Die App lädt die übrigen strukturierten Spieldaten weiterhin online aus clash-of-clans-data (derzeit Paketversion 0.19.1). Diese Quelle kann bei neuen Spielupdates hinterherhinken. Deshalb werden fehlende oder nicht eindeutig zuordenbare Level weiterhin als „Keine Spieldaten“ angezeigt, statt Werte zu schätzen. Die getrennte Datei data/max-levels.js macht die Pflege der Helden-Caps unabhängig vom App-Code. Die dort enthaltenen Werte stammen aus dem vorherigen Projektstand und müssen bei neuen Balance-/Rathaus-Updates anhand verifizierter Daten geprüft werden.

Speicherung
Spielstand und Notizen bleiben lokal im Browser (localStorage). Vor Updates ein Backup über „Daten“ exportieren. Für Gerätewechsel das Backup auf dem anderen Gerät importieren.

Fanprojekt, nicht mit Supercell verbunden.
