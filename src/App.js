import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { privateRoutes, publicRoutes } from './routes/routes';
import DefaultLayout from './Layout/DefaultLayout';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					{/* public routes */}
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
					{/* private route */}
					{privateRoutes.map(()=>{
						
					})}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
