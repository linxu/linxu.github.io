<template>
  <div>
    <h2 id="titleName" class="sectionHead">{{ $t('bio.name') }}</h2>
    <div id="bio">
      <h2>{{ $t('bio.position') }}</h2>
      <Socials />
      <p>{{ $t('bio.introduce') }}</p>
    </div>
  </div>
</template>

<script>
import Socials from "./Socials.vue";
export default {
  name: "Biography",
  components: {
    Socials
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bio {
  position: relative;
}
#bio #avatar {
  float: left;
  margin: 0 20px 0 0;
}
#bio h2 {
  font-size: 15px;
}
#bio p {
  clear: left;
  margin: 40px auto;
  padding: 40px 45px;
  max-width: 600px;
  background: #fbfbfb;
  border: 1px solid #f3f3f3;
  border-radius: 8px;
  position: relative;
  border-width: 0 1px 1px;
  border-color: #fff #f3f3f3 #e8e8e8;
  line-height: 1.6em;
}
h2#titleName {
  margin: 20px -60px 10px;
}
h2#titleName:before {
  background-position: -90px bottom;
}
body.respond #bio h2 {
  font-size: 12px;
}
body.respond #bio p {
  padding: 0;
  background: #fff;
  max-width: 100%;
  border: none;
}
body.respond h2#titleName {
  margin: 20px 0 10px -60px;
}
</style>
