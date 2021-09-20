import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { getAuth } from '@firebase/auth';
import { app } from './firebase';

function App() {
  const [{user},dispatch] = useStateValue();
  
  useEffect(()=>{
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user is logged in 
        dispatch({
          type:'SET_USER',
          user: authUser,
        })
      }else {
        //user is logged out 
        dispatch({
          type:'SET_USER',
          user: null,
        })
      }
    })
    return ()=>{
      unsubscribe();
    }

  },[]);

  console.log('User is >>>>',user);

  return (
    <Router>
    <div className="App">

    <Switch>
      <Route path = "/checkout">
      <Header/>
      <Checkout/>
      </Route>
      <Route path = "/login">
      <Login/>
      </Route>
      <Route path = "/">
      <Header/>
      <Home/>
      </Route>
    </Switch>

    </div>
    </Router>
    
  );
}

export default App;
