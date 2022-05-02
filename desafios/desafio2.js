class Usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }

    getFullName () {
        console.log(this.nombre, this.apellido)
    }
    addMascota (nuevaMascota) {
        this.mascotas.push(nuevaMascota)
    }
    countMascotas() {
        console.log(this.mascotas.length)
    }
    getMascotas() 
    {
        console.log(this.mascotas)
    }
    addBook(nuevoLibro) {
        this.libros.push(nuevoLibro)
    }
    getBookNames() {
        this.libros.map((libro) => console.log(libro.nombre));
    }
}

//nuevo user
const user1 = new Usuario('Tais', 'Gonzalez', [{nombre:'Nada que perder', autor: 'Edir Macedo'}], ['coco', 'cloty']);

user1.addMascota(nuevaMascota = 'patitas');
user1.addBook(nuevoLibro = {nombre: 'Ficciones', autor: 'Borges'});

user1.getFullName();
user1.countMascotas();
user1.getMascotas();
user1.getBookNames();