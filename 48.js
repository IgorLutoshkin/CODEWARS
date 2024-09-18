// ; В маленьком городке численность населения составляет p0 = 1000 в начале года. Население регулярно увеличивается на 2 percent в год, и более того, 50 каждый год в город приезжают жить новые жители. Сколько лет нужно городу, чтобы его население превысило p = 1200 жителей?

// ; At the end of the first year there will be:
// ; 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// ; At the end of the 2nd year there will be:
// ; 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// ; At the end of the 3rd year there will be:
// ; 1141 + 1141 * 0.02 + 50 => 1213

// ; It will need 3 entire years.
// ; Более общие параметры:

// ; p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// ; функция nb_year должна возвращать n количество целых лет, необходимых для увеличения или равенства населения p.

// ; aug - целое число, процент - положительное или нулевое плавающее число, p0 и p - положительные целые числа (> 0)

// ; Examples:
// ; nb_year(1500, 5, 100, 5000) -> 15
// ; nb_year(1500000, 2.5, 10000, 2000000) -> 10
// ; Примечание:
// ; Не забудьте преобразовать параметр percent в процентах в теле вашей функции: если параметр percent равен 2, вы должны преобразовать его в 0.02.

// ; Здесь нет дробных чисел. В конце каждого года количество населения является целым числом: 252.8 люди округляются в меньшую сторону до 252 человек.

function nbYear(p0, percent, aug, p) {
  let count = 0;
  let per = percent / 100;
  let P = p0;

  while (P < p) {
    P += Math.floor(P * per) + aug;
    count++;
    console.log(P);
  }

  return count;
}

console.log(nbYear(1500, 5, 100, 5000)); // This should now work correctly.
