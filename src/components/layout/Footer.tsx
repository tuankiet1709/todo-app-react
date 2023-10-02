import React from 'react';

const RED = '#ff0000';
const BLUE = '#0000ff';
const GREY = '#678c89';

class Footer extends React.Component<any> {
	constructor(props: any) {
		super(props);

		this.submitThemeColor = this.submitThemeColor.bind(this);
	}

	submitThemeColor(color: any) {
		if (color) {
			console.log('handleChangeTheme');
			this.props.saveColorTheme(color);
		}
	}

	componentWillReceiveProps(nextProps: any) {
		console.log(
			'UNSAFE_componentWillReceiveProps: ' + JSON.stringify(nextProps)
		);
		document.documentElement.style.setProperty(
			'--main-color',
			nextProps.themeColor.color
		);
	}

	render() {
		return (
			<div className="footer">
				<div className="vertical-center">
					<span>Choose Theme</span>
					<button
						onClick={() => this.submitThemeColor(RED)}
						className="dot red"
					/>
					<button
						onClick={() => this.submitThemeColor(BLUE)}
						className="dot blue"
					/>
					<button
						onClick={() => this.submitThemeColor(GREY)}
						className="dot gray"
					/>
				</div>
			</div>
		);
	}
}
export default Footer;
