const inputNumber  = document.getElementById("num");
const inputcapture  =document.querySelector(".capture");


const isempty = (input)=>{
    if (input.value === ""){
        return alert("ingrese el id de pizza")
    }
}


const  Checkinput = (input)=>{
    let valid=false
    if (input.value>6){
         return console.log("N° Incorrecto")
    }else {
        if(input.value <1){
            return console.log(" N° Incorrecto")
        }
        else{
            valid=true
        }
    }
    console.log(valid)
}



//-------------------------




/*const saveDateInLS = ()=>{
    localStorage.setItem()
}*/