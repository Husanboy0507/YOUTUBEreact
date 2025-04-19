
import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import moment from "moment"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"

const Videocard = ({video}) => {
  return (
    <Card sx={{width:'320px', boxShadow:'none', borderRadius:'5px'}}>
      

    <Link to={`/videoDetail/${video.id.videoId}`}>
    <CardMedia 
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        sx={{width:'360px', height:'180px'}}
        /></Link>

        <CardContent sx={{ background:{xs: '#C4BEB2'}, height: '220px', position: 'relative' }}>

      <Link to={`videoDetail/${video.id.videoId}`}>
      <Typography my={'5px'} sx={{opacity:'0.9'}}>
          {moment(video?.snippet?.publishedAt).fromNow()}
        </Typography>

        <Typography variant='subtitle1' sx={{opacity:'0.9'}}>
          {video?.snippet?.title.slice(0,45)}
        </Typography>

        <Typography variant='subtitle2' sx={{opacity:'0.9'}}>
          {video?.snippet?.description.slice(0, 60) }
        </Typography>
      </Link>


      <>
      <Stack 
        direction={'row'}
        position={'absolute'}
        bottom={'10px'}
        alignItems={'center'}
        gap={'5px'}
      >
        <Avatar src={video?.snippet?.thumbnails?.high?.url}/>

        <Typography variant='subtitle2' sx={{ml:'5px'}}>
          {video?.snippet?.channelTitle}
          <CheckCircle sx={{color:'red', fontSize:'15px', ml:'4px'}}/>
        </Typography>
        
      </Stack>
      </>

        </CardContent>
    </Card>
  )
}

export default Videocard