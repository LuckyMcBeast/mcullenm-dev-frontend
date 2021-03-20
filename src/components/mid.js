import React, { useState } from 'react'
import SkillSet from './mid-sub/skillset'
import BrandEdu from './mid-sub/brandedu'
import RecentBlog from './mid-sub/recentblog'
import waveBottom from '../img/waveBottom3.png'
import { skills } from '../utils/data'

const Mid = (props) => {
    const [directionSwitch, setDirectionSwitch] = useState(true);

    return (
        <div>
            <img className='wave' src={waveBottom}/>
            <SkillSet skill={skills[0].skill} copy={skills[0].copy} image={skills[0].image} link={skills[0].link} directionSwitch={directionSwitch}/>
            <BrandEdu/>
            <RecentBlog/>
        </div>
    )
}

export default Mid