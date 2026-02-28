import { Suspense } from 'react';
import './App.css'
import Bottols from './Components/Bottols/Bottols';

const bottolsPromised = fetch('bottol.json').then(res=>res.json());

function App() {
  
  return (
    <>
     <h1>Awsome water bottol</h1>
     <Suspense fallback={<p>Loading bottols</p>}>
     <Bottols bottolsPromised={bottolsPromised}></Bottols>
     </Suspense>
    </>
  )
}

export default App
