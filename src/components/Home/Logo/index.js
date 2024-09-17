import './index.scss';
import LogoS from '../../../assets/images/newlogo.png';
import { useRef } from 'react';

const Logo = () => {

    const bgRef = useRef(null);
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoS} alt="H" />
            <svg 
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox='0 0 559 897'
                xmlns="http://www.w3.org/2000/svg"
                >
                    <g 
                        className='svg-container'
                        transform='translate(0 457) scale(.1 -.1)'
                        fill= 'none'
                    >
                        <path 
                            d="M2930 4560 C2586 4544, 2400 4400, 2100 4300"
                        />    
                    </g>    
                </svg>
        </div>
    )
}

export default Logo;