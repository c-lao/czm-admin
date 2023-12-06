<script lang="tsx">
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { computed, defineComponent, ref } from 'vue';
import { inputProps } from './input'

/**
 * Input 输入框
 * @property {string, number, boolean} modelValue 输入框的值
 * @property {string} type 定义 input 类型
 * @property {string} placeholder 输入框为空时的占位符
 * @property {string} beforeIcon 前置字体图标
 * @property {string} beforeText 前置文字名称
 * @property {string} labelWidth 前置内容宽度
 * @property {boolean} clear 输入框清除按钮，默认显示
 * @property {boolean} disabled 禁用输入框，默认不禁用
 */
export default defineComponent({
  name: "MInput",
  props: inputProps,
  emits: ["update:modelValue"],

  setup(props, context) {
    // 处理输入事件，更新 modelValue
    const handleInput = (event: Event) => {
      const inputValue = (event.target as HTMLInputElement).value;
      context.emit('update:modelValue', inputValue);
    };

    // 是否输入框获得焦点
    const isFocus = ref(false);

    // 控制密码输入框的可见性
    const passwordEye = ref<string>(props.type);

    // 密码可见性图标
    const isEyeIcon = computed(() => {
      return passwordEye.value === 'password' ? 'iconfont icon-bukejian' : 'iconfont icon-xianshikejian';
    });

    return () => (
      <div class={`w-full border px-4 h-12 rounded-md flex justify-center items-center text-gray-700 duration-500 ${isFocus.value ? 'border-sky-500' : ''}`}>
        {/* 插槽，当插槽存在时 beforeIcon 和 beforeText 失效 */}
        {context.slots["before"] && <div class="pr-3">{context.slots["before"]?.()}</div>}

        {/* 显示 beforeIcon 字体图标 */}
        {!context.slots["before"] && props.beforeIcon && <span class={`pr-3 ${props.beforeIcon}`}></span>}

        {/* beforeText 文本内容 */}
        {!context.slots["before"] && props.beforeText && <div class="pr-3" v-text={props.beforeText}></div>}

        <input
          placeholder={props.placeholder}
          value={props.modelValue}
          onInput={handleInput}
          type={props.type === "password" ? passwordEye.value : props.type}
          class="outline-none text-sm placeholder:text-sm flex-1"
          onFocus={() => { isFocus.value = true }}
          onBlur={() => { isFocus.value = false }}
          autocomplete="off"
          name={props.name}
          disabled={props.disabled}
        />

        {/* 插槽，当插槽存在时 afterIcon 和 afterText 失效 */}
        {props.type === "password" && props.modelValue && <span class={`${isEyeIcon.value} cursor-pointer`} onClick={() => { passwordEye.value = passwordEye.value === "password" ? 'text' : 'password' }}></span>}

        {/* 默认显示清除按钮 */}
        {props.modelValue && props.clear && <div class="iconfont icon-qingchu cursor-pointer pl-3" onClick={() => { context.emit('update:modelValue', "") }}></div>}
      </div>
    );
  },
});
</script>