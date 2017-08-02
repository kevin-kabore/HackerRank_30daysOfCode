function processData(input) {
    let actual = readLine().split(' ').map(Number);
    let expected = readLine().split(' ').map(Number);

    console.log(getFine(actual, expected))

    function getFine(actualDate, expectedDate){
       let fine = 0;
        //if the book is returned on or before the expected return date, no fine will be charged
       if(actualDate[2] <= expectedDate[2] && actualDate[1] <= expectedDate[1] && actualDate[0] <= expectedDate[0]) {
           fine = 0;
       }
        //If the book is returned after the expected return day but still within the same calendar month and year as the        expected return date
        else if(actualDate[2] === expectedDate[2] && actualDate[1] === expectedDate[1] && actualDate[0] > expectedDate[0]) {
            fine = 15 * (actualDate[0]  - expectedDate[0]);
        }
        //If the book is returned after the expected return month but still within the same calendar year as the expected return date
        else if(actualDate[2] === expectedDate[2] && actualDate[1] > expectedDate[1]) {
            fine = 500 * (actualDate[1] - expectedDate[1]);
        }
        //If the book is returned after the calendar year in which it was expected, there is a fixed fine of .
        else if(actualDate[2] > expectedDate[2]) {
            fine = 10000;
        }
        return fine
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
let input_stdin_array = "";
let input_currentline = 0;

function readLine() { //readline
    return input_stdin_array[input_currentline++];
}

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   input_stdin_array = _input.split("\n");
   processData(_input);
});
