<template>
  <v-app>
    <v-container>
      <ChatBoard/>
      <Form/>
    </v-container>
  </v-app>
</template>

<script>
  import ChatBoard from './components/ChatBoard'
  import Form from './components/Form'
  export default {
    name: 'App',
    components: {
      ChatBoard,
      Form
    },
  }
</script>