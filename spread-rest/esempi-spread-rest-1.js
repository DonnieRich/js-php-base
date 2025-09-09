function somma(...numeri) {
    let totale = 0;
  
    for (let i = 0; i < numeri.length; i++) {
      totale += numeri[i]
    }
    
    return totale
}
console.log(somma(1, 2, 3)); // 6