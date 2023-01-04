// 4 kyu parseInt() reloaded
function parseInt(string) {
  // TODO: it's your task now
  // ((number * val + ...number) * val) + number * val + number

  // first convert numbers into num -> 7 hundred 83 thousand 9 hundred 19
  // alternatively, find the largest val (thousand) and combine all values to the left
  // (7 hundred 83 ~thousand~) + (9 ~hundred~)  + (19)
  // (7*100) + 83) * 100 = 783000
  // 9*100 = 900
  // 19 = 19
  // 783000 + 900 +19 = 783919

  // one million -> just jeck for specifically one million and return 1000000

  // nine hundred ninety nine thousand nine hundred and ninety nine
  // -> 9 hundred 99 thousand 9 hundred 99
  // -> (9 hundred 99 ~thousand~)  + (9 ~hundred~) + 99
  // -> (9 * 100 + 99) * 1000 = 999000
  // -> 9 * 100 = 99
  // -> 99 = 99
  // sum = 999999

  // -> [ 7, 100,  83, 1000, 9, 100, 19 ]
  const digits = convertToDigits(string);
  let thousands = 0;
  let hundreds = 0;
  if (digits.length === 1) return digits[0];
  if (digits.length === 2) return digits[0] * digits[1];

  reduceLargest(digits);

  function reduceLargest(digits) {
    //five hundred and four -> 5 100 4
    // one => 1
    // five hundred -> 5 100
    // one thousand -> 1 1000
    // one hundred thousand -> 1 100 1000
    // one hundred thousand and one -> 1 100 1000 1
    largest = Math.max(...digits); // 1000
    console.log(largest);
    largestArr = digits.slice(0, digits.indexOf(largest)); // 1 100
    if (largestArr.length === 1) {
      return largestArr[0] * largest;
    }
    if (largestArr.length === 2) {
      return largestArr[0] + largestArr[1]; // 101, wrong
    }
    console.log(largestArr);
  }
  /*
  function getThousands(digits) {
    const thousandArr = digits.slice(0, digits.indexOf("1000"));
    console.log(thousandArr);
    let next = thousandArr.join("").split("100");
    thousands = next.join("") * 1000;

    const hundredsArr = digits.slice(digits.indexOf("1000"));
    hundredsArr.shift();
    hundreds = getHundreds(hundredsArr);
    return thousands + hundreds;
  }
  function getHundreds(arr) {

  }*/

  function convertToDigits(s) {
    const numberWords = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20,
      "twenty-one": 21,
      "twenty-two": 22,
      "twenty-three": 23,
      "twenty-four": 24,
      "twenty-five": 25,
      "twenty-six": 26,
      "twenty-seven": 27,
      "twenty-eight": 28,
      "twenty-nine": 29,
      thirty: 30,
      "thirty-one": 31,
      "thirty-two": 32,
      "thirty-three": 33,
      "thirty-four": 34,
      "thirty-five": 35,
      "thirty-six": 36,
      "thirty-seven": 37,
      "thirty-eight": 38,
      "thirty-nine": 39,
      forty: 40,
      "forty-one": 41,
      "forty-two": 42,
      "forty-three": 43,
      "forty-four": 44,
      "forty-five": 45,
      "forty-six": 46,
      "forty-seven": 47,
      "forty-eight": 48,
      "forty-nine": 49,
      fifty: 50,
      "fifty-one": 51,
      "fifty-two": 52,
      "fifty-three": 53,
      "fifty-four": 54,
      "fifty-five": 55,
      "fifty-six": 56,
      "fifty-seven": 57,
      "fifty-eight": 58,
      "fifty-nine": 59,
      sixty: 60,
      "sixty-one": 61,
      "sixty-two": 62,
      "sixty-three": 63,
      "sixty-four": 64,
      "sixty-five": 65,
      "sixty-six": 66,
      "sixty-seven": 67,
      "sixty-eight": 68,
      "sixty-nine": 69,
      seventy: 70,
      "seventy-one": 71,
      "seventy-two": 72,
      "seventy-three": 73,
      "seventy-four": 74,
      "seventy-five": 75,
      "seventy-six": 76,
      "seventy-seven": 77,
      "seventy-eight": 78,
      "seventy-nine": 79,
      eighty: 80,
      "eighty-one": 81,
      "eighty-two": 82,
      "eighty-three": 83,
      "eighty-four": 84,
      "eighty-five": 85,
      "eighty-six": 86,
      "eighty-seven": 87,
      "eighty-eight": 88,
      "eighty-nine": 89,
      ninety: 90,
      "ninety-one": 91,
      "ninety-two": 92,
      "ninety-three": 93,
      "ninety-four": 94,
      "ninety-five": 95,
      "ninety-six": 96,
      "ninety-seven": 97,
      "ninety-eight": 98,
      "ninety-nine": 99,
      hundred: "hundred",
      thousand: "thousand",
    };

    return s
      .split(" ")
      .filter((w) => w !== "and")
      .map((w) => numberWords[w]);
  }
}

parseInt("seven hundred eighty-three thousand nine hundred and nineteen");
