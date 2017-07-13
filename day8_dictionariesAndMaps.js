function processData(input) {
    //Enter your code here
    var args = input.split('\n') // on new line;

    var n = args.shift() // sets length of arr and removes from args array
    var arr = []
    var phoneBook = {}
    for (var i = 0; i < n; i++) { // loop through from i = 0 to length
        var nameNum = args.shift() // save name and num and remove from args
        var arr = nameNum.split(' ') // split string into arr with two vals
        phoneBook[arr[0]] = arr[1]; // phoneBook[name] = [Num]
    }

    args.forEach((name) => {
        if (phoneBook.hasOwnProperty(name)) {
            console.log(name+'='+phoneBook[name])
        } else {console.log('Not found')}
    })
}
