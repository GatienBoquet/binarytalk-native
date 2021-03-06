const Reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_THEME":
			return {
				...state,
				theme: action.payload,
			};
		default:
			return state;
	}
};

export default Reducer;
