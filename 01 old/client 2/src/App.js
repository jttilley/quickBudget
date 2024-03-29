import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import API from './utils/API';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import NoMatch from './pages/NoMatch';
import TopNav from './components/TopNav';
import { Container } from 'reactstrap';
import UserContext from './utils/UserContext';
import BudgetView from './components/Budget/BudgetView';
import Navbar from './components/navbar';

const App = () => {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
  });
  const [loggedIn, setLoggedin] = useState(false);
  const [user, setUser] = useState(null);
  const [failureMessage, setFailureMessage] = useState(null);

  useEffect(() => {
    isLoggedIn();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: userData.username,
      password: userData.password,
    };
    if (userData.username && userData.password) {
      API.login(data)
        .then((user) => {
          if (user.data.loggedIn) {
            setLoggedin(true);
            setUser(user.data.user);

            console.log('log in successful');
            window.location.href = '/profile';
          } else {
            console.log('Something went wrong :(');
            alert('Login failed, Please try again.');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    try {
      const data = {
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        username: userData.username,
        password: userData.password,
      };

      if (userData.username && userData.password) {
        API.signup(data)
          .then((user) => {
            if (user.data === 'email is already in use') {
              alert('Email already in use.');
            }
            if (user.data.loggedIn) {
              if (user.data.loggedIn) {
                setLoggedin(true);
                setUser(user.data.user);
                console.log('log in successful');
                window.location.href = '/profile';
              } else {
                console.log('something went wrong :(');
                console.log(user.data);
                setFailureMessage(user.data);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log('App -> error', error);
    }
  };

  const isLoggedIn = () => {
    if (!loggedIn) {
      API.isLoggedIn().then((user) => {
        if (user.data.loggedIn) {
          setLoggedin(true);
          setUser(user.data.user);
        } else {
          console.log(user.data.message);
        }
      });
    }
  };

  const logout = () => {
    if (loggedIn) {
      API.logout().then(() => {
        console.log('logged out successfully');
        setLoggedin(false);
        setUser(null);
      });
    }
  };

  const contextValue = {
    userData,
    loggedIn,
    user,
    failureMessage,
    handleInputChange,
    handleLogin,
    handleSignup,
    logout,
  };

  
  // {isLoggedIn : Home ? BudgetView}
  return (
    <>
    <UserContext.Provider value={contextValue}>
      <Router>
        <div>
          <TopNav />
          <Container>
            <Switch>
              <Route exact path="/" component={BudgetView} /> 
              <Route
                exact
                path="/login"
                render={() => <Auth action="login" />}
              />
              <Route
                exact
                path="/signup"
                render={() => <Auth action="signup" />}
              />
              <Route exact path="/profile" component={Profile} />
              <Route render={NoMatch} />
            </Switch>
          </Container>
        </div>
      </Router>
    </UserContext.Provider>
    </>
    
  );
};

export default App;
