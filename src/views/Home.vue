<template>
  <div>
    <Header />
    <div id="wrapper">
      <locale />
      <Biography />
      <Schools />
      <Kills />
      <Jobs />
      <Projects />
      <Contact />
    </div>
    <Footer />
  </div>
</template>

<script>
var respond = function() {
  if (document.body.clientWidth < 820) {
    document.body.className = "respond";
  } else {
    document.body.className = "";
  }
};
window.onresize = respond;
window.onload = respond;

import Locale from "@/components/Locale.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Biography from "@/components/Biography.vue";
import Kills from "@/components/Kills.vue";
import Jobs from "@/components/Jobs.vue";
import Schools from "@/components/Schools.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Locale,
    Header,
    Footer,
    Biography,
    Kills,
    Jobs,
    Schools,
    Projects,
    Contact
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  -moz-transition-property: background-color;
  -moz-transition-duration: 0.2s;
  -moz-transition-timing-function: linear;
  -webkit-transition-property: background-color;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-timing-function: linear;
  -o-transition-property: background-color;
  -o-transition-duration: 0.2s;
  -o-transition-timing-function: linear;
  transition-property: background-color;
  transition-duration: 0.2s;
  transition-timing-function: linear;
}

body {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.2em;
  background-color: #f3f3f3;
  background-image: url("../assets/bg.png");
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: 0px 0px;
  color: #444;
  height: 100%;
  width: auto;
}

body.respond {
  background: #fff;
}
ul {
  margin: 0 0 0 15px;
  position: relative;
}
li {
  margin: 0 0 5px 0;
  font-size: 13px;
}
p {
  text-align: justify;
  font-size: 13px;
}
.clear {
  clear: both;
}
a {
  color: #444;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
#wrapper {
  max-width: 700px;
  margin: 60px auto 30px;
  padding: 60px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
}
h2.sectionHead {
  clear: both;
  font: bold 20px/12px "verdana", sans-serif;
  margin: 60px -60px;
  border-left: 52px solid #444;
  color: #444;
  padding: 1px 0 0 8px;
  letter-spacing: -2px;
  text-transform: uppercase;
  position: relative;
}
h2.sectionHead:before {
  content: "";
  position: absolute;
  width: 45px;
  height: 45px;
  left: -105px;
  top: -15px;
  background-image: url("../assets/icons.png");
}
body.respond #wrapper {
  margin: 0 auto;
  padding: 30px;
  background: #fff;
  box-shadow: none;
}
body.respond p {
  text-align: left;
}
body.respond h2.sectionHead {
  font-size: 15px;
  letter-spacing: -1px;
  margin: 40px 0 50px -60px;
  padding-left: 8px;
}
</style>
