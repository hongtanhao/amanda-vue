import Amas from '@/components/main/index.js'
for (const ama in Amas) {
  if (Amas.hasOwnProperty(ama)) {
    if (Amas[ama] instanceof Function) {
      Amas[ama]()
    }
  }
}
