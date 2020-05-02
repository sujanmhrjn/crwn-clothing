import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  {auth} from './firebase/firebase.utils';
import './App.css';
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({
        currentUser:user
      });
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndSignUpPage}/>
        <Route path="*" component={() => <h1>404</h1> }/>
      </Switch>
    </div>
  );
  }
}

export default App;
