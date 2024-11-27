/* 
Если указано число между 0-9, верните его прописью. 
Обратите внимание, что ввод гарантированно будет в пределах 0-9.
Ввод: 1
Результат: "One".
Если ваш язык поддерживает это, попробуйте использовать инструкцию switch.
*/

function switchItUp(number) {
  let arr = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  return arr[number];
}

console.log(switchItUp(3));
