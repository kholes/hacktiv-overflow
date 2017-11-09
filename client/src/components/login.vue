<template>
  <div>
    <label v-if="!loginUser.status">
      <Button class="btn btn-secondary my-2 my-sm-0" type="primary" @click="modal6 = true">Login</Button>
    </label>
    <label v-else="loginUser.status">
      Welcome, {{ loginUser.username }}
      <div class="menu-logout">
        <Button @click="logout">Logout</Button>
      </div>
    </label>
    <Modal
        v-model="modal6"
        title="Login user"
        :loading="loading"
        ok-text="Login"
        cancel-text="Cancel"
        @on-ok="handleSubmit('formInline')">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.username" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
    </Form>
    </Modal>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
  data: function () {
    return {
      modal6: false,
      loading: false
    }
  },
  computed: {
    ...mapState(['formInline','ruleInline','loginUser'])
  },
  methods: {
    ...mapActions(['userLogin','userLogout']),
    logout () {
      this.userLogout()
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.userLogin())
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}
</script>
