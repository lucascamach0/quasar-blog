<template>
  <q-page padding>
    <q-btn push color="dark" label="Enviar Push" class="full-width" @click="enviarPushMetodo()" />
    <span class="q-display-2"> {{artigo.title.rendered }}</span>
    <div class="row">
      <div class="col" v-html="artigo.content.rendered ">
      </div>
    </div>
  </q-page> 
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Artigo',

  data(){
    return{
      id: this.$route.params.id
    }
  },

  mounted (){
    this.setArtigo(this.id)
  },
  computed: {
    ...mapState('posts',['artigo'])
  },
  methods: {
    ...mapActions('posts',['setArtigo']),
    ...mapActions('posts',['enviarPush']),
    enviarPushMetodo(){
      this.enviarPush(this.id)
    }
  }
}
</script>

<style>
</style>
