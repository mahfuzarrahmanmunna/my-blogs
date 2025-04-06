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
  const handleMarksAsRead = (time, id) => {
    setReadingTime(readingTime + time)
    handleRemoveFromBookMark(id)
  }

  const handleRemoveFromBookMark = (id) => {
    const remainingBookMark = bookmarked.filter(mark => mark.id !== id)
    setBookmarked(remainingBookMark);
  }

  return (
    <>
      <Navbar />
      <div className="container lg:flex lg:justify-between">
        <div className="left-container  lg:w-[70%] text-center">
          <Blogs handleBookMark={handleBookMark} handleMarksAsRead={handleMarksAsRead} />
        </div>
        <div className="mx-7 mt-7  px-4 lg:w-[30%] text-center bg-sky-100 rounded-2xl shadow">
          <h1>Reading Time : {readingTime}</h1>
          <h1> bookmarked count : {bookmarked.length}</h1>
          {
            bookmarked.map(mark => <p key={mark.id} className='bg-sky-50 rounded-xl p-3 m-2 shadow'>{mark.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
