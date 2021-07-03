import React from 'react'
import About from './About'
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import PropsComponent from './PropsComponent'
import ConditionalComponent from './ConditionalComponent'
import ListComponent from './ListComponent'
import ControlledInputComponent from './ControlledInputComponent'
import LiftingTheStateComponent from './LiftingTheStateComponent'
import PropDrillingComponent from './PropDrillingComponent'
import ContextAPIComponent from './ContextAPIComponent'
import './style.css'

const App = () => {
    return (
        <div className="container">
            <ContextAPIComponent />
            {/* <PropDrillingComponent /> */}
            {/* <LiftingTheStateComponent /> */}
            {/* <ControlledInputComponent /> */}
            {/* <ListComponent /> */}
            {/* <ConditionalComponent /> */}
            {/* <PropsComponent /> */}
            {/* <Home/>
            <About />
            <Contact /> */}
        </div>
    )
}

export default App
