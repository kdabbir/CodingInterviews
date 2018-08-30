// DP - dynamic programming
function fib(n) {
    const sum = [];
    sum[0] = 0;
    sum[1] = 1;
    
    for(let i=2; i<=n; i++) {
      sum[i] = sum[i-1] + sum[i-2]; // sum[2] = sum[1] + sum[0]
    }
    
    return sum[n];
  }
  // Recursion.
  function fibR(n) {
    if (n <=1) return n;
    return fibR(n-1) + fibR(n-2);
  }
  
  