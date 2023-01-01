// 6 kyu How many pages in a book
// 6 kyu How many pages in a book
function amountOfPages(summary) {
  // PREP
  // P a summary, representing the number of digits of every page number concatenated
  // P will always be valid
  // R: return a number representing the amount of pages to form the summary
  // E: given
  // Psuedocode:

  // bruteforce --
  // brainstorming: single digits will always be summary. So 1-9
  // if summary is double digits, single digits will always be 9. So subtract 9 from the summary
  // single digits is pages * 1, double is pages * 2, triple is *3... and so on
  // how can I turn this into an algorithm?
  // 1-9 is summary
  // 10-99 is summary - 9?
  // summary.length === 2 subtract 9;
  // summary.length > 180 subtract (9 + 180) total number of double digits to reach 100 pages
  // 189 is the number of digits for 100 pages
  // and so on.

  // subtract single digits -- remainder is double digits. Divide double digits by 2 for pages that are double digit.
  // then re-add 9 for total pages.
  // how can I scale this to any digits?
  // how do I identify how many of each digit are in the summary?
  // single is 9
  // double is 90 * 2 + 9 (100 - single * 2, then add single back)
  // triple is (1000-double * 3, add double back?)
  // up to 100,000 pages so I can cheat by manually calculating break points
  const singles = 9;
  const doubles = 189;
  const triples = (1000 - doubles) * 3 + doubles;
  const fours = (10000 - triples) * 4 + triples;
  const fives = (100000 - fours) * 5 + fours;

  if (summary < singles) return summary;
  if (summary > singles) return (summary - singles) / 2 + singles;
  if (summary > doubles) return (summary - doubles) / 3 + doubles;
  if (summary > triples) return (summary - triples) / 4 + triples;
  if (summary > fours) return (summary - fours) / 4 + fours;
  if (summary > fives) return (summary - fives) / 4 + fives;
}
console.log(amountOfPages(25));
