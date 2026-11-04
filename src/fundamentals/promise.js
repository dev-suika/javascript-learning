function init(isSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        console.log("初期化完了");
        resolve("処理開始");
      } else {
        reject(new Error("初期化失敗"));
      }
    }, 1000);
  });
}
// init().then((message) => {
//   console.log(message);
// });
init(false)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// 想定しているHTML
// <div class="p-hero">
//   <div class="p-hero__image">
//     <img src="/assets/img/hero.jpg" alt="">
//   </div>
//   <p class="p-hero__error" hidden>画像の読み込みに失敗しました</p>
// </div>

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      resolve("画像の読み込み完了");
    };
    img.onerror = () => {
      reject(new Error("画像の読み込みエラー"));
    };

    img.src = src;
  });
}

function initHero() {
  // ここを自分で実装
  const $target = document.querySelector('.p-hero__image img');
  const $error = document.querySelector('.p-hero__error');
  loadImage($target.src)
    .then(() => {
      gsap.to($target, {
        opacity: 1,
        duration: 1
      });
    })
    .catch((error) => {
      $error.removeAttribute('hidden');
      console.error(error);
    });
}

initHero();
