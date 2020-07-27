<template>
  <div>
    <el-button @click="handleOBj">
      测试按钮
    </el-button>
    <el-button type="info"
               @click="handleBack"
               plain icon="el-icon-back">
      返回测试按钮
    </el-button>
    <p  > {{demo1}}</p>
    <span style="display: flex;"> {{demo1}}</span>
  </div>
</template>

<script>
export default {
  name: 'fans',
  data () {
    return {
      mob: {
        name: '1212',
        password: 'hdufh'
      },
      demo1: ''
    }
  },
  methods: {
    handleBack () {
      this.$router.push('/')
    },
    handleOBj () {
      this.demo1 = Object.assign({}, this.mob)
      this.$message({
        type: 'success',
        message: this.demo1
      })
    }
  }
}
</script>

<style>

</style>
