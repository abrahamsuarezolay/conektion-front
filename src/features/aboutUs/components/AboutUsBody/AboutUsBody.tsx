

import React, { useContext, useEffect, useState } from 'react'
import "./AboutUsBody.scss"
import { AboutUsTeamMembersType } from '../../../../types/api.types'
import LanguageContext from '../../../../context/LangContext'
import { getAboutUsTeamMembers } from '../../../../services/api.service'

const AboutUsBody = () => {

    const { langCode } = useContext(LanguageContext)

    const [teamMembersData, setTeamMembersData] = useState<AboutUsTeamMembersType[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getAboutUsTeamMembers(langCode).then((response) => {
            console.log(response)
        })
    }, [])


    return (
        <div className='about-us-body-container'>
            <h2>Hola</h2>
        </div>
    )
}

export default AboutUsBody