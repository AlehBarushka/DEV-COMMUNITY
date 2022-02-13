import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar';
import ProfileConteiner from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login';

const App = () => {
	return (
		<Router>
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile' element={<ProfileConteiner />}>
							<Route path=':userId' element={<ProfileConteiner />} />
						</Route>
						<Route path='/dialogs' element={<DialogsContainer />} />
						<Route path='/users' element={<UsersContainer />} />
						<Route path='/login' element={<Login />} />
						<Route path='' element={<Navigate to='/profile' />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
