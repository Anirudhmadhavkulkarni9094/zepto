import React from 'react';

function Suggestion({ users, name, onSelect, setShowSuggestion }) {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <>
    {filteredUsers.length > 0 ?
     <>
    {filteredUsers.length > 0 ?
    <div className='absolute bg-white p-4 border-2 rounded-lg max-h-60 overflow-scroll w-80'>
      { filteredUsers.map(user => (
          <div key={user.id} className="flex gap-4 hover:bg-gray-300 p-2 rounded-lg w-fit" onClick={() => onSelect(user)}>
            <img src={require(`./Asset/${user.img}.png`)} className='w-6 h-6' alt=''></img>
            <h1>{user.name}</h1>
            <h1 className='text-gray-500'>{user.email}</h1>
          </div>
      ))}
    </div> : <>
    <div className='absolute bg-white p-4 border-2 rounded-lg max-h-60 overflow-scroll w-fit'>
      { users.map(user => (
          <div key={user.id} className="flex gap-4 hover:bg-gray-300 p-2 rounded-lg w-fit justify-between" onClick={() => {onSelect(user); setShowSuggestion(false)}}>
            <img src={require(`./Asset/${user.img}.png`)} className='w-6 h-6' alt=''></img>
            <h1>{user.name}</h1>
            <h1 className='text-gray-500'>{user.email}</h1>
          </div>
      ))}
    </div></>}
    </>
 : <></>    
}
      </>
  );
}

export default Suggestion;