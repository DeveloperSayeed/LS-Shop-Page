//**localStorage Data Send 

function sendData(key , valu){
    let data = JSON.stringify(valu)
    localStorage.setItem(key, data)
}

//**localStorage Data Get 
function getData(key) {

    let data = localStorage.getItem(key);
    return JSON.parse(data)
}