<template>
    <div class="action" :style="cssStyles">
        <button class="action__button control" @click="onClick">{{ action_name }}</button>
        <select class="action__item control" v-model="selected">
          <option v-for="option in item_options" v-bind:value="option" v-bind:key="option.type">
            {{option.name}}
          </option>
        </select>
    </div>
</template>

<script>
import { commonMethods } from './mixins/commonMethods.js'

export default {
  name: 'ActionControl',
  props: {
    action_name: String,
    action_type: String
  },
  data: function () {
    return {
      selected: ''
    }
  },
  mixins: [commonMethods],
  computed: {
    item_options: function () {
      switch (this.action_type) {
        case 'drink':
          return this.$store.state.drinkOptions
        case 'eat':
          return this.$store.state.eatOptions
        case 'computer':
          return this.$store.state.computerOptions
        case 'sport':
          return this.$store.state.sportOptions
        default:
          return { type: 'none', name: '' }
      }
    },
    cssStyles: function () {
      return {
        '--bg-color': this.$store.state.styles.primaryColor
      }
    }
  },
  methods: {
    onClick () {
      const msg = this.clickAction(this.$store, this.action_type, this.selected)
      this.showNotif(this.$notify, 'action-notification', msg)
    }
  }
}
</script>

<style scoped lang="scss">
     .action{
          display:flex;
          justify-content: space-between;

          .control{
                  width: 45%;
                  height: 30px;
                  border-radius: 20px;
                  margin: 5px 0 5px 0;
          }

          &__button{
                  background-color: var(--bg-color);
                  color: #fff;
                  border: 0;

                  &:hover{
                      background-color:  #2c8e6a;
                  }
          }

          &__item{
            border: 1px solid var(--bg-color);
          }
    }

</style>
