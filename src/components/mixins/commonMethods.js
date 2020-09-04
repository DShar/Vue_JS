export const commonMethods = {
  methods: {
    clickAction: function (store, type, option) {
      let result = ''

      if (option !== '') {
        let isOptionValid = false
        let actionHistory = {}

        switch (type) {
          case 'drink':
            store.commit('addCount')
            switch (option.type) {
              case 'water':
                isOptionValid = true
                store.commit('deleteDrought', 20)
                store.commit('deleteTiredness', 10)
                store.commit('addHealth', 5)
                break
              case 'juice':
                isOptionValid = true
                store.commit('deleteDrought', 15)
                store.commit('deleteHunger', 5)
                break
              case 'beer':
                isOptionValid = true
                store.commit('deleteDrought', 10)
                store.commit('deleteHunger', 10)
                store.commit('deleteHealth', 15)
                break
              default:
                isOptionValid = false
                break
            }

            if (isOptionValid) {
              actionHistory = { id: store.state.actionsCounter, date: new Date().toLocaleString(), act: 'Вы выпили ' + option.name }
              store.commit('addActionToHistory', actionHistory)
              result = 'Вы выпили ' + option.name
            } else {
              actionHistory = { id: store.state.actionsCounter, date: new Date().toLocaleString(), act: 'Не удалось определить опцию' }
              store.commit('addActionToHistory', actionHistory)
              result = 'Не удалось определить опцию'
            }
            break
          case 'eat':
            store.commit('addCount')
            switch (option.type) {
              case 'apple':
                isOptionValid = true
                store.commit('deleteDrought', 5)
                store.commit('deleteHunger', 15)
                store.commit('addHealth', 5)
                break
              case 'orange':
                isOptionValid = true
                store.commit('deleteDrought', 15)
                store.commit('deleteHunger', 10)
                store.commit('addHealth', 5)
                break
              case 'bread':
                isOptionValid = true
                store.commit('addDrought', 20)
                store.commit('deleteHunger', 20)
                break
              case 'burger':
                isOptionValid = true
                store.commit('addDrought', 10)
                store.commit('deleteHunger', 30)
                store.commit('deleteHealth', 15)
                break
              default:
                isOptionValid = false
                break
            }
            if (isOptionValid) {
              actionHistory = { id: store.state.actionsCounter, date: new Date().toLocaleString(), act: 'Вы съели ' + option.name }
              store.commit('addActionToHistory', actionHistory)
              result = 'Вы съели ' + option.name
            } else {
              actionHistory = { id: store.state.actionsCounter, date: new Date().toLocaleString(), act: 'Не удалось определить опцию' }
              store.commit('addActionToHistory', actionHistory)
              result = 'Не удалось определить опцию'
            }
            break
          case 'computer':
            store.commit('addCount')
            switch (option.type) {
              case 'work':
                isOptionValid = true
                store.commit('addDrought', 10)
                store.commit('addHunger', 15)
                store.commit('deleteHealth', 10)
                store.commit('addTiredness', 15)
                break
              case 'play':
                isOptionValid = true
                store.commit('deleteTiredness', 15)
                store.commit('addHunger', 5)
                store.commit('addDrought', 5)
                store.commit('deleteHealth', 10)
                break
              default:
                isOptionValid = false
                break
            }
            if (isOptionValid) {
              actionHistory = { id: store.state.actionsCounter, date: new Date().toLocaleString(), act: 'Вы решили ' + option.name }
              store.commit('addActionToHistory', actionHistory)
              result = 'Вы решили ' + option.name
            } else {
              actionHistory = { id: store.state.actionsCounter, date: new Date().toLocaleString(), act: 'Не удалось определить опцию' }
              store.commit('addActionToHistory', actionHistory)
              result = 'Не удалось определить опцию'
            }
            break
          case 'sport':
            store.commit('addCount')
            switch (option.type) {
              case 'gym':
                isOptionValid = true
                store.commit('addDrought', 15)
                store.commit('addHunger', 15)
                store.commit('addHealth', 15)
                store.commit('addTiredness', 20)
                break
              case 'yoga':
                isOptionValid = true
                store.commit('addDrought', 10)
                store.commit('addHunger', 10)
                store.commit('addHealth', 25)
                store.commit('addTiredness', 5)
                break
              case 'run':
                isOptionValid = true
                store.commit('addDrought', 20)
                store.commit('addHunger', 10)
                store.commit('addHealth', 15)
                store.commit('addTiredness', 25)
                break
              default:
                isOptionValid = false
                break
            }
            if (isOptionValid) {
              actionHistory = { id: store.state.actionsCounter, date: new Date().toLocaleString(), act: 'Вы занимались спортом: ' + option.name }
              store.commit('addActionToHistory', actionHistory)
              result = 'Вы занимались спортом:  ' + option.name
            } else {
              actionHistory = { id: store.state.actionsCounter, date: new Date().toLocaleString(), act: 'Не удалось определить опцию' }
              store.commit('addActionToHistory', actionHistory)
              result = 'Не удалось определить опцию'
            }
            break
          default:
            result = 'Действие не определено'
            break
        }
      } else {
        result = 'Не выбрана опция'
      }

      return result
    },
    isNullOrWhitespace: function (input) {
      if (typeof input === 'undefined' || input == null) {
        return true
      }

      return input.replace(/\s/g, '').length < 1
    },
    showNotif (notification, group, text) {
      notification({
        group,
        title: 'Notification',
        text,
        duration: 3000,
        data: {}
      })
    }
  }
}
