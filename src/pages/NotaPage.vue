<script>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLocalNotes } from 'src/router/helper'
import ContainerLink from 'src/components/ContainerLink.vue'

export default {
  components: { ContainerLink },
  setup() {
    const notas = useLocalNotes()
    const route = useRoute()
    const notaId = computed(() => parseInt(route.params.id))
    const nota = computed(() => notas.value[notaId.value])

    const router = useRouter()
    const remove = () => {
      notas.value.splice(notaId.value, 1)
      router.push('/')
    }

    const editing = ref(false)

    return { nota, editing, remove }
  }
}
</script>

<template>
  <q-page padding>
    <ContainerLink>
      <div v-if="editing">
        <form @submit="editing = false">
          <q-input v-model="nota.titulo" label="Title" filled />
          <q-input
            v-model="nota.descricao"
            label="Description"
            filled
            class="q-mt-sm"
            dense
          />

          <q-card flat bordered class="q-mt-sm">
            <q-editor v-model="nota.conteudo" min-height="5rem" />
          </q-card>

          <div class="q-mt-md">
            <q-btn class="q-ml-sm" color="positive" type="submit"> Done </q-btn>
          </div>
        </form>
      </div>

      <div v-else>
        <div class="row items-center justify-between">
          <h3 class="q-mb-md q-mt-md">{{ nota.titulo }}</h3>
          <div>
            <q-btn
              round
              color="secondary"
              icon="edit"
              @click="editing = true"
            />
            <q-btn
              class="q-ml-sm"
              round
              color="red"
              icon="delete"
              @click="remove"
            />
          </div>
        </div>
        <div>{{ nota.descricao }}</div>
        <div class="q-mt-md" v-html="nota.conteudo" />
      </div>
    </ContainerLink>
  </q-page>
</template>
