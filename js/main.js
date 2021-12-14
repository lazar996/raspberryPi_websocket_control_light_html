var ws = new WebSocket("ws://192.168.1.5:3333");

function onSocketMessage(event) {
			}
	ws.onmessage = onSocketMessage;

	function send() {
		var text = document.getElementById("text").value;
		ws.send(text);
		}

	function turnon() {
		ws.send("on");
		}

	function turnoff() {
		ws.send("off");
		}

function blink(){

	
	 
}

		