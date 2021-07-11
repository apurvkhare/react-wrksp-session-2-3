import React from 'react'

const ChildComponent = ({name, age, obj, someFunc}) => {
    console.log("Child component executed")
    return<div>
        <h1>Child Component</h1>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        {/* <h3>Obj: {obj.a}</h3> */}
        <button onClick={() => someFunc()}>some Func</button>
    </div>
}

const MemoizedChildComponent = React.memo(ChildComponent)

const PureFunctionalComponent = () => {
    const [team, setTeam] = React.useState("GOTG")
    const [name, setName] = React.useState('Groot')
    const [age, setAge] = React.useState(100)

    const obj = {
        a:1,
        b:2,
        c:"Tony"
    }
    
    const square = (a, b) => a ** b

    const memoizedObj = React.useMemo(() => obj, [])
    const someFunc = () => console.log("I am some function")
    const memoizedFunc = React.useCallback(someFunc, [])

    console.log("Parent component executed")
    return (
        <div>
            <h1>Parent Component</h1>
            <h3>Team : {team}</h3>
            <button onClick={() => setTeam("Avengers")}>change team</button>
            <MemoizedChildComponent name={name} age={age} obj={memoizedObj} someFunc={memoizedFunc}/>     
        </div>
    )
}

export default PureFunctionalComponent

