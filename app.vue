<script lang='ts' setup>
async function getMessage() {
  const { data: response } = await useFetch('/api/hello');
  message.value = response.value.message;
}
const message = ref('');
</script>

<template>
  <button @click="getMessage">Get Message</button>
  Message: {{ message }}
</template>