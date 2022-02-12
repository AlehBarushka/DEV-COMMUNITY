import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/index';
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
						<Route exact path='/profile' element={<ProfileConteiner />}>
							<Route path=':userId' element={<ProfileConteiner />} />
						</Route>
						<Route path='/dialogs' element={<DialogsContainer />} />
						<Route path='/users' element={<UsersContainer />} />
						<Route path='/news' element={<News />} />
						<Route path='/login' element={<Login />} />
						<Route path='/settings' element={<Settings />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
