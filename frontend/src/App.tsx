import Graph from './components/Graph';
import NavBar from './components/NavBar';

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className='w-[35rem] mx-auto my-5'>
				<Graph />
			</div>
		</div>
	);
}

export default App;
