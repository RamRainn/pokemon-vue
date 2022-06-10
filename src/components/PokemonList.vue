<template>
  <div class="list">
    <div class="list__card" v-for="(pokemon, index) in pokemons"
              :key="'poke'+index"
    @click="setPokemonUrl(pokemon.url)">
      <img class="list__image" :src="imageURL + pokemon.id + '.png'" alt="">
            <h3 class="list__title">{{pokemon.name}}</h3>
    </div>
    <div id="scroll-trigger" ref="infinitescrolltrigger">
      <div class="list__loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonList",
  props: [
      'imageURL',
      'apiURL'
  ],
  data: () => {
    return {
      pokemons: [],
      nextUrl: '',
      currentUrl: ''
    }
  },
  methods: {
    fetchData() {
      let req = new Request(this.currentUrl);
      fetch(req)
          .then((resp) => {
            if(resp.status === 200)
              return resp.json();
          })
          .then((data) => {
            this.nextUrl = data.next;
            data.results.forEach(pokemon => {
              pokemon.id = pokemon.url.split('/')
                  .filter(function (part) {return !!part}).pop();
              this.pokemons.push(pokemon);
            })
          })
          .catch((error) => {
            console.log(error)
          })
    },
    scrollTrigger(){
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.intersectionRatio > 0 && this.nextUrl) {
            this.next();
          }
        })
      });
      observer.observe(this.$refs.infinitescrolltrigger)
    },
    next() {
      this.currentUrl = this.nextUrl;
      this.fetchData();
    },
    setPokemonUrl(url){
      this.$emit('setPokemonUrl', url);
    }
  },
  watch: {
    pokemons: {
      handler() {
        localStorage.setItem('pokemons',JSON.stringify(this.pokemons))
      },
      deep: true
    }
  },
  created() {
    this.currentUrl = this.apiURL;
    this.fetchData();
  },
  mounted() {
    this.scrollTrigger()
    if (localStorage.getItem("pokemons")){
      this.pokemons = JSON.parse(localStorage.getItem("pokemons"))
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  &__card{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    background-color: #fff;
    height: 170px;
    text-align: center;
    text-transform: capitalize;
    border-radius: 10px;
    cursor: pointer;
  }
  &__title{
    font-weight: 700;
  }
  &__card:hover{
    background-color: #a4a7db;
  }
  &__image{
    height: 120px;
    width: 120px;
  }
  &__loader,
  &__loader:before,
  &__loader:after {
    border-radius: 50%;
  }
  &__loader {
    color: #ffffff;
    font-size: 11px;
    text-indent: -99999em;
    margin: 55px auto;
    position: relative;
    width: 10em;
    height: 10em;
    box-shadow: inset 0 0 0 1em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  &__loader:before,
  &__loader:after {
    position: absolute;
    content: '';
  }
  &__loader:before {
    width: 5.2em;
    height: 10.2em;
    background: #353763;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    -webkit-transform-origin: 5.1em 5.1em;
    transform-origin: 5.1em 5.1em;
    -webkit-animation: load2 2s infinite ease 1.5s;
    animation: load2 2s infinite ease 1.5s;
  }
  &__loader:after {
    width: 5.2em;
    height: 10.2em;
    background: #353763;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 4.9em;
    -webkit-transform-origin: 0.1em 5.1em;
    transform-origin: 0.1em 5.1em;
    -webkit-animation: load2 2s infinite ease;
    animation: load2 2s infinite ease;
  }
  @-webkit-keyframes load2 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load2 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

}
#scroll-trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  font-size: 2rem;
  color: aquamarine;
}
</style>