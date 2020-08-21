const myPackage = ['cheese', 'eggs', 'milk', 'bread'];

// Spread operator
console.log(...myPackage) // cheese eggs milk bread

// Rest Parameter
printPackageContents('cheese', 'eggs', 'milk', 'bread')
function printPackageContents(...items) {
  for (const item of items) {
    console.log(item)
  }
  console.log(items) // [ 'cheese', 'eggs', 'milk', 'bread' ]
}
// cheese
// eggs
// milk
// bread