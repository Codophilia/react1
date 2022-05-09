import  { useState } from "react";


var res1,res2,res3,res4,res5, score1,score2,score3,score4,score5;





export function One()
{


   const [name1, setName1]= useState("");
    const [name2, setName2]= useState("");
    const [name3, setName3]= useState("");
    const [name4, setName4]= useState("");
    const [name5, setName5]= useState("");
  

/******************************************** */
//1
/******************************************** */


function H()
{

   (name1==="a")?
   res1=true:
   res1=false; 

(res1===true)?
score1=4:
score1=0;
 
document.getElementById("demo").innerHTML="Your note till here is: "+(score1)+" out of 4";
}

/******************************************** */
//2
/******************************************* */

function H2()
{
 
 var kir=6;
 
   (name2==="d")?
   res2=true:
   res2=false; 
   
(res2===true)?
score2=4:
score2=0;
 
document.getElementById("demo2").innerHTML="Your note till here is: " + (score2+score1) + "out of 8";


}

/******************************************** */
//3
/******************************************* */
function H3()
{
   (name3==="d")?
   res3=true:
   res3=false; 

(res3===true)?
score3=4:
score3=0;
 
document.getElementById("demo3").innerHTML="Your note till here is: "+ (score1+score2+score3) + "out of 12";
}



/******************************************** */
//4
/******************************************* */
function H4()
{
   (name4==="c")?
   res4=true:
   res4=false; 

(res4===true)?
score4=4:
score4=0;
 
document.getElementById("demo4").innerHTML= "Your note till here is: " + (score1+score2+score3+score4) + "out of 16";
}



/*********************************************/
//5
/********************************************/
function H5()
{
   (name5==="a")?
   res5=true:
   res5=false; 

(res5===true)?
score5=4:
score5=0;
 
document.getElementById("demo5").innerHTML="Your note till here is: " +(score1+score2+score3+score4+score5)+ "out of 20";
}

/******************************************** */
                     //Ende
/******************************************* */


return(
<>

{/******** 1  ********  *****/}
{/******** 1  ********  *****/}


<h4>1)Which language is older?</h4>
<h4>--------------------------</h4>
<h4>a)Fortran</h4>
<h4>b)Java</h4>
<h4>c)C</h4>
<h4>d)Lisp</h4>

<input type="text" 
   size={1}
   value={name1}
   onChange={(e)=>setName1(e.target.value)}
   onFocus={true}
   />   
<button onClick={H}>PUSH</button>

<h5 id="demo"><i>Hier</i></h5>

{/********  2 ********  *****/}
{/********  2 ********  *****/}
<h4>2)Which one is the first OOP lnguage?</h4>
<h4>--------------------------</h4>
<h4>a)C++</h4>
<h4>b)C</h4>
<h4>c)Java</h4>
<h4>d)SmallTalk</h4>

<input type="text" 
   size={1}
   value={name2}
onChange={(e)=>setName2(e.target.value)}
   />   
<button onClick={H2}>PUSH</button>

<h5 id="demo2"><i>Hier</i></h5>

{/********   3********  *****/}
{/********   3********  *****/}
<h4>3)Which languge is closer to the hardware?</h4>
<h4>--------------------------</h4>
<h4>a)C</h4>
<h4>b)Ocaml</h4>
<h4>c)Elm</h4>
<h4>d)Assembly</h4>

<input type="text" 
   size={1}
   value={name3}
   onChange={(e)=>setName3(e.target.value)}
   />   
<button onClick={H3}>PUSH</button>

<h5 id="demo3"><i>Hier</i></h5>

{/********   4********  *****/}
{/********   4********  *****/}
<h4>4)Which language do Mocrosoft fans prefere?</h4>
<h4>--------------------------</h4>
<h4>a)Jaca</h4>
<h4>b)C++</h4>
<h4>c)C#</h4>
<h4>d)Kotlin</h4>

<input type="text" 
   size={1}
   value={name4}
   onChange={(e)=>setName4(e.target.value)}
   />   
<button onClick={H4}>PUSH</button>

<h5 id="demo4"><i>Hier</i></h5>

{/********   5 ********  *****/}
{/********   5 ********  *****/}
<h4>5)Which groupe is the best choice  for Android developpement?</h4>
<h4>--------------------------</h4>
<h4>a)Java/Kotlin</h4>
<h4>b)C/Java</h4>
<h4>c)C/C++</h4>
<h4>d)Lisp/Python</h4>
               
<input type="text" 
   size={1}
   value={name5}
   onChange={(e)=>setName5(e.target.value)}
   />   
<button onClick={H5}>PUSH</button>

<h5 id="demo5"><i>Hier</i></h5>

{/********   Ende ********  *****/}
{/********   Ende ********  *****/}
</>
);

/*******************************************/
/*******************************************/
//const [name2, setName2]= useState("d");
}

