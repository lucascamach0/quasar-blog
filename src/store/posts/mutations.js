const SET_POSTS = (state, dados) =>{
    state.posts = dados
}

const SET_ARTIGO = (state, dados) =>{
    state.artigo = dados
}

const CLEAR_ARTIGO = (state) =>{
    state.artigo = {}
}

const SET_PUSH = (state, dados) => {
    state.push = dados
}

const SET_CASES = (state, dados) => {
    state.cases = dados
}
export {
    SET_POSTS,
    SET_ARTIGO,
    CLEAR_ARTIGO,
    SET_PUSH,
    SET_CASES
}
