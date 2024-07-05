//Now we will learn about Scope in JS with absolute beginner friendly docs from google
//We can see basically three type of Scope...

//Global Scope..
const x = "earphone vibe..."
function justExample(){
    const x = "hello world";
    console.log(x);
}

justExample();
                    //This mean we can say if any variable is created outsite of the function when that will be a global scope{accessable in globally}
console.log(x);

//But only "let", "const" is decleared as block not var like:
{
    var word = "Hello world";
}
console.log(word);

//when you'll use "let",& "const" when you can access within thats block
{
    const newOne = "the name of ...";
    let anotherOne = "school name is ..";
    
    console.log(newOne);
    console.log(anotherOne);


}
//you can't access them outside of this block. like
// console.log(newOne);
// console.log(anotherOne);



let p = 5;
const bb = ()=>{
    console.log(p);
}
bb();

console.log("this is ", p);