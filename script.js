let persons = [
    {
    fname:"John",
    lname:"Doe",
    age:23
},
{
fname:"Lucas",
lname:"Films",
age:32
},
{fname:"Tony",
lname:"Stark",
age:3000
}
]

let output="";
persons.forEach(function(item){
    output += `<p> Your name is ${item.fname} ${item.lname}</p>`
       console.log(output);
})
    document.getElementById('container').innerHTML = output
    

