import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

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
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route path='/profile/:userId?' render={() => <ProfileConteiner />} />
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/login' render={() => <Login />} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
