<template>
  <div class="section">
    <PokemonSearch :apiURL="apiURL"  @setPokemonUrl="setPokemonUrl" />
    <PokemonList :imageURL="imageURL" :apiURL="apiURL" @setPokemonUrl="setPokemonUrl"/>
    <transition name="slide-fade" appear>
      <PokemonDetails v-if="showDetails" :imageURL="imageURL" :pokemonUrl="pokemonUrl" @closeDetails="closeDetails" />
    </transition>
  </div>
</template>

<script>
import PokemonSearch from "@/components/PokemonSearch";
import PokemonList from "@/components/PokemonList";
import PokemonDetails from "@/components/PokemonDetails";

export default {
  name: 'App',
  components: {
    PokemonSearch,
    PokemonDetails,
    PokemonList
  },
  data: () => {
    return  {
      apiURL: 'https://pokeapi.co/api/v2/pokemon/',
      imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
      pokemonUrl: '',
      showDetails: false
    }
},
  methods: {
    setPokemonUrl(url) {
        this.pokemonUrl = url;
        this.showDetails = true;
    },
    closeDetails(){
      this.pokemonUrl = '';
      this.showDetails = false;
    }
  },
  watch: {
    pokemon: {
      handler() {
        localStorage.setItem('pokemons',JSON.stringify(this.pokemonUrl))
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("pokemons")){
      this.books = JSON.parse(localStorage.getItem("pokemons"))
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
body {
  background-color: #353763;
}
.section{
  max-width: 1250px;
  margin: 0 auto;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
