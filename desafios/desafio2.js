class Usuario{
    constructor(name,apellido,libros,mascotas){
        this.name=name;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }

    getFullName() {
        return `${this.name}${this.apellido}`;
    }
    getCountMascotas() {
        return `${this.mascotas}${2}`;
    }
}

let pruebaDeUsuario = new Usuario("String","String",["nada que perder","todavia hay esperanza"],["perro","perro"])
console.log(pruebaDeUsuario);

const mascotas = ["perro","perro"];
console.log(mascotas.length);