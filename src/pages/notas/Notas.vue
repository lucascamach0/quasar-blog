<template>
  <q-page class="container q-pa-xs">
    <div class="row gutter-sm">
        <div class="col-xs-12 col-lg-4" v-for="(post, index) in posts" :key="index">
            <q-card>
                <q-card-media>
                    <img :src="post.better_featured_image.source_url" style="width: 30rem">
                </q-card-media>
                <q-card-title>
                    {{ post.title.rendered }} 12312321
                </q-card-title>
                <q-card-separator/>
                <q-card-actions>
                    <q-btn push color="dark" label="Detalhes" class="full-width" @click="detalhar(post.id)" />
                </q-card-actions> 
            </q-card>
        </div>
    </div>
  </q-page>
</template>

<script>
import Vue from 'vue';
import { mapActions, mapState, mapMutations } from 'vuex';
export default Vue.extend({
    name: 'Notas',
    
})
</script>
