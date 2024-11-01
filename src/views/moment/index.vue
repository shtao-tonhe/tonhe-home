<template>
  <Nav />
  <div style="font-size: 20px;color: #ff0000;">
    moment Index
  </div>
</template>

<script setup>
  import Nav from '../../components/nav/index.vue'
  defineProps({
    msg: {
      type: String,
      required: true
    }
  })
</script>