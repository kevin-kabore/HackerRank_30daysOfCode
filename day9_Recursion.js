
function factorial(n) {
    //recursive case
    if(n > 1) {
        return n = n * factorial(n-1)
    } else {     // base case
        return n
    }
}

function main() {
    var n = parseInt(readLine());
    var result = factorial(n);
    process.stdout.write("" + result + "\n");
}
