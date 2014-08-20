$(document).ready(function(){
  videojs.options.flash.swf = "vjs/video-js.swf";

function mobileDetect()
{
      isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };
 
}   

mobileDetect();

});
var isMobile;
var myPlayer=null;
 function initPlayer()
{
    var url="";
    var server="";
    var streamer="";
        if(myPlayer)
        {
        videojs("videoplayer").dispose();
        }
	      $('#myContent1').append('<video id="videoplayer" class="video-js vjs-default-skin"></video>');  
       /*  if(!isMobile.any())
        {
          server="rtmp://s2g7jp30vh5k44.cloudfront.net/";  
          streamer=server+"cfx/st/&mp4:"
          url=streamer+videopath;
          $('#videoplayer').append('<source src ='+url+' type="rtmp/mp4" />');
        }
        else
        {
          server="http://d2p503nwjzhwgw.cloudfront.net/";  
          streamer=server+""
          url=streamer+videopath;
          $('#videoplayer').append('<source src ='+url+' type="video/mp4" />')
        } */ 
		      server="";  
          streamer=server+""
          url=streamer+videopath;
          $('#videoplayer').append('<source src ='+url+' type="video/mp4" />');
        videojs("videoplayer", {"controls": true, "autoplay": true, "preload": "auto","width":724,"height":406,"loop":true}, function(){
            myPlayer=this;
        });
      
}

function stopPlayer()
{
    if(myPlayer)
    { 
      myPlayer.pause();
    }
}