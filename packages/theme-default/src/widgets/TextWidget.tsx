import { defineComponent } from 'vue'
import { CommonWidgetPropsDefine } from '../types'
import BaseInput from './components/BaseInput'

export default defineComponent({
  name: 'TextWidget',
  props: CommonWidgetPropsDefine,
  setup(props) {
    return () => {
      return <BaseInput {...props} />
    }
  },
})
