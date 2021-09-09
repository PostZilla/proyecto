const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			api: "https://3001-sapphire-cuckoo-5rd1lc8f.ws-eu16.gitpod.io",
			isAuthenticate: false
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
			}
		}
	};
};

export default getState;
