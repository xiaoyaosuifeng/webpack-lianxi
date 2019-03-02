import fn from './commom';
const [a,b,c]=[1,2,3];
let d=1;
console.log(a,111111111);
const timer=setInterval(()=>{
    d++;
    console.log(d,2222222);
},2000)
console.log(d,3333333);
class person {
    constructor (x,y){
        this.x=x;
        this.y=y;
    }
    getBirth(){
        const birth=new Date().getFullYear()-this.y
        console.log(birth);
    }
}
let lilei=new person(20,30);
console.log(lilei.x,lilei.y);
lilei.getBirth()
class child extends person{
    constructor(x,y,z){
        super(x,y);
        this.z=z;
    }
}
let p=new child(100,200,300)
console.log(p.x,p.y,p.z);

fn.add(10,50)