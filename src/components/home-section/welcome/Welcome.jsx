import { useEffect } from 'react';
import './welcome.scss';

import HomeSection from '../HomeSection';
import Button from '../../button/Button';

import hoverEffect from 'hover-effect';

import { bg1, b1, b2, b3, distortion } from '../../../assets/images';

const champImgs = [b1, b2, b3];

const Welcome = props => {
  useEffect(() => {
    const welcomeImgs = document.querySelectorAll('#welcome__img__slide > img');
    let animates = [];
    welcomeImgs.forEach((item, index) => {
      let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src');
      let animation = new hoverEffect({
        parent: document.querySelector('#welcome__img__slide'),
        intensity: 0.5,
        image1: item.getAttribute('src'),
        image2: nextImg,
        displacementImage: distortion,
        hover: false,
      });
      animates.push(animation);
    });
    welcomeImgs.forEach(e => e.remove());

    let currItem = 0;

    const autoImageSlide = () => {
      let prevItem = currItem;
      currItem = (currItem + 1) % animates.length;

      if (!document.hidden) {
        animates[prevItem].next();
      }

      setTimeout(() => {
        let canvas = document.querySelectorAll('#welcome__img__slide > canvas');
        document.querySelector('#welcome__img__slide').appendChild(canvas[0]);
        animates[prevItem].previous();
      }, 3000);
    };

    setInterval(autoImageSlide, 3000);
  }, []);

  return (
    <HomeSection className={`welcome ${props.isActive ? 'active' : ''}`} contentClassName="overlay welcome__content" bgImage={bg1}>
      <div className="welcome__info relative">
        <div className="welcome__info__content">
          <div className="title">
            <span>Welcome To</span>
            <h2 className="main-color">VR BOWLING TRIP</h2>
          </div>
          <div className="description m-t-4">Let's play bowling with your favorite place in VR. Choose place and start the game.</div>
          <div className="btns m-t-4">
            <Button className="btn-main">READ MORE</Button>
            {/* <Button className="btn-second">GET STARTED</Button> */}
          </div>
        </div>
      </div>
      <div className="welcome__img relative">
        <div className="welcome__img__slide" id="welcome__img__slide">
          {champImgs.map((item, index) => (
            <img src={item} key={index} />
          ))}
        </div>
      </div>
    </HomeSection>
  );
};

export default Welcome;
