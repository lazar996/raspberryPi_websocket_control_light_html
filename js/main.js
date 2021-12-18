// IP : change!
var ws = new WebSocket("ws://192.168.1.5:3333");
var blink = document.querySelector(".blink")
function onSocketMessage(event) {
			}
	ws.onmessage = onSocketMessage;
	function send() {
		}

function turnon() {
	ws.send("on");

	}

function turnoff() {
	ws.send("off");
	}

		