/*Donation Page*/

let popup=document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

/*Booking Page
const form=document.getElementById("form")
const fname=document.getElementById("fname")
const mobilenumber= document.getElementById("mobilenumber")
const email=document.getElementById("email")
const chkemail=document.getElementById("chkemail")
const errorElement = document.getElementById('error');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validatePhoneNumber(input_str) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(input_str);
}


const validateInputs= () =>{
const fnameValue=fname.value.trim();
const mobilenumberValue=mobilenumber.value.trim();
const emailValue=email.value.trim();
const chkemailValue=chkemail.value.trim();


if(fnameValue ===''){
  setError(fname,'Fullname is required');}
else{
    setSuccess(fname);
    }

if(emailValue  ===''){
  setError(email,'Email is required');}
    else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
  } else {
      setSuccess(email);
  }
if(mobilenumber  ===''){
    setError(mobilenumber,'Enter valid number');}
      else if (!validatePhoneNumber(mobilenumberValue)) {
        setError(mobilenumber, 'enter valid number');
    } else {
        setSuccess(mobilenumber);
    }

if(chkemailValue  ===''){
    setError(chkemail,'Email is required');}
      else if (!isValidEmail(chkemailValue)) {
        setError(chkemail, 'Provide a valid email address');
    } else {
        setSuccess(chkemail);
    }

}*/

const plus=document.querySelector("#LA-plus"),
minus=document.querySelector("#LA-minus"),
num=document.querySelector("#LA-num");

let a=0;
plus.addEventListener("click",()=>{
    a++;
    a=(a<10)?"0"+a:a;
    num.innerText=a;
    console.log(a);
});

minus.addEventListener("click",()=>{
    if(a>=1){
    a--;
    a=(a<10)?"0"+a:a;
    num.innerText=a;
    console.log(a);}
});

const plus1=document.querySelector("#LC-plus"),
minus1=document.querySelector("#LC-minus"),
num1=document.querySelector("#LC-num");

let b=0;
plus1.addEventListener("click",()=>{
    b++;
    b=(b<10)?"0"+b:b;
    num1.innerText=b;
    console.log(b);
});

minus1.addEventListener("click",()=>{
    if(b>=1){
    b--;
    b=(b<10)?"0"+b:b;
    num1.innerText=b;
    console.log(b);}
});

const plus2=document.querySelector("#FA-plus"),
minus2=document.querySelector("#FA-minus"),
num2=document.querySelector("#FA-num");

let c=0;
plus2.addEventListener("click",()=>{
    c++;
    c=(c<10)?"0"+c:c;
    num2.innerText=c;
    console.log(c);
});

minus.addEventListener("click",()=>{
    if(c>=1){
    c--;
    c=(c<10)?"0"+c:c;
    num2.innerText=c;
    console.log(c);}
});

const plus3=document.querySelector("#FC-plus"),
minus3=document.querySelector("#FC-minus"),
num3=document.querySelector("#FC-num");

let d=0;
plus3.addEventListener("click",()=>{
    d++;
    d=(d<10)?"0"+d:d;
    num3.innerText=d;
    console.log(d);
});

minus3.addEventListener("click",()=>{
    if(d>=1){
    d--;
    d=(d<10)?"0"+d:d;
    num3.innerText=d;
    console.log(d);}
});

const plus4=document.querySelector("#I-plus"),
minus4=document.querySelector("#I-minus"),
num4=document.querySelector("#I-num");

let e=0;
plus4.addEventListener("click",()=>{
    e++;
    e=(e<10)?"0"+e:e;
    num4.innerText=e;
    console.log(e);
});

minus4.addEventListener("click",()=>{
    if(e>=1){
    e--;
    e=(e<10)?"0"+e:e;
    num4.innerText=e;
    console.log(e);}
});


function getInput(guest){
    const guestInput=document.getElementById(guest+num);
    const guestNo=parseInt(guestInput.value);
    return guestNo;
}

const optValue=document.getElementById("time");
let currentTotal=0;
let durcost=0;
let currentOrder=0;

function calculateTotal(){
    let slAdult=getInputvalue('#LA-num')*1200;
    let slChild=getInputvalue('#LC-num')*700;
    let fAdult=getInputvalue('#FA-num')*5500;
    let fChild=getInputvalue('#LA-num')*2700;
    currentTotal=slAdult+slChild+fAdult+fChild;
    currentOrder=currentTotal+durcost;
    document.getElementById('current').innerText=`Rs. ${currentOrder}`;
}

optValue.addEventListener("change",duration)

function duration(){
    let x=optValue.value;
    if(x=="3"){
        durcost=0;
    }
    else if(x=="12"){
        durcost=(getInputvalue("#LA-num")*350)+(getInputvalue("#LC-num")*350)+(getInputvalue("#FA-num")*450)+(getInputvalue("#FC-num")*450);
    }
    else if(x=="24"){
        durcost=(getInputvalue("#LA-num")*600)+(getInputvalue("#LC-num")*600)+(getInputvalue("#FA-num")*800)+(getInputvalue("#FC-num")*800);
    }
    else;
    currentOrder=durcost+currentTotal;
    document.getElementById('current').innerText=`Rs. ${currentOrder}`;
}

const Add=document.getElementById("add");
Add.addEventListener("click",currentOrder)
function totalcost(){
    document.getElementById('currenttotal').innerText=`Rs. ${currentTotal}`
    document.getElementById('current').innerText=`Rs. ${0}`

}