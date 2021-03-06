import React from 'react';

const Tyle = ({ color, direction, button }) => {
  return (
    <article
      class="card"
      data-scroll
      data-scroll-speed={direction}
      data-scroll-direction="vertical"
    >
      <div
        class="card-tags"
        data-scroll
        data-scroll-speed="0.7"
        data-scroll-direction="horizontal"
      >
        <h2 class="card-tag--text">Eenzaamheid</h2>
        <h2 class="card-tag--text">Stickers</h2>
      </div>
      <div data-scroll class="card-layers">
        <div class={`card-info card-info--${color}`}>
          <p class="card-fase">Conceptfase</p>
          <div class="card-title " data-scroll>
            <h1 class="title-project">De expositie</h1>
            <p class="title-name">Sven Voskamp</p>
          </div>
          <img class="card-image" src="./assets/images/tile_1.png" alt="" />
        </div>
      </div>

      <div
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed={button}
        class="card-button"
      >
        {/* <div class="buttons"> */}
        {/* <img
            class="button-background"
            src="./assets/images/button_background.svg"
          /> */}
        <img class="button-top" src="./assets/images/button_top.svg" />
        {/* </div> */}
      </div>
    </article>
  );
};

export default Tyle;
