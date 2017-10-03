const raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new raspi()
});

board.on('ready', function(){
  console.log("board on");
  // Create an Led on pin 7 on header P1 (GPIO4) and strobe it on/off
  const led = new five.Led(7);
  console.log(led);
  led.strobe(500);
});
