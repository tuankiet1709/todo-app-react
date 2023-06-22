import React from 'react';

interface ITodo {
	id: number;
	title: string;
	completed: boolean;
}

interface IMyProps {
	todo: ITodo;
	handleChange: any;
	deleteTodo: any;
}

class TodoItem extends React.Component<IMyProps> {
	render() {
		const { completed, id, title } = this.props.todo;
		return (
			<li className="todo-item">
				<input
					type="checkbox"
					checked={completed}
					onChange={() => this.props.handleChange(id)}
				/>
				<span className={completed ? 'completed' : ''}>{title}</span>
				<button
					className="btn-style"
					onClick={() => this.props.deleteTodo(id)}
				>
					{' '}
					X{' '}
				</button>
			</li>
		);
	}
}

export default TodoItem;
