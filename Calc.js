var calc = ""
function insert (num){
    calc = calc+num;
    if (num == "+"|| num =="-"||num=="*"||num=="/" ){
        document.form.textview.value="";
    }else{
    document.form.textview.value= document.form.textview.value+num;}
    console.log(calc)

}

function equal(){
    var exp= document.form.textview.value;
    if(exp){
        document.form.textview.value= eval(calc);
        console.log(calc)
    }
}
function clean(){
    document.form.textview.value= "";
    calc="";
}
function back(){
    var exp= document.form.textview.value;
    document.form.textview.value= exp.substring(0,exp.length-1);
}