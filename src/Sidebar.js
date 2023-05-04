// import React from 'react'
// import './sidebar.css'
// import SidebarRow from './SidebarRow'

// function Sidebar() {
//   return (
//     <div className='sidebar'>
//       <h2>Sidebar is here</h2>
//     </div>
//   )
// }

// export default Sidebar



//              sidebarrow creation

// import React from 'react';
// import './sidebar.css';
// import SidebarRow from './SidebarRow';

// function Sidebar() {
//   return (
//     <div className='sidebar'>
//       <SidebarRow title='Home'/>
//       <SidebarRow title='Trending'/>
//       <SidebarRow title='Subscription'/>
//     </div>
//   )
// }

// export default Sidebar


//    create icons


import React from 'react';
import './sidebar.css';
import SidebarRow from './SidebarRow';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import ThumbUpOffAltSharpIcon from '@mui/icons-material/ThumbUpOffAltSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={HomeSharpIcon} title='Home'/>
      <SidebarRow Icon={WhatshotSharpIcon} title='Trending'/>
      <SidebarRow Icon={SubscriptionsSharpIcon} title='Subscription'/>
      <hr/>
      <SidebarRow selected Icon={VideoLibrarySharpIcon} title='Library'/>
      <SidebarRow Icon={HistorySharpIcon} title='History'/>
      <SidebarRow Icon={OndemandVideoSharpIcon} title='Your Videos'/>
      <SidebarRow Icon={WatchLaterSharpIcon} title='Watch Later'/>
      <SidebarRow Icon={ThumbUpOffAltSharpIcon} title='Liked videos'/>
      <SidebarRow Icon={ExpandMoreSharpIcon} title='Show more'/>
      <hr/>
      </div>    
  )
}

export default Sidebar