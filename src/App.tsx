import { useState } from 'react'
import './App.css'
import {FaGithubSquare} from 'react-icons/fa'
import Review from './Review'
function App() {
  const [count, setCount] = useState(0)

  return (
     <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
     </main>
  )
}

export default App
