import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskApp from './tasks/TaskApp';
import Menu from './components/menu';
import ShoppingCart from './shopping/ShoppingCart';
import GuessGame from './guess/GuessGame';


function App() {
  const [activeSection, setActiveSection] = useState('taskList'); // Default active section


  return (
    <>
      <Menu setActiveSection={setActiveSection} />
      <div style={{ padding: '20px' }}>
        {activeSection === 'taskList' && <TaskApp />}
        {activeSection === 'shopping' && <ShoppingCart />}
        {activeSection === 'guess' && <GuessGame />}
      </div>

    </>
  )
}

export default App
