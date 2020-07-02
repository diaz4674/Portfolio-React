import { MODE } from "./types";

export const toggleModes = (bool) => (dispatch) => {
	dispatch({ type: MODE, payload: bool });
};
