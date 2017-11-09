<template>
    <div class="container" style="padding-top:30px">
        <div class="row">
            <div class="col-sm-3">
            </div>
            <div class="col-sm-8">
                <div class="question">
                    <h1>Question: {{ questionsDetail.title }}</h1>
                    <p>{{ questionsDetail.question }}</p>
                    <ul>
                      <li class="icon"><Icon type="chatboxes" /></li>                  
                    </ul>
                </div>
                <div v-for="val in answers" class="answers">
                  <p>{{ val.answer }}</p>
                  <ul>
                    <li>Created At: {{ val.date }}</li>
                    <li class="icon"><Badge v-bind:count="val.like.length" class-name="like"></Badge> <a @click="like(val._id)"><Icon type="thumbsup" /></a> </li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import addAnswer from '@/components/addAnswer'
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    props: ['id'],
    components: {
      addAnswer
    },
    computed: {
      ...mapState(['questionsDetail','answers','loginUser'])
    },
    methods: {
      ...mapActions(['get_all','get_detail','get_answers','add_answer','like','unlike']),
    },
    created: function() {
        this.get_detail(this.id)
        this.get_answers(this.id)
    }
  }
</script>
<style>
.question {
    text-align: left;
}
.question h1 {
    font-size: 200%;
    padding: 10px 0;
}
.question a:hover{
    color: #7aacd6;
}
.question p {
    color: #333;
    font-size: 130%;
}
.question ul {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-top: 20px;
    width: 100%;
    min-height: 40px;
    padding: 10px 0;
    font-size: 120%;
}
.question ul li {
    float: left;
    margin-left: 15px;
}
.question .icon {
    margin-top: -15px;
    font-size: 250%;
    float: right;
    color: #ccc;
    cursor: pointer;
}
.question .icon:hover {
    color: #a0a0a0;
}
.answers {
  margin-top:20px;
  margin-left: 50px;
  text-align: left;
}
.answers h3 {
  font-size: 200%;
}
.answers p {
  font-size: 130%;
  color: #666;
}
.answers ul {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-top: 20px;
    width: 100%;
    min-height: 40px;
    padding: 10px 0;
    font-size: 120%;
}
.answers ul li {
    float: left;
}
.answers .icon {
    margin-top: -15px;
    font-size: 200%;
    float: right;
    color: #ccc;
    margin-left: 20px;
    cursor: pointer;
}
.answers .icon:hover {
    color: #a0a0a0;
}
.like {
  background: #5cb85c !important;
}
</style>
