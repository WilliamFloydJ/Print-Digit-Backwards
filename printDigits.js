const backWords = (num) => {
  let times = 1;
  const reverseNumArr = [];
  const reverseRem = [];
  while (reverseNumArr.length < num.toString().length) {
    let rem = num % (10 * times);
    let remCalc = num % (10 * times);
    if (reverseRem.length - 1 >= 0) {
      remCalc = (remCalc - reverseRem[reverseRem.length - 1]) / times;
    }
    reverseRem.push(rem);
    reverseNumArr.push(remCalc);
    times = times * 10;
  }

  return reverseNumArr.join("");
};
console.log(backWords(2587456842));
