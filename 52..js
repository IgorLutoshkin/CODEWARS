// Напишите функцию take_umbrella() , которая принимает два аргумента: строку, представляющую текущую погоду, и число с плавающей точкой, представляющее вероятность дождя сегодня.

// Ваша функция должна возвращать True или False основано на следующих критериях.

// Вам следует взять зонт, если в данный момент идет дождь или если на улице облачно и вероятность дождя миновала 0.20.
// Вам не следует брать зонт, если на улице солнечно, за исключением случаев, когда вероятность дождя выше, чем его отсутствие.(0.5 вероятность подразумевается)
// Для текущей погоды возможны следующие варианты: sunny, cloudy, и rainy.

// Например,, take_umbrella('sunny', 0.40) должен вернуться False.

// В качестве дополнительной задачи рассмотрите возможность решения этого ката с использованием только логических операторов, а не каких-либо операторов if .

function takeUmbrella(weather, chance) {
  if (weather === "rainy" || (weather === "cloudy" && chance > 0.2) || (weather === "sunny" && chance > 0.5)) {
    return true;
  } else {
    return false;
  }
}

console.log(takeUmbrella('sunny', 0.58));
