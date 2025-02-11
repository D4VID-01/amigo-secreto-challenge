
let amigos = [];


//Función que inserta los nombres a la lista 
function agregarAmigo(){
    
    let nombreDeAmigo = document.getElementById('amigo').value;

    if(nombreDeAmigo === ''){
        alert('Por favor, inserta un nombre');
    } else{
        amigos.push(nombreDeAmigo);
        document.getElementById('amigo').value='';
        crearLista();  //Se declara función para mostrar la lista actual a sortear una vez empujado el ultimo nombre
    }
}

//Función que muestra en pantalla los nombres que componen la lista de amigos y que serán sorteados
function crearLista(){

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML ='';

    for(i=0; i<amigos.length; i++){  // i representa el indice en el array
        let li = document.createElement('li'); //Crea un nuevo elemnto <li>
        li.textContent = amigos[i];  //Nombra el elemento li con el nombre del amigo en cuestion del numero de indice
        lista.appendChild(li); //Agraga el elemnto li a la lista ul
    }
}

//Función que sortea de manera seudo aleatoria un nombre de la lista
function sortearAmigo(){
    if(amigos.length <=1){  //Si la lista solo tiene un amigo pedira añadir minimo 2 amigos.
        alert('Agrega 2 o más amigos.');
    } else{
        //Arroja un numero de indice en funcion del número de elemntos de la lista y contemplando el cero.
        let numeroIndice = Math.floor(Math.random()*amigos.length);
        let amigoSecreto = amigos[numeroIndice];
        let resultadoAmigo = document.getElementById('resultado');
        resultadoAmigo.innerHTML = amigoSecreto;
        console.log(amigoSecreto);
        //Deshabilita el botón de sortear una vez que ya se haya sorteado un nombre.
        document.getElementById('sortear').setAttribute('disabled', 'true'); 
    }
}
