function set_canvas_size() {
	var canvas = document.getElementById('canvas');
	var pixelRatio = window.devicePixelRatio; 
	canvas.style.width = (canvas.width / pixelRatio) + "px";
	canvas.style.height = (canvas.height / pixelRatio) + "px";
	console.log('eee');
}