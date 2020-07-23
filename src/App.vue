<template>
  <div>
    <el-row >
      <el-table
        :data="article"
        style="width: 75%"
        :border="true"
        class="tab"
        :stripe="true"
         >
        <el-table-column
          prop="id"
          label="id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="readNum"
          label="阅读数">
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-button type="primary" @click="getAll">
        刷新
      </el-button>
      <el-button type="primary" @click="add">
        新增
      </el-button>
    </el-row>
    <md-modal :dialogVisible="isShow" @close="cancel" @submit="post"></md-modal>
  </div>
</template>

<script>
import {BOOK, ALL} from './api/base'
import MdModal from './components/modal'
export default {
  name: 'App',
  components: {MdModal},
  data () {
    let namevalid = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不为空'))
      } else callback()
    }
    let validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码的长度不能小于5位'))
      }
      if (value.length > 12) {
        callback(new Error('密码的长度不能超过12位'))
      } else callback()
    }
    return {
      isShow: false,
      article: [],
      id: '',
      result: [],
      arr: [],
      into: '',
      name: '',
      app: {
        username: '',
        password: ''
      },
      rules: {
        username: {validator: namevalid, trigger: 'blur'},
        password: {validator: validatePass, trigger: 'blur'}
      }
    }
  },
  watch: {
    into (val, old) {
      this.$message(val + old)
    }
  },
  methods: {
    add () {
      this.isShow = true
    },
    cancel () {
      this.isShow = false
    },
    post () {
      this.isShow = false
    },
    getwatch () {
      this.$message({
        message: this.name,
        type: 'error'
      })
    },
    testlist () {
      this.$message('test')
    },
    handleDel () {
      this.$confirm('是否确认删除文件', '提醒', {
        confirmButtonText: '确认',
        cancelButtonText: '',
        type: 'warning'
      }).then(() => {
        this.$message({
          message: '已删除',
          type: 'success'
        })
      }
      ).catch(() => {
        this.$message({
          message: '已取消删除',
          type: 'info'
        })
      })
    },
    async getBook () {
      const param = {
        id: this.id
      }
      await BOOK(param).then((res) => {
        this.result = res.data.title
      }).catch((error) => {
        console.log(error)
      })
    },
    async getAll () {
      await ALL().then((res) => {
        this.article = res.data
      })
    }
  },
  created () {
    this.getAll()
  }
}
</script>

<style>
  .tab{
    margin-left: 150px;
    margin-top: 130px;
  }
</style>
