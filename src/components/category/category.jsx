import { Stack } from "@mui/material"
import { categoryArr } from "../../../constants/categoryArr"
import {colors} from "../../../constants/colors"

const Category = ({selectCategoryHandler,selectCategory}) => {
    
    
  return (
    <Stack direction={'row'} sx={{overflowX:'scroll'}}>
        {categoryArr.map(item =>{
            const IconComponent = item.icon
            return(
                <button key={item.name} 
                className="category-btn"
                 style={{borderRadius:'0',
                  background: item.name === selectCategory && colors.secondary,
                  color:item.name === selectCategory && '#fff'
                 }}
                 onClick={() => selectCategoryHandler(item.name)}
                 >
                    <span style={{color: item.name === selectCategory ? '#fff' : 'red',
                       marginRight:'14px'}}><IconComponent/></span>
                    <span>{item.name}</span>
                    
                </button>
            )
        })}
    </Stack>
  )
}

export default Category