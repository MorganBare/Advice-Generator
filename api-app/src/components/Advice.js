import divider from '../images/pattern-divider-desktop.svg'
import dividerMobile from '../images/pattern-divider-mobile.svg'

export default function Advice(props){
   return (
    <div>
        <p className='fs-100 txt-neon letter-space'>ADVICE #<span>{props.id}</span></p>
        <p className='fs-200'>{props.advice}</p>
        <picture>
            <source srcSet={divider} media="(min-width: 600px)"/>
            <img src={dividerMobile} alt='' />
        </picture>
    </div>
   )
}