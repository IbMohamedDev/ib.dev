import { useState } from 'react'

import './App.css'
import TabsComponent from './TabsComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TabsComponent/>
    </>
  )
}

export default App
