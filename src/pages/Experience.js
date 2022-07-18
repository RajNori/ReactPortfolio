import React from 'react'
import {VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

function experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e297a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2013-2017'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkHistoryIcon/>}
        >
          <h3>Webcorp: A digital Agency.</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default experience