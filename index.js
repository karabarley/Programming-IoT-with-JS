// DEMO PSUEDO CODE: //1. Turn light on //2. Play around with colors
const Bulb = require('tplink-lightbulb');
const scan = Bulb.scan()// .scan function we are caaalling()
    .on('light', light => { //event listener, listening for the event 'light' takes a callback function
        console.log(light);
        light.set(
            // on/off (boolean)
            true,
            // transition time (number)
            0, 
            // object with a set of key value pairs- passing an object to the set method
            {
            hue: 337,
            saturation: 50,
            // takes a number between 3000(warm) to 70000 (cool)
            color_temp: 3000, 
            brightness: 50  }
            )
            .then(status => {
                console.log(status);
                scan.stop();
            }); // the .then()method returns a promise.. and also takes a which then triggers a call back function.. in this case its waiting for our bulb "status" and then stops the scan
            //.then() takes a call back function
            //waiting for info- then log the status and stop span
    });

//tplight hex 172.20.10.4 e715fa
//tplight hex 172.20.10.4 15fa96
//tplight hex 172.20.10.4 7015fa
//tplight hex 172.20.10.4 0d12ec


//Notes to self:
// ***make sure you are in the sites/tplight file before you render index.js
//***exit out of scan 
// Ctrl-Z and Ctrl-C to stop the command
// (man) pwd -- displays your current path in the directory
// (man) cd -- let's you jump into the path
// To run the program --- node index.js
// P: tplight hex 192.168.2.27 e715fa
``
//   {"on_off": 1,
//   "mode": "normal",
//   "hue": 295,
//   "saturation": 96,
//   "color_temp": 0,
//   "brightness": 53,
//   "err_code": 0}

// G:tplight hex 192.168.2.27 15fa96

//   "on_off": 1,
//   "mode": "normal",
//   "hue": 154,
//   "saturation": 96,
//   "color_temp": 0,
//   "brightness": 53,
//   "err_code": 0

// PL: tplight hex 192.168.2.27 7015fa
//   "on_off": 1,
//   "mode": "normal",
//   "hue": 264,
//   "saturation": 96,
//   "color_temp": 0,
//   "brightness": 53,
//   "err_code": 0

// B: tplight hex 192.168.2.27 0d12ec
//  { on_off: 1,
//         mode: 'normal',
//         hue: 337,
//         saturation: 50,
//         color_temp: 3000,
//         brightness: 50 },