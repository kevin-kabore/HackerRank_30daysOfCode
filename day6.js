function processData(input) {
    //Enter your code here
    var arr = input.split("\n")
    var s1 = arr[1].split('');
    var s2 = arr[2].split('');
    var longest;
    s1.length > s2.length ? longest = s1 : longest = s2;

    var s1Even = []
    var s2Even = []

    var s1Odd = [];
    var s2Odd = [];

    for(var i = 0; i <= longest.length -1; i++) {
        if (i % 2 === 0 || i === 0) {
            s1Even.push(s1[i])
            s2Even.push(s2[i])
        } else {
            s1Odd.push(s1[i]);
            s2Odd.push(s2[i]);
        }
    }
    console.log(s1Even.join('') +' '+s1Odd.join(''))
    console.log(s2Even.join('') +' '+s2Odd.join(''))

}
