import api from '../../api/imgur';

const state = {
	token: null,
};

const getters = {
	// note !! is also way to write boolean
	isLoggedIn: (state) => !!state.token
};

const mutations = {
	setToken: (state, token) => {
		state.token = token   // updating the data
	},
};

const actions = {
	login: () => {
		api.login();
	},
	logout: ({ commit }) => {  // to call a mutation is why we use the commit
		commit('setToken', null);
	},
};



export default {
	state,
	getters,
	actions,
	mutations,
};
