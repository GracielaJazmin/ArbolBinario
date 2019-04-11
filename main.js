let  busqueda = new ArbolBinario();

function agregarNodo() {
    let numero = parseInt(document.getElementById('dato').value)
    let numeroNodo = new Nodo(numero);
    busqueda.agregar(numeroNodo)
}

function imprimirIn() {
    document.getElementById('imprimir-In').textContent = `Arbol In-Orden: ${busqueda.inOrder()}`
}

function ImprimirPost() {
    document.getElementById('imprimir-pos').textContent = `Arbol Post-Orden: ${busqueda.postOrder()}`
}

function ImprimirPre() {
    document.getElementById('imprimir-pre').textContent = `Arbol Pre-Orden: ${busqueda.preOrder()}`
}
function busca(){
    let datos = document.getElementById('dato').value;
    let recorrido = busqueda.buscar(datos, busqueda.raiz)

    if (recorrido == true){
        document.getElementById('buscar').textContent = 'Encontrado'
    }
    else{
        document.getElementById('buscar').textContent = 'NO Encontrado'
    }
}

document.getElementById('agregarDato').addEventListener('click',agregarNodo);
document.getElementById('InOrden').addEventListener('click',imprimirIn)
document.getElementById('PostOrden').addEventListener('click',ImprimirPost)
document.getElementById('PreOrden').addEventListener('click',ImprimirPre)

document.getElementById('buscar-numero').addEventListener('click',busca);
