<template>
    <div class="details">

      <div class="details__view" v-if="show">
        <div v-if="pokemon" class="details__image">
          <img :src="imageURL + pokemon.id + '.png'" alt="">
        </div>
        <div v-if="pokemon" class="details__data">
          <h2 class="details__title">{{ pokemon.name }}</h2>
          <div class="details__property">
            <div class="left">Base Experience</div>
            <div class="right">{{ pokemon.base_experience }} XP</div>
          </div>
          <div class="details__property">
            <div class="left">Height</div>
            <div class="right">{{ pokemon.height / 10 }} m</div>
          </div>
          <div class="details__property">
            <div class="left">Weight</div>
            <div class="right">{{ pokemon.weight / 10 }} kg</div>
          </div>
          <h3>Pokemon Types</h3>
          <div class="details__types">
            <div class="details__type"
                 v-for="(value, index) in pokemon.types"
                 :key="'value'+index">
              {{ value.type.name }}
            </div>
          </div>
          <h3>Abilities</h3>
          <div class="details__abilities">
            <div class="details__ability"
                 v-for="(value, index) in pokemon.abilities"
                 :key="'value'+index">
              {{ value.ability.name }}
            </div>
          </div>
        </div>
        <h2 v-else>The pokemon was not found</h2>
        <button class="details__btn-close" @click="closeDetails">close</button>
      </div>
      <i v-else class="fas fa-spinner fa-spin"></i>
    </div>
</template>

<script>
export default {
  props: [
    'pokemonUrl',
    'imageURL'
  ],
  data: () => {
    return {
      show: false,
      pokemon: {}
    }
  },
  methods: {
    fetchData() {
      let request = new Request(this.pokemonUrl);
      fetch(request)
          .then((resp) => {
            if(resp.status === 200)
              return resp.json();
          })
          .then((data) => {
            this.pokemon = data;
            this.show = true;
          })
          .catch((error) => {
            console.log(error);
          })
    },
    closeDetails() {
      this.$emit('closeDetails');
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style lang="scss" scoped>
.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
.details {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  padding: 90px 10px 10px;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  background: rgba($color: #000000, $alpha: .7);
  &__view {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow-y: auto;
    width: 100%;
    max-width: 510px;
    padding: 50px 0 0;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0,0,0,.2),
    0 10px 10px rgba(0,0,0,.2);
  }
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    top: -60px;
    img {
      width: 170px;
      height:  170px;
    }
  }
  &__title {
    text-transform: capitalize;
  }
  &__data {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 40px;
  }
  &__property{
    border-bottom: #353763 1px solid;
    padding-bottom: 5px;
    padding-top: 15px;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  &__types{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  &__type{
    border-radius: 50px;
    background-color:#353763;
    color: white;
    padding: 5px 30px;
  }
  &__abilities {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  &__ability{
    border-radius: 50px;
    background-color: #a4a7db;
    color: white;
    padding: 5px 30px;
  }
  &__btn-close{
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #efefef;
    padding: 10px 20px;
    margin-bottom: 20px;
    font-size: 1.2rem;
    cursor: pointer;
  }
}
</style>