function solution(array) {
  // Tu código aquí 👈 
  return array.filter(elem => elem.length >= 4)
}; 
console.log(solution(['amor', 'sol', 'piedra', 'día']))


// Tienes un array con palabras, tu desafío es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

// La solución debería tener un input y output como los siguientes:

// solution(['amor', 'sol', 'piedra', 'día']);

// Output

// [ 'amor', 'piedra' ]