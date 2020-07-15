<template>
    <div>
        <button class="action__button" @click="onClick">{{ action_name }}</button>
    </div>
</template>

<script>
export default {
  name: 'ActionControl',
  props: {
    action_name: String,
    action_type: String
  },
  methods: {
    onClick () {
      switch (this.action_type) {
        case 'drink':
          this.$store.commit('deleteDrought', 10)// Почему тут не нужна ';'?
          this.$store.commit('deleteHealth', 2)
          this.$store.commit('deleteTiredness', 5)
          break
        case 'eat':
          this.$store.commit('deleteHunger', 10)
          this.$store.commit('deleteHealth', 4)
          this.$store.commit('deleteTiredness', 5)
          break
        case 'work':
          this.$store.commit('addDrought', 30)
          this.$store.commit('addHunger', 20)
          this.$store.commit('addTiredness', 10)
          break
        case 'sport':
          this.$store.commit('addHealth', 20)
          this.$store.commit('addHunger', 10)
          this.$store.commit('addDrought', 20)
          this.$store.commit('addTiredness', 15)
          break
        default:
          alert('Действие не определено')
          break
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .action__button{
        background-color: #33d398;
        color: #fff;
        width: 90%;
        height: 30px;
        border-radius: 20px;
        border: 0;
        margin: 5px 0 5px 0;

        &:hover{
            background-color:  #2c8e6a;
        }
    }
</style>
