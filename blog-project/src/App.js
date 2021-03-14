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
import CommentList from './components/CommentList';

import HomePage from './components/HomePage'
import Adminss from './components/admin/Adminss'


function App() {
  
  return (
    <Router>
     <div className="App">
        <Navbar />
        <Switch>
            <Route  exact path='/' component={HomePage} />
            <Route     path="/users" component={UsersList}/>
            <Route   path="/details/:id" component={UsersDetails}/>
            <Route   path="/posts" component={PostLists}/>
          <Route path="/postDetails/:id" component={PostDetails} />
                      <Route   path="/commnents" component={CommentList}/>

          <Route path="/forms" component={Forms} />
            <Route path="/admin" component={Adminss} />

          
          
        </Switch>
              
     </div>
    </Router>
    
  )

}

export default App