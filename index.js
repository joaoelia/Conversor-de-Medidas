const medida = prompt ("Forneça a medida em metros:")

const conversorDeMedidas = prompt ("Escolha uma medida! milimetro (mm) centimetro (cm) decimetro (dm) decametro (dam) hectometro (hm) quilometro (km)");

switch (conversorDeMedidas) {
    case "milimetro":
        let resultadomilimetro = medida * 1000;
        alert("A medida escolhida foi 'milimetro', totalizando " + resultadomilimetro + "mm")
        break;
    case "centimetro":
        let resultadocentimetro = medida * 100;
        alert("A medida escolhida foi 'centimetro', totalizando " + resultadocentimetro + "cm")
        break;
    case "decimetro":
        let resultadodecimetro = medida * 10;
        alert("A medida escolhida foi 'decimetro', totalizando " + resultadodecimetro + "dm")
        break;
    case "decametro":
        let resultadodecametro = medida * 0.1;
        alert("A medida escolhida foi 'decimetro', totalizando " + resultadodecametro + "dam")
        break;
    case "hectometro":
        let resultadohectometro = medida * 0.01;
        alert("A medida escolhida foi 'hectometro', totalizando " + resultadohectometro + "hm")
        break;
    case "quilometro":
        let resultadoquilometro = medida * 0.001;
        alert("A medida escolhida foi 'quilometro', totalizando " + resultadoquilometro + "km")
        break;
    default:
        alert("Finalizando...")
}
