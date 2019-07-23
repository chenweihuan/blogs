<template>
    <div>{{productContent}}</div>
</template>
<script>
import { get } from "vuex-pathify";
export default {
    computed: {
        productContent: get("productStore/productContent")
    },
}
</script>

