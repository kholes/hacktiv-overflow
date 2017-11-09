<template>
    <div class="container" style="padding-top:30px">
        <div class="row">
            <div class="col-sm-3">
            </div>
            <div class="col-sm-8">
                <div v-for="val in questions" class="question">
                    <h1>{{ val.user[0].username }}, Question: <router-link :click="getData(val._id)" :to="{ name: 'detailQuestion', params: { id: val._id }}"> {{ val.title }}</router-link></h1>
                    <p>{{ val.question }}</p>
                    <ul>
                        <li>Created At: {{ val.date }}</li>
                        <addAnswer v-bind:id="val._id"></addAnswer>
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
    components: {
        addAnswer
    },
    computed: { 
        ...mapState(['questions']) 
    },
    methods: {
        ...mapActions(['get_all','get_detail','get_answers']),
        getData(id) {
            this.get_detail(id)
            this.get_answers(id)
        }
    },
    mounted: function () {
        this.get_all()
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
</style>
