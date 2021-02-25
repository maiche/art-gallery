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

    // const onTouchMove = function(e){
    //   let RoomRect = ExhibitionRoom.getBoundingClientRect();
    //   let x = e.changedTouches[0].clientX;
    //   let y = e.changedTouches[0].clientY;
    //   let height = artwork.offsetHeight;
    //   let width = artwork.offsetWidth;
    //   artwork.style.top = (y-RoomRect.top-height/2) + "px";
    //   artwork.style.left = (x-RoomRect.left-width/2) + "px";
    // }
    // artwork.addEventListener('touchstart', (e) => {
    //   document.addEventListener('touchmove',onTouchMove);
    // });
    // artwork.addEventListener('touchend', () => {
    //   document.removeEventListener("touchmove",onTouchMove);
    // });
  });
});
