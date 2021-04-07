<template>
  <div id="example">
    <base-form
      :form-items="formItems"
      :merge-form="mergeForm"
      :api="formApi"
      submitcontext="提交"
      resetcontext="取消"
      @after-submit="showTableData"
    >
      <template v-slot:slotinput='{scope}'>
        <el-input v-model="scope.slotinput" />
        <!-- <el-checkbox v-model="mergeForm.slotinput">插槽复选框1</el-checkbox> -->
      </template>
    </base-form>
  </div>
</template>

<script>
import { formItems } from './formItems'
export default {
  name: 'Example',
  data() {
    return {
      formApi:()=>{
        return {}
      },
      formItems,
      mergeForm: {
        slotinput: ''
      },
      tableData: [],
      showTableHeader: false
    }
  },
  async mounted() {
    // await this.getInfo()
  },
  methods: {
    showTableData(res) {
      this.tableData = res.tableData
    },
    handleChangeName() {
      // mergeForm使用了Proxy拦截所以不需要手动刷新视图
      //  这里指的操作是 this.$set(this.mergeForm, 'name', 'kingsley')
      this.mergeForm.name = 'kingsley'
    },
    findItem(key) {
      return this.formItems.find(
        formItem => formItem.attrs && formItem.attrs.key === key
      )
    },
    // async getInfo() {
    //   const [res1, res2] = await Promise.all([radioGroup(), cascader()])
    //   this.findItem('asyncRadio').attrs.options = res1.options
    //   this.findItem('cascader').attrs.options = res2.options
    // }
  }
}
</script>


