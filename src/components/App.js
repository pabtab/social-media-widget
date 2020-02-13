import React from 'react'
import Paragraph from './Atoms/Paragraph'
import WhiteBox from './Atoms/WhiteBox'
import SocialFeed from './Organisms/SocialFeed/SocialFeed'

const App = () => {
  const URL = 'http://api.massrelevance.com/MassRelDemo/kindle.json'
  return (
    <main className="container">
      <SocialFeed
        feedUrl={URL}
        numPosts={10}
        interval={1}
      />  
    </main>
  )
}

export default App
