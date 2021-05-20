
import ExampleComponents from './index'
export default {
  components: {
    ...ExampleComponents
  },
  name: 'ExampleShow',
  props: ['name'],
  render (h) {
    return h(
        `example-${this.name}`
    )
  }
}
