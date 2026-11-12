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

// function initHero() {
//   // ここを自分で実装
//   const $target = document.querySelector(".p-hero__image img");
//   const $error = document.querySelector(".p-hero__error");
//   loadImage($target.src)
//     .then(() => {
//       gsap.to($target, {
//         opacity: 1,
//         duration: 1,
//       });
//     })
//     .catch((error) => {
//       $error.removeAttribute("hidden");
//       console.error(error);
//     });
// }

// initHero();

// function initHero() {
//   const $target = document.querySelector(".p-hero__image img");
//   const $error = document.querySelector(".p-hero__error");

//   loadImage($target.src)
//     .then(
//       (success) => {
//         gsap.to($target, {
//           opacity: 1,
//           duration: 1,
//         });
//       },
//       (failure) => {
//         $error.hidden = false;
//         console.error(failure);
//       },
//     )
//     .catch((error) => {
//       $error.hidden = false;
//       console.error(error);
//     });
// }

// Promise.resolve(10)
//   .then((value) => {
//     console.log("A:", value);
//     return value * 2;
//   })
//   .then((value) => {
//     console.log("B:", value);
//     throw new Error("失敗");
//   })
//   .catch((error) => {
//     console.log("C:", error.message);
//     return 50;
//   })
//   .then((value) => {
//     console.log("D:", value);
//     throw new Error("再失敗");
//   })
//   .then(
//     (value) => {
//       console.log("E:", value);
//     },
//     (error) => {
//       console.log("F:", error.message);
//     },
//   )
//   .catch((error) => {
//     console.log("G:", error.message);
//  });

// async / await
async function getUser() {
  return Promise.resolve({
    id: 1,
    name: "Taro",
  });
}

async function showUser() {
  try {
    const user = await getUser();
    console.log("ユーザー名:", user.name);
  } catch (error) {
    console.error("取得失敗:", error);
  }
}

showUser();

function initHero() {
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
      $error.hidden = false;
      console.error(error);
    });
}

async function initHero() {
  const $target = document.querySelector('.p-hero__image img');
  const $error = document.querySelector('.p-hero__error');

  try {
    const target = await loadImage($target.src);
    gsap.to($target, {
      opacity: 1,
      duration: 1,
    });
  } catch (error) {
    $error.hidden = false;
    console.error(error);
  }
}
