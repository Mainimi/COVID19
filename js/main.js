
const $boton = document.querySelector("button");

$boton.onclick = function(){
const $formulario = document.formulario;

// Parametros
const $poblacionEstudio = Number($formulario.poblacion.value);
const $diasVirusEnCuerpo = Number($formulario.diasVirus.value);
const $tasaInfreccion = Number($formulario.tasaInfreccion.value);
const $probRecuperacion = Number($formulario.probRecuperacion.value);
const $probMuerte =Number($formulario.probMuerte.value);
const $probContagio = Number($formulario.probContagio.value);

// Valores iniciales

const $susceptiblesIniciales = Number($formulario.susceptiblesIniciales.value);
const $infectadosIniciales = Number($formulario.infectadosIniciales.value);
const $recuperadosIniciales = Number($formulario.recuperadosIniciales.value);
const $fallecidosIniciales = Number($formulario.fallecidosIniciales.value);

const $dias = Number($formulario.enDias.value);

// Calculos
let susceptiblesT = $poblacionEstudio;
let infectadosT = $infectadosIniciales;
let recuperadosT = $recuperadosIniciales;
let fallecidosT = $fallecidosIniciales;

let contagiadosHoy = 0;
let recuperadosHoy = 0;
let fallecidosHoy = 0;

let contagiadosHistorial = $infectadosIniciales;
let recuperadosHistorial = $recuperadosIniciales;
let fallecidosHistorial = $fallecidosIniciales;

let maxI = infectadosT;
let maxC = contagiadosHoy;
let maxR = recuperadosHoy;
let maxF = fallecidosHoy;

for(i=0;i<$dias;i++){
   contagiadosHoy = (susceptiblesT*$tasaInfreccion*infectadosT *($probContagio/100))/(infectadosT+susceptiblesT+recuperadosT);
   recuperadosHoy = (infectadosT*($probRecuperacion/100))/$diasVirusEnCuerpo;
   fallecidosHoy = (infectadosT*($probMuerte/100))/$diasVirusEnCuerpo;

   susceptiblesT = susceptiblesT - contagiadosHoy;
   infectadosT = infectadosT+contagiadosHoy-recuperadosHoy-fallecidosHoy;
   recuperadosT = recuperadosT + recuperadosHoy;
   fallecidosT = fallecidosT + fallecidosHoy;
   
   if(maxI < infectadosT){
      maxI = infectadosT;
   }
   if(maxC < contagiadosHoy){
      maxC = contagiadosHoy;
   }
   if(maxR < recuperadosHoy){
      maxR = recuperadosHoy;
   }
   if(maxF < fallecidosHoy){
      maxF = fallecidosHoy;
   }

   contagiadosHistorial = contagiadosHistorial + contagiadosHoy;
   recuperadosHistorial = recuperadosHistorial + recuperadosHoy;
   fallecidosHistorial = fallecidosHistorial + fallecidosHoy;
}

$formulario.resultSusceptiblesTotales.value = Math.round(susceptiblesT);
$formulario.resultInfectadosTotales.value = Math.round(infectadosT);
$formulario.resultRecuperadosTotales.value = Math.round(recuperadosT);
$formulario.resultFallecidosTotales.value = Math.round(fallecidosT);

$formulario.resultContagiadosHoy.value = Math.round(contagiadosHoy);
$formulario.resultRecuperadosHoy.value = Math.round(recuperadosHoy);
$formulario.resultFallecidosHoy.value = Math.round(fallecidosHoy);

$formulario.resultContagiadosHist.value = Math.round(contagiadosHistorial);
$formulario.resultRecuperadosHist.value = Math.round(recuperadosHistorial);
$formulario.resultFallecidosHist.value = Math.round(fallecidosHistorial);

$formulario.resultContagiadosMax.value = Math.round(maxI);
$formulario.resultRecuperadosXDiaMax.value = Math.round(maxR);
$formulario.resultContagiadosXDiaMax.value = Math.round(maxC);
$formulario.resultFallecidosXDiaMax.value = Math.round(maxF);



return false;
}
 