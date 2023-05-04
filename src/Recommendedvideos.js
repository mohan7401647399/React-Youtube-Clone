import React from 'react';
import './recommendedvideos.css';
import VideoCard from './VideoCard';

function Recommendedvideos() {
  return (
    <div className='recommendedvideos'>
      <h2>Recommended</h2>
      <div className="recommededvideos_videos">
        <VideoCard title='Youtube clone in react' views='2.3M views' timestamp='3 days ago' channelImage='/00.jpg' channel='Rockabye' image='/0.jpg' />        
        <VideoCard title='insta clone in react' views='1M views' timestamp='2 days ago' channelImage='/11.jpg' channel='Mohan' image='/1.jpg' />        
        <VideoCard title='facebook clone in react' views='5M views' timestamp='10 days ago' channelImage='/22.jpg' channel='Rmohan' image='/2.jpg' />        
        <VideoCard title='whatsapp clone in react' views='9M views' timestamp='5 days ago' channelImage='/33.jpg' channel='Mohanrockabye' image='/3.jpg' />        
        <VideoCard title='tik tok clone in react' views='100k views' timestamp='11 days ago' channelImage='/44.jpg' channel='messiah' image='/4.jpg' />        
        <VideoCard title='spotify clone in react' views='2.3M views' timestamp='2 days ago' channelImage='/55.jpg' channel='freakin' image='/5.jpg' />        
        <VideoCard title='Amazon clone in react' views='300M views' timestamp='4 days ago' channelImage='/66.jpg' channel='messiah.freakin' image='/6.jpg' />        
      </div>
    </div>
  )
}

export default Recommendedvideos
