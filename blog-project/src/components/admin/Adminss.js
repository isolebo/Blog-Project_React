import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './PostList'
import PostCreate from './PostCreate'
import PostEdit from './PostEdit'
import UserList from './UserList'
import UserCreate from './UserCreate'
import UserEdit from './UserEdit'





const Adminss = () => {
    return <Admin dataProvider={restProvider("http://localhost:3000")}>
        <Resource
            name='posts'
            list={PostList}
            create={PostCreate}
            edit={PostEdit}
        />
         <Resource name='users'
            list={UserList}
            create={UserCreate}
            edit={UserEdit}
        />
    </Admin>
}

export default Adminss
