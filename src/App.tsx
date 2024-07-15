import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

const App = () => {
	const todos = [
		new Todo('Learn React'),
		new Todo('Learn SW Deployment'),
		new Todo('Learn Typescript'),
		new Todo('Learn Python'),
		new Todo('Learn NodeJs'),
		new Todo('Learn Java'),
		new Todo('Learn to DJ'),
	];

	return (
		<>
			<Todos items={todos} />
		</>
	);
};

export default App;
