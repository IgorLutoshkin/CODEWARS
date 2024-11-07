/**
 Вы, вероятно, знакомы с системой «лайков» на Facebook и других страницах. Люди могут «лайкать» посты в блогах, фотографии или другие материалы. Мы хотим создать текст, который будет отображаться рядом с таким материалом.

Реализуйте функцию, которая принимает массив, содержащий имена людей, которым нравится товар. Она должна возвращать текст для отображения, как показано в примерах:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Примечание: для 4 и более имён число в "and 2 others" просто увеличивается.


 */

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length >= 4) {
    return (
      names[0] +
      ", " +
      names[1] +
      " and " +
      names.slice(2).length +
      " others like this"
    );
  } else if (names.length === 1) {
    return names[0] + " likes this";
  } else if (names.length === 2) {
    return names[0] + " and " + names[1] + " like this";
  } else {
    return (names[0] + ", " + names[1] + " and " + names[2] + " like this");
  }
}

console.log(likes(["Alex", "Jacob", "Mark", "Max", "Max"]  ));



// альтернативное решение
/*
function likes(names) {
  const count = names.length;

  if (count === 0) {
    return "no one likes this";
  }

  const baseMessage =
    count === 1
      ? `${names[0]} likes this`
      : count === 2
      ? `${names[0]} and ${names[1]} like this`
      : count === 3
      ? `${names[0]}, ${names[1]} and ${names[2]} like this`
      : `${names[0]}, ${names[1]} and ${count - 2} others like this`;

  return baseMessage;
}

console.log(likes(["Alex", "Jacob", "Mark", "Max", "Max"]));
*/