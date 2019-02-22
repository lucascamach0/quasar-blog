<template>
  <q-page padding>
      <q-btn icon="keyboard_backspace" to="/notificacoes" />
      <h1>{{this.id}}</h1>
  </q-page> 
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'DetalhesNotificacoes',

  data(){
    return{
      id: this.$route.params.id
    }
  },
}
</script>

<style>
</style>
