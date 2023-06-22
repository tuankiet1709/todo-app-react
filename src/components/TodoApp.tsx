import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './layout/Header';
import Todos from './Todos';
import AddTodo from './AddTodo';

interface ITodo {
	id: number;
	title: string;
	completed: boolean;
}

function TodoApp() {
	const [state, setState] = useState({
		todos: [] as ITodo[],
	});

	const handleCheckboxChange = (id: number) => {
		setState({
			todos: state.todos.map((todo: ITodo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	const deleteTodo = (id: number) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((response) =>
				setState({
					todos: [
						...state.todos.filter((todo: ITodo) => {
							return todo.id !== id;
						}),
					],
				})
			);
	};

	const addTodo = (title: string) => {
		const todoData = {
			title: title,
			completed: false,
		};
		axios
			.post('https://jsonplaceholder.typicode.com/todos', todoData)
			.then((response) => {
				console.log(response.data);
				setState({
					todos: [...state.todos, response.data],
				});
			});
		console.log(state.todos);
	};

	useEffect(() => {
		const config = {
			params: {
				_limit: 5,
			},
		};
		axios
			.get('https://jsonplaceholder.typicode.com/todos', config)
			.then((response) =>
				setState({
					todos: response.data,
				})
			);
	}, []);

	return (
		<div className="container">
			<Header />
			<AddTodo addTodo={addTodo} />
			<Todos
				todos={state.todos}
				handleChange={handleCheckboxChange}
				deleteTodo={deleteTodo}
			/>
		</div>
	);
}

// class TodoApp extends React.Component {
// 	state = {
// 		todos: [],
// 	};

// 	handleCheckboxChange = (id: number) => {
// 		this.setState({
// 			todos: this.state.todos.map((todo: ITodo) => {
// 				if (todo.id === id) {
// 					todo.completed = !todo.completed;
// 				}
// 				return todo;
// 			}),
// 		});
// 	};

// 	deleteTodo = (id: number) => {
// 		axios
// 			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
// 			.then((response) =>
// 				this.setState({
// 					todos: [
// 						...this.state.todos.filter((todo: ITodo) => {
// 							return todo.id !== id;
// 						}),
// 					],
// 				})
// 			);
// 	};

// 	addTodo = (title: string) => {
// 		const todoData = {
// 			title: title,
// 			completed: false,
// 		};
// 		axios
// 			.post('https://jsonplaceholder.typicode.com/todos', todoData)
// 			.then((response) => {
// 				console.log(response.data);
// 				this.setState({
// 					todos: [...this.state.todos, todoData],
// 				});
// 			});
// 	};

// 	componentDidMount() {
// 		const config = {
// 			params: {
// 				_limit: 5,
// 			},
// 		};
// 		//Tao Get request de lay danh sach todos
// 		axios
// 			.get('https://jsonplaceholder.typicode.com/todos', config)
// 			.then((response) =>
// 				this.setState({
// 					todos: response.data,
// 				})
// 			);
// 	}

// 	render() {
// 		return (
// 			<div className="container">
// 				<Header />
// 				<AddTodo addTodo={this.addTodo} />
// 				<Todos
// 					todos={this.state.todos}
// 					handleChange={this.handleCheckboxChange}
// 					deleteTodo={this.deleteTodo}
// 				/>
// 			</div>
// 		);
// 	}
// }
export default TodoApp;
