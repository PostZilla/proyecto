const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			api: "https://3001-sapphire-cuckoo-5rd1lc8f.ws-eu16.gitpod.io",
			isAuthenticate: false,
			isRegistred: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			sign_in: (email, password) => {
				const store = getStore();

				fetch(`${store.api}/api/login`, {
					method: "POST",
					body: JSON.stringify({
						email: email,
						password: password
					}),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => {
						localStorage.setItem("token", data.token);
						setStore({ isAuthenticate: true });
					})
					.catch(error => console.error("[ERROR IN LOGIN]", error));
			},
			register: (email, password, username, name, last_name, country) => {
				const store = getStore();
				fetch(`${store.api}/api/register`, {
					method: "POST",
					body: JSON.stringify({
						email: email,
						password: password,
						username: username,
						name: name,
						last_name: last_name,
						country: country
					}),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => ({ data, isRegistred: true }))
					.catch(error => console.error("[ERROR IN LOGIN]", error));
			},
			Post: () => {
				const store = getStore();
				fetch(`${store.api}/post`, {
					method: "POST",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						} else {
							console.error("[Error response]", resp);
						}
					})
					.then(data => setStore({ posts: data }))
					.catch(error => console.error("[ERROR TO GET POSTS]", error));
			},
			getPosts: () => {
				const store = getStore();
				fetch(`${store.api}/post`, {
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						} else {
							console.error("[Error response]", resp);
						}
					})
					.then(data => setStore({ posts: data }))
					.catch(error => console.error("[ERROR TO GET POSTS]", error));
			}
		}
	};
};

export default getState;
