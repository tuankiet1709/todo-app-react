import React from 'react';

interface ITodo {
	id: number;
	title: string;
	completed: boolean;
}

interface IMyProps {
	todo: ITodo;
	handleChange: any;
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
			</li>
		);
	}
}

export default TodoItem;
