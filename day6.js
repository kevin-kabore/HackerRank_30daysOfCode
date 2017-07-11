function processData(input) {
    //Enter your code here
    var arr = input.split("\n");
    let even;
    let odd;
    arr.forEach((word) => {
        if (!isNaN(word)) return // next if word is number;

        even = '';
        odd = '';
        Array.from(word).forEach((char, index) => {
            if (index === 0 || index % 2 === 0) {
                even+=char
            } else {
                odd+=char
            }
        })
        console.log(even+' '+odd);
    })
}
