// SearchBar.js
import React, { useState, useRef } from 'react';
import Suggestion from './Suggestion';
import Chip from './Chip';

function SearchBar({ users }) {
  const [name, setName] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const inputRef = useRef(null);

  const handleUserSelect = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setName("");
  };

  const handleChipRemove = (selectedUserId) => {
    const updatedSelectedUsers = selectedUsers.filter(user => user.id !== selectedUserId);
    setSelectedUsers(updatedSelectedUsers);
  };

  const handleBackspace = (e) => {
    if (e.key === 'Backspace' && name === '' && selectedUsers.length > 0) {
      const lastChip = selectedUsers[selectedUsers.length - 1];
      handleChipRemove(lastChip.id);
    }
  };

  return (
    <div className='flex flex-col md:flex-row gap-5 border-b-2 border-blue-500 flex-wrap p-5 items-center w-2/3 relative'>
      <div className='flex flex-wrap gap-2'>
        {selectedUsers.map(user => (
          <Chip key={user.id} user={user} handleChipRemove={handleChipRemove}></Chip>
        ))}
      </div>
      <div className='w-full md:w-auto'>
        <input
          ref={inputRef}
          placeholder='Add user'
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleBackspace}
          className='outline-none w-44'
          onClick={() => setShowSuggestion(!showSuggestion)}
        />
        {(name.length > 0 || showSuggestion) && (
          <Suggestion
            users={users.filter(user => !selectedUsers.find(selectedUser => selectedUser.id === user.id))}
            name={name}
            onSelect={handleUserSelect}
            setShowSuggestion={setShowSuggestion}
          />
        )}
      </div>
    </div>
  );
}

export default SearchBar;
