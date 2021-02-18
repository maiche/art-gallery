document.addEventListener('DOMContentLoaded', function(){
  const TopImagePreview = document.getElementById('top_image_preview');
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
});
