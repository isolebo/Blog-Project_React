import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from '../admin/PostList'
import PostCreate from '../admin/PostCreate'
import PostEdit from '../admin/PostEdit'
import UserList from '../admin/UserList'
import UserCreate from '../admin/UserCreate'
import UserEdit from '../admin/UserEdit'





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
