require('../scss/index.scss');
import { roundTo } from './util';

const a = window.innerWidth / 2;
const A = window.innerWidth;
const b = window.innerHeight / 2;
const B = window.innerHeight;

const getPointAlongEllipse = (iteration = 0) => {
  /*
    (h, k) = center
    a = horizontal radius
    b = vertical radius
  */
  const angle = (iteration % 360) * (Math.PI / 180);
  const x = (a * Math.cos(angle) + a) / A;
  const y = (b * Math.sin(angle) + b) / B;
  return {
    x, 
    y
  };
};

const pointToPositions = ({ x, y }) => {
  const topLeftScale = [x, y];
  const topRightScale = [(1 - x), y];
  const bottomRightScale = [1 - x, (1 - y)];
  const bottomLeftScale = [x, (1 - y)];
  const inverseScales = [
    topLeftScale,
    topRightScale,
    bottomRightScale,
    bottomLeftScale
  ].map(s => {
    return s.map(p => 1 / p);
  });
  const [
    topLeftInverseScale,
    topRightInverseScale,
    bottomRightInverseScale,
    bottomLeftInverseScale
  ] = inverseScales;
  return [
    [
      topLeftScale,
      topLeftInverseScale
    ],
    [
      topRightScale,
      topRightInverseScale
    ],
    [
      bottomLeftScale,
      bottomLeftInverseScale
    ],
    [
      bottomRightScale,
      bottomRightInverseScale
    ]
  ]
};

const pointToScales = ([scaleArr, inverseScaleArr]) => {
  return {
    scale : scaleArr.map(s => roundTo(s, 4)).join(', '),
    inverseScale : inverseScaleArr.map(s => roundTo(s, 4)).join(', ')
  };
}

let RAF;
let LOOPING = true;
let INTERVAL = 1000 / 60;

const animate = (panels, iteration = 0) => {
  // debugger;
  const point = getPointAlongEllipse(iteration);
  const positions = pointToPositions(point);
  const scales = positions.map(pointToScales);
  
  requestAnimationFrame(() => {
    panels.forEach(({inner, outer}, index) => {
      outer.style.transform = `scale(${scales[index].scale})`;
      inner.style.transform = `scale(${scales[index].inverseScale})`;
    })
  })

  if (LOOPING) {
    setTimeout(() => {
      animate(panels, iteration + 1);
    }, INTERVAL);
  }
}


const init = () => {
  const panels = Array.from(document.querySelectorAll('.panel')).map(outer => {
    const inner = outer.querySelector('.panel__inner');
    return {
      outer,
      inner
    };
  });
  animate(panels);
};

document.addEventListener('DOMContentLoaded', init);