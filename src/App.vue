<script setup>
import NavBar from './components/NavBar/NavBar.vue';
</script>

<template>
    <NavBar :paths="[
        { id: 0, pageName: '屬性', url: '/' },
        { id: 1, pageName: '寶可夢', url: '/pokemon' },
    ]">
    </NavBar>
    <router-view></router-view>
</template>

<style scoped>

</style>
