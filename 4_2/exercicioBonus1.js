//Ordene o array numbers em ordem crescente e imprima seus valores;
//Ordene o array numbers em ordem decrescente e imprima seus valores;

for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let position = array[i];
    
        array[i] = array[j];
        array[j] = position;
      }
    }
  }
  