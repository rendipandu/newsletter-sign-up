import { useState } from 'react'
import Form from './components/form/Form';
import Confirmation from './components/confirmation/Confirmation';

import './index.css'

function App() {
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);


  return (
    <div className='app'>
      <Form
        email={email}
        setEmail={setEmail}
        visible={visible}
        hideForm={() => setVisible(true)}
      />
      <Confirmation
        email={email}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  )
}

export default App
