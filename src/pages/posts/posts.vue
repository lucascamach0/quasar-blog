<template>
  <q-page class="container q-pa-xs">
    <div class="row gutter-sm">
        <div class="col-xs-12 col-lg-4" v-for="(post, index) in posts" :key="index">
            <q-card>
                <q-card-media>
                    <img :src="post.better_featured_image.source_url" style="width: 30rem">
                </q-card-media>
                <q-card-title>
                    {{ post.title.rendered }}
                </q-card-title>
                <q-card-separator/>
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
    name: 'Posts',
    data(){
        return { 
            posts :[]
        }
    },

    mounted(){
        this.getPosts()
    },
    methods : {
        getPosts (){
            this.$axios.get('http://viladosilicio.com.br/wp-json/wp/V2/posts')
                .then((res) => {
                    this.posts = res.data;
                    console.log('POSTS',res.data)
                })
                .catch((err) =>{
                    console.error(err)
                })
        }
    }
})
</script>

<style>
 
</style>


