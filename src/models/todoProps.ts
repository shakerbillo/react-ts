import Todo from "./todo";

export type TodosProps = {
	items: Todo[];
	onRemoveTodo: (id: string) => void;
	onAddTodo: (text: string) => void;
};