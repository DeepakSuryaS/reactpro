import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([])

  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
  
  useEffect(() => {
    fetch(url).then(response => response.json()).then(data => setAllPhotos(data))
  }, [])

  console.log(allPhotos)

  return (
    <Context.Provider value={{allPhotos}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}