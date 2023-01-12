

// Q 1.You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.




var characterReplacement = function(s, k) {
    let maxLength =0
    // let count =0
    let obj = {}
  
   
   let i=0
   let j=0
   while(j<s.length){
   obj[s[j]] = obj[s[j]]?obj[s[j]]+1:1    // A---- 1
                                      //  B-----
   if(obj[s[j]]>maxLength){
       maxLength = obj[s[j]]
   }
   if(j-i+1 - maxLength >k){
       obj[s[i]]--
       i++
   }
   j++
  
   }
    return j-i
  
};