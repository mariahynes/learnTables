
class Numbers {
    
    num_array=[0,1,2,3,4,5,6,7,8,9,10,11,12];
    
    print_numbers() {
         console.log(this.num_array);
    }

    multiplication_array() {

        let operands_array=[];

        for(let i=1; i<this.num_array.length; i++){
            for(let j=0; j<this.num_array.length; j++){
                
                operands_array.push([this.num_array[j],this.num_array[i]]);
            }
        }
    
       return operands_array;
        
    }
    addition_array() {

        let operands_array=[];

        for(let i=1; i<this.num_array.length; i++){
            for(let j=0; j<this.num_array.length; j++){
                
                operands_array.push([this.num_array[i],this.num_array[j]]);
            }
        }
    
       return operands_array;
        
    }

    subtraction_array(){

        let operands_array=[];

        for(let i=1; i<this.num_array.length; i++){
            for(let j=0; j<this.num_array.length; j++){
                
                operands_array.push([(this.num_array[i] + this.num_array[j]) ,this.num_array[i]]);
            }
        }

        return operands_array;
    }

    division_array(){

        let operands_array=[];

        for(let i=1; i<this.num_array.length; i++){
            for(let j=1; j<this.num_array.length; j++){
                
                operands_array.push([(this.num_array[i] * this.num_array[j]) ,this.num_array[i]]);
            }
        }
        
        return operands_array;
    }
}

let the_operands = new Numbers();
 the_operands.print_numbers();
// console.log(the_operands.num_array);
let addition_list = the_operands.addition_array();
// console.log(addition_list[5])
// for(let i=0; i< addition_list.length; i++){
//     console.log(addition_list[i])
// }

let multiplication_list = the_operands.multiplication_array();
// console.log(multiplication_list[5])
// for(let i=0; i< multiplication_list.length; i++){
//     console.log(multiplication_list[i])
// }

let subtraction_list = the_operands.subtraction_array();
// console.log(multiplication_list[5])
// for(let i=0; i< subtraction_list.length; i++){
//     console.log(subtraction_list[i])
// }

let division_list = the_operands.division_array();
// console.log(multiplication_list[5])
for(let i=0; i< division_list.length; i++){
    console.log(division_list[i])
}