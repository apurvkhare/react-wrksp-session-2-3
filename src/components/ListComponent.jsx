import React from 'react'

const ListComponent = () => {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        setData([
            {
                id: 1,
                name: 'Tony'
            },
            {
                id: 2,
                name: 'Steve'
            },
            {
                id: 3,
                name: 'Bruce'
            }
        ])
    }, [])

    return (
        <div>
            {data && data.length !== 0 ? (
                data.map((dataItem) => <p key={dataItem.id}>{dataItem.name}</p>)
            ) : (
                <h3>No data to show</h3>
            )}
        </div>
    )
}


export default ListComponent
