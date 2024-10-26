function digitDifferenceSort(arr) {
  let digits = arr.map((el) => String(el).split("").map(Number)); // Преобразуем в массивы цифр

// Вычисляем разницу между максимальной и минимальной цифрами
let difference = digits.map((el) => Math.max(...el) - Math.min(...el));

// Создаем массив [значение разницы, индекс]
let indexedDifferences = difference.map((value, index) => [value, index]);

// Сортируем сначала по разнице, а потом по индексу
let sortedByDifference = indexedDifferences.sort((a, b) => {
  // Сравниваем разницы
  if (a[0] === b[0]) {
    // Если разница одинаковая, сортируем по возрастанию индекса
    return b[1] - a[1];
  }
  return a[0] - b[0]; // Сортируем по убыванию разницы
});

// Извлекаем индексы из отсортированного массива
let sortedIndices = sortedByDifference.map(el => el[1]);

// Извлекаем значения из arr в соответствии с отсортированными индексами
let sortedValues = sortedIndices.map(index => arr[index]);

// Результат
// console.log(sortedValues);
return sortedValues
}

digitDifferenceSort([
  13098, 1308, 12398, 52433, 213, 424, 213, 243, 12213, 54234, 99487, 81892,
  11111, 97897,
]);

//[11111, 97897, 12213, 243, 213, 424, 213, 54234, 52433, 99487, 81892, 12398, 1308, 13098])
