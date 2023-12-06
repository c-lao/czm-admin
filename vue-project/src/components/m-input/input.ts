export const inputProps = {
  modelValue: {
    type: [String || Number || Boolean]
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String
  },
  beforeIcon: {
    type: String
  },
  beforeText: {
    type: String
  },
  clear: {
    type: Boolean,
    default: true
  },
  name: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  }
}
