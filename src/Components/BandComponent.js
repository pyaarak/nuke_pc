import React from 'react'
import '../Stylesheets/BandComponent.scss'
import Whatwedo from '../Assets/Group495.png'

export default function BandComponent(props) {
  return (
    <div className='BandComponent_Wrapper'>
        <div className='BandComponent_Inner_Wrapper'>
            <img src={Whatwedo}></img>
        </div>
    </div>
  )
}
