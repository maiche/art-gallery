document.addEventListener('DOMContentLoaded', function(){
  const Hoge = document.getElementById("hoge");
  const HogeImg = document.getElementById("hoge_img");
  HogeImg.crossOrigin = "anonymous";
  const url = HogeImg.getAttribute('src');
  console.log(Hoge);
  console.log(HogeImg);
  console.log(url);

  // fetch(url, {
  //   mode: 'cors'
  // }).then( response => {
  //   let image = new Image;
  //   image.crossOrigin = "anonymous";
  //   image.onload = () => {
  //     let canvas = document.createElement("canvas");
  //     console.log(canvas);
  //   }
  //   image.src = response.url;
  // });

  // const canvas = document.createElement('canvas');
  // draw(canvas,url);
  // function draw(canvas,imagePath){
  //     console.log("draw");
  //     const image = new Image();
  //     image.addEventListener("load",function (){
  //         canvas.width = image.naturalWidth;
  //         canvas.height = image.naturalHeight;
  //         const ctx = canvas.getContext("2d");
  //         ctx.drawImage(image, 0, 0);
  //         console.log("load!");
  //     });
  //     image.src = url;
  // }
  
  // const HogeContainer = document.getElementById("hoge_container");
  // HogeContainer.appendChild(canvas);

  // const dataUrl = canvas.toDataURL();
  // const image = document.createElement('img');
  // image.setAttribute('src', dataUrl);
  // image.setAttribute('id', "hogeimgcanvas");
  // HogeContainer.appendChild(image);
});
