<script lang="tsx">
import { computed, defineComponent , provide, type PropType } from 'vue'
import MButton from '@/components/m-button/button.vue'
/**
 * form 表单
 * @property {string} btnText 按钮内容
 * @property {object} model 表单数据
 * @property {string} labelWidth label 宽度
 * @property {string} labelPosition label 对齐方式
 * **/ 
export default defineComponent({
  name: 'MForm',
  props: {
    btnText: {
      type: String,
      default: '提交'
    },
    model:Object as any,
    labelWidth:String,
    labelPosition:{
      type:String as PropType<"left"|'right'|'top'>,
      default:'left'
    }
  },
  emits: ['submit'],
  setup(props, context) {
    const submit = (event: Event) => {
      event.preventDefault();
      if(Object.values(props.model).some(item=>item == "")){
        alert('信息未填写完整')
      }else{
        context.emit('submit',props.model)
      }
      
    }
    provide('labelWidth',computed(()=>props.labelWidth))
    provide('labelPosition',computed(()=>props.labelPosition))
    return () => (
      <form onSubmit={submit} class="w-full flex flex-col py-10">
        {context.slots['default']?.()}
        <div class="mt-4"></div>
        <MButton type="submit" text="登陆" />
      </form>
    )
  }
})
</script>