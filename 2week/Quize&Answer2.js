function greet(Name){
    console.log("안녕 내 이름은",Name,"야");
    return Name;
    }
    const Name=greet("니나뉴");
    console.log("안녕 내 이름은",Name,"이야");


let unit = [50000, 10000, 5000, 1000, 500, 100]; 
function changeCalculate (money) { 
    for(let i=0; i<unit.length; i++){ 
        let num = Math.floor(money/unit[i]);
                                            
        console.log(unit[i]+"X"+num);
        money = money - (unit[i]*num); 
    }
}
changeCalculate(12300);