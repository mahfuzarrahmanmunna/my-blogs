import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookmarked] = useState([])

  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked, blog])
  }
  console.log(bookmarked)

  return (
    <>
      <Navbar />
      <div className="container lg:flex">
        <div className="left-container  lg:w-[70%] text-center">
          <Blogs handleBookMark={handleBookMark} />
        </div>
        <div className="px-4 lg:w[30%] text-center">
          <h1>Reading Time : 0</h1>
          <h1> bookmarked count : {bookmarked.length}</h1>
          {
            bookmarked.map(mark => <p>{mark.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
