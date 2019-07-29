window.onload=function(){
    mv.app.mouseOn();
    mv.app.onFocus();
    mv.app.navTab();
    mv.app.bannerScroll();
    mv.app.scrollLine();
    mv.app.footer();
    mv.app.aside();
    mv.app.bottomBar();
    mv.app.onscroll();
    mv.app.topbarnav();
}

var mv={};

mv.tools={};

mv.tools.getByClass=function(oParent,sClass){
    var aEle=oParent.getElementsByTagName('*');
    var aResult=[];

    for(var i=0;i<aEle.length;i++)
    {
        if(aEle[i].className==sClass)
        {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
};
mv.tools.getStyle=function(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
      return getComputedStyle(obj,false)[attr];
    }
}

mv.ui={};

mv.ui.fadeIn=function(obj){
    var value=0;
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var iSpeed=5;
        if(value==100){
            clearInterval(obj.timer);
        }else{
            value+=iSpeed;
            if(mv.tools.getStyle(obj,"opacity")==1){
                return false;
            }else{
                obj.style.opacity=value/100;
                obj.style.filter='alpha(opacity='+value+')';
            }

        }
    },30)
};
mv.ui.fadeOut=function(obj){
    var value=100;
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var iSpeed=5;
        if(value==0){
            clearInterval(obj.timer);
        }else{
            value-=iSpeed;
            if(mv.tools.getStyle(obj,"opacity")==0){
                return false;
            }else{
                obj.style.opacity=value/100;
                obj.style.filter='alpha(opacity='+value+')';
            }
        }
    },30)
};
mv.ui.moveLeft=function(obj,old,now){

    clearInterval(obj.timer);
    obj.timer=setInterval(function(){

        var iSpeed=(now-old)/10;
        iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed)

        if(now==old){
            clearInterval(obj.timer);
        }else{
            old+=iSpeed;
            obj.style.left=old+"px";
        }
    },30)
}


mv.app={};

mv.app.mouseOn=function(){
    var header=document.getElementById("header");
    var login=mv.tools.getByClass(header,"login")[0];
    var log=mv.tools.getByClass(header,"log")[0];

    login.onmouseover=log.parentNode.onmouseover=function(){
        mv.ui.fadeIn(log);
        log.parentNode.style.display="block";
    };
    login.onmouseout=log.parentNode.onmouseout=function(){
        log.parentNode.style.display="none";
        mv.ui.fadeOut(log);
    };


    var outwrap=document.getElementById("outwrap");
    var nav1=document.getElementById("nav1");
    var kecheng=mv.tools.getByClass(nav1,"kecheng")[0];
    var download=mv.tools.getByClass(nav1,"download")[0];
    var course=mv.tools.getByClass(outwrap,"course")[0];
    var xiazai=mv.tools.getByClass(outwrap,"xiazai")[0];

    kecheng.onmouseover=course.parentNode.onmouseover=function(){
        mv.ui.fadeIn(course);
        course.parentNode.style.display="block";
        kecheng.style.background="#31a030";
        kecheng.style.color="#fff";
    };
    kecheng.onmouseout= course.parentNode.onmouseout=function(){
        course.parentNode.style.display="none";
        mv.ui.fadeOut(course);
        kecheng.style.background="";
        kecheng.style.color="";
    };


    download.onmouseover=xiazai.parentNode.onmouseover=function(){
        mv.ui.fadeIn(xiazai);
        xiazai.parentNode.style.display="block";
        download.style.background="#31a030";
        download.style.color="#fff";
    };
    download.onmouseout=xiazai.parentNode.onmouseout=function(){
        xiazai.parentNode.style.display="none";
        mv.ui.fadeOut(xiazai);
        download.style.background="";
        download.style.color="";
    };

    var footer=document.getElementById("footer");
    var qq=mv.tools.getByClass(footer,"qq")[0];
    var wei=mv.tools.getByClass(footer,"wei")[0];
    var yixin=mv.tools.getByClass(footer,"yixin")[0];
    var study=mv.tools.getByClass(footer,"study")[0];

    qq.onmouseover=function(){
        yixin.style.display="block";
    };
    qq.onmouseout=function() {
        yixin.style.display = "none";
    };
    wei.onmouseover=function(){
        study.style.display="block";
    };
    wei.onmouseout=function(){
        study.style.display="none";
    }
};

mv.app.onFocus=function(){
    var outwrap=document.getElementById("outwrap");
    var nav1=document.getElementById("nav1");
    var int=mv.tools.getByClass(nav1,"int")[0];
    var onfocus=mv.tools.getByClass(outwrap,"focus")[0];

    int.style.color="#aaa";
    int.onfocus=function(){
        int.value="";
        mv.ui.fadeIn(onfocus);
        int.style.width=246+"px";
        onfocus.parentNode.style.display="block";
    };
    int.onblur=function(){
        int.style.width=142+"px";
        mv.ui.fadeOut(onfocus);
        onfocus.parentNode.style.display="none";
        if(int.value==""){
            int.value="搜索课程";
        }
    }
};

mv.app.navTab=function(){
    var nav2=document.getElementById("nav2");
    var oLi=nav2.getElementsByTagName("li");
    var outwrap=document.getElementById("outwrap");
    var nav2O=mv.tools.getByClass(outwrap,"nav2_o");

    for(var i=0;i<oLi.length;i++){
        oLi[i].index=i;
        nav2O[i].index=i;
        oLi[i].onmouseover=function(){
                nav2O[this.index].style.display="block";
        };
        oLi[i].onmouseout=function(){
                nav2O[this.index].style.display="none";
        };
        nav2O[i].onmouseover=function(){
            this.style.display="block";
            oLi[this.index].style.background="#fff";
            oLi[this.index].children[0].children[0].style.color="#333";
            oLi[this.index].children[0].children[1].style.color="#333";
            if(oLi[this.index].children[0].children[2]){;oLi[this.index].children[0].children[2].style.color="#333"};
            if(oLi[this.index].children[0].children[3]){oLi[this.index].children[0].children[3].style.color="#333"};
        };
        nav2O[i].onmouseout=function(){
            this.style.display="none";
            oLi[this.index].style.background="";
            oLi[this.index].children[0].children[0].style.color="";
            oLi[this.index].children[0].children[1].style.color="";
            if(oLi[this.index].children[0].children[2]){oLi[this.index].children[0].children[2].style.color=""};
            if(oLi[this.index].children[0].children[3]){oLi[this.index].children[0].children[3].style.color=""};
        }
    }

};

mv.app.bannerScroll=function(){
    var banner=document.getElementById("banner");
    var banimgs=banner.getElementsByTagName("img");
    var outwrap=document.getElementById("outwrap");
    var page=mv.tools.getByClass(outwrap,"page")[0];
    var oI=page.getElementsByTagName("i");

    var iNow=1;
    oI[0].style.height="16px";
    for(var j=0;j<oI.length;j++){
        oI[j].index=j;
        oI[j].onclick=function(){
            for (var i = 0; i < banimgs.length; i++) {
                mv.ui.fadeOut(banimgs[i]);
                oI[i].style.height = "8px";
            }
            mv.ui.fadeIn(banimgs[this.index]);
            this.style.height="16px";
            iNow=this.index;
        }
    }
    setInterval(auto,3000);
    function auto() {
        for (var i = 0; i < banimgs.length; i++) {
            mv.ui.fadeOut(banimgs[i]);
            oI[i].style.height = "8px";
        }
            mv.ui.fadeIn(banimgs[iNow]);
            oI[iNow].style.height="16px";
            if(iNow==banimgs.length-1){
                iNow=0;
            }else{
                iNow++;
            }
    };
    function toPre(){
        for(var i=0;i<banimgs.length;i++){
            mv.ui.fadeOut(banimgs[i]);
            oI[i].style.height = "8px";
        }
        mv.ui.fadeIn(banimgs[iNow]);
        oI[iNow].style.height="16px";
        if(iNow==0){
            iNow=banimgs.length-1;
        }else{
            iNow--;
        }
    }
    var but=mv.tools.getByClass(outwrap,"but")[0];
    var left=mv.tools.getByClass(but,"left")[0];
    var right=mv.tools.getByClass(but,"right")[0];

    banner.onmouseover=but.onmouseover=function(){
        but.style.display="block";
    };
    banner.onmouseout=but.onmouseout=function(){
        but.style.display="none";
    };

    right.onclick=function(){
        auto();
    };
    left.onclick=function(){
        toPre();
    }
};

mv.app.scrollLine=function() {
    var major = document.getElementById("major");
    var oUl = major.getElementsByTagName("ul")[0];
    var oLi = oUl.getElementsByTagName("li");
    var left = mv.tools.getByClass(major, "left")[0];
    var right = mv.tools.getByClass(major, "right")[0];
    var button = mv.tools.getByClass(major, "button")[0];

    oUl.onmouseover = button.onmouseover = function () {
        button.style.display = "block";
    };
    oUl.onmouseout = button.onmouseout = function () {
        button.style.display = "none";
    };

    var iNow = 0;
    left.style.pointerEvents = "none";
    right.onclick = function () {
        left.style.pointerEvents = "auto";
        if(iNow==oLi.length-4) {
            right.style.pointerEvents = "none";
        }
        mv.ui.moveLeft(oUl, -iNow * oLi[0].offsetWidth, -(iNow + 1) * oLi[0].offsetWidth);
        iNow++;
    }
    left.onclick = function () {
        right.style.pointerEvents = "auto";
        if(iNow==0) {
            left.style.pointerEvents = "none";
            return false;
        }
        mv.ui.moveLeft(oUl, -iNow * oLi[0].offsetWidth, -(iNow - 1) * oLi[0].offsetWidth);
        iNow--;
    }
}

mv.app.footer=function(){
    var footer=document.getElementById("footer");
    var inwrap=mv.tools.getByClass(footer,"inwrap")[0];
    var ina=inwrap.getElementsByTagName("a");

    var i=0;

    var tip=setInterval(run,2000);
    function run(){
            if(i%2==1) {
                inwrap.style.top =-24 + "px";
            }else{
                inwrap.style.top =0;
            }
            i++;
    }

    for(var i=0;i<ina.length;i++){
        ina[i].onmouseover=function(){
            clearInterval(tip);
        };
        ina[i].onmouseout=function(){
            tip=setInterval(run,2000);
        }
    }
}

mv.app.aside=function(){
    var aside=document.getElementById("aside");
    var p1=mv.tools.getByClass(aside,"p1")[0];
    var p2=mv.tools.getByClass(aside,"p2")[0];
    var p3=mv.tools.getByClass(aside,"p3")[0];
    var d1=mv.tools.getByClass(aside,"d1")[0];
    var d2=mv.tools.getByClass(aside,"d2")[0];
    var d3=mv.tools.getByClass(aside,"d3")[0];
    var st=mv.tools.getByClass(aside,"st")[0];

    d1.onmouseover=function(){
        p1.style.display="block";
    };
    d1.onmouseout=function(){
        p1.style.display="none";
    };

    d2.onmouseover=function(){
        p2.style.display="block";
        st.style.display="block";
    };
    d2.onmouseout=function(){
        p2.style.display="none";
        st.style.display="none";
    };

    d3.onmouseover=function(){
        p3.style.display="block";
    };
    d3.onmouseout=function(){
        p3.style.display="none";
    };
}

mv.app.bottomBar=function(){
    var bottombar=document.getElementById("bottombar");
    var shut=mv.tools.getByClass(bottombar,"bb_shut")[0];
    var banner=document.getElementById("banner");

    shut.onclick=function(){
        bottombar.style.display="none";
    }
}

mv.app.onscroll=function(){

    var bottombar=document.getElementById("bottombar");
    var aside=document.getElementById("aside");
    var topbar=document.getElementById("topbar");

    var i=0;
    window.onscroll=function(){
        var top=document.documentElement.scrollTop || document.body.scrollTop;
        if(top>=621){
            topbar.style.display="block";
            if(i==0) {
                bottombar.style.display = "block";
                i++;
            }
        }else{
            topbar.style.display="none";
        };
        if(top<=10){
            aside.style.display="none";
        }else{
            aside.style.display="block";
        }
    }
}

mv.app.topbarnav=function(){
    var topbar=document.getElementById("topbar");
    var course=mv.tools.getByClass(topbar,"course")[0];
    var outwrap=mv.tools.getByClass(topbar,"outwrap")[0];
    var topbarnav=document.getElementById("topbarnav");
    var oLi=topbarnav.getElementsByTagName("li");
    var topb=document.getElementById("topb");
    var int=mv.tools.getByClass(topb,"int")[0];
    var fo=mv.tools.getByClass(topb,"focus")[0];
    var nav2O=mv.tools.getByClass(topb,"nav2_o");
    var download=mv.tools.getByClass(topb,"download")[0];
    var xiazai=mv.tools.getByClass(topb,"xiazai")[0];
    var log=mv.tools.getByClass(topb,"log")[0];
    var login=mv.tools.getByClass(topb,"login")[0];

    topbarnav.onmouseover=function(){
        topbarnav.style.display = "block";
        course.style.background="#484C57";
    };
    topbarnav.onmouseout=function(){
        topbarnav.style.display = "none";
        course.style.background="#2D313D";
    }
    for(var i=0;i<oLi.length;i++){
        oLi[i].index=i;
        nav2O[i].index=i;
        oLi[i].onmouseover=function(){
            nav2O[this.index].style.display="block";
            course.style.background="#484C57";
        };
        oLi[i].onmouseout=function(){
            nav2O[this.index].style.display="none";
            course.style.background="#2D313D";
        };
        nav2O[i].onmouseover=function(){
            this.style.display="block";
            topbarnav.style.display = "block";
            course.style.background="#484C57";
            oLi[this.index].style.background="#fff";
            oLi[this.index].children[0].children[0].style.color="#333";
            oLi[this.index].children[0].children[1].style.color="#333";
            if(oLi[this.index].children[0].children[2]){;oLi[this.index].children[0].children[2].style.color="#333"};
            if(oLi[this.index].children[0].children[3]){oLi[this.index].children[0].children[3].style.color="#333"};
        };
        nav2O[i].onmouseout=function(){
            this.style.display="none";
            topbarnav.style.display = "none";
            course.style.background="#2D313D";
            oLi[this.index].style.background="";
            oLi[this.index].children[0].children[0].style.color="";
            oLi[this.index].children[0].children[1].style.color="";
            if(oLi[this.index].children[0].children[2]){oLi[this.index].children[0].children[2].style.color=""};
            if(oLi[this.index].children[0].children[3]){oLi[this.index].children[0].children[3].style.color=""};
        }
    }

    course.onmouseover=function() {
        course.style.background="#484C57";
        topbarnav.style.display = "block";
        for (var j = 0; j < nav2O.length; j++) {
            nav2O[j].style.display = "none";
        }
        oLi[0].style.background = "#fff";
        oLi[0].children[0].children[0].style.color = "#333";
        oLi[0].children[0].children[1].style.color = "#333";
        oLi[0].children[0].children[2].style.color = "#333";
        nav2O[0].style.display = "block";
        blur();
    };
        course.onmouseout=function(){
            course.style.background="#2D323D";
            topbarnav.style.display="none";
            for(var j=0;j<nav2O.length;j++){
                nav2O[j].style.display="none";
            }
            oLi[0].style.background="";
            oLi[0].children[0].children[0].style.color="";
            oLi[0].children[0].children[1].style.color="";
            oLi[0].children[0].children[2].style.color="";
            nav2O[0].style.display="none";
        };

    download.onmouseover=function(){
        xiazai.style.display="block";
        blur();
    };
    download.onmouseout=function(){
        xiazai.style.display="none";
    }

    login.onmouseover=function(){
        log.style.display="block";
        blur();
    };
    login.onmouseout=function(){
        log.style.display="none";
    }

    int.style.color="#aaa";
    int.onfocus=function(){
        int.value="";
        fo.style.display="block";
        int.style.width=246+"px";
    }
    var blur=int.onblur=function(){
        int.style.width=142+"px";
        fo.style.display="none";
        if(int.value==""){
            int.value="搜索课程";
        }
    }
}


































