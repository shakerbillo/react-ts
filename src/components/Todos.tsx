import { useTodos } from '../store/todos-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos = () => {
	const { items, removeTodo } = useTodos();
	return (
		<div>
			<ul className={classes.todos}>
				{items.map((item) => (
					<TodoItem
						key={item.id}
						text={item.text}
						onRemoveTodo={() => removeTodo(item.id)}
					/>
				))}
			</ul>
		</div>
	);
};

export default Todos;
