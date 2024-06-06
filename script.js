//se establecen los meses y los dias para que coincidan con el array de la fecha y poder mostrarlos en el html
const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
];
const dias = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
];

//obtengo los valores del documento
//con queryselectorall obtengo todos los items de h4 osea de meses hasta segundos
const giveaway = document.querySelector('.giveaway');
const flexcontainer = document.querySelector('.flex-container');
const items = document.querySelectorAll('.contador h4');

//se establece la fecha en la que se terminaria la oferta
let fecha = new Date(2024, 5, 20, 8, 30, 0);

//obtengo la fecha y la voy mostrando en el documento con textcontent
const año = fecha.getFullYear();
const horas = fecha.getHours();
const minutos = fecha.getMinutes();
let mes = fecha.getMonth();
mes = meses[mes];
const dia = fecha.getDate();
const semana = dias[fecha.getDay()];

giveaway.textContent = ` la oferta termina el ${semana}, ${dia} de ${mes} de ${año} ${horas}:${minutos} am  `;

//tiempo futuro en milisegundos
//1s = 1000ms
//1m = 60s
//1hr = 60min
//1d = 24hr
const fechaFutura = fecha.getTime();

function obtenerTiempoFaltante() {
    const hoy = new Date().getTime();
    const t = fechaFutura - hoy;

    //valores en ms
    const undia =  24 * 60 * 60 * 1000;
    const unahora = 60 * 60 * 1000;
    const unminuto = 60 * 1000;

    //calculo tiempo faltante
    let diasFaltantes = t / undia;
    diasFaltantes = Math.floor(diasFaltantes);
    let horasFaltantes = Math.floor((t % undia) / unahora);
    let minutosFaltantes = Math.floor((t % unahora) / unminuto);
    let segundosFaltantes = Math.floor((t % unminuto) / 1000);

    //setear los valores 
    const values = [diasFaltantes, horasFaltantes, minutosFaltantes, segundosFaltantes];

    function ceros(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function(item,index){
        item.innerHTML = ceros(values[index]);
    })
}

//contador      
let contador = setInterval(obtenerTiempoFaltante, 1000);
obtenerTiempoFaltante();