console.log('conectado con while-do-while')

const ciudades = ['Quibdó', 'Apartadó', 'Medellin', 'Bahia Solano']

console.warn('while')

let i = 0
while (i < ciudades.length) {
  console.log(ciudades[i])
  i++
}

console.warn('Do while')

let j = 0

do {
  console.log(ciudades[j])
  j++
} while (j < ciudades.length)
