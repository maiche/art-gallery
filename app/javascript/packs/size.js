document.addEventListener('DOMContentLoaded', function(){
  const ExhibitionRoom = document.querySelector(".exhibition_room");
  const sizebtns = document.querySelectorAll(".size_btn");
  sizebtns.forEach(function (sizebtn) {
    const sizebtnId = sizebtn.getAttribute('data-id');
    const artwork = document.getElementById(`${sizebtnId}`);
    let artworkSize = parseInt(artwork.offsetHeight);
    const onMouseMove = function(e){
      e.stopPropagation();
      let Rect = artwork.getBoundingClientRect();
      let y = e.clientY;
      artwork.style.height = (artworkSize-y+Rect.top) + "px";
      artwork.style.width = artwork.style.height;
    }
    sizebtn.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      document.addEventListener('mousemove',onMouseMove);
    });
    document.addEventListener('mouseup', (e) => {
      e.stopPropagation();
      document.removeEventListener("mousemove",onMouseMove);
      artworkSize = parseInt(artwork.offsetHeight);
    });

    const onTouchMove = function(e){
      e.stopPropagation();
      let Rect = artwork.getBoundingClientRect();
      let y = e.changedTouches[0].clientY;
      artwork.style.height = (artworkSize-y+Rect.top) + "px";
      artwork.style.width = artwork.style.height;
    }
    sizebtn.addEventListener('touchstart', (e) => {
      e.stopPropagation();
      document.addEventListener('touchmove',onTouchMove);
    });
    document.addEventListener('touchend', (e) => {
      e.stopPropagation();
      document.removeEventListener("touchmove",onTouchMove);
      artworkSize = parseInt(artwork.offsetHeight);
    });
  });
});
