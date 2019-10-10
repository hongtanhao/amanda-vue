import Amas from '@/components/main/index.js'
import Vue from 'vue'
import toast from '@/components/toast'

for (const ama in Amas) {
  if (Amas.hasOwnProperty(ama)) {
    if (Amas[ama] instanceof Function) {
      // Amas[ama]()
      Vue.use(Amas[ama])
    }
  }
}
Vue.use(toast)
