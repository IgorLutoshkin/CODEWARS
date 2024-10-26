function solution(str, ending) {
  if (
    str[str.length - ending.length] === ending[0] &&
    str[str.length - ending.length + 1] === ending[1]
  ) {
    // console.log(1);

    return true;
  } else {
    // console.log(str[str.length - ending.length + 1]);
    // console.log(ending[0]);
    return false;
  }

  // if (str.slice(-ending.length) === ending) {
  //   return true
  // }else {
  //   return false;

  // }
}
// console.log(solution("abcde", "cde"));
console.log(solution('abc', 'c'));
