import divider from '../images/pattern-divider-desktop.svg'
import dividerMobile from '../images/pattern-divider-mobile.svg'

export default function Advice(){
   return (
    <div>
        <p className='fs-100 txt-neon letter-space'>ADVICE #<span>117</span></p>
        <p className='fs-200'>Lorem ipsum is placeholder text commonly 
            used in the graphic, print, and publishing 
            industries for previewing layouts and visual 
            mockups.
        </p>
        <picture>
            <source srcset={divider} media="(min-width: 600px)"/>
            <img src={dividerMobile} alt='' />
        </picture>
    </div>
   )
}