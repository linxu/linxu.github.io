<template>
  <header id="sticker">
    <h2 id="titleName" class="sectionHead">{{ $t('bio.name') }}</h2>
    <Socials />
  </header>
</template>

<script>
import Velocity from "velocity-animate";
import Socials from "./Socials.vue";
export default {
  name: "Header",
  components: {
    Socials
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var sticker = document.getElementById("sticker");
      Velocity(sticker, "stop", true);
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 140) {
        Velocity(sticker, { top: "0px" }, { duration: 500 });
      } else {
        Velocity(sticker, { top: "-60px" }, { duration: 500 });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2#titleName:before {
  background-position: -90px bottom;
}
#sticker {
  position: fixed;
  top: -60px;
  left: 0;
  right: 0;
  background: #fff;
  background: rgba(255, 255, 255, 0.98);
  height: 55px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
#sticker h2.sectionHead {
  border: none;
  margin: 0 0 0 50px;
  line-height: 55px;
  padding: 0 0 0 8px;
}
#sticker h2.sectionHead:before {
  left: -40px;
  top: 5px;
}
#sticker #socialIcons {
  top: 10px;
  right: 15px;
}
body.respond #sticker {
  display: none;
}
</style>
