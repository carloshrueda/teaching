function trampoline(fn) {
    while (typeof fn === 'function') {
      fn = fn();
    }
    return fn;
  }
  
  function factorial(n, acc = 1) {
    if (n === 0) {
      return acc;
    }
    return () => factorial(n - 1, n * acc);
  }
  
  const factorialTrampoline = trampoline(factorial);
  console.log(factorialTrampoline(5)); // Imprime: 120