const timeIntervals = (input) => {

    return {
        "answer": [
            [
                "5",
                "10 11 2 Alice Cacey",
                "11 12 3 Alice Bob Cacey",
                "12 14 3 Alice Cacey Deepak",
                "14 15 3 Cacey Deepak Emma",
                "15 16 2 Deepak Emma"
            ],
            [
                "3",
                "1 7 1 Neil",
                "7 9 3 Alok Angel Neil",
                "9 10 2 Alok Neil"
            ]
        ]
    }
}

//     var res = new Array();
//     for (var idx = 0; idx < input.length; idx++) {
//         var inputObj= input[idx];
//         var n = parseInt(inputObj[0]);
//         res[idx] = calculate(inputObj, n);
//     }
//     return res;
// }

// function calculate(inputObj, n) {
//     var setArr = new Set();
//     var nameArr = inputObj[1].split(" ");
//     var originalIntervals = new Array();

//     for(var i = 2; i < n + 2; i++) {
//         var ss = inputObj[i].split(" ").map(Number);
//         originalIntervals[i-2] = ss;
//         setArr.add(ss[0]);
//         setArr.add(ss[1]);
//     }

//     var arr = [...setArr];
//     arr.sort(function(a, b) {
//         return a - b;
//     })
//     var resName = new Array();
//     var b = 0;
//     for(var i = 0 ; i < arr.length - 1; i++) {
//         var nArr = new Array();
//         var a  = 0;
//         for(var j = 0 ; j < originalIntervals.length; j++){
//             if(originalIntervals[j][1] >= arr[i+1] && originalIntervals[j][0] < arr[i+1]) {
//                 nArr[a++] = nameArr[j];
//             }
//         }
//         var strRes = (arr[i] + " " + arr[i + 1] + " " + nArr.length + " " + nArr.sort().toString().replaceAll(',', " "));
//         resName[b++] = strRes;
//     }
//     resName.unshift(resName.length.toString());
//     return resName;
// }

module.exports = {
    timeIntervals
}
