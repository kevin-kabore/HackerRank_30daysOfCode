function processData(input) {
    var args = input.split('\n')

    var n = parseInt(args[0]);

    var phoneBook = {};
    for(var i = 0; i < n; i++) {
        var nameNum = args[i+1];
        nameNum = nameNum.split(' ');
        phoneBook[nameNum[0]] = nameNum[1];
    }
    for(var i = n+1; i < args.length; i++ ) {
        if(phoneBook.hasOwnProperty(args[i])) {
            console.log(args[i]+'='+phoneBook[args[i]])
        } else {console.log('Not found')}
    }
}
