import classes from './TodoItem.module.css';

type TodoItemProps = {
	text: string;
	onRemoveTodo: () => void;
};

const TodoItem = ({ text, onRemoveTodo }: TodoItemProps) => {
	return (
		<>
			<li className={classes.item} onClick={onRemoveTodo}>
				{text}
			</li>
		</>
	);
};

export default TodoItem;
