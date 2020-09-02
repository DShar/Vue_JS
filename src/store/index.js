import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var maxValue = 100

export default new Vuex.Store({
  state: {
    styles: {
      primaryColor: '#33d398'
    },
    health: 100,
    tiredness: 0,
    hunger: 0,
    drought: 0,
    drinkOptions: [
      { type: 'water', name: 'Вода' },
      { type: 'juice', name: 'Сок' },
      { type: 'beer', name: 'Пиво' }
    ],
    eatOptions: [
      { type: 'apple', name: 'Яблоко' },
      { type: 'orange', name: 'Апельсин' },
      { type: 'bread', name: 'Хлеб' },
      { type: 'burger', name: 'Бургер' }
    ],
    computerOptions: [
      { type: 'work', name: 'Работать' },
      { type: 'play', name: 'Играть' }
    ],
    sportOptions: [
      { type: 'gym', name: 'Тренажёрный зал' },
      { type: 'yoga', name: 'Йога' },
      { type: 'run', name: 'Бег' }
    ],
    actionsHistory: []
  },
  mutations: {
    addHealth (state, value) {
      if ((state.health + value) <= maxValue) {
        state.health += value
      } else {
        state.health = maxValue
      }
    },

    deleteHealth (state, value) {
      if ((state.health - value) >= 0) {
        state.health -= value
      } else {
        state.health = 0
      }
    },

    addTiredness (state, value) {
      if ((state.tiredness + value) <= maxValue) {
        state.tiredness += value
      } else {
        state.tiredness = maxValue
      }
    },

    deleteTiredness (state, value) {
      if ((state.tiredness - value) >= 0) {
        state.tiredness -= value
      } else {
        state.tiredness = 0
      }
    },

    addHunger (state, value) {
      if ((state.hunger + value) <= maxValue) {
        state.hunger += value
      } else {
        state.hunger = maxValue
      }
    },

    deleteHunger (state, value) {
      if ((state.hunger - value) >= 0) {
        state.hunger -= value
      } else {
        state.hunger = 0
      }
    },

    addDrought (state, value) {
      if ((state.drought + value) <= maxValue) {
        state.drought += value
      } else {
        state.drought = maxValue
      }
    },

    deleteDrought (state, value) {
      if ((state.drought - value) >= 0) {
        state.drought -= value
      } else {
        state.drought = 0
      }
    },

    addActionToHistory (state, action) {
      state.actionsHistory.push(action)
    }
  },
  actions: {
  },
  modules: {
  }
})
