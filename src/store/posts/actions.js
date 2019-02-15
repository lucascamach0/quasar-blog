import Vue from 'vue'
import { Loading } from 'quasar'

const setPosts = ({ commit }) =>{
    Loading.show({
        delay: 300
    })
    return new Promise((resolve, reject) => {
        Vue.prototype.$axios.get('http://viladosilicio.com.br/wp-json/wp/V2/posts')
        .then((res) => {
            commit('SET_POSTS', res.data)
            Loading.hide()
            resolve(res.data)
        })
        .catch((err) => {
            Loading.hide()
            console.error(err)
            reject(err)
        })
    })
}

const setArtigo = ({ commit }, id) =>{
    Loading.show({
        delay: 300
    })
    return new Promise((resolve, reject) => {
        Vue.prototype.$axios.get(`http://viladosilicio.com.br/wp-json/wp/V2/posts/${id}`)
        .then((res) => {
            Loading.hide()
            commit('SET_ARTIGO', res.data)
            resolve(res.data)
        })
        .catch((err) => {
            Loading.hide()
            console.error(err)
            reject(err)
        })
    })
}

const enviarPush = ({ commit }, id) => {
    const auth = {
        'Content-Type': 'application/json',
        'Authorization' : 'Basic OWE2ZmI5OWItZjc1YS00OGZiLTk5YmMtY2E4MzY2NGZkODVm'
    }
    let app_id = '03944af9-4d45-4c31-a3e7-8d07dfd1946d'
    let contents = {
        'en': 'Você clicou no artigo ' + id
    }
    let user = ["hermes-123"];
    return new Promise((resolve, reject) => {
        Vue.prototype.$axios.post('https://onesignal.com/api/v1/notifications', 
        {
            'app_id' : app_id,
            'contents': contents,
            'include_external_user_ids': user

        },auth
        ).then((res) => {
            commit('SET_PUSH', res.data)
            resolve(res.data)
            console.log('Disparou push')
        })
        .catch((err) => {
            console.error('ERRO AQUI: ' + err)
            reject(err)
        })
    })
}

export{
    setPosts,
    setArtigo,
    enviarPush
}