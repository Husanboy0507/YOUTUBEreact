import { Box, Stack } from "@mui/material"
import { Link } from "react-router-dom"
import {colors} from '../../../constants/colors'
import SearchBox from "../search-box/searchBox"



const Navbar = () => {
  return (
    <Stack
     direction={"row"}
     alignItems={'center'}
     justifyContent={'space-between'}
     p={2}
      sx={{position: 'sticky', top: 0, zIndex: 9999, background: colors.primary}}
     >
      <Link to={'/'}>
      <img src='logoy.jpg' alt="logo" height={39}/>
      </Link>
      <SearchBox/>
      <Box/>
    </Stack>
  )
}

export default Navbar