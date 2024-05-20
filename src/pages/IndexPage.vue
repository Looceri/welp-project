<script>
/* eslint-disable */
import Container from "src/components/ContainerLink.vue";
import NoteCard from "src/components/NoteCard.vue";
import { usarNotasLocais } from "src/router/helper";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { NoteCard, Container },
  name: "PageIndex",
  setup() {
    const notas = usarNotasLocais();
    const router = useRouter();
    return { router, notas };
  },
});
</script>

<template>
  <q-page padding>
    <Container>
      <div class="row items-center justify-between">
        <h3>Suas notas</h3>
        <div>
          <q-btn round color="positive" icon="add" to="/nova"></q-btn>
        </div>
      </div>

      <NoteCard
        v-for="({ titulo, descricao }, idx) in notas"
        :key="idx"
        :titulo="titulo"
        :descricao="descricao"
        @click="router.push(`/nota/${idx}`)"
      />
      <div v-if="notas.length === 0">Você ainda não criou nenhuma nota.</div>
    </Container>
  </q-page>
</template>
