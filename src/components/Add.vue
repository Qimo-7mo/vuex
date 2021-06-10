<template>
    <div>
        count:{{ $store.getters.count }}
        <br>
        <button @click="add">+1</button>
    </div>
</template>
<script>
export default {
    methods:{
        add(){
            this.$store.commit("addOne");
        },
    }
}
</script>
