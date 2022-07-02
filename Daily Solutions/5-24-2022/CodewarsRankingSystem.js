// https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/javascript

class User {
    constructor() {
      this.rank = -8;
      this.progress = 0;
      
    }
    incProgress(activityRank) {
      if(activityRank > 8 || activityRank < -8 || activityRank === 0) {
        throw new Error('invalid activity rank');
      }
      let rankDiff = activityRank - this.rank;
      if(Math.sign(activityRank) === 1 && Math.sign(this.rank) === -1) {
          rankDiff-=1;
      } else if(Math.sign(activityRank) === -1 && Math.sign(this.rank) === 1) {
          rankDiff+=1;
      }

      
      if(Math.sign(rankDiff) === -1 && Math.abs(rankDiff) >= 2 || this.rank === 8) return;
      if(this.rank === activityRank) {
        this.progress+=3;
        this.updateRank();
      }
      if(Math.sign(rankDiff) === -1 && Math.abs(rankDiff) === 1) {
        this.progress+=1;
        this.updateRank();
      }
      if(this.rank < activityRank) {
        this.progress+= 10*rankDiff*rankDiff;
        this.updateRank();
      }
    }
    updateRank() {
      while(this.progress >= 100) {
        this.progress = this.progress - 100;
        this.rank = this.rank+1;
        if(this.rank === 8) {
          this.progress = 0;
          break;
        }
        if(this.rank === 0) this.rank = 1;
      }
    }
  }
