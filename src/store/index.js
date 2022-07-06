import { createStore } from "vuex";

const countermodule = {
	state: {
		counter: 0,
	},
	getters: {
		//every getter is a method
		// getters have a second arguement in which you call other getters
		finalcounter(state) {
			return state.counter * 3;
		},
		normalize(_, getters) {
			const finalcounter = getters.finalcounter;
			if (finalcounter < 0) {
				return 0;
			}
			if (finalcounter > 100) {
				return 100;
			}
			return finalcounter;
		},
	},
	mutations: {
		//mutations are for editing the state
		increment(state, payload) {
			// you can pass the second arguement as anything you want(object,string,number,etc)
			state.counter += payload.value;
		},
	},
	actions: {
		// actions can use asynchronous code
		// takes a 'context' arguement and also optionally a payload
		// has a 'commit' method which commits a mutation
		// DO NOT MANIPULATE THE STATE FROM INSIDE THE ACTIONS.USE A MUTATION FOR THAT.
		increasing(context, payload) {
			// commiting the increment mutation
			setTimeout(() => {
				context.commit("increment", payload);
			}, 3000);
		},
		normal(context, payload) {
			context.commit("increment", payload);
		},
	},
};

const authmodule = {
	state: { loggedin: false },
	getters: {
		userAuthentication(state) {
			return state.loggedin;
		},
	},
	mutations: {
		setAuth(state, payload) {
			state.loggedin = payload.isAuth;
		},
	},
	actions: {
		login(context, payload) {
			context.commit("setAuth", { isAuth: true });
		},
		logout(context, payload) {
			context.commit("setAuth", { isAuth: false });
		},
	},
};

export default createStore({
	modules: {
		// assigning the modules
		counter: countermodule,
		auth: authmodule,
	},
});
