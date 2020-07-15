<template>
    <div class="parameter-container">
        <span class="container__paramName">{{ parameterName }}</span>
        <progress class="container__progress-control" max="100" v-bind:value="parameterValue"></progress>
    </div>
</template>

<script>
export default {
  name: 'Parameter',
  props: {
    type: String
  },
  computed: {
    parameterValue: function () {
      switch (this.type) {
        case 'health':
          return this.$store.state.health
        case 'tiredness':
          return this.$store.state.tiredness
        case 'hunger':
          return this.$store.state.hunger
        case 'drought':
          return this.$store.state.drought
        default:
          return 0
      }
    },
    parameterName: function () {
      switch (this.type) {
        case 'health':
          return 'Здоровье'
        case 'tiredness':
          return 'Усталость'
        case 'hunger':
          return 'Голод'
        case 'drought':
          return 'Жажда'
        default:
          return 0
      }
    }
  }
}
</script>

<style lang="scss">
    .parameter-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .container__progress-control {
        width: 70%;
        height: 30px;
        margin: 5px 0 5px 0;
    }

    .container__paramName {
        margin-right: 5px;
    }
</style>
