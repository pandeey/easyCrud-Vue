<template>
  <el-dialog
    title="新增图书"
    :visible.sync="dialogVisible"
    width="40%" :before-close="handleCancel">
    <span slot="footer" class="dialog-footer">
      <el-form ref="article"
               :model="article"
               label-width="80px"
               :rules="rules">
        <el-form-item label="文章id">
          <el-input v-model="article.id"></el-input>
        </el-form-item>
        <el-form-item label="文章标题">
          <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="文章描述">
          <el-input v-model="article.description"></el-input>
        </el-form-item>
        <el-form-item label="文章作者">
          <el-input v-model="article.author"></el-input>
        </el-form-item>
        <el-form-item label="阅读数">
          <el-input v-model="article.readNum"></el-input>
        </el-form-item>
      </el-form>
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
  </el-dialog>
</template>

<script>
import {ADD} from '../api/base'
export default {
  name: 'modal',
  data () {
    return {
      article: {
        id: '',
        title: '',
        description: '',
        author: '',
        readNum: ''
      },
      rules: {}
    }
  },
  props: {
    dialogVisible: Boolean
  },
  methods: {
    handleCancel () {
      this.$emit('close')
    },
    handleSubmit () {
      this.$emit('submit')
      this.add()
    },
    // 新增图书
    async add () {
      let params = this.article
      await ADD(params)
    }
  }
}
</script>

<style scoped>

</style>
