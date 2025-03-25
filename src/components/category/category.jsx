import { Stack } from "@mui/material"
import { categoryArr } from "../../../constants/categoryArr"

const Category = () => {
    
    
  return (
    <Stack direction={'row'} sx={{overflowX:'scroll'}}>
        {categoryArr.map(item =>{
            const IconComponent = item.icon
            return(
                <button key={item.name} className="category-btn" style={{borderRadius:'0'}}>
                    <span style={{color:'red', marginRight:'14px'}}><IconComponent/></span>
                    <span>{item.name}</span>
                    
                </button>
            )
        })}
    </Stack>
  )
}

export default Category