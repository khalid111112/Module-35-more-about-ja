function checkAge(){
   const ageField = document.getElementById('age');
   const ageText = ageField.value;
   const errorTag = document.getElementById('erroe');
   
   try{
    const age = parseInt(ageText)
    if(isNaN(age)){
        throw "please enter a number";
       }
       else if(age <18){
            throw "bacha kaccha not allowed";
       }

       else if(age > 30){
        throw "murobbi aikhan asisen"
       }
       errorTag.innerHTML = '';
   }
   
   catch(err){
    // console.log('error:', err)
    errorTag.innerHTML = 'erroe:' + err;
   }
   finally{
    // console.log('All done insise try catch')
   }
//    console.log(11111)
}