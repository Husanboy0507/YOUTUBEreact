import { IconButton, Paper } from "@mui/material"
import { colors } from "../../../constants/colors"
import { Search } from "@mui/icons-material"
import { useState } from "react"
 import { useNavigate } from "react-router-dom"


const SearchBox = () => {

  const [value, setValue] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) =>{
     e.preventDefault()
     if(value){
        navigate(`/search/${value}`)
     }
  
  }

  return (
   <Paper
   component={'form'}
   onSubmit={submitHandler}
    sx={{border: `1px solid ${colors.secondary}`, boxShadow: 'none', pl:2}}
   >

<input type="text" placeholder="search any one"
 className="inputSearch"
 value={value}
 onChange={e => setValue(e.target.value)}
 />

<IconButton type="submit">
    <Search/>
</IconButton>
   </Paper>
  )
}

export default SearchBox