/*TMODJS:{"version":1,"md5":"d22c4691e781d763f5db7feca940c9c1"}*/
template('public/login-5','<div class="g-login-nr"> <img class="m-page_top" src="../images/login/page5_top.png"> </div> <div class="page5_nr"> <div class="swiper-container swiper-container-horizontal" onmouseout="startplay()" style="height: 290px;"> <div class="swiper-wrapper"> <div class="swiper-slide swiper-slide-active" style="width: 435.333333333333px; margin-right: 30px;"> <img src="../images/login/page5_nr_1.jpg"> </div> <div class="swiper-slide swiper-slide-next" style="width: 435.333333333333px; margin-right: 30px;"> <img src="../images/login/page5_nr_3.jpg"> </div> <div class="swiper-slide" style="width: 435.333333333333px; margin-right: 30px;"> <img src="../images/login/page5_nr_2.jpg"> </div> <div class="swiper-slide" style="width: 435.333333333333px; margin-right: 30px;"> <img src="../images/login/page5_nr_4.jpg"> </div> <div class="swiper-slide" style="width: 435.333333333333px; margin-right: 30px;"> <img src="../images/login/page5_nr_5.jpg"> </div> </div> </div>  <script> var swiper = new Swiper(\'.swiper-container\', { pagination: \'.swiper-pagination\', slidesPerView: 3, paginationClickable: true, spaceBetween: 30, autoplay: 2000 }); swiper.stopAutoplay(); function startplay() { swiper.startAutoplay(); } </script> </div>');