/*Напиши функцию `checkForSpam(message)`, принимающую 1 параметр `message` -
строку. Функция проверяет ее на содержание слов `spam` и `sale`. Если нашли
зарещенное слово то функция возвращает `true`, если запрещенных слов нет функция
возвращает `false`. Слова в строке могут быть в произвольном регистре.*/

const checkForSpam = function (message) {
  message = message.toLowerCase();
  const spamWords = ['spam', 'sale'];
  let result = false;

  for (let i = 0; i < spamWords.length; i += 1) {
    if (message.includes(spamWords[i])) {
      result = true;
    }
  }
  return result;
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SpAm] How to earn fast money?')); // true
