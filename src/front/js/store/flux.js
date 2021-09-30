const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isAuthenticate: false,
			isRegitred: false,
			msg: " ",
			post: " "
		},
		actions: {
			// Use getActions to call a function within a fuction
			sign_in: (email, password) => {
				const store = getStore();

				fetch(process.env.BACKEND_URL + "/api/login", {
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
			register: formData => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					body: formData
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => {
						console.log(data);
						setStore({ isRegitred: true, msg: data.msg });
					})
					.catch(error => console.error("[ERROR IN LOGIN]", error));
			},
			signOut: () => {
				localStorage.removeItem("token");
				setStore({ isAuthenticate: false });
			},

			verifySession: () => {
				let token = localStorage.getItem("token");
				if (token && token.length > 0) {
					setStore({ isAuthenticate: true });
				} else {
					setStore({ isAuthenticate: false });
				}
			},
			forgotPassword: email => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + "/forgot-password", {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify({
						email: email
					})
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => setStore({ message: data.msg }))
					.catch(error => console.error("[error when recovery password]", error));
			},
			Post: formData => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + "/api/post", {
					method: "POST",
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`
					},
					body: formData
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => {
						console.log("dataa", data);
						setStore({ post: data });
					})
					.catch(error => console.error("[ERROR TO GET POSTS]", error));
			},
			getPosts: () => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + "/api/posts", {
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
