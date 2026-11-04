function createScoreManager(number) {
  let score = number;

  return {
    add(points) {
      score += points;
      return score;
    },
    getScore() {
      return score;
    }
  }
};

const scoreA = createScoreManager(10);
const scoreB = createScoreManager(5);

console.log(scoreA.add(2)); // 12
console.log(scoreB.add(1)); // 6
console.log(scoreA.getScore()); // 12
console.log(scoreB.getScore()); // 6

let isReady = false;

function init() {
  isReady = true;
  console.log('初期化完了');

  Promise.resolve().then(() => {
    if (isReady) {
      console.log('処理開始');
    } else {
      console.log('まだ準備できていません');
    }
  });
}

init();
