const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isAuthenticate: false,
			isRegitred: false,
			myFollower: false,
			myLike: false,
			msg: " ",
			user: [],
			post: undefined,
			likes: [],
			follower: [],
			following: [],
			singlePost: [],
			isLoading: false
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
						setStore({ isLoading: true });
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => {
						console.log(data);
						setStore({ isRegitred: true, msg: data.msg, isLoading: false });
					})
					.catch(error => console.error("[ERROR IN LOGIN]", error));
			},
			signOut: () => {
				localStorage.removeItem("token");
				setStore({ isAuthenticate: false });
			},
			getUser: id => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + "/api/user" + id, {
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
					.then(data => {
						console.log("user dataa", data);
						setStore({ user: data });
					})
					.catch(error => console.error("[ERROR TO GET POSTS]", error));
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
				const actions = getActions();
				fetch(process.env.BACKEND_URL + "/api/post", {
					method: "POST",
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`
					},
					body: formData
				})
					.then(resp => {
						setStore({ isLoading: true });
						if (resp.ok) {
							return resp.json();
						}
					})

					.then(data => {
						console.log("dataa", data);
						setStore({ msg: data.message, isLoading: false });

						actions.getPosts();
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
					.then(data => {
						console.log("post dataa", data);
						setStore({ post: data.reverse() });
					})
					.catch(error => console.error("[ERROR TO GET POSTS]", error));
			},
			getSinglePost: id => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + "/api/posts/" + id, {
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
					.then(data => {
						setStore({ singlePost: data });
					})
					.catch(error => console.error("[ERROR TO GET POSTS]", error));
			},
			addFollower: friend_id => {
				const store = getStore();
				const actions = getActions();
				fetch(process.env.BACKEND_URL + "/api/follow", {
					method: "POST",
					body: JSON.stringify({
						friend_id: friend_id
					}),
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => {
						console.log("folllow", data);
						setStore({ msg: data.message, myFollower: true });
						actions.getFollows();
					})
					.catch(error => console.error("[ERROR IN LOGIN]", error));
			},
			getFollows: () => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + "/api/follows", {
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
					.then(data => {
						console.log("follow nuevo", data);
						setStore({ follower: data });
					})
					.catch(error => console.error("[ERROR TO GET POSTS]", error));
			},
			is_following: id => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + "/api/follower/" + id, {
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
					.then(data => {
						console.log("following", data);
						return data.following;
					})
					.catch(error => console.error("[ERROR TO GET POSTS]", error));
			},
			delFollow: id => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + "/api/follows/" + id, {
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
						"Content-type": "application/json"
					}
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => {
						setStore({ msg: data.msg, myFollower: false });
					});
			},
			addLike: id => {
				const store = getStore();

				fetch(process.env.BACKEND_URL + "/api/like", {
					method: "POST",
					body: JSON.stringify({
						id: id
					}),
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => {
						console.log("like", data);
						setStore({ likes: data, myLike: true });
					})
					.catch(error => console.error("[ERROR IN LOGIN]", error));
			},

			addLike: newItem => {
				let myStore = getStore();
				let newLike = myStore.likes.concat(newItem);
				setStore({ likes: newLike, myLike: true });
			},
			deleteLike: delItem => {
				let storeCopy = getStore();
				let newLike = storeCopy.likes.filter((value, index) => {
					return value != delItem;
				});
				setStore({ follower: newLike });
			}
		}
	};
};

export default getState;
