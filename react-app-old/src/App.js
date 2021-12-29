import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route path='/profile' render={() => <Profile />} />
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
