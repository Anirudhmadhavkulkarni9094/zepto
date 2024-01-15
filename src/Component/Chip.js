// Chip.js
import React from 'react';

function Chip({ user, handleChipRemove }) {
  return (
    <div>
      <div key={user.id} className="flex items-center bg-gray-300  rounded-full p-2 m-1 justify-between w-fit min-w-40" >
        <img src={require(`./Asset/${user.img}.png`)} className='w-6 h-6' alt=''></img>
        <span>{user.name}</span>
        <button onClick={() => handleChipRemove(user.id)} className="ml-2 focus:outline-none">
          <img src={require("./Asset/close.png")} className='h-4 w-4' alt=''></img>
        </button>
      </div>
    </div>
  );
}

export default Chip;
