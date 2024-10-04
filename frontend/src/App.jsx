import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom';
import UserProvider from './components/Authentication/UserContext/UserProvider';
import { Header } from './components/User/Main/Header/Header';
// Athentication Pages //
import ProtectedRoute from './components/Authentication/ProtectedRoute/ProtectedRoute';
import Login from './pages/Authentication/Login/Login';
import Signup from './pages/Authentication/Signup/Signup';
// Public Pages //
import AboutPublic from './pages/Public/About/About';
import Contact from './pages/Public/Contact/Contact';
import Policy from './pages/Public/Policy/Policy';
// User Pages //
import Home from './pages/User/Home/Home';
import Friends from './pages/User/Friends/Friends';
import Messages from './pages/User/Messages/Messages';
import Notifications from './pages/User/Notifications/Notifications';
import Trends from './pages/User/Trends/Trends';
import Groups from './pages/User/Groups/Groups';
import Reels from './pages/User/Reels/Reels';
import Saved from './pages/User/Saved/Saved';
import Settings from './pages/User/Settings/Settings';
import Account from './pages/User/Profile/Account/Account';
import About from './pages/User/Profile/About/About';
import MyFriends from './pages/User/Profile/Friends/Friends';
import Photos from './pages/User/Profile/Photos/Photos';
import Videos from './pages/User/Profile/Videos/Videos';
import Posts from './pages/User/Profile/Posts/Posts';
import MyReels from './pages/User/Profile/Reels/Reels';
import MyGroups from './pages/User/Profile/Groups/Groups';
// Admin Pages//
import Admin from './pages/Admin/Admin';
// Error Pages //

const App = () => {
    window.localStorage.setItem('windowMode',"Dark");
    const isLoggedIn = window.localStorage.getItem("loggedIn");
    const userType = window.localStorage.getItem("userType");
    const userID = window.localStorage.getItem("userId") || 1;
    return (
        <UserProvider>
            <Router>
                <Header userID={userID}/>
                <Switch>
                    {!isLoggedIn && (
                        <>
                            {/* Authentication */}
                            <Route path="/" exact component={Login}/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/signup" exact component={Signup}/>
                        </>
                    )}
                    {/* Public Pages */}
                    <Route path='/about' exact component={AboutPublic}/>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/policy" exact component={Policy}/>
                    {/* Private Pages*/}
                    <Route element={<ProtectedRoute/>}>
                        <Route path="/login" render={() => <Redirect to="/" />} />
                        <Route path="/signup" render={() => <Redirect to="/" />} />
                        {userType !=='admin' ? (
                            <>
                                {/* User Pages */}
                                <Route path="/" exact component={Home} />
                                <Route path="/friends" exact component={Friends}/>
                                <Route path="/trends" exact component={Trends}/>
                                <Route path="/messages" exact component={Messages}/>
                                <Route path="/notifications" exact component={Notifications}/>
                                <Route path="/groups" exact component={Groups}  />
                                <Route path="/reels" exact component={Reels}/>
                                <Route path="/saved" exact component={Saved}/>
                                <Route path="/settings" exact component={Settings} />
                                <Route path="/profile" exact component={() => <Account userID={userID} />} />
                                <Route path="/profile/about" exact component={() => <About userID={userID}/>}/>
                                <Route path="/profile/friends" exact component={() => <MyFriends userID={userID}/>}/>
                                <Route path="/profile/photos" exact component={() => <Photos userID={userID}/>}/>
                                <Route path="/profile/videos" exact component={() => <Videos userID={userID}/>}/>
                                <Route path="/profile/posts" exact component={() => <Posts userID={userID}/>}/>
                                <Route path="/profile/reels" exact component={()=> <MyReels userID={userID}/>}/>
                                <Route path="/profile/groups" exact component={()=> <MyGroups userID={userID}/>}/>
                            </>
                            ):(
                                <>
                                    {/* Admin Pages */}
                                    <Route path='/admin' exact component={Admin}/>
                                    <Route path='*' exact component={Admin}/>
                                </>
                            )
                        }
                    </Route>
                    {/* Default Route (404 page) */}
                    <Route render={() => <h1>404 Not Found</h1>} />
                </Switch>
            </Router>
        </UserProvider>
    );
};

export default App;