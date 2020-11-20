<template>
  <div>
    <h1 style="color: deeppink"> Vue 动态组件 </h1>
    <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>

    <keep-alive>
      <component v-bind:is="currentTabComponent" class="tab"></component>
    </keep-alive>
  </div>
</template>

<script>
import TabArchive from './TabArchive'
import TabPosts from './TabPosts'

export default {
  name: "Dynamic",
  components: {
    TabArchive,
    TabPosts
  },
  data() {
    return {
      currentTab: "Posts",
      tabs: ["Posts", "Archive"]
    }
  },
  computed: {
    currentTabComponent: function () {
      console.log('computed currentTabComponent ->',this.currentTab);
      return "tab-" + this.currentTab.toLowerCase();
    }
  },
  updated() {
    console.log('currentTabComponent -->',this);
  }
}
</script>

<style scoped>
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}

.selected-post > :first-child {
  margin-top: 0;
  padding-top: 0;
}

</style>