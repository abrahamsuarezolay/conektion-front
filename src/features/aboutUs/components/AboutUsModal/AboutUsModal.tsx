import React from 'react'
import { AboutUsModalComponent } from '../../../../types/component.types'
import "./AboutUsModal.scss"

const AboutUsModal: React.FC<AboutUsModalComponent> = ({ teamMember, handleClose }) => {

    if (!teamMember) return

    return (
        <div className='overlay'>
            <div className='about-us-modal-container'>
                <div className='close-button' onClick={handleClose}>X</div>
                <div className='modal-left-column'>
                    <img src={teamMember.imgUrl} alt={teamMember.name} />
                </div>
                <div className='modal-right-column'>
                    <h2>{teamMember.name}</h2>
                    <h3>{teamMember.position}</h3>
                    <div className='bio-container'>
                        <p>{teamMember.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsModal