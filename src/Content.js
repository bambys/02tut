import React from 'react'

const Content = () => {
    const handleNameChange = () => {
    const names = ['Bob','Kevin','Dave','Jane'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  const handleClick = () => {
    console.log('You clicked it')
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }

  const handleClick3 = (e) => {
    console.log(e)
  }


    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={() => handleClick2('Dave')}>Click It`</button>      
            <button onClick={(e) => handleClick3(e)}>Click It`</button>      
        </main>
  )
}

export default Content