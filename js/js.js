   
   
   $(document).ready(function () {
        $('.ham').click(function () {
            $('#myNav').css('width', '100%');
        });

        $('.closebtn').click(function () {
            $('#myNav').css('width', '0');
        });


        $(window).resize(function () {
            if (window.innerWidth >= 1140) {
                $('#myNav').css('display', 'block').css('width', '818px');
            }
            else {
                $('#myNav').css('display', 'none');
                $('.ham').click(function () {
                    $('#myNav').css('display', 'block').css('width', '100%');
                });

                $('.closebtn').click(function () {
                    $('#myNav').css('width', '0');
                });
            }
        });
    });

    $(document).ready(function(){
        var count=0;
        $('.btn_more').click(function(){
            if($('.btn_more').attr('value')=='더보기'){
                count++;
                if(count==1){
                    $('.listimage1').css('display','flex');
                }else if(count==2){
                    $('.listimage2').css('display','flex');
                }else if(count==3){
                    $('.listimage3').css('display','flex');
                }else if(count==4){
                    $('.listimage4').css('display','flex');
                    $('.btn_more').text("접 기").attr('value','접기');
                    //document.getElementsByClassName('btn_more')[0].innerHTML="접 기";
                }  
            }else{
                $('.close').hide();       
                $('.btn_more').text("더보기").attr('value','더보기');
                count=0;
            }                                  
        });
    });

    
   
  