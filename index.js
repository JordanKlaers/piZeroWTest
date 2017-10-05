const raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new raspi()
});

board.on('ready', function(){
  console.log("board onnnnn");
  // Create an Led on pin 7 on header P1 (GPIO4) and strobe it on/off
  const blue = new five.Led("P1-13");
  const red = new five.Led("P1-11");
  red.on();
});
