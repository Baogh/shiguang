import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	films: [],
	message: "hello world"
}

const mutations = {
	setFilms: (state, filmsData)=>{
		state.films = filmsData;
	}
}

const actions = {
	setFilms: ({commit}, filmsData)=>{
		commit('setFilms', filmsData)
	}
}

const getters = {
	getTop8: function(state) {
		return state.films.slice(0, 8);
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})