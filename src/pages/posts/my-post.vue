<script setup>
import { useHead } from "@unhead/vue"

useHead({
  title: "Adam blog",
  meta: [
    {
      name: "description",
      content: "歡迎來到部落格",
    },
    { property: "og:title", content: "Hi! 我是 adam" },
    { property: "og:description", content: "Hi! 我是 adam" },
    {
      property: "og:image",
      content: "https://bruce-fe-fb.web.app/image/avator.png",
    },
  ],
})
</script>

<template>
  <header class="container px-4">
    <div class="py-6 flex justify-between items-center">
      <router-link
        to="/"
        class="flex items-center"
      >
        <HeroiconsOutlineBookOpen
          class="w-10 h-10 text-violet-700"
        ></HeroiconsOutlineBookOpen>
        <div class="ml-2 text-gray-900 text-xl font-medium">Adam blog</div>
      </router-link>

      <div>
        <a
          href="https://github.com/adam5096"
          target="_blank"
          class="text-gray-500 hover:text-violet-700"
        >
          <RiGithubLine class="w-6 h-6"></RiGithubLine>
        </a>
      </div>
    </div>
  </header>

  <article class="container px-4 py-10">
    <!-- title -->
    <div class="text-center">
      <h1 class="text-5xl font-medium tracking-wider">我的文章</h1>
      <div class="mt-4 text-gray-500 tracking-wider">2024/11/23</div>
    </div>
    <!-- content -->
    <div
      class="mt-16 mx-auto prose prose-headings:font-medium prose-a:text-violet-700 hover:prose-a:text-violet-500 lg:prose-xl"
    >
      <h2>Hi~ 我是 Adam</h2>
      <p>
        這是我的 github:
        <a
          href="https://github.com/adam5096"
          target="_blank"
          >做做做, 想想想, 查查查</a
        >
      </p>
      <img
        class="w-24 h-24"
        src="https://bruce-fe-fb.web.app/image/avator.png"
        alt="avatar"
      />
      <ul>
        <li><em>喜好</em>: 心理學、羽毛球、電視電影</li>
        <li><em>最近喜歡的歌手</em>: ROSÉ</li>
        <li><em>遊戲</em>: 神魔之塔, 鬥陣特攻, 暗黑破壞神III</li>
      </ul>
      <p>Youtube, Hiskio, Udemy, 買課學網頁前後端, Vue.js, Tailwind css,</p>
      <blockquote>
        一週 7 code
        <br />
        - Adam
      </blockquote>
    </div>
  </article>
</template>
請問tailwindcss中的插件 prose有哪些常見用途?謝謝
