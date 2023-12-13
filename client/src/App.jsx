import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [card, setCard] = useState([])
  useEffect(() => {
    const ilkinData = async ()=>{
      const response = await fetch("http://localhost:3000/")
      const jData = await response.json()
      setCard(jData)
    }
    ilkinData()
  }, [])
  
  return (
    <div className='cards'>
      {card && card.map((item)=>(
        <ul key={item.id}>
          <li><img src={item.image} alt=""/></li>
          <li>{item.name}</li>
          <li>{item.info}</li>
          <li>{item.price}</li>
        </ul>
      ))}
    </div>
  )
}

export default App
