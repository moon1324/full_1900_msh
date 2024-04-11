import React from 'react';
import User from './User';

const Users = ({users}) => {

    return (
        <div>
            {/* Users.map((user, i, users) => <User user={user}/> ) */}
            {users.map((user) => <User user={user}/>)}
        </div>
    );
};

export default Users;