<template>
  <div>
    <el-row>
      <el-col :span="8">
        <m-d-query @query="hQuery()"></m-d-query>
      </el-col>
      <el-col :span="2" >
        <el-button type="primary" @click="getAll" plain icon="el-icon-refresh">
          刷新
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="add" icon="el-icon-plus">
          新增
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="info"
                   plain
                   @click="handlePush"
                   icon="el-icon-s-promotion">
          跳转测试
        </el-button>
      </el-col>
    </el-row>
      <el-table
        :data="article"
        :border="true"
        style="width: 920px;"
        :stripe="true"
        class="tab"
        v-loading="loadding"
      >
        <el-table-column
          prop="id"
          label="id"
          width="80px">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="180px">
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述"
          width="180">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          width="80">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="添加时间"
          width="180px">
        </el-table-column>
        <el-table-column
          prop="updateTime"
          label="更新时间"
          width="180px">
        </el-table-column>
        <el-table-column
          prop="recommend"
          label="是否推荐"
          fixed="right"
          width="80">
        </el-table-column>
        <el-table-column
          prop="likeNum"
          label="喜欢数量"
          width="80">
        </el-table-column>
      </el-table>
    <md-modal :dialogVisible="isShow" @close="cancel" @submit="post"></md-modal>

  </div>
</template>

<script>
import {ALL, BOOK, QUERY} from '../api/base'
import MdModal from '../components/modal'
import MDQuery from '../components/query'

export default {
  name: 'MDtable',
  components: {MdModal, MDQuery},
  data () {
    return {
      loadding: true,
      isShow: false,
      article: [],
      id: '',
      result: [],
      arr: [],
      query: {},
      name: '',
      app: {
        username: '',
        password: ''
      },
      rules: {
      }
    }
  },
  watch: {
    recommend (val) {
      this.$message({
        type: 'info',
        message: val
      })
    }
  },
  methods: {
    handlePush () {
      this.$router.push('fans')
    },
    add () {
      this.isShow = true
    },
    cancel () {
      this.isShow = false
    },
    post () {
      this.isShow = false
      this.getAll()
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
    async hQuery (val) {
      let params = val
      await QUERY(params).then((res) => {
        this.article = res.data
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
      this.loadding = false
    }
  },
  created () {
    this.getAll()
  }
}
</script>

<style>
  .tab {
    margin-top: 50px;
    margin-left: 75px;
  }
  /*.que{*/
  /*  margin-top: 30px;*/
  /*  margin-left: 75px;*/
  /*}*/
</style>
