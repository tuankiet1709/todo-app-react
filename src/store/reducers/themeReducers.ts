let initState = {
	color: '#FFFFFF',
};

export interface IPayload {
	color: string;
}

export interface IAction {
	type: string;
	payload: IPayload;
}

export default function themeReducer(state = initState, action: IAction) {
	switch (action.type) {
		case 'CHANGE_THEME':
			console.log('themeReducer: ' + JSON.stringify(state));
			return Object.assign({}, state, {
				color: action.payload.color,
			});
		default:
			return initState;
	}
}
