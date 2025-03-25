import { Box, Container, Stack, Typography } from "@mui/material"
import { useState } from "react"
import {colors} from "../../../constants/colors"
import Category from "../category/category"


const Main = () => {
  const [selectCategory, setSelectCategory] = useState('New')
  
  return (
    <Stack>
      <Category/>
      <Box p={2} sx={{height:'90vh'}}>
        <Container maxWidth={'90%'} mb={2}>
          <Typography variant={'h4'} fontWeight={'bold'}>
{selectCategory} <span style={{color:colors.secondary}}>Videos</span>
          </Typography>
          videos
        </Container>
      </Box>
    </Stack>
  )
}

export default Main