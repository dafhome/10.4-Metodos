// INVITADOS FIESTA ESTE FINDE
// Montas una fiesta este finde en tu casa!

// Tienes una lista de invitados ya fija en array (o bien creada mediante Prompt)

const fiesta = ["Roberto", "Maria", "Carlos", "Ana", "Pedro", "Laura", "Luis", "Elena", "Javier", "Sofia", "Miguel", "Isabel", "David", "Carmen", "Jose", "Paula", "David", "Beatriz", "Fernando", "Lucia", "Daniel", "Eva", "Pablo", "Raquel", "Diego", "Silvia", "Manuel", "Natalia", "Fran", "Martina", "Antonio", "Clara", "Jorge", "Victoria", "Juan", "Adriana", "Rafael", "Patricia", "Alvaro", "Elena", "Mario", "Cristina", "Andres", "Marina", "Rubén", "Nerea", "Alberto", "Esther"]

const fiesta2 = ["Gabriel", "Verónica", "Ricardo", "Valeria", "Emilio", "Daniela", "Hector", "Cecilia", "Gonzalo", "Camila", "Fabián", "Jimena", "Sebas", "Julia", "Eduardo", "Marcela", "Hugo", "Nora", "Emilia", "Renata"
];

const pasos = ["¡Bienvenido a la fiesta!", "Te llama la Juani que se apunta con su novio Alex","Te encuentras a Marta que dice que le cueles la tercera","Roberto, que estaba el primero de la lista, resulta que está de viaje y no puede venir","Hay una fiesta al lado la misma noche y toda esa gente dicen que se apuntan a tu fiesta","Mostrar la lista definitiva de invitados con todos los nombres en mayúsculas.","Además, con tanto lío, acabas realizando una función de buscar, que te dice si tal persona está en la lista o no.","Lista de la fiesta definitiva"];

let fiestaTotal;
fiestaTotal = fiesta;

let action = document.getElementById("action");
let lista = document.getElementById("lista");
let caso = 0;

function pintarFiestaTotal() {
    lista.innerHTML = "";
    for (let i = 0; i < fiestaTotal.length; i++) {
        lista.innerHTML += (i + 1) + ": " + fiestaTotal[i] + "<br>";
    }
}


function ocultarAlert(){
    document.getElementById("alert").style.display = "none"
}

function buscador(){
    let buscar = document.getElementById("buscar").value;
    buscar = buscar.toUpperCase();
    let busc = [];
    busc = busc.concat(fiestaTotal);
    for (let i = 0; i < busc.length; i++) {
        busc[i] = busc[i].toUpperCase();
    }
    let resultado = busc.includes(buscar) ? 'Si' : 'No';
    let posicion = busc.indexOf(buscar);
    document.getElementById("alert").style.display = "block";
    if (resultado=='Si'){
        document.getElementById("alert").innerHTML = '<div class="alert alert-success" role="alert">Correcto! Está en la lista en el número: '+(posicion+1)+'.</div>'
    }
    else{
        document.getElementById("alert").innerHTML = '<div class="alert alert-danger" role="alert">Lo siento! No encuentro a esta persona.</div>'
    }
}


function proceso() {

    caso++;
    lista.innerHTML = "";
    ocultarAlert();
    pintarFiestaTotal();


    switch (caso) {

        case 1:
            action.innerHTML = pasos[caso];
            fiestaTotal.push("Juani", "Alex");
            pintarFiestaTotal();
            break;

        case 2:
            action.innerHTML = pasos[caso];
            fiestaTotal.splice(2, 0, "Marta");
            pintarFiestaTotal();
            break;

        case 3:
            action.innerHTML = pasos[caso];
            fiestaTotal.shift();
            pintarFiestaTotal();
            break;

        case 4:
            action.innerHTML = pasos[caso];
            fiestaTotal = fiestaTotal.concat(fiesta2);
            pintarFiestaTotal()
            break;

        case 5:
            action.innerHTML = pasos[caso];
            for (let i = 0; i < fiestaTotal.length; i++) {
                fiestaTotal[i] = fiestaTotal[i].toUpperCase();
            }
            pintarFiestaTotal()
            break;
        case 6:
            action.innerHTML = pasos[caso];
            alert("Busca un nombre en el buscador de abajo a la derecha si lo necesitas.");
            break;

        default:
            action.innerHTML = pasos[7];
            pintarFiestaTotal();
            break;


    }

}
