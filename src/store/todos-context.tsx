import { createContext, useContext, useState } from 'react';
import Todo from '../models/todo';

type Todos = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

const TodosContext = createContext<Todos>({
	items: [],
	addTodo: () => {},
	removeTodo: () => {},
});

export const TodosContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (text: string) => {
		const newTodo = new Todo(text);

		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo);
		});
	};

	const removeTodoHandler = (todoID: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoID);
		});
	};
	const contextValue: Todos = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};
	return (
		<TodosContext.Provider value={contextValue}>
			{children}
		</TodosContext.Provider>
	);
};

export const useTodos = () => useContext(TodosContext);
