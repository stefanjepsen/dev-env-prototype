<template>
    <div>
        <p>{{ name }}</p>
        <input v-model="name">
    </div>
</template>

<script>
    export default {
        name: 'VueExample',
        data () {
            return {
                name: 'Bruce Lee'
            };
        }
    }
</script>