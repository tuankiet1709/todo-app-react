import React from 'react';

import TodoItem from './TodoItem';

interface ITodo {
	id: number;
	title: string;
	completed: boolean;
}

interface IMyProps {
	todos: ITodo[];
	handleChange: any;
}

class Todos extends React.Component<IMyProps> {
	render() {
		return (
			<div>
				<ul>
					{this.props.todos.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							handleChange={this.props.handleChange}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default Todos;
