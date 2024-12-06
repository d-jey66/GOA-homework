import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function App() {
  const [selectedUser, setSelectedUser] = useState('')

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-[#121212] p-8 rounded-lg shadow-xl">
        {selectedUser && (
          <p className="text-white text-lg font-semibold mb-4">
            User: {selectedUser}
          </p>
        )}
        <Menu as="div" className="relative">
          <Menu.Button className="w-72 px-4 py-2 text-sm text-white bg-[#1a1a1a] rounded-md shadow-inner border border-[#333333] focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2 focus:ring-offset-black">
            Select
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-72 mt-2 origin-top-right rounded-md bg-[#121212] shadow-lg ring-1 ring-[#333333] ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setSelectedUser('John')} 
                      className={`${
                        active ? 'bg-[#333333] text-white' : 'text-gray-300'
                      } block px-4 py-2 text-sm`}
                    >
                      John
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setSelectedUser('George')} 
                      className={`${
                        active ? 'bg-[#333333] text-white' : 'text-gray-300'
                      } block px-4 py-2 text-sm`}
                    >
                      George
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setSelectedUser('Paul')} 
                      className={`${
                        active ? 'bg-[#333333] text-white' : 'text-gray-300'
                      } block px-4 py-2 text-sm`}
                    >
                      Paul
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setSelectedUser('Ringo')} 
                      className={`${
                        active ? 'bg-[#333333] text-white' : 'text-gray-300'
                      } block px-4 py-2 text-sm`}
                    >
                      Ringo
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}

export default App;