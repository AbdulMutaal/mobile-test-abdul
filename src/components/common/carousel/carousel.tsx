import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

const Carousel = () => {
  let reactSwipeEl: any;

  return (
    <div>
      <ReactSwipe
        childCount={3}
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={(el: any) => (reactSwipeEl = el)}
      >
        <div>PANE 1</div>
        <div>PANE 2</div>
        <div>PANE 3</div>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
};

export default Carousel;