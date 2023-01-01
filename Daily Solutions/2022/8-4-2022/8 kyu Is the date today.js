// 8 kyu Is the date today
function isToday(date) {
  const currentDate = new Date(Date.now());
  return currentDate.toDateString() === date.toDateString();
}
