function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var log = '';
    for(var i = arr.length -1; i >= 0 ; i--){
        log = log+arr[i]+' ';

    }
    console.log(log)

}
