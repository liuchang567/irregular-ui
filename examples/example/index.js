const requireComponent = require.context(
  '../example',
  true,
  /\w+\.vue$/
)
const examples = {}
requireComponent.keys().forEach((file) => {
  const name = `Example${file.replace('.vue', '').replace('./', '')}`
  examples[name] = requireComponent(file).default
})
export default examples
