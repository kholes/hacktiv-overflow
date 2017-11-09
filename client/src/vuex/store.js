import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const http = axios.create({
  baseURL: 'http://localhost:5005'
})
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    questions: [],
    answers:[],
    questionsDetail: {},
    loginUser: {},
    answerDetail: {
      answer:'',
      question: '',
      like: '',
      unlike: '',
      date: '',
      user: ''  
    },
    formQuestion: {
      title: '',
      question: '',
      date: new Date()    
    },
    formInline: {
      username: '',
      password: ''
    },                  
    ruleInline: {
      username: [
        { 
          required: true, 
          message: 'Please fill in the user name', 
          trigger: 'blur' 
        }
      ],
      password: [
        { 
          required: true, 
          message: 'Please fill in the password.', 
          trigger: 'blur' 
        },
        { 
          type: 'string', 
          min: 3, 
          message: 'The password length cannot be less than 6 bits', 
          trigger: 'blur' 
        }
      ]
    }
  },
  getters: {
    user: state => {
      return state.loginUser
    }
  },
  mutations: {
    setQuestions(state, payload) {
      state.questions = payload
    },
    setDetailQuestion(state, payload) {
      state.questionsDetail = payload
    },
    show(state, payload) {
        state.modal6 = payload
    },
    setUser(state, payload) {
      state.loginUser = payload
    },
    setAnswers(state, payload) {
      state.answers = payload
    },
    setLike(state, payload) {
      state.answers.forEach((val,i) => {
        if(val._id == payload.id) {
          state.answers[i].like = payload.like
        }
      })
    },
    setUnlike(state, payload) {
      state.answers.forEach((val,i) => {
        if(val._id == payload.id) {
          state.answers[i].unlike = payload.unlike
        }
      })
    }
  },
  actions: {
    userLogin(state, payload) {
      http.post('login', store.state.formInline)
      .then(user => {        
        if(user.data.hasOwnProperty('newToken')){
          let obj = {
            "token": user.data.newToken
          }
          localStorage.setItem('accessToken', JSON.stringify(obj))
          store.dispatch('cekToken', {'token':user.data.newToken})
        } else {
          console.log(user.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    userLogout(){
      localStorage.removeItem('accessToken')
      let userActive = {
        id: null,
        username: null,
        role: null,
        status: false
      }
      store.commit('setUser', userActive)    
    },
    cekToken (state, token) {
      let objToken = {
        accessToken: token.token
      }
      http.post('login/cekToken', objToken)
      .then(decode => {
        let userActive = {
          id: decode.data.id,
          username: decode.data.username,
          role: decode.data.role,
          status: true
        }
        store.commit('setUser', userActive)
      })
    },
    showModal(state, status){
      store.commit('show', status)
    },
    get_all() {
      http.get('questions')
      .then(({data}) => {
        store.commit('setQuestions', data)
      })
    },
    get_detail(state, id) {
      http.get('questions/' + id)
      .then(({data}) => {
        store.commit('setDetailQuestion', data)
      })
    },
    get_answers(state, id) {
      http.get('answers/by/' + id)
      .then(({data}) => {
        store.commit('setAnswers', data)
      })
    },
    addQuestion(state, form){
      let obj = {
        title: state.state.formQuestion.title,
        question: state.state.formQuestion.question,
        user: state.state.loginUser.id,
        date: state.state.formQuestion.date
      }
      http.post('questions', obj)
      .then(({data}) => {
        console.log('Suksess')
      })
      .catch(err => {
        console.log(err)
      })
    },
    add_answer(state, input){
      let obj = {
        answer: input.answer,
        question: input.question,
        date: input.date,
        user: state.state.loginUser.id,
      }
      http.post('answers', obj)
      .then(rows => {
        console.log(rows)
      })
      .catch(err => {
        console.log(err)
      })
    },
    addComment({commit}, payload) {
      let obj = {
        answer: payload
      }
      http.post('answers', payload)
      .then(({data}) => {
        console.log(data)
      })
      .catch(err => {
        console.errors(err)
      })
    },
    like(state, id){
      let user = state.state.loginUser.id
      let answers = state.state.answers
      answers.forEach(i => {
        if(i._id == id) {
          let newUser = i.like
          if(i.like.indexOf(user) == -1) {
            newUser.push(user)
            http.put('answers/vote/like/' + i._id, {"like": newUser})
            .then(result => {
              let objLike = {"id": id, "like": newUser}
              store.commit('setLike', objLike)       
            })
            .catch(err => {
              console.log(err)
            })
          } else {
            const userLike = newUser.findIndex(function (userL) {
              return userL === user
            })
            newUser.splice(userLike, 1)
            http.put('answers/vote/like/' + i._id, {"like": newUser})
            .then(result => {
              let objLike = {"id": id, "like": newUser}
              store.commit('setLike', objLike)       
            })
            .catch(err => {
              console.log(err)
            })
          }
        }
      })
    },
    unlike(state, id){
      let user = state.state.loginUser.id
      let answers = state.state.answers
      answers.forEach(i => {
        if(i._id == id) {
          if(i.like.indexOf(user) == -1) {
            http.put('answers/vote/unlike/' + i._id, {"unlike": user})
            .then(result => {
              let objUnlike = {"id": id, "unlike": user}
              store.commit('setUnlike', objUnlike)       
            })
            .catch(err => {
              console.log(err)
            })
          } else {
            
          }
        }
      })
    }
  }
})
export default store