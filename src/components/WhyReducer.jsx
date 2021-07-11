import React from 'react';

export default function WhyReducer() {

  // const [status, setStatus] = React.useState("pending")
  // const [data, setData] = React.useState(null);
  const [result, setResult] = React.useState({status: "pending", data: {name: null}})

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    setStatus("resolved");
    setData({name: "new Data"}); 
    // setResult({status: "resolved", data: {name: "new Data"}})
    })
  .then(json => console.log(json))
  },[])

  const handleClick = () => {
    setStatus("resolved");
    setData({name: "new Data"});
  }

  if(result.status === "pending")
    return <div>Loading....</div>

  if(result.status === "resolved")
    return <div><h3>{result.data.name}</h3></div>

  return (
    <div>
      <h2>Fallback UI</h2>
    </div>
  );
}