<template>
  <q-card
    flat
    bordered
    class="q-mb-sm cursor-pointer"
    @click="$emit('click', $event)"
  >
    <q-card-section class="q-pt-xs">
      <div class="text-h5 q-mt-sm q-mb-xs">{{ titulo }}</div>
      <div class="text-caption text-grey">
        {{ descricao }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    titulo: String,
    descricao: String
  }
}
</script>
