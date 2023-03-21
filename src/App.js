import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from "prop-types";

import './App.css';
import { privateRoutes, publicRoutes } from './routes/routes';
import DefaultLayout from './Layout/DefaultLayout';
import { selectUser } from './redux/selector';
<<<<<<< HEAD
import { Fragment } from 'react';
=======
import { ToastContainer } from 'react-toastify';
>>>>>>> 898eca25ee11eb250ea80c50efcd125549dd4f49

const ProtectedRoute = ({ user, redirectPath = '/' }) => {
	if (!user) {
		alert("Chưa đăng nhập!");
		return <Navigate to={redirectPath} replace />;
	}
	return <Outlet />;
};

function App() {
	const currentUser = useSelector(selectUser);
	return (
		<BrowserRouter>
			<div className="App">
				<ToastContainer />
				<Routes>
					{/* public routes */}
					{publicRoutes.map((route, index) => {
						const Layout = route.layout === null ? Fragment: DefaultLayout; // null or undefined
						const Page = route?.component;
						return (
							<Route key={index} path={route.path}
								element={<Layout><Page /></Layout>} />
						)
					})}
					{/* private route */}
					<Route element={<ProtectedRoute user={currentUser} />} >
						{privateRoutes.map((route, index) => {
							const Layout = route.layout ?? DefaultLayout; // null or undefined
							const Page = route?.component;
							return (
								<Route key={index} path={route.path}
									element={<Layout><Page /></Layout>} />
							)
						})}
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

ProtectedRoute.propTypes = {
	user: PropTypes.object,
}

export default App;
