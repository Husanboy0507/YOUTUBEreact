/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ApiService } from "../../service/api.service";
import { Box } from "@mui/material";
import ReactPlayer from "react-player";


const VideoDetail = () => {

  const {id} =useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  console.log(id);
  useEffect(() =>{
      const getData = async () =>{
        try{
          const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
          console.log(data)
          setVideoDetail(data.items[0])

          
        }
        catch(error){
          console.log(error);
        }
      }
      getData()
  }, [id])
  
  return (

    <Box minHeight={'90vh'} mb={10}>
        <Box display={'flex'}>
          <Box width={'75%'}> 
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className='react-player'/>
         
             </Box>
          <Box width={'25%'}> suggest video </Box>


        </Box>
    </Box>
  )
}

export default VideoDetail