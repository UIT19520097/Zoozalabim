var counter=2;
setInterval(function() {
    document.getElementById('radio' +counter).checked = true;
    counter++;
    if(counter>3)
    {
        counter =1
    } 
},5000);

const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);

const swiperWrapperVideo=$('.video .swiper-wrapper');
const videoDisplay=$('.video .video__category-place-display')
const videos={
  currentIndex:0,
  videoList: [
    {
      name:'ON',
      link:'https://www.youtube.com/embed/kFNJTAaAYnU'
    },
    {
      name:'DNA',
      link:'https://www.youtube.com/embed/XPTx4BjdyV4'
    },
    {
      name:'FIRE',
      link:'https://www.youtube.com/embed/cbSy36fu6Pk'
    },
    {
      name:'IDOL',
      link:'https://www.youtube.com/embed/1WvM5S7bdFU'
    },
    {
      name:'BOY WITH LUV',
      link:'https://www.youtube.com/embed/D2xmlzMOsmM'
    },
    {
      name:'FAKE LOVE',
      link:'https://www.youtube.com/embed/6LB4JWRnyrM'
    },
    {
      name:'DYNAMITE',
      link:'https://www.youtube.com/embed/F43Rj9c1TQs'
    },
    {
      name:'MIC DROP',
      link:'https://www.youtube.com/embed/22RRaO5AuOo'
    },
  ],
  render: function() {
    const htmls=this.videoList.map((video,index) => 
      {
        return `
        <div class="swiper-slide">
            <div class="video__category-option-item ${index===this.currentIndex ? 'active':''}" data-index=${index}>
                ${video.name}
             </div>
        </div>
        `
      })
      swiperWrapperVideo.innerHTML=htmls.join('')
  },
  defineProperties: function(){
    Object.defineProperty(this,'currentVideo',{
      get:function()
      {
        return this.videoList[this.currentIndex]
      }
    })
  },
  handleEvent:function()
  {
    const _this = this;
    swiperWrapperVideo.onclick = function(e)
    {
      var videoNodeActive=$('.video__category-option-item.active');
      const videoNode=e.target.closest('.swiper-slide .video__category-option-item')
      console.log(videoNode)
      if(videoNode)
      {
        videoNodeActive.classList.remove('active');
        _this.currentIndex=Number(videoNode.dataset.index);
        _this.loadCurrentVideo();
        videoNode.classList.add('active');
        // _this.render();
      }
    }
  },
  loadCurrentVideo: function()
  {
    videoDisplay.src=this.currentVideo.link;
  },
  start:function()
  {
    // Lắng nghe và xử lý sự kiện
    this.handleEvent();
    // Định nghĩa thuộc tính cho Object
    this.defineProperties();
    // Tải thông tin video đầu tiên vào UI
    this.loadCurrentVideo();
    // Load ra danh sách video
    this.render();
  }
}
videos.start()
