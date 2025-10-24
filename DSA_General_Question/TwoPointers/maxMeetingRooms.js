// Problem Description
// Given a list of meeting time intervals, you have to find the minimum number of rooms required to organize all the meetings.

// Input format
// First line contains an integer N, indicating the number of meetings.

// Next N lines contain two space separated integers S and E, indicating the Starting and Ending time of a meeting, respectively.

// Output format
// Print the minimum number of rooms required.

// Constraints
// N <= 100000

// 0 <= S,E <= 1000000000 (10^9)

// Si < Ei

// Sample Input 1
// 3

// 0 20

// 5 10

// 10 15

// Sample Output 1
// 2

// Explanation 1
// One room can host the 1st meeting (0-20) and the other room can host both the 2nd meeting (5-10) and 3rd meeting (10-15), one after the other.

// So, only 2 rooms are required if total for the 3 meetings.

// Sample Input:
const meetings = [
  [0, 20],
  [5, 10],
  [10, 15]
];


function maxMeetingRooms(meetings){
    let starts=[];
    let ends=[];
    for(let [s,e] of meetings){
        starts.push(s);
        ends.push(e)
    }

    starts.sort((a,b)=>a-b);
    ends.sort((a,b)=>a-b)


    let i=0,j=0;
    let maxRooms=0;
    let rooms=0;
    while(i<meetings.length){
        if(starts[i]<ends[j]){
            rooms++;
            i++;
        }
        else{
             rooms--;
            j++;
        }
        maxRooms=Math.max(maxRooms,rooms)
    }
    return maxRooms;
}
console.log(maxMeetingRooms(meetings)); // Output: 2