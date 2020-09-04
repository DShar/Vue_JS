<template>
    <div class="terminal-container">
      <p class="terminal__instruction">Введите команды в формате 'action option', разделяя их запятыми, например, 'eat apple, computer play'</p>
      <textarea class="terminal__input" placeholder="Введите команды..." v-model="commands" @keyup.enter="submit"> </textarea>
    </div>
</template>

<script>
import { commonMethods } from './mixins/commonMethods.js'

export default {
  name: 'ActionsTerminal',
  data: function () {
    return {
      commands: ''
    }
  },
  mixins: [commonMethods],
  computed: {
    cssStyles: function () {
      return {
        '--pr-color': this.$store.state.styles.primaryColor
      }
    }
  },
  methods: {
    submit: function () {
      let commandsArray = []

      if (!this.isNullOrWhitespace(this.commands)) {
        if (this.commands.includes(',')) {
          commandsArray = this.commands.split(',')
          Array.prototype.forEach.call(commandsArray, element => {
            let action
            let optionType

            if (element.trim().split(' ').length !== 2) {
              this.showNotif(this.$notify, 'action-notification', 'Неверный формат команды')
            } else {
              action = element.trim().split(' ')[0].trim()
              optionType = element.trim().split(' ')[1].trim()
              let option = ''

              const getOption = this.$store.getters.getOptionByType(optionType)
              if (getOption.length > 0) {
                option = getOption[0]
              }

              const msg = this.clickAction(this.$store, action, option)
              this.showNotif(this.$notify, 'action-notification', msg)
            }
          })
        } else {
          if (this.commands.trim().split(' ').length !== 2) {
            this.showNotif(this.$notify, 'action-notification', 'Неверный формат команды')
          } else {
            const action = this.commands.trim().split(' ')[0].trim()
            const optionType = this.commands.trim().split(' ')[1].trim()
            let option = ''

            const getOption = this.$store.getters.getOptionByType(optionType)
            if (getOption.length > 0) {
              option = getOption[0]
            }

            const msg = this.clickAction(this.$store, action, option)
            this.showNotif(this.$notify, 'action-notification', msg)
          }
        }
      } else {
        this.showNotif(this.$notify, 'action-notification', 'Вы не ввели команду')
      }

      this.commands = ''
    }
  }
}
</script>

<style lang="scss">
    .terminal-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .terminal__instruction {
      font-size: 12px;
      color: #aaa;
      margin-bottom: 7px;
    }

    .terminal__input {
      box-sizing: border-box;
      width: 100%;
      margin: 0px;
      max-height: 150px;
      min-width: 100%;
      max-width: 100%;
    }

    @media screen and (min-width:480px) {
      .terminal-container {
        padding: 0 10%;
      }
    }

    @media screen and (min-width: 769px) {
      .terminal-container {
        padding: 0 15%;
      }
    }
</style>
