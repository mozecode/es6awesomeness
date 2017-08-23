let person ={
    name:"John Doe"
};
const {name} = person;
function cheerName({name}){
    let newName = name.toUpperCase().replace(/\s+/g,'');
    let splitNameArr= newName.split('');
    let Obj= splitNameArr.entries();
    for(let[index, elem] of Obj){//protect for any name
        if (elem === 'A' || elem ==='E' || elem==='I'|| elem==='O'|| elem==='H'||elem==='N'||elem==='F'||elem==='L'||elem==='M'||elem==='R'||elem==='S'||elem==='X'){
        console.log(`Give me an ${splitNameArr[index]}!`)
        }else{
            console.log(`Give me a ${splitNameArr[index]}!`)
        }
    }
}

cheerName(person);
console.log(`What does that spell? \n ${name.toUpperCase()}!`);
