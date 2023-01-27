import './Featured.scss';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const Featured = ({type}) => {
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === 'movie'? "Movies" :'TvSeries'}</span>
          <select name='genre' id='genre'>
           <option>Genre</option>
           <option value="adventure">Adventure</option>
           <option value="comedy">Comedy</option>
           <option value="crime">Crime</option>
           <option value="fantasy">Fantasy</option>
           <option value="historical">Historical</option>
           <option value="horror">Horror</option>
           <option value="romance">Romance</option>
           <option value="sci-fi">Sci-fi</option>
           <option value="thriller">Thriller</option>
           <option value="western">Western</option>
           <option value="animation">Animation</option>
           <option value="drama">Drama</option>
           <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
        <img src="https://images.pexels.com/photos/7991270/pexels-photo-7991270.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <div className="info">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLslktv-tf95ac0k6bR3U4UWApU6aj-xiHg&usqp=CAU" alt="" />
    <span className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sequi repellat illum dicta necessitatibus, quam nobis est. Suscipit odit, laborum incidunt labore at id magni sit placeat. Iure, molestias explicabo!</span>
    <div className="buttons">
        <button className='play'>
           <PlayCircleOutlineIcon/>
           <span>Play</span>
        </button>
        <button className='more'>
         <InfoOutlinedIcon/>
         <span>Info</span>
        </button>
    </div>
    </div>
    </div>
  )
}

export default Featured