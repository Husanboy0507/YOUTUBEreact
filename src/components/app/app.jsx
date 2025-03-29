import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { Chanel, Main, Navbar, Search, VideoDetail } from '../'


const App= () => {
  return (
   <Box>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>}/>
    <Route path="/chanel/:id" element={<Chanel/>}/>
    <Route path="/search/:id" element={<Search />}/>
    <Route path="/videoDetail/:id" element={<VideoDetail />}/>
      
    </Routes>

   </Box>
  )
}

export default App
