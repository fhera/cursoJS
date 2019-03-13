// Interface
interface CamisetaBase {
    setColor(color: string): void;
    getColor(): string;
}

// Decorador
function estampar(logo: string) {
    return function (target: Function) {
        target.prototype.estampacion = function (): void {
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

// Clase
// export class Camiseta {
@estampar('Gucci')
class Camiseta implements CamisetaBase {
    // Propiedades
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Constructor
    constructor(color: string, modelo: string, marca: string, talla: string, precio: number) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    // Métodos
    public setColor(color: string): void {
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }
}


class Sudadera extends Camiseta {
    private capucha: boolean;

    public setCapucha(capucha: boolean) {
        this.capucha = capucha;
    }
    public getCapucha(): boolean {
        return this.capucha;
    }
}

var camiseta = new Camiseta("Rojo", "Manga larga", "Nike", "L", 14);
camiseta.estampacion();
// camiseta.setColor("Rojo");
// camiseta.getColor();

// camiseta.color = "Rojo";
// camiseta.modelo = "Manga larga";
// camiseta.marca = "Nike";
// camiseta.talla = "L";
// camiseta.precio = 10;

// var playera = new Camiseta();
// playera.setColor("Azul");
// playera.getColor();

var sudadera = new Sudadera("Rojo", "Manga larga", "Nike", "L", 14);
sudadera.setCapucha(true);

console.log(camiseta, sudadera);