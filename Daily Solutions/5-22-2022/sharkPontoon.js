// https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin) sharkSpeed = sharkSpeed/2;
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? 'Alive!' : 'Shark Bait!';
  }
