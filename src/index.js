import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Diary from './components/Diary';
import History from './components/History';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from  'react-router-dom';
import reportWebVitals from './reportWebVitals';


function Home() {


  return (
	
		<Router>	
		 <div>
            <Link to='/'>Home</Link> |  
            <Link to='/diary'>Diary</Link> | 
            <Link to='/History'>Diary History</Link>
        </div>
			<Switch>
			
				<Route exact path='/'>
					<h1>Welcome Virtual Diary</h1>
				</Route>

				<Route path='/diary'>
				<Diary></Diary>
				</Route>

        <Route path='/history'>
				<History></History>
				</Route>


			
			</Switch>
			
		</Router>
	);




}



ReactDOM.render(
 <Home></Home>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
