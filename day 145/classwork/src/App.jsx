import React from 'react'

export default function App() {
    const saveUser = () => {
      const user = {
        name: 'dachi',
        surname: 'jananashvili'
      };
  
      localStorage.setItem('user', JSON.stringify(user));
      alert('sucsess!');
    };
    return (
      <div>
          <div className='bg-red-500 w-100 border-5 m-10 h-50 overflow-x-hidden'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
              <button onClick={saveUser} className="py-2 px-4 bg-red-500 border-5">
                save user
              </button>
      </div>
    )
  }
