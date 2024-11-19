

import React, { useContext, useEffect, useState } from 'react'
import "./AboutUsBody.scss"
import { AboutUsTeamComponent } from '../../../../types/component.types'
import { AboutUsTeamMembersType } from '../../../../types/api.types'
import AboutUsModal from '../AboutUsModal/AboutUsModal'

const AboutUsBody:React.FC<AboutUsTeamComponent> = ({sectionHeader, teamMembersData}) => {

    const [selectedMember, setSelectedMember] = useState<AboutUsTeamMembersType | undefined>()

    const handleModal = (teamMember:AboutUsTeamMembersType) => {
        setSelectedMember(teamMember)
    }

    const closeModal = () => {
        setSelectedMember(undefined)
    }   

    return (
        <>
        <div className='about-us-body-container'>
            <div className='team-members-header'>
            <h1>{sectionHeader?.title}</h1>
            <p>{sectionHeader?.subtitle}</p>
            </div>
            {teamMembersData ? (
                <div className='team-members-container'>
                    {teamMembersData.map((teamMember, index) => (
                        <div className='team-member-container' key={teamMember.position}>
                            <img src={teamMember.imgUrl} alt={teamMember.name} onClick={() => handleModal(teamMember)}/>
                            <h3>{teamMember.name}</h3>
                            <h4>{teamMember.position}</h4>
                        </div>
                    ))}
                </div>
            ) : (
                <></>
            )}
        </div>
        <>
            { selectedMember && <AboutUsModal teamMember={selectedMember} handleClose={closeModal}/>}
        </>
        </>
    )
}

export default AboutUsBody