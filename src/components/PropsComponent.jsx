import React from 'react'
import PropTypes from 'prop-types'

const PropsComponent = () => {
    const [userName, setUserName] = React.useState('Guest')
    const [age, setAge] = React.useState(20)
    
    const updateProfile = () => {
        setUserName('Apurv')
        setAge(25)
    }

    return <div>
        <h1>Home Page</h1>
        <User userName={userName} age={age} updateProfile={updateProfile}/>
    </div>
}

const User = ({userName, age, updateProfile}) => {
    return <div>
        <h3>Welcome, {userName}</h3>
        <p>Age: {age}</p>
        <button onClick={updateProfile}>update</button>
    </div>
}

User.propTypes = {
    userName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    updateProfile: PropTypes.func.isRequired
}

export default PropsComponent
