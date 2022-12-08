<script setup>



</script>

<template>
    <div class="navbar">
        <div class="ball">
            <div class="ball-top"></div>
            <div class="ball-item"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    box-shadow: 3px 5px 5px #eee;
    height: 40px;
    position: relative;
    margin-bottom: 2rem;
}

.ball {
    background-color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 26px);
    border: 1px solid #ddd;
    top: 13px;


    .ball-top {
        width: 50px;
        height: 25px;
        background: red;
        border-radius: 50px 50px 0 0;
    }

    .ball-item {
        background-color: var(--black);
        width: 50px;
        height: 3px;
        position: absolute;
        top: calc(50% - 1px);
    }

    &::after {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        background-color: var(--black);
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 6px);
        left: calc(50% - 6px);
    }

    &::before {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 3px);
        left: calc(50% - 3px);
        z-index: 100;
    }
}
</style>