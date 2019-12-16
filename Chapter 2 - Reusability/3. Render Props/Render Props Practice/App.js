import React from "react"
import DataFetcher from "./DataFetcher"

function App() {
  return (
    <div>
      <DataFetcher url="https://swapi.co/api/people/1">
        {({data, loading}) => (
          loading ? "<h1>loading...</h1>" : <p>{JSON.stringify(data)}</p>
        )}
      </DataFetcher>
    </div>
  )
}

export default App