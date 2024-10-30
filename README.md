# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

The asymptotic runtime analysis for the number of comparisons would be $\Theta(n^2)$. One of the loops is used to find the max index over an unsorted portion of the array, the other loop is used to itterate over the entire array. This allows the max values to be placed at the end of each array. Since the max index loop is inside the loop that iterates over each element, this is a nested loop with makes it $\Theta(n^2)$. This is how I came to the conclusion that the number of comparisons had an asymptotic runtime analysis of $\Theta(n^2)$. For the number of flips, I came to the conclusion that the asymptotic runtime analysis would be $\Theta(n)$. During the iterations, each element will have at most 2 flips. One flip will take the max index and get it into the first element position, and then the second flip will flip the section of the array so that the max index is at the end. The two flips gives us 2n, in these cases we can drop the constants allowing us to have an asymptotic runtime of $\Theta(n)$. 

Refferenced geeks for geeks pancake sort https://www.geeksforgeeks.org/pancake-sorting/ as well as talked to fellow students daniel collins and will greiner. 

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.




