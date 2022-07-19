
class Libro{
    contructor(titulo, paginas, genero, color ) {
        this.title = titulo;
        this.page = paginas;
        this.genere = genero;
        this.color = color;
    }
    leer() { 
    console.log("Este libro es del genero " + this.genere) + " y tiene " + (this.pages);
  }
}
 let libro1 = new Libro("IT", 237, "Terror", "Rojo");
 libro1.leer();
 let libro2 = new Libro("La noche del demino", 587, "Suspenso", "Negro");
 libro2.leer(); 
