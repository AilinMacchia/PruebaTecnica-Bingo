
function crearCarton(filas, columnas) {
    var carton = document.getElementById('carton');
    var tabla = llenarTabla(filas, columnas);
    tabla = taparTabla(tabla,filas,columnas);
    escribirCarton(tabla, carton, filas, columnas);
}

function escribirCarton(tabla, carton, filas, columnas) {
    var tablaHtml = '<table>';
    for (var i = 0; i < filas; i++) {
        tablaHtml += '<tr>';
        for (var j = 0; j < columnas; j++) {
            var id = 'fila' + i + 'col' + j;
            tabla[i][j] == 0 ? tablaHtml += '<td style="background: black;">' : tablaHtml += '<td class="active" id="' + id + '" style="cursor: pointer;">';
            tablaHtml += tabla[i][j];
            tabla[i][j] == 0 ? tablaHtml += '</td>' : tablaHtml += '</td>';
        }
        tablaHtml += '</tr>';
    }
    tablaHtml += '</table>';
    carton.innerHTML = tablaHtml;
}

function taparTabla(tabla, filas, columnas) {
    var cantTapasFila = 4;
    var tapas = [];
    var valores = generarValores(0, columnas - 1);
    for (var i = 0; i < filas; i++) {
        var tapasFila = [];
        if (i < filas - 1) {
            for (var j = 0; j < cantTapasFila; j++) {
                var valor = 0;
                [valor, valores] = escogerValor(valores);
                tapasFila.push(valor);
            }
        } else {
            tapasFila.push(valores[0]);
            valores = generarValores(0, columnas - 1);
            for (var j = 0; j < cantTapasFila - 1; j++) {
                var valor = 0;
                [valor, valores] = escogerValor(valores);
                tapasFila.push(valor);
            }
        }
        tapas.push(tapasFila);
    }
    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < cantTapasFila; j++) {
            tabla[i][tapas[i][j]] = 0;
        }
    }
    return tabla;
}


function llenarTabla(filas, columnas) {
    var tabla = [];
    let numeros= escogerValores()
    console.log(numeros)
    for (var i = 0; i < filas; i ++) {
        var fila = [];
        for (var j = 0; j < columnas; j++) {
            let valor=0
            valor=numeros[j][i]
            fila.push(valor);
        }
        tabla.push(fila);
    }
    return tabla;
}




function escogerValores() {
    let arr = [
        [],
        [], 
        [], 
        [], 
        [],
        [],
        [],
        [],
        [] 
    ];
    const numeros=[[1,9],[10,19],[20,29],[30,39],[40,49],[50,59],[60,69],[70,79],[80,89]]
    for(let i = 0; i < arr.length; i++) {
        let min = numeros[i][0];
        let max = numeros[i][1];
        while(arr[i].length < 3) {
            let num = Math.floor(Math.random() * (max - min)) + min;
            // Evitar que se repitan números
            if(!arr[i].includes(num)) {
                arr[i].push(num);
            }
        }
        arr[i].sort((a,b) => a - b);
    }
    console.log(arr)
    return arr;
}
function escogerValor(valores) {
    var indice = Math.round(Math.random() * (valores.length - 1));
    var valor = valores[indice];
    valores.splice(indice,1);
    return [valor, valores];
}

function generarValores(inicio, fin) {
    var valores = [];
    for (var i = inicio; i <= fin; i++) {
        valores.push(i);
    }
    return valores;
}

window.onload = crearCarton(3,9);