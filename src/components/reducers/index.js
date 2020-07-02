import { MODE } from "../actions/types";

const initialState = {
	professionalMode: true,
};

export const reducers = (state = initialState, action) => {
	switch (action.type) {
		case MODE:
			return { ...state, professionalMode: action.payload };
		default: {
			return {
				...state,
			};
		}
	}
};
