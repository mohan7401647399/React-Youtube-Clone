import React from 'react';
import './channelRow.css';
import { Avatar } from '@mui/material';
import { CheckCircleOutlineOutlined } from '@mui/icons-material';

function ChannelRow({image, channel, subs, noOfVidoes, description, verified}) {
  return (
    <div className='channelRow' >
      <Avatar className='channelRow_logo' alt={channel} src={image}/>
      <div className="channelRow_text">
        <h4>{channel} {verified && <CheckCircleOutlineOutlined/>}</h4>
        <p> {subs} subscribers . {noOfVidoes} Videos </p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow
