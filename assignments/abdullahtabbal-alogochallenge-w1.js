/*## I will inclide many soliutions here, first one is the one that came immediaetle to my head and the second one after doing some research###

#First Solution (bad time complexity )*/


const firstSolutionArray = (nums, target)=> {
    for (let i =0; i<nums.length;i++){            
for (let j=i+1;j<nums.length;j++){				     
             if(nums[i]+nums[j]==target)
             return[i,j];}
    }
                
    
};


/*

1 start from index 1 and make it 0
2 make index 2  index 1 added by one
3 sum index  1 and 2 
4.check if sum is equal to required Number
5. if it is equal go to 13
6. if its not equal add 1 to index 2 
7. check if index 2 is less than size of array 
8. if it is go to 3 
9. if it is add 1 to index 1 
10. check if index 1 is less than size of array 
11. if it is go to 2
12, if its not go to 13
13. return both indices 
14. end

##This solution  based on 	leetcode testcases 
57 / 57 test cases passed.
Runtime: 264 ms
Memory Usage: 42.7 MB

##############################################################################
##############################################################################
##############################################################################
##############################################################################

*/


//## Second solution (better time complexity best memory space)
const  secondSolutionSet = (nums, target) =>{

        //calculate target - current element 
    //add it to hash map 12
    //if theres a collision u have the answere
      
        let set ={}
        
        for (let i = 0;i<nums.length;i++){  
            
            const diff = target-nums[i];
            if(set[nums[i]]==null)
            set[diff]=i;
            else {
                return [set[nums[i]],i]      }
            
        }
       

/*
1, take index one of array and set it to 0 
2. calculate the difference of the needed element with the number of the current index
3. check if its not the set
4. if its not in the set add in in the set with key of the difference and value of index
4.1 add 1 to index
4.2 go to 2 
5. if its in the set reutrn the set value of key current index and the current index 
5.1 end

 57 / 57 test cases passed.
Runtime: 84 ms
Memory Usage: 42.6 MB


##############################################################################
##############################################################################
##############################################################################
##############################################################################

## Third Solution  (best time complexity  )*/

const thirdSolutionMap = function(nums, target) {

        const map =new Map();
        
        for (let i = 0;i<nums.length;i++){  
            
            const diff = target-nums[i];//diff=7
            if(map.has(diff))
                return [map.get(diff),i] 
             //hash[7]=0
            else {
            map.set(nums[i],i);   
            }
            
        }
                   
};

// 1, take index one of array and set it to 0 
// 2. calculate the difference of the needed element with the number of the current index save as diff
// 3. check if it is in the map
// 4. if it is the map get the map value by index diff 
// 4.1 get the current index
// 4.2 return result 4.1 and 4.2 
// 4.3 go to 6 
// 5. if its not in the set add key element of current index and value  index to map
// 5.1 add 1 to index
// 5.2 check if current index is less than array length
// 5.3 if it is  add 1 to current index
// 5.3.1 go to 2
// 5.4 if its not go to 6 
// 6. end


//  57 / 57 test cases passed.
// Runtime: 59 ms
// Memory Usage: 43.6 MB