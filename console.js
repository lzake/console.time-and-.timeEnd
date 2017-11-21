(function binarySearch(arr, num){
console.time("search")
          //set parameters of array, start, center, and end
      let start  = 0
      let stop   = arr.length - 1
      let center  = Math.floor((stop + start)/2);
          //iterate through arr
      for(i = 0; i< (arr[center] != num && start < stop);i++){
          //adjust search area
        (num < arr[center])? stop = center - 1:null; 
        (num > arr[center])? start = center + 1:null;
          //recalculate center
        center = Math.floor((stop + start)/2);}
          //make sure it's the right num
console.timeEnd('search')
      return (arr[center] != num) ? -1 : center;
  })([2,4,3,2,3,8,9,0,7,4,5,6,7,9],2)
  
/* Logs:

search: 0ms
=> -1

/*
