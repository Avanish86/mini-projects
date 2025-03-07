let dis = document.querySelector("#input");
let button = document.querySelectorAll("button");


let string = "";
let arr = Array.from(button);


arr.forEach(button=> {
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            dis.value =string;
        }
        else if(e.target.innerHTML == "AC"){
            string="";
            dis.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string=string.substring(0,string.length-1);
            dis.value=string;
        }
        else{
            string += e.target.innerHTML;
            dis.value =string;
        }
       
    })
})
