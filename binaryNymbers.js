function main() {
    var n = parseInt(readLine());
    let bitArr = n.toString(2).split('0')

    console.log(Math.max.apply(Math, bitArr.map((el) => {return el.length})))
} 
