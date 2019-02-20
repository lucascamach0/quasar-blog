<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="negative" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>

        <q-toolbar-title>App PoC CiandT
        </q-toolbar-title>

        <q-btn-dropdown icon="notifications_active" label="10">
          <q-list link>
            <q-item v-for="(post, index) in posts" :key="index" v-close-overlay @click.native="handlerFunction">
              <q-item-side icon="folder" inverted color="primary"/>
              <q-item-main>
                <q-item-tile label>Photos</q-item-tile>
                <q-item-tile sublabel>February 22, 2016</q-item-tile>
              </q-item-main>
              <q-item-side right icon="info" color="amber"/>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list no-border link inset-delimiter>
        <q-list-header>Menu</q-list-header>
        <q-item to="/">
          <q-item-side icon="home"/>
          <q-item-main label="Dashboard"/>
        </q-item>
        <q-item to="/posts">
          <q-item-side icon="list_alt"/>
          <q-item-main label="Postagens" sublabel="Lista de postagem"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: "MyLayout",

  mounted(){
        this.setCases()
  },

  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },

  computed: {
        ...mapState('posts',['cases'])
    },
  methods: {
    ...mapActions('posts', ['setCases']),
    openURL
  }
};
</script>

<style>
</style>
