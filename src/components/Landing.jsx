import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TexExample from '../components/TexExample.jsx';

export function Landing() {
    return (
        <Parallax pages={2} style={{ top: '0', left: '0' }} className="h-full display-block position-relative z-10">
        <ParallaxLayer offset={0} speed={1}>
            <div className="bg-center bg-repeat-x w-full h-screen position-absolute " 
            style={{
                    backgroundImage: 'url(./img-landing/office.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'top center',
                }}>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.9}>
            <div className='w-full h-screen position-absolute z-30 mt-52'>
                <h1 className="text-[150px] font-bold text-center text-white">NEED HELP?</h1>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.9}>
            <div className="bg-repeat-x w-full h-screen position-absolute"
                style={{
                    backgroundImage: 'url(./img-landing/hand.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'bottom center',
                }}>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.001}>
            <div className="bg-repeat-x w-full h-screen position-absolute"
                style={{
                    backgroundImage: 'url(./img-landing/lamp.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'top center',
                }}>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.72}>
            <div className="bg-repeat-x w-full h-screen position-absolute"
                style={{
                    backgroundImage: 'url(./img-landing/desk.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'bottom center',
                }}>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
            <TexExample/>
        </ParallaxLayer>
    </Parallax>

    );
}