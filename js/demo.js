window.onload = function(){
    console.log("js ready");

    var conteiner = document.getElementById("conteiner");
    var top = document.getElementById("top");
    var player = document.getElementById("player");
    var guangpan_wai = document.getElementById("guangpan_wai");
    var zanting_kaishi = document.getElementById("zanting_kaishi");
    var jingyin = document.getElementById("jingyin");
    var song_benti = document.getElementById("song_benti");
    var player_left_bottom = document.getElementById("player_left_bottom");
    var word = document.getElementById("player_left_bottom_word");
    var word_son0 = document.getElementById("player_left_bottom_word").children[0];
    var word_son1 = document.getElementById("player_left_bottom_word").children[1];
    var word_son2 = document.getElementById("player_left_bottom_word").children[2];
    var word_son3 = document.getElementById("player_left_bottom_word").children[3];
    var word_son4 = document.getElementById("player_left_bottom_word").children[4];
    var word_son5 = document.getElementById("player_left_bottom_word").children[5]; 
    var word_son6 = document.getElementById("player_left_bottom_word").children[6];
    var word_son7 = document.getElementById("player_left_bottom_word").children[7];
    var word_son8 = document.getElementById("player_left_bottom_word").children[8];
    var word_son9 = document.getElementById("player_left_bottom_word").children[9];
    var word_son10 = document.getElementById("player_left_bottom_word").children[10];
    var word_son11 = document.getElementById("player_left_bottom_word").children[11]; 
    var word_son12 = document.getElementById("player_left_bottom_word").children[12];
    var word_son13 = document.getElementById("player_left_bottom_word").children[13];
    var word_son14 = document.getElementById("player_left_bottom_word").children[14];
    var word_son15 = document.getElementById("player_left_bottom_word").children[15];
    var word_son16 = document.getElementById("player_left_bottom_word").children[16];
    var jindutiao_son = document.getElementById("jindutiao_son");
    var jindutiao_son_color = document.getElementById("jindutiao_son_color");
    var jindutiao_qiu = document.getElementById("jindutiao_qiu")
    var time = document.getElementById("time");
    //以下为导航栏中点击白色箭头相关功能
    //功能1.白色箭头点击后应能收回导航栏
    //功能2.导航栏收回后鼠标放在网页顶部可将导航栏
    //放回
    //注意：导航栏移动时网页其他元素应能一并移动
    (function(){
        top.onclick = function(){
            console.log("top func on");
            conteiner.style.top = -62+"px";
    
            let div = document.createElement("div");
            div.id = "top_bottom";
            div.style.height = 5+"px";
            conteiner.insertBefore(div,player);
            div.onmouseleave = function(){
                div.onmouseover = function(){
                    conteiner.style.top = 0+"px";
                    div.style.height = 0+"px";
                    div.parentElement.removeChild(top_bottom);
                }
            }
            
        }
    }());
    //白色箭头收回完

    //暂停开始键的相关功能
    //1.鼠标移到开始键上，开始键颜色深浅要有变化
    //2.点击开始键后，开始键变为暂停键
    //3.点击开始键后，光盘开始转动
    //4.点击开始键后，进度条开始走动
    //5.点击开始键后，歌词开始变色
    //6.点击开始键后，歌曲时间开始走动
    //7.鼠标移到暂停键上，暂停键颜色深浅要有变化
    //8.点击暂停键后，暂停键变为开始键
    //9.点击暂停键后，光盘停止转动
    //10.点击暂停键后，进度条停止走动
    //11.点击暂停键后，歌词停止变色
    //12.点击暂停键后，歌曲时间停止走动
    (function(){
        console.log("zanting_kaishi func on");
        let t = true;
        let a;//a为控制光盘转动和停止的变量
        let b=0;//b为光盘转动的角度
        let c;//c为控制歌词变化的变量
        let d=0;//d为歌词变化的计时器
        zanting_kaishi.onmouseenter = function(){
            if(t==true){
                zanting_kaishi.style.backgroundPosition = "-163px 0px";//变为深色三角
            }else{
                zanting_kaishi.style.backgroundPosition = "-207px -47px"//变为深色双杠;
            }
        }
        zanting_kaishi.onmouseleave = function(){
            if(t==true){
                zanting_kaishi.style.backgroundPosition = "-106px 0px";//变为浅色三角
            }
            else{
                zanting_kaishi.style.backgroundPosition = "-205px 0px"//变为浅色双杠
            }
        }
        zanting_kaishi.onclick = function(){
            if(t==true){
                zanting_kaishi.style.backgroundPosition = "-207px -47px";//由深色三角变为深色双杠
                song_benti.play();
                jindutiao();
                xuanzhuan();
                geci_jishiqi();
                t=false;
            }else{
                zanting_kaishi.style.backgroundPosition = "-163px 0px";//由深色双杠变为深色三角
                song_benti.pause();
                jindutiao();
                xuanzhuan();
                geci_jishiqi();
                t=true;
            }
        }
        function xuanzhuan(){
            if(t==true){
                a = setInterval(function(){
                    b=b+0.09;
                    guangpan_wai.style.transform = "rotate("+b+"deg)";
                },1);
            }else{
                clearInterval(a);
            }
        }

        //进度条和歌词相关
        //1.点击开始播放后，进度条开始走动
        //2.点击开始播放后，歌词开始走动
        //3.当点击进度条或拖动进度条小球，歌曲播放进度随之变化
        //4.当点击进度条或拖动进度条小球，歌词进度随之变化
        //5.点击暂停播放，进度条和歌词都停止走动
        jindutiao_son.onclick = function(e){
            let offsetx = e.offsetX;
            song_benti.currentTime = (offsetx/jindutiao_son.clientWidth)*85;
            jindutiao_son_color.style.width = (song_benti.currentTime/85)*jindutiao_son.clientWidth;
            console.log(song_benti.currentTime);
            //85是歌曲时间总长
        }
        function jindutiao(){
            let e;
            let time_count=0;
            if(t==true){
                e = setInterval(function(){
                    let y=(song_benti.currentTime/85)*jindutiao_son.clientWidth;
                    //85是歌曲的时间总长
                    jindutiao_son_color.style.width = y+"px";
                },1);
            }else{
                clearInterval(e);
            }
        }
        function geci_jishiqi(){
            if(t==true){
                c = setInterval(function(){
                    d=song_benti.currentTime;
                    geci_bianhua(d);
                },100);
            }else{
                clearInterval(c);
            }
        }
        function geci_bianhua(d){
            if(d>=7.4&&d<=11.6){
                clear_word_css();
                //这个函数用来重置所有歌词的样式
                //使歌词的字体大小重新变回16px，字体颜色变为
                //黑色
                player_left_bottom.scrollTo(0,0);
                word_son0.style.color = "#ffce2c";
                word_son0.style.fontSize = "18px";
            }else if(d>=11.7&&d<=17.3){
                clear_word_css();
                player_left_bottom.scrollTo(0,15);
                word_son1.style.color = "#ffce2c";
                word_son1.style.fontSize = "18px";
            }else if(d>=17.4&&d<=21.3){
                clear_word_css();
                player_left_bottom.scrollTo(0,30);
                word_son2.style.color = "#ffce2c";
                word_son2.style.fontSize = "18px";
            }else if(d>=21.6&&d<=25.1){
                clear_word_css();
                player_left_bottom.scrollTo(0,45);
                word_son3.style.color = "#ffce2c";
                word_son3.style.fontSize = "18px";
            }
            else if(d>=25.2&&d<=29.2){
                clear_word_css();
                player_left_bottom.scrollTo(0,60);
                word_son4.style.color = "#ffce2c";
                word_son4.style.fontSize = "18px";
            }else if(d>=29.3&&d<=33.2){
                clear_word_css();
                player_left_bottom.scrollTo(0,83);
                word_son5.style.color = "#ffce2c";
                word_son5.style.fontSize = "18px";
            }else if(d>=33.3&&d<=37.1){
                clear_word_css();
                player_left_bottom.scrollTo(0,106);
                word_son6.style.color = "#ffce2c";
                word_son6.style.fontSize = "18px";
            }else if(d>=41.3&&d<=45.1){
                clear_word_css();
                player_left_bottom.scrollTo(0,129);
                word_son7.style.color = "#ffce2c";
                word_son7.style.fontSize = "18px";
            }else if(d>=45.3&&d<=48.6){
                clear_word_css();
                player_left_bottom.scrollTo(0,152);
                word_son8.style.color = "#ffce2c";
                word_son8.style.fontSize = "18px";
            }else if(d>=48.7&&d<=52.5){
                clear_word_css();
                player_left_bottom.scrollTo(0,175);
                word_son10.style.color = "#ffce2c";
                word_son10.style.fontSize = "18px";
            }else if(d>=52.6&&d<=56.3){
                clear_word_css();
                player_left_bottom.scrollTo(0,198);
                word_son11.style.color = "#ffce2c";
                word_son11.style.fontSize = "18px";
            }else if(d>=56.5&&d<=64){
                clear_word_css();
                player_left_bottom.scrollTo(0,221);
                word_son12.style.color = "#ffce2c";
                word_son12.style.fontSize = "18px";
            }else if(d>=64.2&&d<=68.1){
                clear_word_css();
                player_left_bottom.scrollTo(0,244);
                word_son13.style.color = "#ffce2c";
                word_son13.style.fontSize = "18px";
            }else if(d>=68.2&&d<=72.1){
                clear_word_css();
                player_left_bottom.scrollTo(0,267);
                word_son14.style.color = "#ffce2c";
                word_son14.style.fontSize = "18px";
            }else if(d>=72.3&&d<=78.6){
                clear_word_css();
                player_left_bottom.scrollTo(0,290);
                word_son15.style.color = "#ffce2c";
                word_son15.style.fontSize = "18px";
            }else if(d>=78.8&&d<=82.2){
                clear_word_css();
                player_left_bottom.scrollTo(0,311);
                word_son16.style.color = "#ffce2c";
                word_son16.style.fontSize = "18px";
            }
            function clear_word_css(){
                console.log("clear func on");
                word_son0.style.color = "black";
                word_son1.style.color = "black";
                word_son2.style.color = "black";
                word_son3.style.color = "black";
                word_son4.style.color = "black";
                word_son5.style.color = "black";
                word_son6.style.color = "black";
                word_son7.style.color = "black";
                word_son8.style.color = "black";
                word_son9.style.color = "black";
                word_son10.style.color = "black";
                word_son11.style.color = "black";
                word_son12.style.color = "black";
                word_son13.style.color = "black";
                word_son14.style.color = "black";
                word_son15.style.color = "black";
                word_son16.style.color = "black";
                word_son0.style.fontSize = "16px";
                word_son1.style.fontSize = "16px";
                word_son2.style.fontSize = "16px";
                word_son3.style.fontSize = "16px";
                word_son4.style.fontSize = "16px";
                word_son5.style.fontSize = "16px";
                word_son6.style.fontSize = "16px";
                word_son7.style.fontSize = "16px";
                word_son8.style.fontSize = "16px";
                word_son9.style.fontSize = "16px";
                word_son10.style.fontSize = "16px";
                word_son11.style.fontSize = "16px";
                word_son12.style.fontSize = "16px";
                word_son13.style.fontSize = "16px";
                word_son14.style.fontSize = "16px";
                word_son15.style.fontSize = "16px";
                word_son16.style.fontSize = "16px";
            }
        }

        //进度条和歌词结束
    }());
    //暂停开始键结束

    //静音键相关功能
    //1.鼠标移上静音键后，静音键颜色变深
    //2.鼠标点击静音键后，静音键变为深色的有音键
    //3.鼠标自有音键移下后，有音键颜色变浅
    //4.鼠标点击有音键后，有音键变为深色的静音键
    //5.音乐的有无会随着静音键状态变化而有无
    (function(){
        console.log("jingyin func on");
        let t = true;
        jingyin.onmouseenter = function(){
            if(t==true){
                jingyin.style.backgroundPosition = "-262px -127px";//变为深色静音键
            }else{
                jingyin.style.backgroundPosition = "-307px -110px";//变为深色有音键
            }
        }
        jingyin.onmouseleave = function(){
            if(t==true){
                jingyin.style.backgroundPosition = "-260px -110px";//变为浅色静音键
            }else{
                jingyin.style.backgroundPosition = "-307px -127px";//变为浅色有音键
            }
        }
        jingyin.onclick = function(){
            if(t==true){
                jingyin.style.backgroundPosition = "-307px -110px";//变为深色有音键
                song_benti.muted = true;
                t=false;
            }else{
                jingyin.style.backgroundPosition = "-262px -127px";//变为深色静音键
                song_benti.muted = false;
                t=true;
            }
        }
    }());
    //静音键结束
}