import React from 'react';

interface MyProps {
	addTodo: any;
}

class AddTodo extends React.Component<MyProps> {
	state = {
		title: '',
	};

	onInputChange = (e: any) => {
		this.setState({
			title: e.target.value,
		});
	};

	addTodo = (e: any) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({
			title: '',
		});
	};

	render() {
		return (
			<form className="form-container" onSubmit={this.addTodo}>
				<input
					type="text"
					placeholder="Add Todo ..."
					className="input-text"
					value={this.state.title}
					onChange={this.onInputChange}
				/>
				<input type="submit" value="Submit" className="input-submit" />
			</form>
		);
	}
}

export default AddTodo;
