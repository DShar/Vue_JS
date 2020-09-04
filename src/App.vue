<template>
  <div id="app">

    <notifications group="action-notification"
                   position="top center"
                   classes="notification"/>

    <div class="content">
      <div class="content__history-button" :style="cssStyles">
        <button id="show-modal" @click="showModal = true">
          История действий
        </button>
        <ActionHistory v-if="showModal" @close="showModal = false"></ActionHistory>
      </div>
      <div class="content__main">
        <div id="params_container" class="content__modules">
          <Parameter type="health"></Parameter>
          <Parameter type="tiredness"></Parameter>
          <Parameter type="hunger"></Parameter>
          <Parameter type="drought"></Parameter>
        </div>
        <div id="actions_container" class="content__modules">
          <ActionControl action_name="Пить" action_type="drink"></ActionControl>
          <ActionControl action_name="Есть" action_type="eat"></ActionControl>
          <ActionControl action_name="Компьютер" action_type="computer"></ActionControl>
          <ActionControl action_name="Заниматься спортом" action_type="sport"></ActionControl>
        </div>
      </div>
      <div class="content__terminal">
        <ActionsTerminal></ActionsTerminal>
      </div>
    </div>
  </div>
</template>

<script>
import ActionControl from './components/ActionControl.vue'
import Parameter from './components/Parameter.vue'
import ActionHistory from './components/ActionHistory.vue'
import ActionsTerminal from './components/ActionsTerminal.vue'

export default {
  name: 'App',
  components: { ActionControl, Parameter, ActionHistory, ActionsTerminal },
  data: function () {
    return {
      showModal: false
    }
  },
  computed: {
    cssStyles: function () {
      return {
        '--bg-color': this.$store.state.styles.primaryColor
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

.notification {
  margin: 10px;
  margin-bottom: 0;
  border-radius: 3px;
  font-size: 13px;
  padding: 10px 20px;

  background-color: #52cfa19d !important;
  color: #fff;

  .notification-title {
    text-transform: uppercase;
    font-size: 10px;
    color: #fff;
  }
}

.content {
  display: flex;
  flex-direction: column;

  &__history-button {
    padding-bottom: 40px;
    align-self: flex-end;

    button {
      background-color: var(--bg-color);
      color: #fff;
      border: 0;
      border-radius: 20px;
      width: 150px;
      height: 30px;

      &:hover{
        background-color:  #2c8e6a;
      }
    }
  }

  &__main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__modules {
    display: flex;
    flex-direction: column;
    border: 1px solid #888;
    width: 35%;
  }

  &__terminal {
    margin-top: 30px;
  }
}

@media screen and (max-width: 479px) {
  .content {
    &__main {
      flex-direction: column;
      align-items: center;
    }

    &__modules {
      margin-bottom: 20px;
      width: 100%;
    }
  }
}

@media screen and (min-width:480px) {

  .content__history-button {
    padding-right: 10%;
  }

  .content__main {
    padding: 0 10%;
  }

  .content__modules {
    width: 45%;
  }
}

@media screen and (min-width: 769px) {
  .content__history-button {
    padding-right: 15%;
  }

  .content__main {
    padding: 0 15%;
  }

  .content__modules {
    width: 40%;
  }
}
</style>
