import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    health: 100,
    tiredness: 0,
    hunger: 0,
    drought: 0
  },
  mutations: {
    addHealth (state, value) {
      if ((state.health + value) <= 100) {
        state.health += value
      } else {
        state.health = 100 // Лучше ли задать константу (maxHealth = 100). Где это лучше сделать?
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
      if ((state.tiredness + value) <= 100) {
        state.tiredness += value
      } else {
        state.tiredness = 100
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
      if ((state.hunger + value) <= 100) {
        state.hunger += value
      } else {
        state.hunger = 100
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
      if ((state.drought + value) <= 100) {
        state.drought += value
      } else {
        state.drought = 100
      }
    },

    deleteDrought (state, value) {
      if ((state.drought - value) >= 0) {
        state.drought -= value
      } else {
        state.drought = 0
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
