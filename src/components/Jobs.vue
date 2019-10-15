<template>
  <div>
    <h2 id="clock" class="sectionHead">{{ $t('job.title') }}</h2>

    <ul id="jobs">
      <li v-for="item in jobs" :key="item.name" >
        <div class="details">
          <h3>{{item.name}}</h3>
          <h4>{{item.role}}</h4>
          <h5>{{item.date}}</h5>
        </div>
        <p>{{item.desc}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobs: this.$i18n.getLocaleMessage(this.$i18n.locale).job.jobs
    };
  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul#jobs,
ul#schools,
ul#recommends,
ul#seenOn {
  margin: 0;
  list-style: none;
}

ul#jobs li,
ul#schools li,
ul#recommends li {
  margin: 0 0 20px 0;
  clear: both;
}

ul#jobs li .details,
ul#schools li .details,
ul#recommends li .details {
  float: left;
  width: 40%;
}
ul#jobs li p,
ul#schools li > p,
ul#recommends li > p {
  float: right;
  width: 57%;
  margin-bottom: 25px;
}

.details h5 {
  font-style: italic;
}
</style>
