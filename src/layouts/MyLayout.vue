<template>
  <q-layout style="background-color: white" view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar id="cabecalho">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>

        <q-toolbar-title>Ânima Notificação</q-toolbar-title>
        <q-btn icon="notifications" to="/notificacoes">
          <q-chip floating>22</q-chip>
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list no-border link inset-delimiter>
        <q-list-header>Menu</q-list-header>
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

<style>
#cabecalho {
  background-image: linear-gradient(81deg, #992096, #992096) !important;
}
</style>

<script>
import { openURL } from "quasar";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "MyLayout",

  mounted() {
    this.setCases();
  },

  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },

  computed: {
    ...mapState("posts", ["cases"])
  },
  methods: {
    ...mapActions("posts", ["setCases"]),
    openURL
  }
};
</script>

<style>
</style>
