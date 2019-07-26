//let obj = {
  //  fname:"John",
    //lname:"Doe",
    //age:12,
    //status:'married',
    //method: a function inside of an object
    //fullname:function(){
      //  return `Hi! ${this.fname} ${this.lname}`
   // },
   
    //isMarried:function(){
    //if (this.status == 'married'){
    //return 'Yes'
    //}   
    //else
    //{    
    //return 'No'
  //  }
//},
//Minor:function(){
    //if(this.age < 18){
      //  return 'Yes'
    //}
    //else{
    //    return 'No'
  //  }
//}
//}
//console.log(obj.fullname());
//console.log(obj.isMarried());


//function - outside sa object
//function display()
//{
  //  var x = 23 + 15
    //return 23
//}
//function num2()
//{
  //  return 12
//}
//console.log(num1()+num2())

//ES6 CLASS

class myclass{

    constructor (name,age,gender)

    {

        this.name = name,

        this.age = age,

        this.gender = gender

    }

    isMinor(){

        if(this.age <18)

        {

            return "YES"

        }

        else

        {

            return "NO"

        }

    }

}

const myobj = new myclass('John',23,'Male');
let myobj2 = new myclass('Mark',12,'Male');