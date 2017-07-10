function main() {
    var N = parseInt(readLine());

    var isEven = N % 2 == 0 ? true : false;
    if (!isEven) {
        console.log("Weird")
    } else if (isEven && N >= 2 && N <= 5) {
        console.log('Not Weird');
    } else if (isEven && N >= 6 && N <= 20) {
        console.log('Weird');
    } else if (isEven && N > 20 ) {
        console.log('Not Weird');
    }


}
