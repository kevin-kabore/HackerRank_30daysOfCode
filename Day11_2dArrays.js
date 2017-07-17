
function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    var arrSum = [], sum = 0;

     for(i = 0; i < 4; i++){
        for(j = 0; j < 4; j++){
            sum += arr[i][j];
            sum += arr[i][j+1];
            sum += arr[i][j+2];

            sum += arr[i+1][j+1];

            sum += arr[i+2][j];
            sum += arr[i+2][j+1];
            sum += arr[i+2][j+2];


            arrSum.push(sum);
            sum = 0;

        }

    }

    console.log(Math.max.apply(null, arrSum));

}
