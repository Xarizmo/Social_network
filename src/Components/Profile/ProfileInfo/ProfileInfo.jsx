import React from 'react';
import s from './ProfileInfo.module.css';
import { Puff } from 'svg-loaders-react';
import { Emoji } from "../../common/Emoji/Emoji";

const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return <Puff stroke="#999999"/>
  }
  
  return (
    <div>
      <div className={s.content_top_bg}>
      </div>
      <div>
        <img src={props.profile.photos.large} alt=''/>
        <div>
          <span>{props.profile.aboutMe}</span>
          <span>Looking for a job:
            {props.profile.lookingForAJob
              ? <Emoji symbol="✅" label="yep"/>
              : <Emoji symbol="❌" label="none"/>
            }
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;