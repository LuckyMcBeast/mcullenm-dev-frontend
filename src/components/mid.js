import React, { useState } from 'react'
import SkillSet from './mid-sub/skillset'
import BrandEdu from './mid-sub/brandedu'
import RecentBlog from './mid-sub/recentblog'
import waveBottom from '../img/waveBottom3.png'
import { skills } from '../utils/data'

const Mid = (props) => {
    let directionSwitch = false;
    return (
        <div>
            <img className='wave' src={waveBottom} />
            <div className='skillSet'>
                {skills.map((skill) => {
                    directionSwitch = !directionSwitch
                    return <SkillSet id={skill.id} skill={skill.skill} copy={skill.copy} image={skill.image} link={skill.link} directionSwitch={directionSwitch} />
                })}
            </div>
            <BrandEdu />
            <RecentBlog />
        </div>
    )
}

export default Mid