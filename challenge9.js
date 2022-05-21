function solution(orders) {
  // Tu código aquí 👈 

  return orders.map(order => order.total).reduce((prev, current) => prev + current)
}; 

console.log(solution([
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true
  },
  {
    customerName: "Zulma",
    total: 120,
    delivered: true
  }
]))

// Tienes un array de órdenes de compra con los siguientes atributos:

// customerName: string
// total: number
// delivered: boolean
// Debes retornar la suma total de todas las órdenes de compra.

// La solución debería tener un input y output como los siguientes:

// solution([
//   {
//     customerName: "Nicolas",
//     total: 100,
//     delivered: true,
//   },
//   {
//     customerName: "Zulema",
//     total: 120,
//     delivered: false,
//   },
//   ...
// ]);

// Output

// 220