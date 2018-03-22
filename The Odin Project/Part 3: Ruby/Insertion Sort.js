function insertionSort(unsortedList) {  


    var len = unsortedList.length;


    for (var i = 1; i < len; i++) {

        var tmp = unsortedList[i]; 
        //Copy of the current element. 

        // Check through the sorted part and compare with the number in tmp. If large, shift the number
        for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {

            //Shift the number
            unsortedList[j + 1] = unsortedList[j];
        }


        //Insert the copied number at the correct position
        //in sorted part. 
        unsortedList[j + 1] = tmp;
        console.log(ul);
    }
}

var ul = [5, 3, 1, 2, 4];  
insertionSort(ul);  
console.log(ul);  


/* The first for loop starts on the second element of the array and stores its value in tmp. It then
evaluates, starting with the element directly behind it, whether or not to change it to the value before it 
(if greater). Then that iterator moves to the position element behind where the element is to be switched. */

length = array.length
    i = 1

    while i < array.length

        temp = array[i]

        j = i - 1

        while j >= 0 && array[j] > temp

            array[j + 1] = array[j]

            j - 1

        end

        array[j+1] = temp

        i + 1

    end