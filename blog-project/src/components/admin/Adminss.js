import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from '../admin/PostList'

const Adminss = () => {
    return <Admin dataProvider={restProvider("http://localhost:3000")}>
        <Resource
            name='posts'
            list={PostList}
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
