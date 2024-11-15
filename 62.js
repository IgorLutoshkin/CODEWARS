/*Добро пожаловать.

В этой задаче вам нужно заменить каждую букву в строке на её порядковый номер в алфавите.

Если в тексте есть что-то, что не является буквой, проигнорируйте это и не возвращайтесь к этому.

"a" = 1, "b" = 2 и др.

Пример
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 
*/

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((element) => element >= "a" && element <= "z")
    .map((el) => el.charCodeAt() - 96)
    .join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
