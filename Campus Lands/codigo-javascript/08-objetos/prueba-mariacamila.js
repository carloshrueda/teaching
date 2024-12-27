// El siguiente ejemplo fue propuesto por la estudiante Maria Camila
// Grupo C4 - Sep 2024
//  fecha: 2024-11-29

const empleado = {
  nombre: "Ana",
  edad: "17",
  saludar: function () {
    console.log("Antes de mostrar");
    
    const mostrar  = function(nom, ed) {
      console.log(`Hola, soy ${nom} y tengo ${ed} años`);
    };

    mostrar(this.nombre, this.edad);
    
    console.log("Despues de mostrar");
  },
};

let f2;

function f1() {
  console.log("f1");

  f2 = function () {
    console.log("f2");
  };
}   


empleado.saludar();

f1();
f2();



