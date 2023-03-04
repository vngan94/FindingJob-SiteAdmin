import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { publicRoutes } from './routes/routes';
import DefaultLayout from './Layout/DefaultLayout';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				{/* public routes */}
				<Routes>
					{publicRoutes.map((route, index) => {
						const Layout = route.layout ?? DefaultLayout; // null or undefined
						const Page = route.component;
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<Page />
									</Layout>
								}
							/>
						)
					})}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
