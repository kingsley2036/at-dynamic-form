// import Vue from 'vue'
import BaseForm from './components/BaseForm'
import BaseCheckboxGroup from './components/BaseCheckboxGroup'
import BaseRadioGroup from './components/BaseRadioGroup'
import BaseSelect from './components/BaseSelect'

const components = [BaseForm, BaseCheckboxGroup, BaseRadioGroup, BaseSelect ]

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
  console.log('安装组件成功');
}
// 通过标签引用自动注册组件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
BaseForm.install=install

export default BaseForm

