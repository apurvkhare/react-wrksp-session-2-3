import React from 'react'
import {
    UserContext,
    UserProvider,
    useUser,
} from '../context/UserContextProvider'

const ContextAPIComponent = () => {
    return (
        <div>
            <UserProvider>
                <Profile />
                <Welcome />
            </UserProvider>
        </div>
    )
}

const Profile = () => {
    const { name } = useUser()
    // const { name } = React.useContext(UserContext)

    return (
        <div>
            <h3>Profile Component</h3>
            <h3>Your User Name: {name}</h3>
        </div>
    )
}

const Greeting = () => {
    return (
        <div>
            <h3>Greeting Component</h3>
            {/* lot of code */}
            <GreetingMsg />
        </div>
    )
}

const GreetingMsg = () => {
    const { name } = useUser()

    return (
        <div>
            <h3>GreetingMsg Component</h3>
            <h3>Welcome {name}, Good morning</h3>
        </div>
    )
}

const Welcome = () => {
    return (
        <div>
            <h3>Welcome Component</h3>
            {/* lot of code */}
            <Greeting />
        </div>
    )
}

export default ContextAPIComponent
