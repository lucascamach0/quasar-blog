import Vue from 'vue'

const setPosts = ({ commit }) =>{
    return new Promise((resolve, reject) => {
        Vue.prototype.$axios.get('http://viladosilicio.com.br/wp-json/wp/V2/posts')
        .then((res) => {
            commit('SET_POSTS', res.data)
            resolve(res.data)
        })
        .catch((err) => {
            console.error(err)
            reject(err)
        })
    })
}

const setArtigo = ({ commit }, id) =>{
    return new Promise((resolve, reject) => {
        Vue.prototype.$axios.get(`http://viladosilicio.com.br/wp-json/wp/V2/posts/${id}`)
        .then((res) => {
            commit('SET_ARTIGO', res.data)
            resolve(res.data)
        })
        .catch((err) => {
            console.error(err)
            reject(err)
        })
    })
}

export{
    setPosts,
    setArtigo
}