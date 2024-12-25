const isPrime = (inputNum) => {
    let factorCount = 0;
    for (let i = 1; i <= Math.sqrt(inputNum); i++) {
      if (inputNum % i === 0) {
        const b = inputNum / i;
        if (b === i) {
          factorCount += 1;
        } else {
          factorCount += 2;
        }
      }
    }
    return factorCount<=2;
  };
  
  const isPrimeBool = isPrime(8);
  
  console.log('isPrimeBool>>>', isPrimeBool);