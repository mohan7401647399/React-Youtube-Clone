import React from 'react';
import './SearchPage.css';
import { TuneOutlined } from '@mui/icons-material';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div>
      <div className="searchPage">
        <div className="searchPage_filter">
            <TuneOutlined/>
            <h2>FILTER</h2>
        </div>
        <hr/>
        <ChannelRow 
          image='/s1.jpg'
          channel='Rockabye'
          verified
          subs='666K'
          noOfVidoes={382}
          description='You are in Youtube search.Let us coding with React JS'
        />
        <hr/>
        <VideoRow
          views='1.9M'
          subs='777K'
          description='Do you want learning youtube clone'
          timestamp='One Minute ago'
          channel='ROCKABYE'
          title="Let's build youtube clone "
          image='/s2.jpg'
        />
        <hr/>
        <VideoRow
          views='10M'
          subs='100K'
          description='Do you want learning Instagram clone'
          timestamp='Just Now'
          channel='MOHAN'
          title="Let's build Instagram clone "
          image='/s3.jpg'
        />
        <hr/>
        <VideoRow
          views='20M'
          subs='500K'
          description='Do you want learning Whatsapp clone'
          timestamp='2 days ago'
          channel='MOHAN R'
          title="Let's build Whatsapp clone "
          image='/s4.jpg'
        />
        <hr/>
        <VideoRow
          views='50M'
          subs='1M'
          description='Do you want learning Twitter clone'
          timestamp='10 Seconds ago'
          channel='MESSIAH'
          title="Let's build Twitter clone "
          image='/s5.jpg'
        />
      </div>
    </div>
  )
}

export default SearchPage
