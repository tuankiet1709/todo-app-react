export const saveTheme = (color: any) => ({
	type: 'CHANGE_THEME',
	payload: {
		color,
	},
});
