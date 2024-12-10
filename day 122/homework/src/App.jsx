// App.jsx
import { Button, Checkbox, Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/react'
import { useState } from 'react'
import './index.css';

const Description = () => {
  return (
    <div className="text-white">
      <h2 className="text-gray-400 mb-2">Description</h2>
      <div className="bg-gray-800 h-10 rounded"></div>
    </div>
  );
};

const FormComponents = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const options = ['Jol', 'Jocelyn', 'Jonathan', 'Josh']

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
      <Button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full">
        Button
      </Button>
      <Checkbox className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
      <div className="w-full">
        <Combobox value={selectedOption} onChange={setSelectedOption}>
          <ComboboxInput className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full" />
          <ComboboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option) => (
              <ComboboxOption
                key={option}
                value={option}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                  }`
                }
              >
                {option}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8">
      <div className="w-full max-w-md space-y-8">
        <Description />
        <FormComponents />
      </div>
    </div>
  );
};

export default App;