import React from 'react'

const UseRefHookComponent = () => {
    const h1Ref = React.useRef()
    const nameRef = React.useRef("Tony")

    const name = "Tony"

    React.useEffect(() => {
        console.log("h1ref value: ", h1Ref.current)
        console.log("Name ref value: ", nameRef.current)
    }, [])

    return (
        <div>
            <h1 ref={h1Ref}>I am useRef component</h1>
        </div>
    )
}

export default UseRefHookComponent
