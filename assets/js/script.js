
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

    /**
        * Each array consists of list of left and right operand, the table number, the operator, the display operator
        * For each of the numbers in the table (1 - 12)
    */
    
    multiplication_array() {
        
        /**
            * Returns a full array of all operands or a specific table, if provided
        */

        let operands_array=[];
        let operator = "*"; 
        let display_operator = "*"; 
        let ans;
        let left_op;
        let right_op;

        if (this.table_number > 0){
            
            for(let j=0; j<this.num_array.length; j++){
                left_op = this.num_array[j];
                right_op = this.table_number;
                ans = left_op * right_op;
                operands_array.push({
                    left_op:left_op,
                    right_op:right_op,
                    table:this.table_number, 
                    calc_op: operator, 
                    display_op: display_operator, 
                    answer: ans
                });
            }

        }else{
            
            for(let i=1; i<this.num_array.length; i++){
                for(let j=0; j<this.num_array.length; j++){
                    left_op = this.num_array[j];
                    right_op = this.num_array[i];
                    ans = left_op * right_op;
                    operands_array.push({
                        left_op:left_op,
                        right_op:right_op,
                        table:this.num_array[i],
                        calc_op:operator, 
                        display_op:display_operator, 
                        answer:ans
                    });
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
        let operator = "+"; 
        let display_operator = "+"
        let ans;
        let left_op;
        let right_op;

        if (this.table_number > 0){
            for(let j=0; j<this.num_array.length; j++){
                left_op = this.table_number;
                right_op = this.num_array[j];
                ans = left_op + right_op;
                operands_array.push({
                    left_op: left_op,
                    right_op: right_op,
                    table: this.table_number, 
                    calc_op: operator, 
                    display_op: display_operator, 
                    answer: ans
                });
            }
        }
        else{

            for(let i=1; i<this.num_array.length; i++){
                for(let j=0; j<this.num_array.length; j++){
                    left_op = this.num_array[i];
                    right_op = this.num_array[j];
                    ans = left_op + right_op;
                    operands_array.push({
                        left_op: left_op,
                        right_op: right_op,
                        table: this.num_array[i],
                        calc_op: operator, 
                        display_op: display_operator, 
                        answer: ans
                    });
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
        let operator = "-"; 
        let display_operator = "-";
        let ans;
        let left_op;
        let right_op;

        if (this.table_number > 0){
            for(let j=0; j<this.num_array.length; j++){
                left_op = this.table_number + this.num_array[j];
                right_op = this.table_number;
                ans = left_op - right_op;
                operands_array.push({
                    left_op:left_op,
                    right_op: right_op,
                    table: this.table_number, 
                    calc_op: operator, 
                    display_op: display_operator, 
                    answer: ans
                });
            }
        }else{
            for(let i=1; i<this.num_array.length; i++){
                for(let j=0; j<this.num_array.length; j++){
                    left_op = this.num_array[i] + this.num_array[j];
                    right_op=  this.num_array[i];
                    ans = left_op - right_op;
                    operands_array.push({
                        left_op:left_op,
                        right_op:right_op, 
                        table: this.num_array[i],
                        calc_op: operator, 
                        display_op: display_operator, 
                        answer: ans
                    });
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
        let operator = "/"; 
        let display_operator = "&divide";
        let ans;
        let left_op;
        let right_op;

        if (this.table_number > 0){
            for(let j=1; j<this.num_array.length; j++){
                left_op = this.table_number * this.num_array[j];
                right_op = this.table_number;
                ans = left_op/right_op;
                operands_array.push({
                    left_op: left_op,
                    right_op:right_op,
                    table:this.table_number,
                    calc_op:operator, 
                    display_op: display_operator, 
                    answer: ans
                });
            }

        }else{
            for(let i=1; i<this.num_array.length; i++){
                for(let j=1; j<this.num_array.length; j++){
                    left_op = this.num_array[i] * this.num_array[j];
                    right_op = this.num_array[i];
                    ans = left_op/right_op;
                    operands_array.push({
                        left_op:left_op, 
                        right_op:right_op, 
                        table: this.num_array[i], 
                        calc_op: operator, 
                        display_op: display_operator, 
                        answer: ans
                    });
                }
            }
        }

        return operands_array;
    }

    /**
        * Print functions used for testing only
    */
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
    
    /**
     * Prints the sums and answer in full using a given operands Array
     * @param {*} the_operands_array 
     * @returns 
     */
    print_sums(the_operands_array){

        /** Prints the sums and answers in full for the given array
          * Use for testing output only
        */

        let operands_list = the_operands_array;
        let sum_list = "";
       
        for(let i=0; i<operands_list.length; i++){

            let left_op = operands_list[i].left_op;
            let right_op = operands_list[i].right_op;
            let the_display_operand = operands_list[i].display_op;
            let ans = operands_list[i].answer;
            let the_sum = left_op + " " + the_display_operand + " " + right_op + " = " + ans;

            console.log(the_sum);
            sum_list = sum_list + the_sum +"<br>";   
        }
        return sum_list;
    }
}


/**
 * Prints all sums and answers for a given table number (all operators)
 * @param {*} the_table_number 
 */
function print_all_sums(the_table_number){

    let the_operands = new Operands(the_table_number);

    the_operands.print_sums(the_operands.multiplication_array());
    the_operands.print_sums(the_operands.division_array());
    the_operands.print_sums(the_operands.subtraction_array());
    the_operands.print_sums(the_operands.addition_array());

}

/**
 * Formats the sums for display only for given table and operand
 * @param {*} the_table_number 
 * @param {*} the_operand 
 * @returns 
 */
function format_sums(the_table_number, the_operand){

    let the_operands = new Operands(parseInt(the_table_number));
    
    switch(the_operand){
        case "+":
            sums = the_operands.print_sums(the_operands.addition_array());
            break;
        case "-":
            sums = the_operands.print_sums(the_operands.subtraction_array());
            break;
        case "*":
            sums = the_operands.print_sums(the_operands.multiplication_array());
            break;
        case "/":
            sums = the_operands.print_sums(the_operands.division_array());
            break;
        default:
            sums = the_operands.print_all_sums(the_table_number);
    }

    return sums;
}

function get_sum_array(the_table_number, the_operand){

    let the_operands = new Operands(parseInt(the_table_number));

    switch(the_operand){
        case "+":
            sums = the_operands.addition_array();
            break;
        case "-":
            sums = the_operands.subtraction_array();
            break;
        case "*":
            sums = the_operands.multiplication_array();
            break;
        case "/":
            sums = the_operands.division_array();
            break;
        default:
            sums = "";
    }

    return sums;

}

function get_left_op(the_sum_array, item_count){

    // return the_sum_array[item_count][0];
    return the_sum_array[item_count].left_op;

}

function get_right_op(the_sum_array, item_count){

    return the_sum_array[item_count].right_op;

}

function get_display_op(the_sum_array, item_count){

    return the_sum_array[item_count].display_op;

}

function get_calc_op(the_sum_array, item_count){

    return the_sum_array[item_count].calc_op;

}

function get_ans(the_sum_array, item_count){

    return the_sum_array[item_count].answer;

}