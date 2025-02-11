//Rectangle Constructor function example 
function Rectangle(width , height){
    this.width = width ; //number of width
    this.height = height; // number of height
    this.getArea = function(){
        console.log(`width is ${this.width} and height is ${this.height} \nArea of ​​the rectangle is ${this.width*this.height}`) //this function for get rectangle
    }
}


let frist = new Rectangle ( 1 , 2 ) 
frist.getArea() 
// result = width is 1 and height is 2 Area of ​​the rectangle is 2