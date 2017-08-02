function processData(input) {
    //Enter your code here
    input = input.split('\n').map(Number)
    let n = input[0]
    for (var i = 1; i <= n; i++){
      //Brute force
        isPrime(input[i]) ? console.log('Prime') : console.log('Not prime');
    }
    function isPrime(n) {
        if (n < 2) {
            return false;
        } else {
            for(var i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) {
                    return false;
                }
            }
        }
        return true
    }
}
