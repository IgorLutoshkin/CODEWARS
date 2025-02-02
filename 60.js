/*
 Вам дан массив (список) strarr строк и целое число k. Ваша задача — вернуть первую самую длинную строку, состоящую из k последовательных строк из массива.

 Примеры:
 strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

 Concatenate the consecutive strings of strarr by 2, we get:

 treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
 folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
 trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
 blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
 abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

 Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
 The first that came is "folingtrashy" so 
 longest_consec(strarr, 2) should return "folingtrashy".

 In the same way:
 longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
 n — длина массива строк, если n = 0 или k > n или k <= 0 возвращают «» (возвращают Nothing в Elm, «ничего» в Erlang).

 Примечание
 последовательные строки : следуют одна за другой без перерыва
 */

function longestConsec(strarr, k) {
  if (k > strarr.length || k < 0) {
    return ""
  }

  let numLetter = strarr.map((el) => el.length);
  let maxSum = 0;
  let sumArr = [];

  for (let i = 0; i <= numLetter.length - k; i++) {
    let sum = 0;

    for (let j = 0; j < k; j++) {
      sum = sum + numLetter[j + i];
    }

    if (sum > maxSum) {
      maxSum = sum;
    }
    sumArr.push(sum);
  }
  let indexMaxSum = sumArr.indexOf(maxSum);
  let result = strarr.slice(indexMaxSum, indexMaxSum + k);
  return result.join("");
}

// function longestConsec(strarr, k) {
//   if (k <= 0 || k > strarr.length) {
//     return "";
//   }

//   return strarr
//     .map((_, index) => strarr.slice(index, index + k).join(""))
//     .reduce((longest, current) =>
//       current.length > longest.length ? current : longest
//     );
// }

console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
