<template>
  <div class="bg-[url('/about.jpg')] h-72 rounded-lg">
    <div class="flex h-full w-full items-center justify-center text-center">
      <h3 class="italic text-2xl font-semibold uppercase text-white">about</h3>
    </div>
  </div>
  <div class="container mx-auto my-4 px-4">
    <section>
      <div class="w-full">
        <div class="mt-10 flex">
          <div class="text-center w-1/3">
            <div class="items-center justify-center">
              <UAvatar
                size="3xl"
                src="https://storage.googleapis.com/zenn-user-upload/avatar/94fb08f677.jpeg"
                alt="Avatar"
              />
            </div>
            <div class="space-y-2">
              <span class="font-semibold">kkoouuya</span>
              <div class="flex space-x-2 justify-center">
                <div class="underline">X</div>
                <div class="underline">Github</div>
                <div class="underline">Zenn</div>
              </div>
              <div>
                <span>3年目のエンジニアです。</span>
              </div>
            </div>
          </div>
          <div class="p-6 border-l-2 w-2/3">
            <p class="break-words leading-relaxed">
              このブログはkkoouuyaが頑張って作成しています。学んだ技術についてたんたんと書いていきます。
              <br />息抜きに技術以外のことも投稿します。毎週日曜日の夜くらいに更新されます。
              <br />JavaScript / TypeScript / Vue.js / Nuxt.js / AWS /あたり。
              趣味はアニメ、映画。
            </p>
            <NuxtLink to="/blog" class="text-indigo-500 hover:underline"
              >記事を読む→</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
