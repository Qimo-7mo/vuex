<template>
    <div>
        count:{{ $store.state.count }}
        <br>

        <button @click="subOne">-1</button>
    </div>
</template>
<script>
export default {
    methods:{
        subOne(){
            this.$store.dispatch("jiayi");
        }
    }
}
</script>
