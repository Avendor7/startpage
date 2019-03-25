import('./classes/Devices.js');
import('./classes/DesktopPC.js');
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#9900BB";
ctx.fillRect(0,0,canvas.width, canvas.height);

function addPC(){
    var newpc = new DesktopPC('192.168.5.12','5','192.168.5.12','192.168.5.12');
    newpc.connect();
}