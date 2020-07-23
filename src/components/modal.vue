<template>
  <el-dialog
    title="新增图书"
    :visible.sync="dialogVisible"
    width="30%" :before-close="handleCancel">
    <span>这是一段新增信息表</span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
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
    }
  }
}
</script>

<style scoped>

</style>
