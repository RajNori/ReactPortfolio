import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

function experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e297a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2022'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkHistoryIcon />}
        >
          {' '}
          <h3>Clickmatix</h3>
          <h4>Digital Strategy</h4>
          <ul>
            <li>
              Optimized Website exposure by analyzing search engine patterns to
              direct online placement of keywords and other content.
            </li>
            <li>
              Optimized digital assets for search engine optimization(SEO),
              display and usability on mobile devices.
            </li>
            <li>
              Directed the development and implementation of online marketing
              strategy.
            </li>
            <li>
              Used various tools including GA, SEMrush, Majestic and MOZ to
              analyze on-page/off-page SEO & SERP metrics to direct website
              strategy and online presence management.
            </li>
            <li>
              Measured effectiveness of marketing,advertising and communications
              programs and strategies.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2021-2022'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkHistoryIcon />}
        >
          <h3>Manpower Professional, Melbourne</h3>
          <h4>Digital Consultant</h4>
          <ul>
            <li>
              Recruited and sourced mid to senior level executives in a variety
              of disciplines including Digital Marketing, Product Management &
              UI/UX.
            </li>
            <li>
              Developed and managed recruitment/research process for assigned
              projects and set expectations for clients and internal teams.
            </li>
            <li>
              Created marketing, website and SEO-driven content to support
              client needs.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2019-2021'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkHistoryIcon />}
        >
          <h3>Sensis (Telstra)</h3>
          <h4>Digital Media Advisor</h4>
          <ul>
            <li>
              Used various tools including GA, SEMrush, Majestic and MOZ to
              analyze on-page/off-page SEO & SERP metrics to direct website
              strategy and online presence management.
            </li>
            <li>
              Specialised in client relationship building which included account
              management and negotiation of contracts and advertising rates.
            </li>
            <li>
              Consult with company officials, Marketing departments,and
              advertising agencies to develop promotional plans.
            </li>

            <li>
              Directed the development and implementation of online marketing
              strategy.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2017-2019'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkHistoryIcon />}
        >
          <h3>Webcorp</h3>
          <h4>Product Manager</h4>
          <ul>
            <li>Gathering requirements and creating a product roadmap.</li>
            <li>
              Collaborate with management and users to develop sustainable
              e-commerce strategies and to integrate these strategies with their
              online marketing efforts.
            </li>
            <li>
              Performed and directed website updates and directed the content
              strategy for the website on a regular basis.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2013-2017'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkHistoryIcon />}
        >
          <h3>RightFit Digital</h3>
          <h4>Director</h4>
          <p>
            A boutique digital Agency specialising in Domain Acquisition and
            Sales, Web design & development, SEO, SEM & SMM.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default experience;
