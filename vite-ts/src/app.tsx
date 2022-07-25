import './style.css';
import { reactive } from 'hydroxide';
import { render } from 'hydroxide-dom';

function App() {
	const count = reactive(0);
	const increment = () => count.perform(v => v + 1);
	return (
		<div>
			<h1>Hydroxide</h1>
			<button on-click={increment}> count is {count()} </button>
		</div>
	);
}

render(App, document.querySelector('#app')!);
