var intervalID = window.setInterval(updateScreen, 200);
var c = document.getElementById("console");

var txt = [
  "FORCE: XX0016. ENCYPT://000.163.2001",
  "TRYPASS: ********* AUTH CODE: SKY TECH: 1___ PRIORITY 1",
  "RETRY: REINDEER FLOTILLA",
  "Z:> /MAINRUBIK/OTHELLOSM/TETR1S EXECUTE -PLAYERS 0",
  "================================================",
  "Priority 1 // local / scanning...",
  "scanning ports...",
  "BACKDOOR FOUND (23.45.23.12.00000000)",
  "BACKDOOR FOUND (13.66.23.12.00110000)",
  "BACKDOOR FOUND (13.66.23.12.00110044)",
  "...",
  "...",
  "KALA.EXE -r -z",
  "...locating vulnerabilities...",
  "...vulnerabilities found...",
  "MCP/> DEPLOY CLU",
  "SCAN: __ 0100.0000.0554.0016",
  "SCAN: __ 0020.0000.0553.0003",
  "SCAN: __ 0001.0000.0554.0517",
  "SCAN: __ 0012.0000.0553.0001",
  "SCAN: __ 0100.0000.0554.2004",
  "SCAN: __ 0020.0000.0553.2001",
]

var docfrag = document.createDocumentFragment();

function updateScreen() {
  txt.push(txt.shift());
  txt.forEach(function(e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  while (c.firstChild) {
    c.removeChild(c.firstChild);
  }
  c.appendChild(docfrag);
}