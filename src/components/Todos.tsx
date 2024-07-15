import Todo from '../models/todo';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
	return (
		<div>
			<ul>
				{props.items.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</div>
	);
};

export default Todos;
