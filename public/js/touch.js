var startX,//触摸时的坐标
	startY,
	x, //滑动的距离
 	y,
	aboveY=0; // 设一个全局变量记录上一次内部块滑动的位置
	var documentHeight=$(".inner").height();//内部滑动模块的高度
	var wapperHeight=$(".outer").height(); //外部框架的高度
	var inner=$(".inner");  
function touchStart(e){//触摸开始
	e.preventDefault();
	var touch=e.touches[0];
	startY = touch.pageY;   //刚触摸时的坐标                       
}

function touchMove(e){//滑动
    e.preventDefault();
    var  touch = e.touches[0];               
    y = touch.pageY - startY;//滑动的距离                                          
    inner.style.top=aboveY+y+"px";    
    document.getElementById("spText").innerHTML=inner.style.top;   
    }  
 
function touchEnd(e){//手指离开屏幕                         
    aboveY=parseInt(inner.style.top);//touch结束后记录内部滑块滑动的位置 在全局变量中体现 一定要用parseInt()将其转化为整数字;
    if(y>0&&aboveY>0){//当滑动到最顶端时候不能再网上滑动
                      //inner.style.top=0;
        $("#inner").animate({top:0},200);
        aboveY=0;
    } 
    if(y<0&&(aboveY<(-(documentHeight-wapperHeight)))){//当滑动到最底部时候不能再网下滑动
                    // inner.style.top=-(documentHeight-wapperHeight)+"px";                       $("#inner").animate({top:-(documentHeight-wapperHeight)},200);
        aboveY=-(documentHeight-wapperHeight);
    } 
}//
$(".outer").bind('touchstart', touchStart,false);                
$(".outer").bind('touchmove', touchMove,false);  
$(".outer").bind('touchend', touchEnd,false);  