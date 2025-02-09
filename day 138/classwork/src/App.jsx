import React from 'react'

export default function App() {
  const SplitText = ({ children }) => {
    const words = children.split("")
    
    return (
      <div className="flex flex-wrap justify-center">
        {words.map((char, index) => (
          <div key={index}>
            {char}
          </div>
        ))}
      </div>
    )
  }
  
  return (
    <div className='bg-slate-100 h-screen'>
      <div className='hidden intro-animation justify-center items-center top-0 left-0 absolute bg-slate-100 h-screen w-screen'>
        <h1 className='font-bold text-4xl'>GAME DEVELOPMENT</h1>
      </div>
      <div className='hero-animation mx-auto container text-center'>
        <SplitText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat illo corrupti! Nemo tenetur aliquid impedit voluptates ipsum libero distinctio assumenda rem laboriosam provident, aliquam voluptate, corrupti autem animi officiis.</SplitText>
      </div>
    </div>
  )
}
