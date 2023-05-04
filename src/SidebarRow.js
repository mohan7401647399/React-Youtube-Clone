// import React from 'react';
// import './SidebarRow.css'
// import HomeSharpIcon from '@mui/icons-material/HomeSharp';

// function SidebarRow({title}) {
//   return (
//     <div className='sidebarRow'>
//         <HomeSharpIcon/>
//       <h2>{title}</h2>
//     </div>
//   )
// }

// export default SidebarRow



//          import Icon

import React from 'react';
import './SidebarRow.css';

function SidebarRow({selected, Icon, title}) {
  return (
    <div className={`sidebarRow ${ selected && "selected"}`}>
        <Icon className="sidebarRow_icon"/>
      <h2 className='sidebarRow_title'>{title}</h2>
    </div>
  )
}

export default SidebarRow
