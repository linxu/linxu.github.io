<template>
  <div>
    <h2 id="tools" class="sectionHead">{{ $t('skill.title') }}</h2>

    <ul id="skills">
      <li class="skill" v-for="item in data.skill.skills" :key="item.name" :class="'s' + item.weight">
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <div class="clear"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Velocity from "velocity-animate";
export default {
  name: "Kills",
  computed: mapState(["data"]),
  methods: {
    onShow : function() {
      var tags = document.getElementsByClassName("skill");
      for (var i = 0; i < tags.length; i++) {
        Velocity(tags[i], { right: "0%" }, { duration: 800, delay: 100 * i });
      }
    }
  }, 
  mounted: function() {
    this.onShow();
  },
  updated: function() {
    this.onShow();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2#tools:before {
  background-position: left top;
}
ul#skills {
  margin: 0;
  width: 100%;
  overflow: hidden;
}
ul#skills.ready {
  background: none;
}
ul#skills li {
  position: relative;
  right: 100%;
  background-color: #444;
  color: #fff;
  font: bold 9px/20px sans-serif;
  letter-spacing: 1px;
  margin-bottom: 3px;
  padding: 3px 1.1428571428571428% 0;
  text-transform: uppercase;
  z-index: 1;
}
ul#skills li:after {
  content: "";
  position: absolute;
  top: 0;
  right: 5px;
  line-height: 26px;
  width: 50px;
  text-align: right;
  color: #aaa;
}
ul#skills li.s100:after {
  content: "100%";
}
ul#skills li.s90:after {
  content: "90%";
}
ul#skills li.s80:after {
  content: "80%";
}
ul#skills li.s70:after {
  content: "70%";
}
ul#skills li.s60:after {
  content: "60%";
}
ul#skills li.s50:after {
  content: "50%";
}
ul#skills li.s40:after {
  content: "40%";
}
ul#skills li.s30:after {
  content: "30%";
}
ul#skills li.s20:after {
  content: "20%";
}
ul#skills li.s10:after {
  content: "10%";
}

ul#skills li:hover {
  background: #222;
}

li.s100 {
  width: 97.71428571428571%;
}
li.s90 {
  width: 87.71428571428571%;
}
li.s80 {
  width: 77.71428571428571%;
}
li.s70 {
  width: 67.71428571428571%;
}
li.s60 {
  width: 57.714285714285715%;
}
li.s50 {
  width: 47.714285714285715%;
}
li.s40 {
  width: 37.714285714285715%;
}
li.s30 {
  width: 27.714285714285715%;
}
li.s20 {
  width: 17.714285714285715%;
}
li.s10 {
  width: 7.714285714285714%;
}
</style>
