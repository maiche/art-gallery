// if (document.URL.match( /new/ )) {
  document.addEventListener('DOMContentLoaded', function(){
    const TopImagePreview = document.getElementById('top_image_preview');
    const ArtworksPreview = document.getElementById('artworks_preview');
    document.getElementById('gallery_top_image').addEventListener('change', function(e){
      const TopImageContent = document.getElementById('top_image');
      if (TopImageContent){
        TopImageContent.remove();
      }
      
      const TopImageFile = e.target.files[0];
      const TopImageBlob = window.URL.createObjectURL(TopImageFile);
      const TopImageImg = document.createElement('img');
      TopImageImg.setAttribute('src', TopImageBlob);
      TopImageImg.setAttribute('id', 'top_image');
      TopImagePreview.appendChild(TopImageImg);
    });
    document.getElementById('gallery_artwork').addEventListener('change', function(e){

      const createImageHTML = (blob) => {
        const ArtworkDiv = document.createElement('div');
        const ArtworkImg = document.createElement('img');
        ArtworkImg.setAttribute('src', blob);
        ArtworkImg.setAttribute('id', 'artwork');
        ArtworkDiv.setAttribute('class', 'artwork_element');
        ArtworkDiv.appendChild(ArtworkImg);
        ArtworksPreview.appendChild(ArtworkDiv);
        
        const inputHTML = document.createElement('input')
        let ArtworkElementNum = document.querySelectorAll('.artwork_element').length
        inputHTML.setAttribute('id', `gallery_artwork_${ArtworkElementNum}`)
        inputHTML.setAttribute('name', 'gallery[artworks][]')
        inputHTML.setAttribute('type', 'file')
        ArtworkDiv.appendChild(inputHTML);

        inputHTML.addEventListener('change', (e) => {
          file = e.target.files[0];
          blob = window.URL.createObjectURL(file);
  
          createImageHTML(blob)
        })
      }

      const ArtworkFile = e.target.files[0];
      const ArtworkBlob = window.URL.createObjectURL(ArtworkFile);
      createImageHTML(ArtworkBlob);

    });
  });
// }
