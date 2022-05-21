function solution(array) {
  // Tu código aquí 👈 
  array.map(elem => (
    elem.taxes = elem.price * 0.19  
  ))
  return array
  
}; 
console.log(solution([
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  },
]))