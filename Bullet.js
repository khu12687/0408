//게임의 사물중 총알을 정의한다!!
class Bullet{
    constructor(container){
        this.container=container; //어느 부모에 붙일지 그 부모결정!!
        this.img=document.createElement("img");
        this.src="../images/plane/dot.png";
        this.img.src=this.src;
        this.width=20;
        this.height=20;
        this.x=100;
        this.y=100;
        this.velX=10; //총알이 날라가는 속도
        this.velY=0;

        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.Y+"px";
        //부모에 총알 부착!!
        container.appendChild(this.img);
    }

    //동작관련!!(동작은 메소드로 정의한다!!)
    tick(){ //물리량변화
        this.x+=this.velX;
        this.y+=this.velY;
    }
    //변화된 물리량을 이용하여 화면에표시
    render(){ 
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}