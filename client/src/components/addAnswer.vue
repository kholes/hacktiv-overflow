<template>
  <div class="container">
    <li @click="modal7 = true" class="icon"><Icon type="chatbox" /></li>       
    <Modal ok-text="Submit" cancel-text="Cancel"
      title="Give your answer"
      v-model="modal7"
      @on-ok="add_answer(formAnswer)"
      :closable="false">
      <Form :model="formAnswer" :label-width="80">
        <Input v-model="formAnswer.answer" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </Form>
    </Modal>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    props: ['id'],
    data () {
      return {
        modal7: false,
        formAnswer: {
          answer:'',
          question: this.id,
          like: [],
          unlike: [],
          date: new Date(),
          user: ''
        }
      }
    },
    computed: {
      ...mapState(['loginUser'])
    },
    methods: {
      ...mapActions(['add_answer'])
    }
  }
</script>