//게임의 사물중 총알을 정의한다!!
class Bullet{
    //총알생성
    //개발자는 이 총알의 생성자를 호출할떄 총알이 붙을 container,
    //총알의 x,y축 위치까지 넘겨야한다!!
    constructor(container,x,y){
        this.container=container; //어느 부모에 붙일지 그 부모결정!!
        this.img=document.createElement("img");
        this.src="../images/plane/dot.png";
        this.img.src=this.src;
        this.width=20;
        this.height=20;
        this.x=x;
        this.y=y;
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

        //총알의 x좌표값이 화면을 나갔는지 파악하여, 나갔다면
        //화면에서 뿐만아니라 배열에서도 삭제!!

        if(this.x>=screen.width){
            // 화면에서 제거
            this.container.removeChild(this.img);
            //배열에서 지우지 않으면 계속시도하게 된다
            var index = bulletArray.indexOf(this);
            bulletArray.splice(index,1);
        }
    }
    //변화된 물리량을 이용하여 화면에표시
    render(){ 
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}