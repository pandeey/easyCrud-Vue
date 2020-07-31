<template>
  <div>
    <el-button @click="handleOBj">
      测试按钮
    </el-button>
    <el-button type="info"
               @click="handleBack"
               plain icon="el-icon-back">
      返回表格
    </el-button>
    <p  > {{demo1}}</p>
    <span style="display: flex;"> {{demo1}}</span>
    <p class="ttx">测试文字</p>
    <el-button @click="arr">
      测试Array.push
    </el-button>
    <el-button @click="dian">
      测试...
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'fans',
  data () {
    return {
      bottle: ['1', '2', '3', '4', '5'],
      airpods: ['1', '2', '3', '4', '5'],
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
    },
    arr () {
      this.$message(this.airpods)
    },
    dian () {
      this.$message(...this.airpods)
    }
  }
}
</script>

<style>

</style>
