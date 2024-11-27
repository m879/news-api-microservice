import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsComponent from './component/Form.tsx';

function App() {
	return (
		<div className="App">
			<div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
				<div className="card">
					<div className="card-body">
						<h2 className="card-title text-center mb-4">News Group</h2>
						<NewsComponent />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
