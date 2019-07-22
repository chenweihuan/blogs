<template>
  <div>
    <div @click="changeProductContent('mutions')">ComB{{productContent}}</div>
    <strong @click="changeProductContentByAction('click')">{{getProductContent}}</strong>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      productContent: state => state.productStore.productContent
    }),
    ...mapGetters({
      getProductContent: "productStore/getProductContent"
    })
  },
  methods: {
    ...mapMutations({
      changeProductContent:"productStore/changeProductContent" // 将 `this.changeProductContent()` 映射为 `this.$store.commit('changeProductContent')`
    }),
    ...mapActions({
      changeProductContentByAction: "productStore/changeProductContentByAction"
    })
  }
};
</script>

