import { useRef, useEffect } from 'react';

import { bg3, b3, s1 } from '../../../assets/images';
import HomeSection from '../HomeSection';

import './trailer.scss';

const Trailer = props => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
    // iframeRef.current.setAttribute('height', height);
  }, []);

  return (
    <HomeSection className={`trailer ${props.isActive ? 'active' : ''}`} contentClassName="overlay trailer__content" bgImage={bg3}>
      <div className="trailer__content__img">
        <img src={b3} alt="" />
      </div>
      <div className="trailer__content__info">
        <div className="title">
          <span>Play</span>
        </div>
        <div className="s1">
          <img src={s1} alt="" />
        </div>
      </div>
    </HomeSection>
  );
};

export default Trailer;
