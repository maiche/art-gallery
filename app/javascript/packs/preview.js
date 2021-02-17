if (document.URL.match( /new/ )) {
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
      const ArtworkContent = document.getElementById('artwork');
      if (ArtworkContent){
        ArtworkContent.remove();
      }
      const ArtworkFile = e.target.files[0];
      const ArtworkBlob = window.URL.createObjectURL(ArtworkFile);
      const ArtworkImg = document.createElement('img');
      ArtworkImg.setAttribute('src', ArtworkBlob);
      ArtworkImg.setAttribute('id', 'artwork');
      ArtworksPreview.appendChild(ArtworkImg);
    });
  });
}
