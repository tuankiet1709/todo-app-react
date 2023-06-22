import React, { useState } from 'react';

interface MyProps {
	addTodo: any;
}

function AddTodo(props: MyProps) {
	const [title, setTitle] = useState('');

	const onInputChange = (e: any) => {
		setTitle(e.target.value);
	};

	const addTodo = (e: any) => {
		e.preventDefault();
		props.addTodo(title);
		setTitle('');
	};

	return (
		<form className="form-container" onSubmit={addTodo}>
			<input
				type="text"
				placeholder="Add Todo ..."
				className="input-text"
				value={title}
				onChange={onInputChange}
			/>
			<input type="submit" value="Submit" className="input-submit" />
		</form>
	);
}

// Using class
// class AddTodo extends React.Component<MyProps> {
// 	state = {
// 		title: '',
// 	};

// 	onInputChange = (e: any) => {
// 		this.setState({
// 			title: e.target.value,
// 		});
// 	};

// 	addTodo = (e: any) => {
// 		e.preventDefault();
// 		this.props.addTodo(this.state.title);
// 		this.setState({
// 			title: '',
// 		});
// 	};

// 	render() {
// 		return (
// 			<form className="form-container" onSubmit={this.addTodo}>
// 				<input
// 					type="text"
// 					placeholder="Add Todo ..."
// 					className="input-text"
// 					value={this.state.title}
// 					onChange={this.onInputChange}
// 				/>
// 				<input type="submit" value="Submit" className="input-submit" />
// 			</form>
// 		);
// 	}
// }

export default AddTodo;
