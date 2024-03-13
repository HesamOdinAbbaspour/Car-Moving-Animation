
var x = 0 
var cleartime

const start = () =>{
    clearTimeout(cleartime)
    function myfunc(){
        if(x<1020){

            x += 7
            var margin = document.getElementById("car").style.marginRight = `${x}px`
        }
      
    }
    cleartime = setInterval(myfunc, 10)
}
const back = () =>{
    clearTimeout(cleartime)
    function myfunc(){
        x -= 7
        if(x >= 0 ){
            document.getElementById("car").style.marginRight = `${x}px`
        }
    }
    cleartime = setInterval(myfunc, 10)
}
const stop = () => {
    clearTimeout(cleartime)
}

