document.addEventListener('DOMContentLoaded', function(){
  const PreviewDisplay = document.getElementById("preview_display");
  document.getElementById('preview_form').addEventListener('change', function(e){
    const ImageContent = document.getElementById('preview_image');
    if (ImageContent){
      ImageContent.remove();
    }

    console.log(e);
    
    const ImageFile = e.target.files[0];
    const ImageBlob = window.URL.createObjectURL(ImageFile);
    const ImageImg = document.createElement('img');
    ImageImg.setAttribute('src', ImageBlob);
    ImageImg.setAttribute('id', 'preview_image');
    PreviewDisplay.appendChild(ImageImg);
  });
});
