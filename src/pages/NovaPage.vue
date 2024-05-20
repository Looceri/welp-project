<script>
import ContainerLink from 'src/components/ContainerLink.vue'
import { defineComponent, reactive } from 'vue'
import { usarNotasLocais } from 'src/router/helper'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { ContainerLink },
  name: 'PageNew',
  setup() {
    const router = useRouter()
    const notas = usarNotasLocais()

    const nota = reactive({
      titulo: '',
      descricao: '',
      conteudo: ''
    })

    const submit = () => {
      notas.value.unshift({
        ...nota,
        createdAt: Date.now(),
        updatedAt: Date.now()
      })
      console.log(nota)

      router.push('/')

      nota.titulo = ''
      nota.descricao = ''
      nota.conteudo = ''
    }
    return { nota, submit }
  }
})
</script>

<template>
  <q-page padding>
    <ContainerLink>
      <h3>Nova Nota</h3>
      <form @submit="submit">
        <q-input class="q-mt-sm" outlined v-model="nota.titulo" label="Titulo" />

        <q-input
          class="q-mt-sm"
          outlined
          v-model="nota.descricao"
          label="Descrição"
          dense
        />

        <q-card flat bordered class="q-mt-sm">
          <q-editor v-model="nota.conteudo" min-height="5rem" />
        </q-card>

        <div class="q-mt-md">
          <q-btn color="grey" to="/" type="reset">Cancel</q-btn>
          <q-btn class="q-ml-sm" color="positive" type="submit"> Create </q-btn>
        </div>
      </form>
    </ContainerLink>
  </q-page>
</template>
