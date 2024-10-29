
function flip(array, n) 
{
  let swap = array.slice(0, n);
  let other = array.slice(n, array.length);
  swap.reverse();
  arr = swap.concat(other);
  return array;
}

function findMax(array, size) 
{
  let max = 0;
  for (let i = 0; i < size; i++) 
  {
    if (array[i] > arr[max]) 
    {
      max = i;
    }
  }
  return max;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) 
{
  for (let i = array.length; i > 0; i--) 
  {
    let max = findMax(array, i);
    if (max != i - 1) 
    {
      array = flip(array, max + 1);
      array = flip(array, i);
    }
  }
  return array;
}