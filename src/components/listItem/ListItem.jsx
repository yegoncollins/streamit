import './ListItem.scss';
import {PlayCircleFilledWhiteOutlined, AddCircleOutlineOutlined, ThumbUpOutlined, ThumbDownOutlined} from '@mui/icons-material';
import { useState } from 'react';

const ListItem = ({index}) => {
  const[isHovered, setIsHovered] = useState(false);
  const trailer = "https://vod-progressive.akamaized.net/exp=1674772466~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3457%2F15%2F392289251%2F1662078494.mp4~hmac=819bc2bf6f7e277f7abfb2510b2f61dac9428105f52bf9765b7b8d3aaabc0344/vimeo-prod-skyfire-std-us/01/3457/15/392289251/1662078494.mp4"
  return (
    <div className='listItem'
    style={{left: isHovered && index * 225 -50 + index * 2.5 }} 
       onMouseEnter={()=>setIsHovered(true)}
       onMouseLeave={()=>setIsHovered(false)}>
      <img src="https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      
      {isHovered && (
    <>    
      <video src={trailer} autoPlay={true} loop/>
      <div className="itemInfo">
        <div className="icons">
         <PlayCircleFilledWhiteOutlined className='icon'/>
         <AddCircleOutlineOutlined className='icon'/>
         <ThumbUpOutlined className='icon'/>
         <ThumbDownOutlined className='icon'/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 min</span>
          <span className='limit'>+16</span>
          <span className='year'> 2000</span>
        </div>
        <div className="desc">
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. 
        </div>
          <div className="genre">Action</div>
        
      </div>
      </>
    )}
    </div>
  )
}

export default ListItem