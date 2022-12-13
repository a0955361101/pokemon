<script setup>
import axios from 'axios';
import { ref } from 'vue';
import PokemonCrad from '../components/PokemonCrad/PokemonCrad.vue';
const pokeapiData = ref({});
const pokeapiNumber = ref(null);
const pokemonCardShow = ref(false);
const pokeapiImg = ref('');

const getPokemonData = () => {
    axios(`https://pokeapi.co/api/v2/pokemon/${pokeapiNumber.value}`)
        .then((res) => {
            pokeapiData.value = res.data;
            pokeapiImg.value = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeapiNumber.value}.png`;
        });
    pokemonCardShow.value = true;
};

</script>

<template>
    <input type="text" placeholder="請輸入編號" v-model="pokeapiNumber">
    <button @click="getPokemonData">click</button>
    <PokemonCrad :pokeapi-data="pokeapiData" :pokemon-card-show="pokemonCardShow" :pokeapi-img="pokeapiImg">
    </PokemonCrad>
</template>

