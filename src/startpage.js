import React, { useState } from 'react';
import Qpage1 from './Qpage1';
import './startpage.css';

function Start() {
  const [showQ1, setShowQ1] = useState(false);

  const handleStart = () => {
    setShowQ1(true);
  };

  return (
    <div>
      {showQ1 ? (
        <Qpage1 />
      ) : (
        <div>
          <h1>What Pasta Are You?</h1>
          <div>按下開始鍵看看你是哪種義大利麵!</div>
          <button
          className={`control-button`} 
          onClick={handleStart}>開始</button>
        </div>
      )}
    </div>
  );
}

export default Start;
