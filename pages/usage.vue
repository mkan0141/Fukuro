<template>
  <div class="flex flex-col items-center max-w-2xl m-auto mt-10">
    <span class="text-3xl font-bold">使い方</span>
    <div class="demo-chapter mt-5 text-lg">
      <div class="demo-chapter">
        <span>1. 「録画する画面を選択」ボタンを押し画面を選択します。</span>
        <img class="demo-img border border-gray-800 mt-4" src="~assets/img/demo1.png">
      </div>
      <div class="demo-chapter mt-10">
        <span class="flex">
          2. 録画したい画面が表示されたら
          <img src="~/assets/svg/rec.svg" class="w-6 h-6">
          をクリックして録画を開始します。
        </span>
        <img class="demo-img border border-gray-800 mt-4" src="~assets/img/demo2.png">
      </div>
      <div class="demo-chapter mt-10">
        <span class="flex">
          3.  
          <img src="~/assets/svg/stop.svg" class="ml-1 w-6 h-6">
          をクリックすると録画が終了します。「共有を停止」(画像の右下の青いボタン)を押すと、それ以降録画がされなくなるので注意して下さい。
        </span>
        <img class="demo-img border border-gray-800 mt-4 " src="~assets/img/demo3.png">
      </div>
    </div>
    <div class="flex flex-col items-center mt-20 mb-10">
      <span id="browser" class="text-3xl font-bold">対応ブラウザ</span>
      <span class="text-xl mt-5">Chrome, FireFox, Safari</span>
      <span class="text-xl">Opera, Microsoft Edge</span>
      <span class="mt-5">&#x26a0;スマートフォンからはご利用できません。</span>
      <span>&#x26a0;ブラウザのバージョンが低い場合、動作しない場合があります。</span>
    </div>
  </div>
</template>

<style scoped>
.demo-img {
  height: 30%;
  width: 30%;
}

.demo-chapter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>