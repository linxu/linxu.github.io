<template>
  <div id="socialIcons">
    <a class="githubIcon" target="_blank" href="https://github.com/linxu"></a>
    <a class="giteeIcon" target="_blank" href="https://gitee.com/linxu"></a>
  </div>
</template>

<script>
export default {
  name: "Socials"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.giteeIcon {
  width: 32px;
  height: 32px;
  margin: 0 5px 0 5px;
  display: inline-block;
  background-image: url("../assets/gitee.png");
  border: none;
}
.githubIcon {
  width: 32px;
  height: 32px;
  display: inline-block;
  background-image: url("../assets/github.png");
  border: none;
}
#socialIcons {
  width: 74px;
  height: 32px;
  position: absolute;
  top: -35px;
  right: 0;
  text-align: right;
}
</style>
