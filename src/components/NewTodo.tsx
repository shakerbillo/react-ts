import { useRef } from 'react';
import { useTodos } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo = () => {
	
	const { addTodo } = useTodos();
	const todoTextInputRef = useRef<HTMLInputElement>(null);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			// throw an error
			return;
		}
		addTodo(enteredText);
		todoTextInputRef.current!.value = '';
	};

	return (
		<>
			<form onSubmit={handleSubmit} className={classes.form}>
				<label htmlFor='text'>Todo text</label>
				<input type='text' id='text' ref={todoTextInputRef} />
				<button>Add Todo</button>
			</form>
		</>
	);
};

export default NewTodo;
