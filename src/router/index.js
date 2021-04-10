import { createRouter, createWebHistory } from "vue-router";
import Bookmarks from "../views/Bookmarks.vue";
import Explore from "../views/Explore.vue";
import Home from "../views/Home.vue";
import Lists from "../views/Lists.vue";
import Messages from "../views/Messages.vue";
import More from "../views/More.vue";
import Notifications from "../views/Notifications.vue";
import Profile from "../views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Home_",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/bookmarks",
    name: "Bookmarks",
    component: Bookmarks,
  },
  {
    path: "/lists",
    name: "Lists",
    component: Lists,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/more",
    name: "More",
    component: More,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
