process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var N = parseInt(readLine());
    let contains = [];
    for(var a0 = 0; a0 < N; a0++){
        var firstName_temp = readLine().split(' ');
        var firstName = firstName_temp[0];
        var emailID = firstName_temp[1];
        let obj = {};
        // {email: name}
        obj[emailID] = firstName;

        for (email in obj) {
            let name = obj[email];
            if(email.search(/@gmail.com$/) > 0){ //contains @gmail.com at end returns index > 0
                contains.push(name)
            }
        }
    }
    console.log(contains.sort().toString().replace(/,/g, '\n'))

}
