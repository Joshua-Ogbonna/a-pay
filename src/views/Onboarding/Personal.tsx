import React from 'react'
import Logo from '../../components/Logo'
import SignSide from '../../components/SignSide'
import PersonalProfileForm from '../../components/OnboardingComponents/PersonalProfileForm'

const Personal = () => {
  return (
    <div className='auth__container'>
        <div className="auth__component p-5">
            <Logo className='login__brand'/>
            <PersonalProfileForm/>
        </div>
        <div className="side__component">
            <SignSide/>
        </div>
    </div>
  )
}

export default Personal