<template>
  <q-page class="container q-pa-xs">
    <div class="row gutter-sm">
        <div class="col-xs-12 col-lg-4" v-for="artigo in 10" :key="artigo">
            <q-card>
                <q-card-media>
                    <img src="~assets/logo.png" style="width: 30rem">
                </q-card-media>
                <q-card-title>
                    Título do Artigo
                </q-card-title>
                <q-card-separator/>
                <q-card-main>
                    Resumo do Artigo ...
                </q-card-main>
                <q-card-actions>
                    <q-btn push color="dark" label="Detalhes" class="full-width" />
                </q-card-actions> 
            </q-card>
        </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Posts'
})
</script>

<style>
 
</style>


