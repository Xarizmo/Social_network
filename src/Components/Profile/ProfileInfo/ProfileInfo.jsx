import React from 'react';
import s from './ProfileInfo.module.css';
import { Puff } from 'svg-loaders-react';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Puff stroke="#999999" />
  }
  
  return (
    <div>
      <div className={s.content_top_bg}>
      </div>
      <div>
        <img src={props.profile.photos.large} alt='' />
        <div>
          <span>{props.profile.aboutMe}</span>
          <span>Looking for a job:
            {props.profile.lookingForAJob
            ? <span role="img" aria-label="yep">&#9989;</span>
            : <span role="img" aria-label="none">&#10060;</span>
            }
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;