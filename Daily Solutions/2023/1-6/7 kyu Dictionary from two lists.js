// 7 kyu Dictionary from two lists
function createDict(keys, values) {
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }
  for (let key in obj) {
    if (obj[key] === undefined) {
      obj[key] = null;
    }
  }
  return obj;
}
