import React from 'react'

const ConditionalComponent = () => {
    const [data, setData] = React.useState(undefined)

    if(data && data.length)
        return <h3>Data is present</h3>
    else
        return <h3>No data to show</h3>
    
}

export default ConditionalComponent
