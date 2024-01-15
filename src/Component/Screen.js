import React from 'react';
import SearchBar from './SearchBar';

function Screen() {
    let users = [
        {
          name: "Anirudh",
          email: "anirudh@gmail.com",
          id: 1,
          img: "prof1",
        },
        {
          name: "John",
          email: "john@gmail.com",
          id: 2,
          img: "prof1",
        },
        {
          name: "Alice",
          email: "alice@gmail.com",
          id: 3,
          img: "prof1",
        },
        {
          name: "Bob",
          email: "bob@gmail.com",
          id: 4,
          img: "prof1",
        },
        {
          name: "Charlie",
          email: "charlie@gmail.com",
          id: 5,
          img: "prof1",
        },
        {
          name: "David",
          email: "david@gmail.com",
          id: 6,
          img: "prof1",
        },
        {
          name: "Emily",
          email: "emily@gmail.com",
          id: 7,
          img: "prof1",
        },
        {
          name: "Frank",
          email: "frank@gmail.com",
          id: 8,
          img: "prof1",
        },
        {
          name: "Grace",
          email: "grace@gmail.com",
          id: 9,
          img: "prof1",
        },
        {
          name: "Henry",
          email: "henry@gmail.com",
          id: 10,
          img: "prof1",
        },
        {
          name: "Ivy",
          email: "ivy@gmail.com",
          id: 11,
          img: "prof1",
        },
        {
          name: "Jack",
          email: "jack@gmail.com",
          id: 12,
          img: "prof1",
        },
        {
          name: "Katherine",
          email: "katherine@gmail.com",
          id: 13,
          img: "prof1",
        },
        {
          name: "Leo",
          email: "leo@gmail.com",
          id: 14,
          img: "prof1",
        },
        {
          name: "Mia",
          email: "mia@gmail.com",
          id: 15,
          img: "prof1",
        },
        {
          name: "Nathan",
          email: "nathan@gmail.com",
          id: 16,
          img: "prof1",
        },
        {
          name: "Olivia",
          email: "olivia@gmail.com",
          id: 17,
          img: "prof1",
        },
        {
          name: "Peter",
          email: "peter@gmail.com",
          id: 18,
          img: "prof1",
        },
        {
          name: "Quinn",
          email: "quinn@gmail.com",
          id: 19,
          img: "prof1",
        },
        {
          name: "Ryan",
          email: "ryan@gmail.com",
          id: 20,
          img: "prof1",
        },
      ];
      
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <SearchBar users={users} />
      
    </div>
  );
}

export default Screen;
