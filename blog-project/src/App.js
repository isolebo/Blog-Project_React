import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
//import{Button,Form,FormGroup,Label,Input} from 'reactstrap'
import Forms from './components/Forms'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import PostLists from './components/PostLists';
import UsersList from './components/UsersList';
import UsersDetails from './components/UsersDetails';
import PostDetails from './components/PostDetail';
import CommentList from './components/CommentList'
import CommentDetails from './components/CommentDetails'
import HomePage from './components/HomePage'
import Adminss from './components/admin/Adminss'


function App() {
  
  return (
    <Router>
     <div className="App">
        <Navbar />
        <Switch>
            <Route  exact path='/' component={HomePage} />
            <Route        path="/users" component={UsersList}/>
            <Route        path="/details/:id" component={UsersDetails}/>
            <Route  exact      path="/posts" component={PostLists} />
            <Route        path="/posts/:id" component={PostDetails} />
            <Route        path="/comments" component={CommentList} />
            <Route        path="/commentDetails/:id" component={CommentDetails} />
            <Route        path="/forms" component={Forms} />
            <Route        path="/admin" component={Adminss} />
        </Switch>      
     </div>
    </Router>
    
  )

}

export default App