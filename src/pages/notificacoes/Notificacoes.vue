<template>
  <q-tabs color="purple">
    <q-btn icon="keyboard_backspace" to="/" />
    <!-- Tabs - notice slot="title" -->
    <q-tab default count="3" slot="title" name="nao-lida">Não Lida</q-tab>
    <q-tab slot="title" name="lida">Lida</q-tab>
    <q-tab slot="title" name="importante">Importante</q-tab>

    <q-tab-pane name="nao-lida">
      <q-list highlight inset-separator>
        <q-item tag="label" to="detalhes/2">
          <q-item-side icon="school"/>
          <q-item-main
            label="Lançamento de nota"
            label-lines="1"
            sublabel="Olá Ronaldo, sua nota em Cáculo 1, foi lançada..."
            sublabel-lines="2"
          />
          <q-item-side right>
            <q-item-tile stamp>1 min</q-item-tile>
            <q-item-tile disable icon="star"/>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side icon="book"/>
          <q-item-main
            label="Status de protocolo"
            label-lines="1"
            sublabel="O procotolo 123456778 aberto em 21/02/2019 ..."
            sublabel-lines="2"
          />
          <q-item-side right>
            <q-item-tile stamp>10 min</q-item-tile>
            <q-item-tile disable icon="star"/>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side icon="calendar_today"/>
          <q-item-main
            label="Evento importante"
            label-lines="1"
            sublabel="No dia 21/02/2019 teremos um workshop sobre ..."
            sublabel-lines="2"
          />
          <q-item-side right>
            <q-item-tile stamp>20 de fev</q-item-tile>
            <q-item-tile disable icon="star"/>
          </q-item-side>
        </q-item>
      </q-list>
    </q-tab-pane>
    <q-tab-pane name="lida">
      <q-list highlight inset-separator>
        <q-item>
          <q-item-side icon="school"/>
          <q-item-main
            label="Lançamento de nota"
            label-lines="1"
            sublabel="Olá Ronaldo, sua nota em Cáculo 1, foi lançada..."
            sublabel-lines="2"
          />
          <q-item-side right>
            <q-item-tile stamp>1 min</q-item-tile>
            <q-item-tile disable icon="star"/>
          </q-item-side>
        </q-item>
      </q-list>
    </q-tab-pane>

    <q-tab-pane name="importante">
      <q-list highlight inset-separator>
        <q-item>
          <q-item-side icon="school"/>
          <q-item-main
            label="Lançamento de nota"
            label-lines="1"
            sublabel="Olá Ronaldo, sua nota em Cáculo 1, foi lançada..."
            sublabel-lines="2"
          />
          <q-item-side right>
            <q-item-tile stamp>1 min</q-item-tile>
            <q-item-tile disable icon="star" color="yellow"/>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side icon="book"/>
          <q-item-main
            label="Status de protocolo"
            label-lines="1"
            sublabel="O procotolo 123456778 aberto em 21/02/2019 ..."
            sublabel-lines="2"
          />
          <q-item-side right>
            <q-item-tile stamp>10 min</q-item-tile>
            <q-item-tile disable icon="star" color="yellow"/>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side icon="calendar_today"/>
          <q-item-main
            label="Evento importante"
            label-lines="1"
            sublabel="No dia 21/02/2019 teremos um workshop sobre ..."
            sublabel-lines="2"
          />
          <q-item-side right>
            <q-item-tile stamp>20 de fev</q-item-tile>
            <q-item-tile disable icon="star" color="yellow"/>
          </q-item-side>
        </q-item>
      </q-list>
    </q-tab-pane>
  </q-tabs>
</template>

<style>
#tabs {
  background-image: #5b2d82 !important;
}
</style>

<script>
import Vue from "vue";
import { mapActions, mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "Notificacoes",
  methods: {
    detalharNotificacao(id) {
      this.$router.push(`detalhes/${id}`);
    }
  }
});
</script>
