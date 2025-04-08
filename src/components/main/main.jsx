import { Box, Container, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import {colors} from "../../../constants/colors"
import Category from "../category/category"
import { ApiService } from "../../service/api.service"
import  Videos  from "../videos/videos"



const Main = () => {
  const [selectCategory, setSelectCategory] = useState('New')
  const [videos, setVideos] = useState([])
  const selectCategoryHandler = category => setSelectCategory(category)
  


useEffect(() =>{
  const getData = async () =>{
    try{
          const data = await ApiService.fetching(`search?part=snippet&q=${selectCategory}`)
          setVideos(data.items)
          console.log(data.items);
          

    }
    catch(error){
      console.log(error);
      
    }
  }
  getData()

}, [selectCategory])

  return (
    <Stack>
      <Category selectCategoryHandler={selectCategoryHandler} selectCategory={selectCategory}/>
      <Box p={2} sx={{height:'90vh'}}>
        <Container maxWidth={'90%'} mb={2}>
          <Typography variant={'h4'} fontWeight={'bold'}>
{selectCategory} <span style={{color:colors.secondary}}>Videos</span>
          </Typography>
          <Videos videos={videos}/>
          {videos?.item?.map(item => item.kind)}
        </Container>
      </Box>
    </Stack>
  )
}

export default Main