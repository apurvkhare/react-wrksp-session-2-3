import React, { PureComponent } from 'react'
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
import WhyReducer from './WhyReducer'
import UseRefHookComponent from './UseRefHookComponent'
import PureFunctionalComponent from './PureFunctionalComponent'
import './style.css'

const App = () => {
    return (
        <div className="container">
            {/* <PureFunctionalComponent /> */}
            <UseRefHookComponent />
            {/* <WhyReducer /> */}
            {/* <ContextAPIComponent /> */}
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
