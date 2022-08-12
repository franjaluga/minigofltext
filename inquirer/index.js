const inquirer = require('inquirer');
var colors = require('colors');

console.clear();
console.log('=================================='.bgGreen);
console.log('Bienvenido a Minigolf infernal 2.0'.bgGreen);
console.log('=================================='.bgGreen);
console.log(' *Se ha cobrado un ticket* '.rainbow);
console.log('');

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const numeroAzar = getRandomArbitrary(1,3);
const redondeado = Math.round(numeroAzar);


console.log("el agujero está a "+redondeado+" espacios, de lejos".yellow);

if(redondeado === 1){
    console.log("[  :) ] <- Ud. está aquí");
    console.log("[     ]".bgGreen);   
    console.log("[     ]".bgGreen);        
    console.log("[  |  ]".bgGreen+"<- agujero");
    console.log("[     ]".bgGreen);
    console.log("[     ]".bgGreen);
}

if(redondeado === 2){
    console.log("[  :) ] <- Ud. está aquí");
    console.log("[     ]".bgGreen);   
    console.log("[     ]".bgGreen);        
    console.log("[     ]".bgGreen);
    console.log("[  |  ]".bgGreen+"<- agujero");
    console.log("[     ]".bgGreen);
}

if(redondeado === 3){
    console.log("[  :) ] <- Ud. está aquí");
    console.log("[     ]".bgGreen);   
    console.log("[     ]".bgGreen);        
    console.log("[     ]".bgGreen);
    console.log("[     ]".bgGreen);
    console.log("[  |  ]".bgGreen+"<- agujero");
}

const preguntas = [
    {
        type: 'input',
        name: 'fuerza',
        message: '¿Como le vas a pegar? [ despacio ],[ medio ], [ fuerte ]',
    },
]


inquirer.prompt(preguntas).then( (preguntas) => {
    setTimeout(() => console.log("Calculando golpe...."),2000);
    setTimeout(() => console.clear(),3000);  
    console.log(`Le pegaste: ${preguntas.fuerza} a la pelota!`.bgYellow);

    let arrayCampo = [];

    arrayCampo[0] = "[     ]".bgGreen;
    arrayCampo[1] = "[     ]".bgGreen;
    arrayCampo[2] = "[     ]".bgGreen;
    arrayCampo[3] = "[     ]".bgGreen;
    arrayCampo[4] = "[     ]".bgGreen;

    if(redondeado == 1){
        arrayCampo[2] = "[  |  ]".bgGreen;
    }

    if(redondeado == 2){
        arrayCampo[3] = "[  |  ]".bgGreen;
    }

    if(redondeado == 3){
        arrayCampo[4] = "[  |  ]".bgGreen;
    }

    if(preguntas.fuerza == 'despacio'){
        arrayCampo[2] = "[  *  ]".bgGreen;
    }

    if(preguntas.fuerza == 'medio'){
        arrayCampo[3] = "[  *  ]".bgGreen;
    }

    if(preguntas.fuerza == 'fuerte'){
        arrayCampo[4] = "[  *  ]".bgGreen;
    }

    setTimeout( () => console.log(arrayCampo[0]), 4000);
    setTimeout( () => console.log(arrayCampo[1]), 5000);
    setTimeout( () => console.log(arrayCampo[2]), 6000);
    setTimeout( () => console.log(arrayCampo[3]), 7000);
    setTimeout( () => console.log(arrayCampo[4]), 8000);


    function ganaste(){
        console.log('Ganaste!, Felicitaciones!'.rainbow);
    }

    function perdiste(){
        console.log('Perdiste... mejor puntería para la otra...'.bgCyan);
    }

    let banderaGana = false;

    if(preguntas.fuerza == 'despacio' && redondeado == 1){
        banderaGana = true;
        setTimeout(() => ganaste(), 9000);
    }

    if(preguntas.fuerza == 'medio' && redondeado == 2){
        banderaGana = true;
        setTimeout(() => ganaste(), 9000);
    }
    if(preguntas.fuerza == 'fuerte' && redondeado == 3){
        banderaGana = true;
        setTimeout(() => ganaste(), 9000);
    }

    if(banderaGana == false){
        setTimeout(() => perdiste(), 9000);
    }

});


