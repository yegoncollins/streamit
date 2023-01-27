import './Watch.scss'
import {ArrowBackOutlined }from '@mui/icons-material';
const Watch = () => {
  return (
    <div className='watch'>
        
    <div className="back">
        <ArrowBackOutlined/>
        Home
    </div>
      <video className='video' autoPlay
       progress 
       controls 
       src='https://vod-progressive.akamaized.net/exp=1674807300~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2448%2F15%2F387242416%2F1632812994.mp4~hmac=320581acd7116ab47923f53247e578757a1cd15cbd05600df73e0740ce578d78/vimeo-prod-skyfire-std-us/01/2448/15/387242416/1632812994.mp4'/>
    </div>
  )
}

export default Watch