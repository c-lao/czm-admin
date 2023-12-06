<script lang="tsx">
import { computed, defineComponent, inject, type ComputedRef } from 'vue'

export default defineComponent({
  name: 'MFormItem',
  props: {
    label: {
      type: String
    }
  },
  setup(props, ctx) {
    const labelWidth = inject('labelWidth') as ComputedRef
    const labelPosition = inject('labelPosition') as ComputedRef
    const labelStyle = computed(() => {
      const style = `pr-3 ${labelWidth.value} hidden md:block`
      let positionStyle = 'inline-block py-3'
      if (labelPosition.value === 'right') {
        positionStyle = 'text-right'
      } else if (labelPosition.value === 'left') {
        positionStyle = 'text-left'
      }
      return `${style} ${positionStyle}`
    })
    const fromItemStyle = computed(() => {
      if (labelPosition.value == 'top') {
        return 'text-sm'
      } else {
        return `flex justify-center items-center text-sm`
      }
    })
    return () => (
      <div class={`${fromItemStyle.value}`}>
        <label class={`${labelStyle.value}`}>{props.label}</label>
        <div class="flex-1">{ctx.slots['default']?.()}</div>
      </div>
    )
  }
})
</script>
<style scoped></style>
