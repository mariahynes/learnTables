
class Operands {
    /**
        * Constructor can take an integer number value only, if no value or a string value is provided
        * table_number will be set to 0
        * If table_number is 0, then each array output will consist of an array of ALL operands (from 1 to 12)
        * If table_number is a number, then the array output will consist of operands for that table number only
    */
    constructor(table_number){

        if (typeof table_number === "undefined" || typeof table_number === "string"){
            this.table_number = 0;
        }else{
            this.table_number = table_number;
        }
        this.num_array = [0,1,2,3,4,5,6,7,8,9,10,11,12];

    }
    
    print_numbers() {
         console.log(this.num_array);
         console.log(this.table_number);
    }

    print_multiplication_numbers(){
        console.log(this.multiplication_array());
    }

    print_addition_numbers(){
        console.log(this.addition_array());
    }

    print_subtraction_numbers(){
        console.log(this.subtraction_array());
    }

    print_division_numbers(){
        console.log(this.division_array());
    }

    multiplication_array() {
        
        /**
            * Returns a full array of all operands or a specific table, if provided
        */

        let operands_array=[];
       
        if (this.table_number > 0){
            
            for(let j=0; j<this.num_array.length; j++){
                    
                operands_array.push([this.num_array[j],this.table_number,this.table_number]);
            }

        }else{
            
            for(let i=1; i<this.num_array.length; i++){
                for(let j=0; j<this.num_array.length; j++){
                    
                    operands_array.push([this.num_array[j],this.num_array[i],this.num_array[i]]);
                }
            }
        
        }

        
       return operands_array;
        
    }
    
    addition_array() {

        /**
            * Returns a full array of all operands or a specific table, if provided
        */

        let operands_array=[];

        if (this.table_number > 0){
            for(let j=0; j<this.num_array.length; j++){
                    
                operands_array.push([this.table_number,this.num_array[j],this.table_number]);
            }
        }
        else{

            for(let i=1; i<this.num_array.length; i++){
                for(let j=0; j<this.num_array.length; j++){
                    
                    operands_array.push([this.num_array[i],this.num_array[j],this.num_array[i]]);
                }
            }
        }

       return operands_array;
        
    }

    subtraction_array(){
        /**
            * Returns a full array of all operands or a specific table, if provided
        */

        let operands_array=[];

        if (this.table_number > 0){
            for(let j=0; j<this.num_array.length; j++){
                    
                operands_array.push([(this.table_number + this.num_array[j]) ,this.table_number,this.table_number]);
            }
        }else{
            for(let i=1; i<this.num_array.length; i++){
                for(let j=0; j<this.num_array.length; j++){
                    
                    operands_array.push([(this.num_array[i] + this.num_array[j]) ,this.num_array[i],this.num_array[i]]);
                }
            }
        }

        return operands_array;
    }

    division_array(){
        /**
            * Returns a full array of all operands or a specific table, if provided
        */
        let operands_array=[];

        if (this.table_number > 0){
            for(let j=1; j<this.num_array.length; j++){
                    
                operands_array.push([(this.table_number * this.num_array[j]) ,this.table_number,this.table_number]);
            }

        }else{
            for(let i=1; i<this.num_array.length; i++){
                for(let j=1; j<this.num_array.length; j++){
                    
                    operands_array.push([(this.num_array[i] * this.num_array[j]) ,this.num_array[i],this.num_array[i]]);
                }
            }
        }

        return operands_array;
    }
}

let the_operands = new Operands(3);
 the_operands.print_numbers();
 the_operands.print_multiplication_numbers();
 the_operands.print_addition_numbers();
 the_operands.print_subtraction_numbers();
 the_operands.print_division_numbers();

let addition_list = the_operands.addition_array();

let multiplication_list = the_operands.multiplication_array();

let subtraction_list = the_operands.subtraction_array();

let division_list = the_operands.division_array();
