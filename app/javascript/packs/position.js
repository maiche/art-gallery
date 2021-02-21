document.addEventListener('DOMContentLoaded', function(){
  const ExhibitionRoom = document.querySelector(".exhibition_room");
  const artworks = document.querySelectorAll(".artwork_container");
  const Data = document.getElementById("data");
  const galleryId = Data.getAttribute('data-gallery');
  const roomId = Data.getAttribute('data-room');
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
  PositionBtn.addEventListener('click', (e) => {
    artworks.forEach(function (artwork) {
      const artworkId = artwork.getAttribute('data-id');
      console.log(artworkId);
      const artworkVertical = parseInt(artwork.style.top);
      const artworkHorizontal = parseInt(artwork.style.left);
      console.log(artworkVertical);
      console.log(artworkHorizontal);
      const formData = new FormData(document.getElementById("form"));
      for (let value of formData.entries()) { 
        console.log(value); 
      }
      formData.set('artwork_id', artworkId);
      formData.set('vertical', artworkVertical);
      formData.set('horizontal', artworkHorizontal);
      const XHR = new XMLHttpRequest();
      XHR.open("PUT", `/galleries/${galleryId}/rooms/${roomId}`, true);
      XHR.responseType = "json";
      XHR.send(formData);
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        }
        const item = XHR.response.artwork;
        console.log(artwork.style.top);
        artwork.style.top = item.vertical + "px"
        artwork.style.left = item.horizontal + "px"
      };
    });
    e.preventDefault();
  });
});
