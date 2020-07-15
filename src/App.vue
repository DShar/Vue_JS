<template>
  <div id="app">
    <div class="content">
      <div id="params_container" class="content__parameters">
        <Parameter type="health"></Parameter><!-- Как лучше идентифицировать тип параметра? Можно добавить новый объект parameterType?s  -->
        <Parameter type="tiredness"></Parameter>
        <Parameter type="hunger"></Parameter>
        <Parameter type="drought"></Parameter>
      </div>
      <div id="actions_container" class="content__actions">
        <ActionControl action_name="Пить" action_type="drink"></ActionControl>
        <ActionControl action_name="Есть" action_type="eat"></ActionControl>
        <ActionControl action_name="Работать" action_type="work"></ActionControl>
        <ActionControl action_name="Заниматься спортом" action_type="sport"></ActionControl>
      </div>
    </div>
  </div>
</template>

<script>
import ActionControl from './components/ActionControl.vue'
import Parameter from './components/Parameter.vue'

export default {
  name: 'App',
  components: { ActionControl, Parameter }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

.content__parameters {
  display: flex;
  flex-direction: column;
  border: 1px solid #888;
  width: 30%;
}

.content__actions {
  display: flex;
  flex-direction: column;
  border: 1px solid #888;
  width: 30%;
}

@media screen and (max-width: 360px) {
  .content {
    flex-direction: column;
  }
}
</style>
