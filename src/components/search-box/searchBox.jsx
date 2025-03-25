import { IconButton, Paper } from "@mui/material"
import { colors } from "../../../constants/colors"
import { Search } from "@mui/icons-material"


const SearchBox = () => {
  return (
   <Paper
   component={'form'}
    sx={{border: `1px solid ${colors.secondary}`, boxShadow: 'none', pl:2}}
   >
<input type="text" placeholder="search any one" className="inputSearch"/>
<IconButton>
    <Search/>
</IconButton>
   </Paper>
  )
}

export default SearchBox