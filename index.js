const raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new raspi()
});

board.on('ready', function(){
  console.log("board onnnnn");
  // Create an Led on pin 7 on header P1 (GPIO4) and strobe it on/off
  // const blue = new five.Led("P1-13");
  // const red = new five.Led("P1-11");
  // const green = new five.Led("P1-15");
  // red.on();

  var anode = new five.Led.RGB({
   pins: {
     red: "P1-12",
     green: "P2-33",
     blue: "P3-35"
   },
   isAnode: true
 });

  anode.on();
  anode.color({red:0,green:100,blue:100});
});
