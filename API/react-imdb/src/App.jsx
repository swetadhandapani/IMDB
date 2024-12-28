import { useState } from 'react'
import './App.css'
import MoviesList from './components/MoviesList'
import "bootstrap/dist/css/bootstrap.min.css"
import MovieSearch from './components/MovieSearch'
import MovieForm from './components/MovieForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/*<h1>Movies List</h1> 
      <MoviesList/>*/}
      {/*<h1>Movie Search</h1>
      <MovieSearch/>*/}
      {/*<h1>Movie Delete</h1>
      <MovieSearch isDelete={true}/>*/}
      {/*<h1>Movie Add</h1>
      <MovieForm/>*/}
      <h1>Movie Update</h1>
      <MovieForm isUpdate={true}/>
    </div>
  )
}

export default App
