//적군을 정의한다 클래스는 새로운 기술이나리ㅏ, 기존의 변수,함수를 묶어놓은 집합
//고전적인 프로그래밍 언어에서는 함수를 이용하여 로직을 재사용했지만, 클래스는 더나아가
//변수와 함수를 하나로 묶어서 현실의 객체를 표현한것뿐이다. 따라서 신기술이
//아니라 개발자의 현실을 바라보고 반영하는 관점이 바꿘것뿐이다
class Enemy{
    //자바스크립트는 자바와는 달리, 맴버변수를 생성자안에 선언해야한다..
    constructor(container,src,width,height,velX,velY,x,y){
        //객체 명사가 보유할 속성 상태=형용사
        this.container=container;
        this.src=src;
        this.img=document.createElement("img");
        this.img.src=this.src;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        this.x=x;
        this.y=y;

        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        container.appendChild(this.img);
        //물리량의 변화
       
    }
    tick(){
        this.x+=this.velX; //x축으로만 움직인다
        this.y+=this.velY; //x축으로만 움직인다

    }
    //변화된 물리량의 그래픽처리
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}