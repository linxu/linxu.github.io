<template>
  <div class="locale">
    <a href="javascript:void(0)" @click="changeLang('zh')" :class="{active:$i18n.locale == 'zh'}">中文</a> 
    /
    <a href="javascript:void(0)" @click="changeLang('en')" :class="{active:$i18n.locale == 'en'}">English</a>
  </div>
</template>

<script>
export default {
  name: "Locale",
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      this.$store.commit('changeLang');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.locale {
  position: absolute;
  top: 10px;
  right: 20px;
}
a {
  font-size: 13px;
  color: #888;
}
a.active {
  color: #000;
  text-decoration: underline;
}
</style>
