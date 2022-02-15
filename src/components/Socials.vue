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
.socialIcon {
  width: 30px;
  height: 30px;
  margin: 0 0 0 3px;
  display: inline-block;
  background-image: url("../assets/social.png");
  border: none;
}
.socialIcon:hover {
  border: none;
}
#rssIcon {
  background-position: 0 0;
}
#youTubeIcon {
  background-position: -30px 0;
}
#vimeoIcon {
  background-position: -60px 0;
}
#twitterIcon {
  background-position: -90px 0;
}
#mySpaceIcon {
  background-position: -120px 0;
}
#dribbbleIcon {
  background-position: -150px 0;
}
#gplusIcon {
  background-position: -180px 0;
}
#facebookIcon {
  background-position: -210px 0;
}
#flickrIcon {
  background-position: -240px 0;
}
#favIcon {
  background-position: -270px 0;
}
#linkedinIcon {
  background-position: -300px 0;
}

#rssIcon:hover {
  background-position: 0 -30px;
}
#youTubeIcon:hover {
  background-position: -30px -30px;
}
#vimeoIcon:hover {
  background-position: -60px -30px;
}
#twitterIcon:hover {
  background-position: -90px -30px;
}
#mySpaceIcon:hover {
  background-position: -120px -30px;
}
#dribbbleIcon:hover {
  background-position: -150px -30px;
}
#gplusIcon:hover {
  background-position: -180px -30px;
}
#facebookIcon:hover {
  background-position: -210px -30px;
}
#flickrIcon:hover {
  background-position: -240px -30px;
}
#favIcon:hover {
  background-position: -270px -30px;
}
#linkedinIcon:hover {
  background-position: -300px -30px;
}
body.respond #socialIcons {
  height: 30px;
  margin-top: 20px;
  position: relative;
  right: auto;
  text-align: left;
  top: auto;
  width: 100%;
}
</style>
