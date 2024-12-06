import { Menu } from "@headlessui/react";

export default function DropdownMenu() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      {/* Outer container with subtle white glow */}
      <div
        className="w-80 h-96 bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-start relative 
                   shadow-[0_0_15px_rgba(255,255,255,0.2)]"
      >
        {/* Dropdown Menu */}
        <Menu as="div" className="relative w-full">
          {/* Options Button with shadow */}
          <Menu.Button
            className="block w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md shadow-md 
                       hover:bg-gray-600 transition-all"
          >
            Options
          </Menu.Button>
          {/* Dropdown Menu */}
          <Menu.Items
            className="absolute left-0 mt-2 w-full bg-gray-800 text-white rounded-md shadow-lg 
                       focus:outline-none border border-gray-700"
          >
            <div className="p-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-700" : ""
                    } group flex items-center w-full px-4 py-2 text-sm rounded-md`}
                  >
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-700" : ""
                    } group flex items-center w-full px-4 py-2 text-sm rounded-md`}
                  >
                    Duplicate
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-700" : ""
                    } group flex items-center w-full px-4 py-2 text-sm rounded-md`}
                  >
                    Archive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-700" : ""
                    } group flex items-center w-full px-4 py-2 text-sm rounded-md`}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}
