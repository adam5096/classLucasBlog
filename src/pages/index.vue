<script setup>
import { useHead } from "@unhead/vue"

useHead({
  title: "Adam blog",
  meta: [
    {
      name: "description",
      content: "歡迎來到部落格",
    },
  ],
})
</script>

<template>
  <header class="container px-4">
    <div class="py-6 flex justify-between items-center">
      <router-link to="/posts/my-post">
        <HeroiconsOutlineBookOpen
          class="w-10 h-10 text-violet-700"
        ></HeroiconsOutlineBookOpen>
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

    <div class="pt-6 pb-12 border-b border-gray-500">
      <h1
        class="text-3xl text-gray-900 tracking-wide font-medium sm:text-5xl lg:text-6xl"
      >
        Adam blog
      </h1>
      <p class="mt-6 text-xl text-gray-600 tracking-wider">歡迎來到部落格📫</p>
    </div>
  </header>
  <main class="container px-4 py-12">
    <ul class="space-y-10 sm:space-y-16">
      <li
        class="sm:flex"
        v-for="(item, i) in 4"
        :key="i"
      >
        <router-link to="/posts/my-post">
          <img
            class="aspect-video object-cover rounded-lg sm:w-[300px]"
            src="https://bruce-fe-fb.web.app/image/avator.png"
            alt="avatar"
          />
        </router-link>

        <div class="mt-4 sm:mt-0 sm:ml-6">
          <h4 class="text-2xl font-bold tracking-wide">
            <router-link
              to="/posts/my-post"
              class="text-gray-900 hover:text-violet-600"
            >
              我的文章
            </router-link>
          </h4>
          <div class="mt-2 text-gray-500 text-sm tracking-wider">
            2024/11/23
          </div>
          <p class="mt-3 text-gray-600">
            Hi~ 我是 Adam~ 歡迎來到 ??? 這是我的 ??? Vue3 / Tailwind CSS /
            Nodejs
          </p>

          <div class="mt-4">
            <router-link
              to="/posts/my-post"
              class="text-violet-600 hover:text-violet-500 tracking-wider"
            >
              更多連結
            </router-link>
          </div>
        </div>
      </li>
    </ul>

    <ul class="mt-12 flex justify-center items-center">
      <li>
        <router-link
          to="/posts/my-post"
          class="flex justify-center items-center h-9 px-3 text-gray-500 hover:text-violet-700 text-lg font-medium"
        >
          <HeroiconsOutlineArrowLeft></HeroiconsOutlineArrowLeft>
        </router-link>
      </li>
      <li v-for="(item, i) in 3">
        <router-link
          to="/posts/my-post"
          class="flex justify-center items-center h-9 px-3 text-gray-500 hover:text-violet-700 text-lg font-medium"
          >{{ item }}</router-link
        >
      </li>
      <li>
        <router-link
          to="/posts/my-post"
          class="flex justify-center items-center h-9 px-3 text-gray-500 hover:text-violet-700 text-lg font-medium"
        >
          <HeroiconsOutlineArrowRight></HeroiconsOutlineArrowRight>
        </router-link>
      </li>
    </ul>
  </main>
</template>
