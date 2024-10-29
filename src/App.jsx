
import './App.css'
import Bookmark from './components/Bookmarks/Bookmark'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {
 
  const [bookmarks,setBookmarks]=useState([]);
  const[readingTime,setReadingTime]=useState(0);

  const handleMarkedAsRead=(time,id)=>{
      setReadingTime(time+readingTime);
    console.log(id);
      const remainingBookmark=bookmarks.filter(bookmark=>bookmark.id!==id);
      setBookmarks(remainingBookmark);
  }




  const handleAddBookmark=blog=>{
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkedAsRead={handleMarkedAsRead}>

        </Blogs>
        <Bookmark bookmarks={bookmarks}
        readingTime={readingTime}>

        </Bookmark>
      </div>
      
    </>
  )
}

export default App
