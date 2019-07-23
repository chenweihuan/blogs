<template>
  <div @click="clickHander">ComC{{productContent}}</div>
</template>
<script>
import { get } from "vuex-pathify";
export default {
  computed: {
    productContent: get("productStore/productContent")
  },
  mounted() {
    console.log(store.get("productStore/productContent")); //获取state
    console.log(store.get("productStore/product")); //获取getters
    store.set("productStore/ITEMS", 222); //触发mutations
    store.set("productStore/Change", 333); //触发actions
  },
  methods: {
    clickHander() {
      store.set("productStore/ITEMS", 444);
    }
  }
};
</script>

