let hr = document.querySelector("#hour")
let m = document.querySelector("#min")
let s = document.querySelector("#sec")

function displaytime(){
    let date = new Date();
    

    let hh= date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;
    console.log(hRotation)

    hr.style.transform = `rotate(${hRotation}deg)`;
    m.style.transform = `rotate(${mRotation}deg)`;
    s.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displaytime,1000);