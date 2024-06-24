import './credit.scss';

import { useRef } from 'react';

import { bg3 } from '../../../assets/images';
import Button from '../../button/Button';
import HomeSection from '../HomeSection';

const Credit = props => {
  const videoRef = useRef(null);

  // useEffect(() => {
  //   videoRef.current.play();
  //   const pauseVideo = () => {
  //     if (!document.hidden) {
  //       videoRef.current.play();
  //     } else {
  //       videoRef.current.pause();
  //     }
  //   };
  //   document.addEventListener('webkitvisibilitychange', pauseVideo);
  //   return () => {
  //     document.removeEventListener('webkitvisibilitychange', pauseVideo);
  //   };
  // }, []);

  return (
    <HomeSection className={`trailer ${props.isActive ? 'active' : ''}`} contentClassName="overlay trailer__content" bgImage={bg3}>
      <div className="credit__content">
        <div className="title">
          <span>Let's Slice</span>
          <h2 className="main-color">As your way</h2>
        </div>
        <div className="btns m-t-4">
          <Button className="btn-main">PLAY NOW</Button>
          <Button className="btn-second">GET STARTED</Button>
        </div>
      </div>
    </HomeSection>
  );
};

export default Credit;
