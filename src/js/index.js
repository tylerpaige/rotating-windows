require('../scss/index.scss');
import { roundTo } from './util';

const getPointAlongEllipse = (iteration = 0) => {
  /*
    (h, k) = center
    a = horizontal radius
    b = vertical radius
  */
  const angle = (iteration % 360) * (Math.PI / 180);
  const a = window.innerWidth / 2;
  const b = window.innerHeight / 2;
  // const fooX = (a * Math.cos(angle));
  // const fooY = (b * Math.sin(angle));
  // console.log([fooX, fooY]);
  const x = (a * Math.cos(angle) + a) / window.innerWidth;
  const y = (b * Math.sin(angle) + b) / window.innerHeight;
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
      bottomRightScale,
      bottomRightInverseScale
    ],
    [
      bottomLeftScale,
      bottomLeftInverseScale
    ],
  ]
};

const keyframesToAnimation = (name, keyframes) => {
  return `@keyframes ${name} { ${keyframes} }`;
};

const animationNameToApplication = (name, index) => {
  return `.panel:nth-child(${index + 1}) {
    animation-name: ${name};
  }`;
};

const createAnimations = () => {
  const numberOfKeyframes = 100;
  const points = Array.from({ length : numberOfKeyframes })
    .map((_, index) => getPointAlongEllipse(index / numberOfKeyframes * 360));
  /* An array of scales (which are arrays) */
  const positions = points
    .map(coords => pointToPositions(coords));
  console.log({ positions });
  const keyframes = positions.reduce((acc, panelPosition, keyframeIndex, list) => {
    const percentage = roundTo(keyframeIndex / list.length * 100, 0);
    panelPosition.forEach(([scaleArr, inverseScaleArr], panelIndex) => {
      console.log({ scaleArr, inverseScaleArr });
      const scale = scaleArr.map(s => roundTo(s, 0)).join(', ');
      const inverseScale = inverseScaleArr.map(s => roundTo(s, 0)).join(', ');
      acc[panelIndex].scaleAnimation += `${percentage}% { transform: scale(${scale}); }`;
      acc[panelIndex].inverseScaleAnimation += `${percentage}% { transform: scale(${inverseScale}); }`;
    });
    return acc;
  }, [
    {scaleAnimation : '', inverseScaleAnimation : ''},
    {scaleAnimation : '', inverseScaleAnimation : ''},
    {scaleAnimation : '', inverseScaleAnimation : ''},
    {scaleAnimation : '', inverseScaleAnimation : ''}
  ]);
  const animationNames = [{ animationName : 'topLeft', inverseAnimationName : 'topLeftInverse'}, { animationName : 'topRight', inverseAnimationName : 'topRightInverse'}, { animationName : 'bottomRight', inverseAnimationName : 'bottomRightInverse'}, { animationName : 'bottomLeft', inverseAnimationName : 'bottomLeftInverse'}];
  const animationCss = animationNames.map((name, i) => {
    const { animationName, inverseAnimationName } = name;
    // const animationApplication = animationNameToApplication(name, i);
    // const animationDefinition = keyframesToAnimation(name, keyframes[i]);
    // return animationApplication + animationDefinition;
    const animationDefintion = keyframesToAnimation(animationName, keyframes[i].scaleAnimation);
    const inverseAnimationDefintion = keyframesToAnimation(inverseAnimationName, keyframes[i].inverseScaleAnimation);
    return animationDefintion + inverseAnimationDefintion;
  }).join('');
  document.body.innerHTML += `<style>${animationCss}</style>`


};

const init = () => {
  // const debugContainer = document.getElementById('debug');
  // for (let i = 0; i < 360; i++) {
  //   const coords = getPointAlongEllipse(i);
  //   const dot = document.createElement('div');
  //   dot.className = 'dot';
  //   dot.style.left = `${coords.x * 100}vw`;
  //   dot.style.top = `${coords.y * 100}vh`;
  //   debugContainer.appendChild(dot);
  // }
  createAnimations()
};

document.addEventListener('DOMContentLoaded', init);