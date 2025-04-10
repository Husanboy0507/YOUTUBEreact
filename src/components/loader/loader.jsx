import { CircularProgress, Stack } from "@mui/material"


const Loader = () => {
  return (
    <Stack direction={'row'}
    justifyContent={'center'}
    alignItems={'center'}
    width={'100%'}
    height={'90vh'}
    >
        <CircularProgress />
    </Stack>
  )
}

export default Loader