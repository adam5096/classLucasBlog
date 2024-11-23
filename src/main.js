import { ViteSSG } from "vite-ssg"
// import { createApp } from "vue"
// import { createRouter, createWebHistory } from "vue-router"
import routes from "~pages"
// 匯入樣式檔案 !!!
import "./index.css"
import App from "./App.vue"

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

// const app = createApp(App)
// app.use(router)
// app.mount("#app")

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  },
)
