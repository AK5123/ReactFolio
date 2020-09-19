import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Swiper, {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
} from "swiper";

import "../css/swiper.min.css";
import "../css/card.css";

Swiper.use([Navigation, Pagination, Mousewheel, Keyboard, EffectCoverflow]);

var arr = [
  "linear-gradient(135deg, #13f1fc 0%,#0470dc 100%)",
  "linear-gradient(135deg, #CE9FFC 0%,#7367F0 100%)",
  "linear-gradient(135deg, #F36265 0%,#961276 100%)",
  "linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)",
  "linear-gradient(135deg, #7117ea 0%,#ea6060 100%)",
  "linear-gradient(135deg, #17ead9 0%,#6078ea 100%)",
  "linear-gradient( 135deg, #6B73FF 10%, #000DFF 100%)",
  "linear-gradient(to right top, #350537, #680045, #9c0045, #c90036, #eb3812)",
  "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
  "linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)",
  "linear-gradient(to top, #09203f 0%, #537895 100%)",
  "linear-gradient(to top, #f77062 0%, #fe5196 100%)",
  "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)",
  "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)",
];



var randomBg = function (n) {
  let result = new Array(n),
      len = arr.length,
      taken = new Array(len),
      temp = [];
  while (n > len) {
    temp = temp.concat(arr)
    n -= len
  }
  while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result.concat(temp);
}

class SwipeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.projects,
      cstyle: randomBg(this.props.projects.length)
    };
  }
  /*
  ,
          {
            projectName : "Matrix",
            projectDesc : "Awesome Awesome Awesome Awesome Awesome !",
            techStack : ["JS","Python"]
          },
          {
            projectName : "KungfuPanda",
            projectDesc : "Awesome Awesome Awesome Awesome Awesome !",
            techStack : ["Python"]
          }
  */

  componentDidMount() {
    let swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      preventInteractionOnTransition: true,
      allowSlidePrev: true,
      allowSlideNext: true,
      grabCursor: true,
      spaceBetween: 50,
      initialSlide: 1,
      centeredSlides: true,
      slidesPerView: 3,
      mousewheel: {
        invert: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          initialSlide: 0,
        },
        // when window width is <= 480px
        848: {
          slidesPerView: 1,
          initialSlide: 0,
        },

        849: {
          slidesPerView: 2,
          initialSlide: 0,
        },
      },
      coverflowEffect: {
        rotate: 30,
        stretch: -50,
        depth: 250,
        modifier: 1,

        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }

  renderCards = () => {
    return this.state.cards.map((card,i) => {
      return (
        <div key={card.projectName} className="swiper-slide">
          <div className="card" style={{ background: this.state.cstyle[i] }}>
            <div className="card_title">
              <p className="title">{card.projectName}</p>
            </div>
            <div className="card_desc">
              <p>{card.preface}</p>
            </div>
            <div className="card_btn">
              <div
                className="ui button"
                style={{
                  background: "white",
                }}
              >
                <Link
                  to={{
                    pathname: "/ProjectDescription",
                    state: card,
                  }}
                >
                  <p
                    className="subtitle"
                    style={{
                      background: "white",
                      color: "black",
                      fontSize: "17px",
                    }}
                  >
                    Explore
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="swiper-container">
          <div className="swiper-wrapper">{this.renderCards()}</div>
        </div>
        <div className="flexit">
          <div className="swiper-pagination"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SwipeComponent);
