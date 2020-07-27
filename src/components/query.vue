<template>
    <el-form ref="form"
             :model="query"
             :rules="rules"
             label-position="left">
        <el-row>
          <el-col :span="8">
              <el-form-item label="id">
                <el-input v-model="query.id" placeholder="请输入id" prefix-icon="el-icon-search">
                </el-input>
              </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="标题">
              <el-input v-model="query.author" placeholder="请输入作者" prefix-icon="el-icon-search">
              </el-input>
            </el-form-item>
          </el-col>
          <el-button @click="handlequery">
            查询
          </el-button>
        </el-row>
    </el-form>
</template>

<script>
export default {
  name: 'MDquery',
  data () {
    return {
      query: {
        id: '',
        author: ''
      },
      rules: {
      }
    }
  },
  methods: {
    handlequery () {
      this.$emit('query', this.query)
    }
  }
}
</script>

<style>

</style>
