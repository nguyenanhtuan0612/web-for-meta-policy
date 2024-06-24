import { useRef, useEffect } from 'react';

import { bg3, b3, s1, logo } from '../../../assets/images';
import HomeSection from '../HomeSection';

import './trailer.scss';

const Trailer = props => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
    // iframeRef.current.setAttribute('height', height);
  }, []);

  return (
    <HomeSection className={`trailer ${props.isActive ? 'active' : ''}`} contentClassName="overlay trailer__content">
      <div className="trailer__content__img">
        <img src={logo} alt="" />
      </div>
      {/* <div className="trailer__content__info">
        <div className="s1">
          <img src={s1} alt="" />
        </div>
      </div> */}
    </HomeSection>
  );
};

export default Trailer;
