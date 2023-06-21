import React from 'react';

interface ITodo {
	id: number;
	title: string;
	completed: boolean;
}

interface IMyProps {
	todo: ITodo;
}

class TodoItem extends React.Component<IMyProps> {
	render() {
		return (
			<li className="todo-item">
				<input type="checkbox" />
				{this.props.todo.title}
			</li>
		);
	}
}

export default TodoItem;
