// 8 kyu Did she say hallo
function validateHello(greetings) {
  const greets = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  greetings = greetings.toLowerCase();
  return greets.some((greet) => greetings.includes(greet));
}
