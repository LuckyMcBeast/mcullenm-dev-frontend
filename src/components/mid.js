import React from 'react'
import SkillSet from './mid-sub/skillset'
import BrandEdu from './mid-sub/brandedu'
import RecentBlog from './mid-sub/recentblog'
import waveBottom from '../img/waveBottom3.png'

const Mid = (props) => {


    return (
        <div>
            <img className='wave' src={waveBottom}/>
            <SkillSet/>
            <BrandEdu/>
            <RecentBlog/>
        </div>
    )
}

export default Mid