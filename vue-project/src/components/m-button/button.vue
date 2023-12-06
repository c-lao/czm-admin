<script lang="tsx">
import { defineComponent, type PropType } from 'vue'
type ButtonType = "submit" | 'button' | "reset"
export default defineComponent({
  name: 'MButton',
  props: {
    text: String,
    disabled: {
      type: Boolean,
      default:false
    },
    type:{
      type:String as PropType<ButtonType>
    }
  },
  setup(props, { emit, slots }) {
    const click = (event:Event) =>{
      if(props.type == "submit") return
      event.preventDefault();
    }
    return () => (
      <>
        <button
          type={props.type}
          class="w-full outline-none py-3 border-white bg-sky-500 rounded-lg text-white duration-300
            hover:bg-opacity-80 cursor-pointer 
            disabled:bg-slate-200
            active:bg-slate-300 transition
            "
          disabled={props.disabled}
          v-text={props.text}
          onClick={click}
        />
      </>
    )
  }
})
</script>
