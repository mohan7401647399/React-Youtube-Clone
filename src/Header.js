// import React from 'react';

// function Header() {
//   return (
//     <div className='header'>
//       <h1>Header</h1>
//     </div>
//   )
// }

// export default Header


//              import icons

// import React from 'react';
// import MenuIcon from '@mui/icons-material/Menu';

// function Header() {
//   return (
//     <div className='header'>
//       <h1>Header</h1>
//       <MenuIcon/>
//     </div>
//   )
// }

// export default Header


//                  insert youtube logo

// import React from 'react';
// import MenuIcon from '@mui/icons-material/Menu';

// function Header() {
//   return (
//     <div className='header'>
//       <h1>Header</h1>
//       <MenuIcon/>
//       <img className='header_logo' src="youtubelogo.jpg" alt="" />
//     </div>
//   )
// }

// export default Header



//                      insert search & video icons

// import React from 'react';
// import './Header.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
// import AppsSharpIcon from '@mui/icons-material/AppsSharp';
// import AddAlertSharpIcon from '@mui/icons-material/AddAlertSharp';
// import { Avatar } from '@mui/material';

// function Header() {
//   return (
//     < className='header'>             
//       <MenuIcon/>
//       <img className='header_logo' src="youtubelogo.jpg" alt="" />
//       <input type="text"/>
//       <SearchIcon/>
//       <VideoCallSharpIcon/>
//       <AppsSharpIcon/>
//       <AddAlertSharpIcon/>
//       <Avatar alt='avatar' src='/avatar.jpg'/>

//     </div>
//   )
// }

// export default Header


//                          formatting by container

import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import AddAlertSharpIcon from '@mui/icons-material/AddAlertSharp';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className='header'>
        <div className="header_left">            
          <MenuIcon/>
          <Link to="/">
            <img className='header_logo' src="youtubelogo.jpg" alt=""/>
          </Link>
        </div>
        <div className="header_input">            
          <input onChange={(e) => setInputSearch(e.target.value)}
           value={inputSearch}
           placeholder='Search'
           type="text"
          />
          <Link to={`/search/${inputSearch}`}>
            <SearchIcon className='header_searchicon'/>            
          </Link>
        </div>
        <div className="header_icons">
            <VideoCallSharpIcon className='header_icon'/>
            <AppsSharpIcon className='header_icon'/>
            <AddAlertSharpIcon className='header_icon'/>
            <Avatar alt='avatar' src='/avatar.jpg'/>
        </div>
    </div>
  )
}

export default Header