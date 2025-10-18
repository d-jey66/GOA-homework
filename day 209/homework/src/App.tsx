import { useState } from 'react';
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from '@/components/ui/multi-select';

export default function App() {
  const [frameworks, setFrameworks] = useState<string[]>(['react', 'next.js']);
  const [fruits, setFruits] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>(['blue']);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Multi-Select Component</h1>
          <p className="mt-2 text-gray-600">Using shadcn/ui MultiSelect</p>
        </div>

        <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Select Frameworks
            </label>
            <MultiSelect values={frameworks} onValuesChange={setFrameworks}>
              <MultiSelectTrigger className="w-full">
                <MultiSelectValue placeholder="Select frameworks..." />
              </MultiSelectTrigger>
              <MultiSelectContent>
                <MultiSelectGroup>
                  <MultiSelectItem value="react">React</MultiSelectItem>
                  <MultiSelectItem value="next.js">Next.js</MultiSelectItem>
                  <MultiSelectItem value="vue">Vue.js</MultiSelectItem>
                  <MultiSelectItem value="angular">Angular</MultiSelectItem>
                  <MultiSelectItem value="svelte">Svelte</MultiSelectItem>
                  <MultiSelectItem value="remix">Remix</MultiSelectItem>
                  <MultiSelectItem value="astro">Astro</MultiSelectItem>
                  <MultiSelectItem value="nuxt.js">Nuxt.js</MultiSelectItem>
                  <MultiSelectItem value="sveltekit">SvelteKit</MultiSelectItem>
                </MultiSelectGroup>
              </MultiSelectContent>
            </MultiSelect>
            <p className="text-xs text-gray-500">
              Selected: {frameworks.join(', ') || 'None'}
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Select Fruits (Custom Badges)
            </label>
            <MultiSelect values={fruits} onValuesChange={setFruits}>
              <MultiSelectTrigger className="w-full">
                <MultiSelectValue placeholder="Select fruits..." />
              </MultiSelectTrigger>
              <MultiSelectContent
                search={{
                  placeholder: "Search fruits...",
                  emptyMessage: "No fruits found"
                }}
              >
                <MultiSelectGroup>
                  <MultiSelectItem value="apple" badgeLabel="🍎">
                    🍎 Apple
                  </MultiSelectItem>
                  <MultiSelectItem value="banana" badgeLabel="🍌">
                    🍌 Banana
                  </MultiSelectItem>
                  <MultiSelectItem value="cherry" badgeLabel="🍒">
                    🍒 Cherry
                  </MultiSelectItem>
                  <MultiSelectItem value="grape" badgeLabel="🍇">
                    🍇 Grape
                  </MultiSelectItem>
                  <MultiSelectItem value="kiwi" badgeLabel="🥝">
                    🥝 Kiwi
                  </MultiSelectItem>
                  <MultiSelectItem value="orange" badgeLabel="🍊">
                    🍊 Orange
                  </MultiSelectItem>
                  <MultiSelectItem value="strawberry" badgeLabel="🍓">
                    🍓 Strawberry
                  </MultiSelectItem>
                  <MultiSelectItem value="watermelon" badgeLabel="🍉">
                    🍉 Watermelon
                  </MultiSelectItem>
                </MultiSelectGroup>
              </MultiSelectContent>
            </MultiSelect>
            <p className="text-xs text-gray-500">
              Selected: {fruits.join(', ') || 'None'}
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Select Colors (No Search)
            </label>
            <MultiSelect values={colors} onValuesChange={setColors}>
              <MultiSelectTrigger className="w-full">
                <MultiSelectValue placeholder="Select colors..." />
              </MultiSelectTrigger>
              <MultiSelectContent search={false}>
                <MultiSelectGroup>
                  <MultiSelectItem value="red">Red</MultiSelectItem>
                  <MultiSelectItem value="blue">Blue</MultiSelectItem>
                  <MultiSelectItem value="green">Green</MultiSelectItem>
                  <MultiSelectItem value="yellow">Yellow</MultiSelectItem>
                  <MultiSelectItem value="purple">Purple</MultiSelectItem>
                  <MultiSelectItem value="pink">Pink</MultiSelectItem>
                  <MultiSelectItem value="orange">Orange</MultiSelectItem>
                </MultiSelectGroup>
              </MultiSelectContent>
            </MultiSelect>
            <p className="text-xs text-gray-500">
              Selected: {colors.join(', ') || 'None'}
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Select Programming Languages
            </label>
            <MultiSelect defaultValues={['javascript', 'typescript']}>
              <MultiSelectTrigger className="w-full">
                <MultiSelectValue placeholder="Select languages..." />
              </MultiSelectTrigger>
              <MultiSelectContent>
                <MultiSelectGroup>
                  <MultiSelectItem value="javascript">JavaScript</MultiSelectItem>
                  <MultiSelectItem value="typescript">TypeScript</MultiSelectItem>
                  <MultiSelectItem value="python">Python</MultiSelectItem>
                  <MultiSelectItem value="java">Java</MultiSelectItem>
                  <MultiSelectItem value="csharp">C#</MultiSelectItem>
                  <MultiSelectItem value="go">Go</MultiSelectItem>
                  <MultiSelectItem value="rust">Rust</MultiSelectItem>
                  <MultiSelectItem value="php">PHP</MultiSelectItem>
                  <MultiSelectItem value="ruby">Ruby</MultiSelectItem>
                </MultiSelectGroup>
              </MultiSelectContent>
            </MultiSelect>
          </div>
        </div>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <h3 className="mb-2 font-semibold text-blue-900">Features Demonstrated:</h3>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>✓ Controlled state with values & onValuesChange</li>
            <li>✓ Search functionality (enabled/disabled/customized)</li>
            <li>✓ Custom badge labels for selected items</li>
            <li>✓ Click badges to remove selections</li>
            <li>✓ Default values support</li>
            <li>✓ Fully responsive design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}