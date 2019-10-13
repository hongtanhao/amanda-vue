import CreateDirective from '../create-directive'
export default function () {
  CreateDirective('loading', {
    bind (el, binding, vnode) {
      // let value = el.textContent
      el.innerHTML = binding.value
    },
    update (el, binding, vnode) {
      console.log('directive-update')
      if (binding.value === 'true') {
        let value = 'downloading'
        el.innerHTML = value + '<div class="directive-loading"></div>'
      } else {
        el.innerHTML = 'downloaded'
      }
    }
  })
}
