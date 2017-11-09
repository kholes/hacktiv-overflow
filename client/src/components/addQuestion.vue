<template>
  <div class="container">
    <form @submit.prevent="addData" v-model="formQuestion">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" v-model="formQuestion.title" class="form-control" id="title" placeholder="Enter title...">
      </div>
      <div class="form-group">
        <label for="exampleTextarea">Your Question</label>
        <textarea v-model="formQuestion.question" class="form-control" placeholder="Enter your question ..."></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>  
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import { mapState } from 'vuex'
    export default {
        computed: {
          ...mapState(['formQuestion','formQuestion'])
        },
        methods: {
          ...mapActions(['addQuestion']),
          addData() {
            this.addQuestion()
          }
        }
    }
</script>
<style scoped>
  .container {
    width: 60%;
    margin:auto;
  }
  label {
    font-size: 160%;
  }
  form {
    text-align: left;
  }
</style>