import Amas from '@/components/main/index.js'
import Vue from 'vue'
import toast from '@/components/toast'
import directives from '@/directive/'
// install global component
for (const ama in Amas) {
  if (Amas.hasOwnProperty(ama)) {
    if (Amas[ama] instanceof Function) {
      Vue.use(Amas[ama])
    }
  }
}
// install gloabal directive
for (const di in directives) {
  if (directives.hasOwnProperty(di)) {
    if (directives[di] instanceof Function) {
      Vue.use(directives[di])
    }
  }
}
Vue.use(toast)
