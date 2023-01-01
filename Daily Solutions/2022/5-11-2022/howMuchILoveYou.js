// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

function howMuchILoveYou(nbPetals) {
    let response = {
      1: 'I love you',
      2: 'a little',
      3: 'a lot',
      4: 'passionately',
      5: 'madly',
      6: 'not at all'
    }
    return nbPetals % 6 === 0 ? response[6] : response[nbPetals % 6];
}
