const raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new raspi()
});

board.on('ready', function(){
  console.log("board onnnnn");
  // Create an Led on pin 7 on header P1 (GPIO4) and strobe it on/off
  // const blue = new five.Led("P1-12");
  const red = new five.Led("P1-33");
  // const green = new five.Led("P1-35");
  red.on();
  red.brightness(10);

 //  var anode = new five.Led.RGB({
 //   pins: {
 //     red: "12",
 //     green: "33",
 //     blue: "35"
 //   },
 //   isAnode: true
 // });
 //
 //  anode.on();
 //  anode.color({red:0,green:100,blue:100});
});
