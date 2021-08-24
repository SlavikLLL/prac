
function func(){
    for(let i = 0;i<=arguments.length;i++){
        return[].slice.call(arguments,1).join(arguments[0]);
    }
}
console.log(func('*', '2', 's', '2d'));