const pizzas = [
    {
        id: 1,
        nombre: "Muza",
        ingrediente: ["Muzzarella", "aceitunas", ],
        precio: 100
    },

    {
        id: 2, 
        nombre: "Peperoni",
        ingrediente: ["Muzzarella", "aceitunas", "tomate", "Peperoni"],
        precio: 150,
    },

    {
        id: 3,
        nombre: "Calabresa",
        ingrediente: [ "Muzzarella", "aceitunas", "tomate","calabresa" ],
        precio: 150,
    },

    {
        id:4,
        nombre: "CuatroQuesos",
        ingrediente: ["Muzzarella", "quesoAzul", "parmesano", "quesosuave", "aceitunas"],
        precio: 200,
    },
    {
        id:5,
        nombre: "Napolitana",
        ingrediente: ["Muzzarella", "aceitunas", "tomate"],
        precio: 100,
    },

    {
        id:6,
        nombre: "Primavera",
        ingrediente: ["Muzzarella", "aceitunas", "tomate", "huevo", "provolone"],
        precio: 100,
    }

];

//------------------------------------------------


const ingresar  = (e)=>{
    isempty (inputNumber)
    Checkinput(inputNumber)
    localStorage.removeItem("idpizza")  
    saveDateInLS()   
    numerotoma()
    finpizza()

    
}


const saveDateInLS = ()=>{
    localStorage.setItem("idpizza",(inputNumber.value));
};

const numerotoma =()=>{
    let numeropizz = localStorage.getItem("idpizza");// el problema esta aqui 
    return (parseInt(numeropizz))
}


const finpizza =() =>{
    const pizzaecon = pizzas.find(pizza => pizza.id === numerotoma()/*parseInt(numeropizz)*/);
    console.log(pizzaecon)
};




//inputcapture.addEventListener("onclick",ingresar)























