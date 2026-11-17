CLASH NINJA STYLE – VERSION 1.8.11

Änderungen in 1.8.11
- Ein-Klick-Planung übernimmt das nächste Level sowie bekannte Kosten und Dauer
- Offene Planungen zeigen aufsummierte Kosten je Ressource und die aufsummierte Upgradezeit
- Fehlende Katalogwerte werden in der Planung ausdrücklich gekennzeichnet

Änderungen in 1.8.10
- Schnellfilter für nicht maximierte Elemente und laufende Upgrades ergänzt
- Der Filter „Nicht maximiert“ berücksichtigt nur Einträge mit bekanntem Maximallevel
- Bei laufenden Upgrades wird der Status direkt in der Levelübersicht markiert

Änderungen in 1.8.9
- Levelkosten zeigen das passende Ressourcenbild direkt neben dem Betrag
- Upgradezeiten zeigen Stunden und Minuten auch dann, wenn ein Wert 0 ist

Änderungen in 1.8.8
- UI-Farben und Oberflächen nach aktuellen TH19-Gameplay-Referenzen mit stärkerem Metall-, Gold- und Upgrade-Button-Kontrast verfeinert

Änderungen in 1.8.7
- Benutzeroberfläche mit einer aktuellen Clash-of-Clans-inspirierten Dorf-Farbpalette, goldenen Rahmen und plastischen Schaltflächen überarbeitet
- Mobile Kopfzeile und Profilansicht für schmale Bildschirme angepasst

Änderungen in 1.8.3
- Mehrfach vorhandene Verteidigungsgebäude und Fallen werden einzeln und separat bearbeitbar angezeigt
- Andere mehrfach vorhandene Einträge bleiben gruppiert
- Beim Klicken auf ein Element öffnet sich eine Levelübersicht im gleichen Browser-Tab
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

Live-Erkennung mit Clash Ninja Live
Die Windows-App kann erkannte Gebäude-Level an den Tracker auf diesem Gerät senden. Die App stellt dafür ausschließlich lokal `http://127.0.0.1:4177/status` bereit; der Browser fragt diesen Endpunkt alle drei Sekunden ab. Als Website-Origin ist `https://clash-of-clans-tracker-six.vercel.app` zugelassen. Bei lokaler Dateinutzung ist zusätzlich der Browser-Origin `null` erlaubt.

Zum Verwenden zuerst die Windows-App starten, in ihr das Clash-of-Clans-Fenster erfassen und dann diese Tracker-Website öffnen. Anschließend den Dorfexport im Tracker importieren und im Spiel ein Gebäude auswählen, sodass dessen Name und Level im Infofeld stehen. Der Tracker übernimmt ein Level nur nach drei übereinstimmenden OCR-Lesungen, wenn genau ein importierter Eintrag passt und das Level in den Katalogdaten existiert. Unklare oder mehrdeutige Treffer verändern den Spielstand nicht. Die OCR-Daten verlassen den Rechner nicht.

Wiki-Daten
Die App lädt Leveltabellen über die öffentliche MediaWiki-API von https://clashofclans.fandom.com/. Die Wiki-Seiten sind community-gepflegt, nicht offiziell, und können sich ändern. Zum Aktualisieren im Bereich „Daten“ auf „Wiki-Maximallevel neu laden“ klicken. Die erste Aktualisierung benötigt eine Internetverbindung. Der Cache ist ein Abruf-Snapshot (kein Veröffentlichungsdatum des Wikis), wird höchstens 24 Stunden verwendet und kann bei einem Netzwerkausfall als veraltet gekennzeichnet angezeigt werden. Wenn weder Wiki noch Cache verfügbar sind, zeigt die App keine Maximallevel an.

Der Katalog clash-of-clans-data (derzeit Version 0.19.1) wird weiterhin nur für Namen und Ausrüstungs-Seltenheiten genutzt. Seine Levelreihen werden nicht als Maximallevel verwendet. Einträge, die sich keiner Wiki-Tabelle zuordnen lassen, werden als „Keine passenden Wiki-Leveldaten“ markiert, statt einen Wert zu schätzen.

Speicherung
Spielstand, Notizen und Wiki-Cache bleiben lokal im Browser (localStorage). Vor Updates ein Backup über „Daten“ exportieren. Für Gerätewechsel das Backup auf dem anderen Gerät importieren.

Fanprojekt, nicht mit Supercell verbunden.
