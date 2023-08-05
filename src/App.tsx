import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MyPage from './pages/MyPage/'
import MyListPage from './pages/MyPage/WriteList'
import Nav from './components/Nav'
import './App.css'
import SearchPage from './pages/SearchPage'
import RecentPage from './pages/RecentPage'
import BoardPage from './pages/BoardPage'
import WritePage from './pages/WritePage'
import ErrorPage from './pages/404Page'
import SavesPage from './pages/SavesPage'
import LikePage from './pages/LikeListPage'
import TagPage from './pages/TagPage'
import { RootState } from './store'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((state: RootState) => state.user)

  const Layout = () => {
    return (
      <>
        <Nav user={user}/>
        
        <Outlet />
      </>
    )
  }

  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/recent' element={<RecentPage />} />
            <Route path='/setting' element={<MyPage/>} />
            <Route path='/:userId' element={<MyListPage/>} />
            <Route path='/write/:postId' element={<SavesPage/>} />
            <Route path='/like' element={<LikePage/>} />
            <Route path='/boards/:boardId' element={<BoardPage />} />
            <Route path='/tags/:tagName' element={<TagPage />} />
            <Route path='/write' element={<WritePage />} />
            
            <Route path='/error' element={<ErrorPage />} />
            <Route path='/*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App