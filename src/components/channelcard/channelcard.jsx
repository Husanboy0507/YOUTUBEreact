import { CheckCircle } from "@mui/icons-material"
import { Box, CardContent, CardMedia, Typography } from "@mui/material"


const Channelcard = ({video}) => {
  return (
   <Box
   sx={{
    boxShadow: 'none',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: {xs: '356px', md: '320px'},
    height: '326px',
    margin: 'auto'
   }

   }
   >
    <CardContent
    sx={{
        display: 'flex',
        flexBasis: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    }}
    >
    <CardMedia 
    image={video?.snippet?.thumbnails?.high?.url} 
    alt={video?.snippet?.title}
    sx={{
        borderRadius: '50%',
        width: '180px',
        height: '180px',
        mb: 2,
        border: '1px solid #e3e3e3',
    }}
    />
    <Typography variant='subtitle1'>
    {video?.snippet?.title}
        <CheckCircle sx={{fontSize:'14px', color: 'gray', ml: '5px'}}/>
    </Typography>

        {video?.statistics?.subscriberCount &&(
            <Typography sx={{ fontSize: '15px', fontWeight:'500', color: 'gray'}}>
                {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')} subscribers

            </Typography>
        )}

    </CardContent>
   </Box>
    )
}

export default Channelcard