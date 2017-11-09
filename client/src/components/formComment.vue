<template>
  <form>
    <label>Enter Comment : </label>
    <textarea></textarea>
    <input type="submit" value="Comment">
  </form>
</template>
<script>
  import { mapActions } from 'vuex'
  import { mapState } from 'vuex'
  export default {
    props: ['id'],
    data: function() {
      return {
        formQuestion: {
          answer: '',
          question: this.id,
          date: new Date(),
          user: this.loginUser._id
        }
      }
    },
    computed: {
      ...mapState(['loginUser'])
    },
    methods: {
      ...mapActions(['addComment'])
    }
  }
</script>