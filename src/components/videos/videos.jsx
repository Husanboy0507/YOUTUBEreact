
import { Box, Stack } from "@mui/material"
import {Channelcard, Videocard,} from '../'
const Videos = ({videos}) => {
  return (
    <Stack 
    width={'100%'}
    direction={'row'}
    flexWrap={'wrap'}
    justifyContent={'start'}
    alignItems={'center'}
    gap={'3rem'}
    > 

    {videos.map(item => (
      <Box key={item.id.videoId}>
        {item.id.videoId && <Videocard video={item}/>}
        {item.id.channelId && <Channelcard video={item}/>}
      </Box>
    ))}
    </Stack>
  )
}

export default Videos