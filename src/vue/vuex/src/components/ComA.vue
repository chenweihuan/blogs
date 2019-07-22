<template>
    <div>a</div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    mounted(){
        console.log(this.$store.state.productStore.productContent);
        console.log(this.$store.getters["productStore/getProductContent"]);
        setTimeout(()=>{
            this.$store.commit("productStore/changeProductContent","2222222222");
            console.log(this.$store.state.productStore.productContent);
        },500)
        this.$store.dispatch("productStore/changeProductContentByAction","33333333");
        setTimeout(()=>{
            console.log(this.$store.state.productStore.productContent);
        },2000)
    }
}
</script>

