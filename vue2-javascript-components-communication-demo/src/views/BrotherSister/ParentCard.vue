<template>
  <div class="card">
    <div class="card-header">
      <h5 v-text="theCardTitle"></h5>

      <button @click="momSaidChill" v-if="stopFighting()" class="btn">
        停止通讯
      </button>
    </div>

    <div class="card-body">
      <brother-card class="subcard"
        :messageSon="messageson"
        @brotherSaid="messageDaughter($event)"
      ></brother-card>

      <sister-card class="subcard"
        :messageDaughter="messagedaughter"
        @sisterSaid="messageSon($event)"
      ></sister-card>
    </div>
  </div>
</template>

<script>
import BrotherCard from "./BrotherCard";

import SisterCard from "./SisterCard";

export default {
  name: "ParentCard",

  data: () => ({
    theCardTitle: "父组件",

    messagedaughter: "",

    messageson: "",
  }),

  components: {
    BrotherCard,

    SisterCard,
  },

  methods: {
    messageDaughter(message) {
      this.messagedaughter = message;
    },

    messageSon(message) {
      this.messageson = message;
    },

    stopFighting() {
      if (this.messagedaughter && this.messageson) {
        return true;
      }

      return false;
    },

    momSaidChill() {
      (this.messagedaughter = ""), (this.messageson = "");
    },
  },
};
</script>

<style>
.card{
    border:solid;
    padding:50px;
    height:auto;
}
.subcard{
    border:solid;
    padding:0px;
}
</style>