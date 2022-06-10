<template>
  <div class="search">
    <form @submit.prevent="setPokemonUrl">
      <input class="search__input" type="text" v-model="searchValue">
    </form>
  </div>
</template>

<script>
export default {
  name: "PokemonSearch",
  props: [
      'apiURL'
  ],
  data: () =>{
   return {
     searchValue: '',
   }
  },
  methods: {
    setPokemonUrl() {
      if(this.searchValue !== '')
        this.$emit('setPokemonUrl', this.apiURL + this.searchValue);
        this.searchValue = '';
    },
  },
}
</script>

<style lang="scss" scoped>
.search{
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-bottom: 10px;
  &__input{
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px 40px 10px 10px;
    width: 100%;
   }
}
</style>