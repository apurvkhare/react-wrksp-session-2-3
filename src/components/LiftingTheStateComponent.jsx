import React from 'react'

const LiftingTheStateComponent = () => {
    const [name, setName] = React.useState('Guest')

    return <div>
        <Profile name={name}/>
        <Greeting name={name}/>
    </div>
}

const Profile = ({name}) => {

    return<div>
        <h3>Profile Component</h3>
        <h3>Your User Name: {name}</h3>
    </div>
}

const Greeting = ({name}) => {
    return<div>
        <h3>Greeting Component</h3>
        <h3>Welcome {name}, Good morning</h3>
    </div>
}

export default LiftingTheStateComponent
