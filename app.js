"use strict";
/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
*/
/*
    const auto = {
        color: "Rojo",
        marca: "Ferrari",
        modelo: "Spider",
        encendido: false,

        encender: function(){
            if (!this.encendido) {
                this.encendido = true;
                console.log("El auto esta encendido");
            } else {
                console.log("El auto esta apagado");
            }
        },

        apagar: function(){
            if (this.encendido) {
                this.encendido = false;
                console.log("El auto ha sido apagado");
            } else {
                console.log("El auto ya esta apagado");
            }
        }
    };

    auto.encender();
    auto.apagar();
*/
/* 
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:

    Una propiedad titular con el valor "Alex".

    Una propiedad saldo, teniendo como valor inicial 0.
    
    Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
    
    Un método extraer() que permita retirar la cantidad pasada como parámetro.
    
    Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/
/*
    class Cuenta {
        constructor(titular){
            this.titular = titular;
            this.saldo = 0;
        }

        ingresar (cantidad){
            if (cantidad > 0) {
                this.saldo += cantidad;
            } 
        }

        extraer (cantidad){
            if (cantidad <= this.saldo) {
                this.saldo -= cantidad;
            } else {
                console.log("No hay saldo suficiente");
            }
        }

        info () {
            console.log(`Titular: ${this.titular}`);
            console.log(`Saldo: ${this.saldo}`);
        }
    }

const cuenta = new Cuenta ("Agustin");

cuenta.info(); 

cuenta.ingresar(300);

cuenta.info();

cuenta.extraer(123);

cuenta.info();

*/

/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/
/*
    class Rectangulo {
        constructor(alto, ancho){
            this.alto = alto;
            this.ancho = ancho;
        }

        modificarAlto (nuevoAlto){
            this.alto = nuevoAlto;
        }

        modificarAncho (nuevoAncho){
            this.ancho = nuevoAncho;
        }

        mostrarPropiedad (){
            console.log(`Alto: ${this.alto}`);
            console.log(`Ancho: ${this.ancho}`);
        }

        perimetro (){
            return 2 * (this.alto + this.ancho); 
        }

        area (){
            return this.alto * this.ancho;
        }
    }


    const rectanguloUno = new Rectangulo (10, 2);
    const rectanguloDos = new Rectangulo (3, 5);

    console.log("Rectangulo 1");
    rectanguloUno.mostrarPropiedad();
    
    console.log("Rectangulo 2");
    rectanguloDos.mostrarPropiedad();
    
    rectanguloUno.modificarAlto(7);
    rectanguloDos.modificarAncho(11);

    console.log("El area del rectangulo es: " + rectanguloUno.area());

    console.log("El perimetro del rectangulo es: " + rectanguloDos.perimetro());

*/

/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/
/*
    class Producto {
        constructor(codigo, nombre, precio){
            this.codigo = codigo;
            this.nombre = nombre;
            this.precio = precio;
        }

        imprimeDatos(){
            console.log(`Codigo: ${"#" + this.codigo}`);
            console.log(`Nombre: ${this.nombre}`);
            console.log(`Precio: ${"$" + this.precio}`);
        }
    }

    const productos = [
        new Producto (12312312331212, "Remera", 20),
        new Producto (45645645646645, "Ninja", 500),
        new Producto (78978978979789, "PC", 1000)
    ];

    for (let producto of productos){
        producto.imprimeDatos();
        console.log("-----------------------");
    }

*/


/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:


esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/
/*
    class Persona {
        constructor(nombre, edad, sexo, peso, altura, añoNacimiento, rasgo){
            this.nombre = nombre;
            this.edad = edad;
            this.DNI = this.generarDNI();
            this.sexo = sexo;
            this.peso = peso;
            this.altura = altura;
            this.añoNacimiento = añoNacimiento;
            this.rasgo = rasgo;
        }

        mostrarGeneracion(){
            console.log(`La persona es ${this.nombre} Su rasgo caracteristico es ${this.rasgo}`);
        }

        esMayorDeEdad (){
            if (this.edad >= 18){
                return "Es mayor de edad";
            } else {
                return "Es menor de edad";
            }
        }

        mostrarDatos (){
            return `Nombre: ${this.nombre}
                Edad: ${this.edad}
                DNI: ${this.DNI}
                Sexo: ${this.sexo}
                Peso: ${this.peso} kg
                Altura: ${this.altura} cm
                Año de nacimiento: ${this.añoNacimiento}`;
        }

        generarDNI(){
            const dni = Math.floor(Math.random()* 10000000);
            return dni.toString().padStart(8, "0");
        }
    }

    const personas = [
        new Persona ("Generacion Z", 13, "M", 45, 50, 2010, "Irreverencia"),
        new Persona ("Millennial", 30, "F", 70, 160, 1993, "Frustracion"),
        new Persona ("Generacion X", 43, "F", 55, 145, 1993, "Obsesion por el exito"),
        new Persona ("Baby Boom", 55, "M", 78, 180, 1968, "Ambicion"),
        new Persona ("Silent Generation", 75, "M", 80, 170, 1948, "Austeridad")
    ];

    for (let persona of personas){
        console.log(persona.esMayorDeEdad());
    }

    for (let persona of personas){
        console.log(persona.mostrarDatos());
    }
*/

/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/
/*
    class Libro {
        constructor(ISBN, titulo, autor, numPag){
            this._ISBN = ISBN;
            this._titulo = titulo;
            this._autor = autor;
            this._numPag = numPag;
        }

        get ISBN(){
            return this._ISBN;
        }

        set ISBN(valor){
            this._ISBN = valor;
        }
        
        get titulo(){
            return this._titulo;
        }

        set titulo(valor){
            this._titulo = valor;
        }

        get autor (){
            return this._autor;
        }

        set autor (valor){
            this._autor = valor;
        }

        get numPag (){
            return this._numPag;
        }

        set numPag (valor) { 
            this._numPag = valor;
        }

        mostrarLibro (){
            return `El libro ${this._titulo} con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene ${this._numPag} páginas`;
        }

        comparaNumPag(otroLibro){
            if (this.numPag > otroLibro.numPag) {
                return `El libro ${this.titulo} tiene mas paginas`;
            } else if (this.numPag < otroLibro.numPag){
                return `El libro ${otroLibro.titulo} tiene mas paginas`;
            } else {
                return `Tienen la misma cantidad de paginas`;
            }
        }
    }

    const libro1 = new Libro("9780123456789", "El señor de los anillos", "J.R.R. Tolkien", 1000);

    const libro2 = new Libro("9789876543210", "Harry Potter y la piedra filosofal", "J.K. Rowling", 300);

    console.log(libro1.mostrarLibro());

    console.log(libro2.mostrarLibro());

    console.log(libro1.comparaNumPag(libro2));

*/

