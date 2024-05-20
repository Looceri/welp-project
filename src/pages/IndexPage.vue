<template>
  <q-page padding>
    <Container>
      <div class="row items-center justify-between">
        <h2>Suas Notas</h2>
        <div>
          <q-btn round color="positive" icon="add" to="/new"></q-btn>
        </div>
      </div>
    </Container>
  </q-page>
</template>

<script setup>

defineOptions({
  name: "IndexPage",
});
</script>
