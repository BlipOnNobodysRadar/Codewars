// 7 kyu Return substring instance count
function solution(fullText, searchText) {
  return (
    (fullText.length - fullText.split(searchText).join("").length) /
    searchText.length
  );
}
