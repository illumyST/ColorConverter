function hexStringToRGB(h) {
    return {
      r: parseInt(h.slice(1,3), 16),
      g: parseInt(h.slice(3,5), 16),
      b: parseInt(h.slice(5,7), 16)
    };  
  }
  let h = '#FF9933';
  console.log(hexStringToRGB(h))
  
  
  function RGBToHexString(r) {
    return '#'+r['r'].toString(16).toUpperCase()+
               r['g'].toString(16).toUpperCase()+
               r['b'].toString(16).toUpperCase();
  }
  let r = { r: 255, g: 153, b: 51 };
  console.log(RGBToHexString(r));