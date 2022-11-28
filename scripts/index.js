const productos = [];

class Product {
    constructor() {
        this.id = productos.length + 1;
        this.name = prompt('ingresa: zapatillas - remera - pantalon');
        this.quantity = parseInt(prompt('ingrese cantidad'));
    }
};


let opciones = prompt('ingrese 1 para agregar productos, 2 para mostrarlos, 0 para salir');

const agregarProductos = () => {
    const newProduct = new Product();
    productos.push(newProduct);
    console.log(productos);
}

const mostrarProductos = () => {
    console.log('sus productos son:')
    let acumulador = '';
    productos.forEach((producto, index) => {
        console.log((index + 1), producto)
        acumulador += `
        <div class="contenedor">
            <div class="header">
                <h3>${producto.name}</h3>
            </div>
            <div class="img-container">
                <img src=${producto.url}/>
            </div>
            <div class="body">
                <p>Cantidad: ${producto.quantity}</p>
                <p>Precio: ${}</p>
            </div>
        </div>
        `
    })
    document.getElementById('container').innerHTML = acumulador;
}


const menu = (opcion) => {
    switch (opcion) {
        case '1':
            agregarProductos();
            break

        case '2':
            mostrarProductos()
            break

        default:
            alert('ingreso un numero incorrecto, intente de nuevo');
            break
    }
    opciones = prompt('ingrese 1 para agregar productos, 2 para cargarlos en el menu, 0 para verlos');
}



while (opciones !== '0') {
    menu(opciones)
}