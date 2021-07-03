import React from 'react'

const PropDrillingComponent = () => {
    const [name, setName] = React.useState('Guest')

    return (
        <div>
            <Profile name={name} />
            <Welcome>
                <Greeting >
                    <GreetingMsg name={name}/>
                </Greeting>
            </Welcome>
        </div>
    )
}

const Profile = ({ name }) => {
    return (
        <div>
            <h3>Profile Component</h3>
            <h3>Your User Name: {name}</h3>
        </div>
    )
}

const Greeting = ({ children }) => {
    return (
        <div>
            <h3>Greeting Component</h3>
            {/* lot of code */}
            {children}
        </div>
    )
}

const GreetingMsg = ({ name }) => {
    return (
        <div>
            <h3>GreetingMsg Component</h3>
            <h3>Welcome {name}, Good morning</h3>
        </div>
    )
}

const Welcome = ({ children }) => {
    return (
        <div>
            <h3>Welcome Component</h3>
            {/* lot of code */}
            {children}
        </div>
    )
}

export default PropDrillingComponent
