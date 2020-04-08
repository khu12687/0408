    /*게임에 등장할 우주선을 정의한다
    우주선은 명사
    모든 명사는 동사,횽용사로 표현
    동사 -함수
    형용사 - 속성*/

class Plane{
    //생성자는 객체지향언어에서 사물이 태어날때, 어떤 모습으로
    //테어날지 결정하는 초기화 메서드를 의미
    //즉 생성시 객체의 초기화를 담당한다고하여
    constructor(container){
        this.container=container;
        this.img=document.createElement("img");
        this.img.src="../images/plane/plane.png"; //경로
        this.width=80;; //너비
        this.height=70; //높이
        this.x=100; //x포지션
        this.y=200; //y포지션
        this.velX=0; //x축 이동속도
        this.velY=0; // y축 이동속도

        //우주선 초기화
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        container.appendChild(this.img);
    }
    //우주선의 동작을 정의!!

    //게임분야에서 물리량의 변화등을 의미!!
    tick(){
        this.x=this.x+this.velX;
        this.y=this.y+this.velY;
    }
    //변화된 물리량을 화면에 표현!!
    //우리의 경우 주로 객체.style.속성=값
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}