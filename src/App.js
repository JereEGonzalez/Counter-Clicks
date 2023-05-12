import './App.css';
import Button from './Components/Button';
import Counter from './Components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const ManagerClick = () => {
    setNumClicks(numClicks+1);
  };
  const ManagerReset = () => {
    setNumClicks(0);
  };
  
  
  return (
    <div className="App">
      <h1>Click Counter</h1>
     <div className='number-container'>
        <Counter 
          numClicks={numClicks}/>
     </div>
    <div className='container-button'>
      <Button 
        text='Click'
        clickButton={true}
        clickManager={ManagerClick} />
      <Button 
        text='Reset'
        clickButton={false}
        clickManager={ManagerReset} />
    </div>
    

    </div>
  );
}

export default App;
