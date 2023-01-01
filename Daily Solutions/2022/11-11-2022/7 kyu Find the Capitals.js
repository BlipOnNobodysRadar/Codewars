// 7 kyu Find the Capitals
function capital(capitals) {
  return capitals.map((obj) =>
    obj.state
      ? `The capital of ${obj.state} is ${obj.capital}`
      : `The capital of ${obj.country} is ${obj.capital}`
  );
}
