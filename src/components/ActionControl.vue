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
export default {
  name: 'ActionControl',
  props: {
    action_name: String,
    action_type: String
  },
  data: function () {
    return {
      selected: '',
      actionsCount: 0
    }
  },
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
      if (this.selected !== '') {
        this.actionsCount++
        let isOptionValid = false
        let actionHistory = {}
        switch (this.action_type) {
          case 'drink':
            switch (this.selected.type) {
              case 'water':
                isOptionValid = true
                this.$store.commit('deleteDrought', 20)
                this.$store.commit('deleteTiredness', 10)
                this.$store.commit('addHealth', 5)
                break
              case 'juice':
                isOptionValid = true
                this.$store.commit('deleteDrought', 15)
                this.$store.commit('deleteHunger', 5)
                break
              case 'beer':
                isOptionValid = true
                this.$store.commit('deleteDrought', 10)
                this.$store.commit('deleteHunger', 10)
                this.$store.commit('deleteHealth', 15)
                break
              default:
                isOptionValid = false
                break
            }

            if (isOptionValid) {
              actionHistory = { id: this.actionsCount, date: new Date().toLocaleString(), act: 'Вы выпили ' + this.selected.name }
              this.$store.commit('addActionToHistory', actionHistory)
              this.show('action-notification', 'Вы выпили ' + this.selected.name)
            } else {
              actionHistory = { id: this.actionsCount, date: new Date().toLocaleString(), act: 'Не удалось определить опцию' }
              this.$store.commit('addActionToHistory', actionHistory)
              this.show('action-notification', 'Не удалось определить опцию')
            }
            break
          case 'eat':
            switch (this.selected.type) {
              case 'apple':
                isOptionValid = true
                this.$store.commit('deleteDrought', 5)
                this.$store.commit('deleteHunger', 15)
                this.$store.commit('addHealth', 5)
                break
              case 'orange':
                isOptionValid = true
                this.$store.commit('deleteDrought', 15)
                this.$store.commit('deleteHunger', 10)
                this.$store.commit('addHealth', 5)
                break
              case 'bread':
                isOptionValid = true
                this.$store.commit('addDrought', 20)
                this.$store.commit('deleteHunger', 20)
                break
              case 'burger':
                isOptionValid = true
                this.$store.commit('addDrought', 10)
                this.$store.commit('deleteHunger', 30)
                this.$store.commit('deleteHealth', 15)
                break
              default:
                isOptionValid = false
                break
            }
            if (isOptionValid) {
              actionHistory = { id: this.actionsCount, date: new Date().toLocaleString(), act: 'Вы съели ' + this.selected.name }
              this.$store.commit('addActionToHistory', actionHistory)
              this.show('action-notification', 'Вы съели ' + this.selected.name)
            } else {
              actionHistory = { id: this.actionsCount, date: new Date().toLocaleString(), act: 'Не удалось определить опцию' }
              this.$store.commit('addActionToHistory', actionHistory)
              this.show('action-notification', 'Не удалось определить опцию')
            }
            break
          case 'computer':
            switch (this.selected.type) {
              case 'work':
                isOptionValid = true
                this.$store.commit('addDrought', 10)
                this.$store.commit('addHunger', 15)
                this.$store.commit('deleteHealth', 10)
                this.$store.commit('addTiredness', 15)
                break
              case 'play':
                isOptionValid = true
                this.$store.commit('deleteTiredness', 15)
                this.$store.commit('addHunger', 5)
                this.$store.commit('addDrought', 5)
                this.$store.commit('deleteHealth', 10)
                break
              default:
                isOptionValid = false
                break
            }
            if (isOptionValid) {
              actionHistory = { id: this.actionsCount, date: new Date().toLocaleString(), act: 'Вы решили ' + this.selected.name }
              this.$store.commit('addActionToHistory', actionHistory)
              this.show('action-notification', 'Вы решили ' + this.selected.name)
            } else {
              actionHistory = { id: this.actionsCount, date: new Date().toLocaleString(), act: 'Не удалось определить опцию' }
              this.$store.commit('addActionToHistory', actionHistory)
              this.show('action-notification', 'Не удалось определить опцию')
            }
            break
          case 'sport':
            switch (this.selected.type) {
              case 'gym':
                isOptionValid = true
                this.$store.commit('addDrought', 15)
                this.$store.commit('addHunger', 15)
                this.$store.commit('addHealth', 15)
                this.$store.commit('addTiredness', 20)
                break
              case 'yoga':
                isOptionValid = true
                this.$store.commit('addDrought', 10)
                this.$store.commit('addHunger', 10)
                this.$store.commit('addHealth', 25)
                this.$store.commit('addTiredness', 5)
                break
              case 'run':
                isOptionValid = true
                this.$store.commit('addDrought', 20)
                this.$store.commit('addHunger', 10)
                this.$store.commit('addHealth', 15)
                this.$store.commit('addTiredness', 25)
                break
              default:
                isOptionValid = false
                break
            }
            if (isOptionValid) {
              actionHistory = { id: this.actionsCount, date: new Date().toLocaleString(), act: 'Вы занимались спортом: ' + this.selected.name }
              this.$store.commit('addActionToHistory', actionHistory)
              this.show('action-notification', 'Вы занимались спортом:  ' + this.selected.name)
            } else {
              actionHistory = { id: this.actionsCount, date: new Date().toLocaleString(), act: 'Не удалось определить опцию' }
              this.$store.commit('addActionToHistory', actionHistory)
              this.show('action-notification', 'Не удалось определить опцию')
            }
            break
          default:
            alert('Действие не определено')
            break
        }
      } else {
        this.show('action-notification', 'Не выбрана опция')
      }
    },
    show (group, text) {
      this.$notify({
        group,
        title: 'Notification',
        text,
        duration: 3000,
        data: {}
      })
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
