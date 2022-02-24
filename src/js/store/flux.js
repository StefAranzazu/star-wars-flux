const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			character: [],
			planet: [],
			favorites: []
		},
		actions: {

			loadSomeData: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => setStore({ character: data.results }))
					.catch(error => console.error(error));

				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => setStore({ planet: data.results }))
					.catch(error => console.error(error));
			},

			addFav: newItem => {
				let myStore = getStore();
				let newFav = myStore.favorites.concat(newItem);
				setStore({ favorites: newFav });
			},
			delFav: deletedItem => {
				var storeCopy = getStore();
				var newFavorites = storeCopy.favorites.filter((value, index) => {
					return value != deletedItem;
				});
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
