import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { User, UserLength  } from './../recoil/User';

function Example() {
    const [newUser, setNewUser] = useState('')
    const [username, setUsername] = useRecoilState(User);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername(newUser)
    }

    return (
        <div>
            <h1>Welcome {username}, length: {useRecoilValue(UserLength)}</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" onChange={event => setNewUser(event.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Example
