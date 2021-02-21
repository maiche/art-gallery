document.addEventListener('DOMContentLoaded', function(){
  const ExhibitionRoom = document.querySelector(".exhibition_room");
  const artworks = document.querySelectorAll(".artwork_container");
  artworks.forEach(function (artwork) {
    artwork.addEventListener('dragstart',(e) => {
      e.preventDefault();
    });
    if (document.URL.match( /edit/ )) {
      const onMouseMove = function(e){
        let RoomRect = ExhibitionRoom.getBoundingClientRect();
        let x = e.clientX;
        let y = e.clientY;
        let height = artwork.offsetHeight;
        let width = artwork.offsetWidth;
        artwork.style.top = (y-RoomRect.top-height/2) + "px";
        artwork.style.left = (x-RoomRect.left-width/2) + "px";
      }
      artwork.addEventListener('mousedown', (e) => {
        document.addEventListener('mousemove',onMouseMove);
      });
      artwork.addEventListener('mouseup', () => {
        document.removeEventListener("mousemove",onMouseMove);
      });
    }
  });
  const PositionBtn = document.getElementById('position_btn');
  PositionBtn.addEventListener('click', () => {
    artworks.forEach(function (artwork) {
      let artworkId = artwork.getAttribute('data-id');
      console.log(artworkId);
      let artworkVertical = parseInt(artwork.style.top);
      let artworkHorizontal = parseInt(artwork.style.left);
      console.log(artworkVertical);
      console.log(artworkHorizontal);
    });
  });
});
