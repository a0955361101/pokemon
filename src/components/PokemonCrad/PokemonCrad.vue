<script setup>
import { ref, toRefs } from 'vue';

const props = defineProps({
    pokeapiData: {
        type: Object,
        default: {}
    },
    pokemonCardShow: {
        type: Boolean,
    },
    pokeapiImg: {
        type: String,
    }
});
const { pokeapiData, pokemonCardShow } = toRefs(props);

const handlePokeapiNumber = (number) => {
    return number !== undefined ? number.toString().padStart(3, "0") : '';
};

</script>

<template>
    <div class="pokemon-card" v-if="pokemonCardShow">
        <div class="pokemon-card-img">
            <img v-bind:src="pokeapiImg" alt="">
        </div>
        <div class="pokemon-card-content">
            <div>編號: #{{ handlePokeapiNumber(pokeapiData.id) }}</div>
            <div>名稱: {{ pokeapiData.name }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.pokemon-card {
    width: 10%;
    min-height: 12rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #bbb;
    border-radius: 0.5rem;

    .pokemon-card-img {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        background-color: #eee;
        margin-bottom: 1rem;
    }

    .pokemon-card-content {
        width: 100%;

        div {
            &:nth-child(1) {
                margin-bottom: .75rem;
            }
        }
    }
}
</style>