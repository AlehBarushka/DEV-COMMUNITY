import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileConteiner from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
	return (
		<Router>
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile/:userId?' element={<ProfileConteiner />} />
						<Route path='/dialogs' element={<DialogsContainer />} />
						<Route path='/users' element={<UsersContainer />} />
						<Route path='/news' element={<News />} />
						<Route path='/settings' element={<Settings />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
