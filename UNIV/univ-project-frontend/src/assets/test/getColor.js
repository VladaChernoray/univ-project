let colors = [12340010, 12121212]

colors.map(e => toRGB(e));

function toRGB(e){
  let redBit =  (parseInt([...e.toString()].map(Number).splice(0, 3).join("")));
  let greenBit = (parseInt([...e.toString()].map(Number).splice(3, 3).join("")));
  let blueBit = (parseInt([...e.toString()].map(Number).splice(6, 2).join("")));
  let  Red   = (redBit >> 5) * 255 / 7;
  let Green = ((greenBit >> 2) & 0x07) * 255 / 7;
  let Blue  = (blueBit & 0x03) * 255 / 3;
  console.log("rgb(" + (Red) + "," + (Green) + "," + Blue + ")");
  }
