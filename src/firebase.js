import { ref, onUnmounted } from 'vue'
import { getAuth } from 'firebase/auth'
import { firestore } from 'firebase/firestore'


const db = firestore()
const auth = getAuth()
const usersCollection = db.collection('users')
const contabilidadesCollection = db.collection('contabilidades')

export default { auth, db }

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}

//contabilidade

export const createContabilidade = contabilidade => {
  return contabilidadesCollection.add(contabilidade)
}

export const getContabilidade = async id => {
  const contabilidade = await contabilidadesCollection.doc(id).get()
  return contabilidade.exists ? contabilidade.data() : null
}

export const updateContabilidade = (id, contabilidade) => {
  return contabilidadesCollection.doc(id).update(contabilidade)
}

export const deleteContabilidade = id => {
  return contabilidadesCollection.doc(id).delete()
}

export const useLoadContabilidades = () => {
  const contabilidades = ref([])
  const close = contabilidadesCollection.onSnapshot(snapshot => {
    contabilidades.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  })
  onUnmounted(close)
  return contabilidades
}
