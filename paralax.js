var image = document.getElementsByClassName('u-image u-image-default u-opacity u-opacity-10 u-image-1');
new simpleParallax(image, {
    overflow: true,
    orientation: 'right'
});
var image = document.getElementsByClassName('u-image u-image-default u-image-2');
new simpleParallax(image, {
    overflow: true,
    orientation: 'left',
    scale:1.5
});