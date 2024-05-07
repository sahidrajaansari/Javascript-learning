const myArray=[1,1,1,1,2,2,2,2,3,3,5]
let p=0,q=0;
let item1=null,item2=null;
myArray.forEach((item,i,myArray)=>{
    if(item===item1){
        p++;
        q--;
    }
    else if(item===item2){
        q++;
        p--;
    }
    else if(p===0){
        item1=item;
        p++;
    }
    else if(q===0){
        item2=item;
        q++;
    }
    else{
        p--;
        q--;
    }
})

console.log(`Print ${item1} and ${item2}`);