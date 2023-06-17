function HexRegexTest(h) {
    // let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    let regex = new RegExp(/^#([A-Fa-f0-9]{6})$/);
    return regex.test(h);
}

function RGBRegexTest(h) {
    let regex = new RegExp(/^\s*(([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\s*,\s*){2}([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\s*$/
    );
    return regex.test(h);
}

function changeHex(h) {
    hex.value = h;
};

function changeRGB(ans) {
    rgb.value = ans.r + ", " +
        ans.g + ", " +
        ans.b;
};

function changeCPicker(h) {
    cPicker.value = h;
};

function changeShowColor(h) {
    showColor.innerText = h
}

function hexStringToRGB(h) {
    let ans = {};
    parseInt(h.slice(1, 3), 16) ? ans.r = parseInt(h.slice(1, 3), 16) : () => false;
    parseInt(h.slice(3, 5), 16) ? ans.g = parseInt(h.slice(3, 5), 16) : () => false;
    parseInt(h.slice(5, 7), 16) ? ans.b = parseInt(h.slice(5, 7), 16) : () => false;

    if (Object.keys(ans).length === 3) {
        changeRGB(ans);
        changeCPicker(h);
        changeShowColor(h);
        return true;
    } else {
        return false;
    }
}



function RGBToHexString(r) {
    let rgb = r.split(",").map(e => +e);
    let ans = '#' + rgb[0].toString(16).toUpperCase() +
        rgb[1].toString(16).toUpperCase() +
        rgb[2].toString(16).toUpperCase();
    if (HexRegexTest(ans)) {
        changeCPicker(ans);
        changeShowColor(ans);
        changeHex(ans);
        return true;
    } else {
        return false;
    }
}

let hex = document.getElementById("hex");
let rgb = document.getElementById("rgb");
let cPicker = document.getElementById("cPicker");
let showColor = document.getElementsByClassName("right_input_showColor")[0];

hex.addEventListener('keyup', function () {
    if (HexRegexTest(this.value)) {
        hex.closest('label').classList.remove('-on');
        let hexValue = this.value; // input 值
        let convertedRGB = hexStringToRGB(hexValue);
        if (!convertedRGB) {
            hex.closest('label').classList.add('-on');
        }
    } else {
        hex.closest('label').classList.add('-on');
    }
});

rgb.addEventListener('keyup', function () {
    let inputValue = this.value.replace(/\s/g, '')
    if (RGBRegexTest(inputValue)) {
        if(RGBToHexString(inputValue)){
            rgb.closest('label').classList.remove('-on')
        }else{
            rgb.closest('label').classList.add('-on');
        }
    } else {
        rgb.closest('label').classList.add('-on');
    }
})

cPicker.addEventListener('input', function () {
    hex.value = this.value;
    hexStringToRGB(hex.value);
})

