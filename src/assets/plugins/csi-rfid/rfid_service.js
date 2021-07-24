const WebSocket = require('ws');
const SerialPort = require('serialport');
const wss = new WebSocket.Server({ port: 8080 })
var i = 0;
var data = '';

wss.on('connection', ws => {
	ws.on('message', message => {
		console.log(`Received message => ${message}`)
	})
	setInterval(function(){
		i++;
		getRFID();
		console.log('ws return -> '+data);
		if(data != '')
			ws.send(data);
	}, 500)
});

function getRFID(){
	var path_port = 'COM5';
	SerialPort.list().then(ports => {
		ports.forEach(function(port) {
			if(port.manufacturer=='Prolific' && port.vendorId=='067B' && port.productId=='2303')
				path_port = port.path;
		});
	});
	var port = new SerialPort(path_port, {
		baudRate: 9600,
		autoOpen: false
	});
	port.on('error', function(err) {
		console.log(err.message);
	});
	port.close(function(err){
		//console.log('close');
	});
	port.open(function() {
		//console.log('open');
	});
	port.write(Buffer.from('7e040113ed01', 'hex'), function(err, results) {
		if (err) 
			console.log(err.message);
	});
	var buffer = '';
	port.on('data', function(data) {
		str = data.toString('hex');
		str = str.toString();
		buffer += str;
	});
	setTimeout(function() {
		data = parseInt(buffer.substring(10,18), 16);
		if(data == 1929379936 || isNaN(parseFloat(data)))
			data = '';
		else
			data.toString();
		
		port.close(function(err){
			//console.log('close');
		});
	}, 100);
}