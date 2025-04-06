import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookmarked] = useState([])

  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked, blog])
  }

  const [readingTime, setReadingTime] = useState(0)
  const handleMarksAsRead = (time) => {
    setReadingTime(readingTime + time)
    console.log(time)
  }
  return (
    <>
      <Navbar />
      <div className="container lg:flex w-full justify-between">
        <div className="left-container  lg:w-[70%] text-center">
          <Blogs handleBookMark={handleBookMark} handleMarksAsRead={handleMarksAsRead} />
        </div>
        <div className="px-4 lg:w[30%] text-center">
          <h1>Reading Time : {readingTime}</h1>
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
