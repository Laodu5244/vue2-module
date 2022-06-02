<template>
  <div>
    <h2>Home组件的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >news
          </router-link>
        </li>
        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/msg"
            >msg
          </router-link>
        </li>
      </ul>
      <!-- 缓存路由组件,切换时,保持挂载,并且不会销毁(include属性指向的是组件名) -->
      <keep-alive include="TheNews">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHome",
};
</script>
