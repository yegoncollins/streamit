import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? 'navbar scrolled': 'navbar'}>
        <div className="container">
            <div className="left">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Polupar</span>
            <span>My List</span>
            </div>
            <div className="right">
                <SearchIcon className='icon'/>
                <span>KID</span>
                <NotificationsIcon className='icon'/>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                <div className="profile">
                <KeyboardArrowDownIcon className='icon'/>
                <div className="options">
                  <span>Settings</span>
                  <span>Logout</span>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar