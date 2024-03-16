<!-- src/routes/About.svelte -->
<script>
    console.log('Linear.svelte loaded');
 
 
    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

    import { onMount } from 'svelte';
    import { plotONLine } from './linearGraph.js';
 
    onMount(() => {
        plotONLine('graph4', 'Linear Time', 'Very common!');
    });
 </script>
 
 
 <style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0 100px;
    height: 100%; /* Ensure the container takes up the full height */
  }
 
 
    /* Adjust the pre element styles if needed */
    pre {
        margin: 0;
        padding: 20px;
        background-color: #f4f4f4;
        border-radius: 5px;
        overflow-x: auto;
        display: flex;
        justify-content: center;
    }
 
 
    pre code {
        text-align: left; /* Ensure code is left-aligned */
    }
 
 
    :global(.katex) {
        font-size: inherit; /* Make KaTeX font size same as the regular text */
    }
 
 
    :global(.katex-display) {
        font-size: inherit; /* Adjust font size for KaTeX display mode */
    }
 
 
    .donut-container {
        position: relative;
    }
 
 
    .speech-bubble {
        position: absolute;
        max-width: 300px;
        background-color: #CCCCCC;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        white-space: normal;
        transform: translateY(-50%);
    }
 
 
    .speech-bubble::before {
        content: '';
        position: absolute;
        top: 150%;
        left: 46%;
        margin-top: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent transparent #CCCCCC;
        transform: rotate(90deg);
    }
 
    #graph4 {
    transform: scale(1.2);
    display: flex;
    justify-content: center;
    margin-left: 15%;
  }
 </style>
 
 
 <main class="container">
    <h1 style="text-align: center;">Linear Time</h1>
 
 
    <p>An algorithm is said to have a linear time complexity when the running time increases linearly with the length of the input.</p>
    <p>When the function involves checking all the values in the input data we say it has a time complexity of <Katex>O(n)</Katex>.</p>
    <p>In other words, the run time will linearly increase based on the length of the input.</p>
    <br>
    <div id = "graph4"></div>
 
 
    <h4 style="text-align: center;">Examples of Python Functions in Linear Time</h4>
 
 
    <p>The time complexity of any command or method that involves checking the length of a list, tuple, string, or any Python object is <Katex>O(n)</Katex>.</p>
    <p>This is because under the hood Python is going through every element in the list.</p>
    <p>For example, when counting the elements in a list if there are five elements Python visits each one to say it exists. Therefore, the larger the size of the list, the longer it will take to count the elements in it.</p>
    <pre>
        <code class="language-python">
 
len(lst) # The time complexity of this line is O(n)!

len(my_string) # also O(n).

max(lst) # both max() and min() take O(n) because python has to go 
        #through every element in the list/array to find the smallest or largest element.
 
        </code>
    </pre>
 
 
    <p>Conditionals and methods that involve counting or summing elements will also take linear time <Katex>O(n)</Katex>.</p>
 
 
    <pre>
        <code class="language-python">
sum(lst) # summing elements takes O(n) because python has to go through every element


count(a) # counting occurrences of a certain element in, say, a list also takes O(n)


3 in lst # Conditionals take O(n) time.
            #This is because python must go over the entire list to find the element
        </code>
    </pre>
 
 
    <h4>Here is a simple example of code that runs in linear time!</h4>
    <pre>
        <code class="language-python">
def example(input_list):

    n = len(input_list) # this is O(n)

    for i in range(n): # this runs n times!

        print(input_list[i]) # print and accessing an element with an index is O(1)

    # We have O(n) + O(1) * n, which gives us O(n)
    </pre>
    <p>This function takes in a list as an input and iterates over each element of the list to print the value inside of the list.</p>
    <p>The first line of the function stores the length of the input list in a variable <Katex>n</Katex> has a time complexity of <Katex>O(n)</Katex> because it requires iterating over the entire list to count the number of elements.</p>
    <p>The for loop iterates <Katex>n</Katex> times (where <Katex>n</Katex> is the length of the list) and goes from 0 to <Katex>n - 1</Katex>. So, the complexity of that line is <Katex>O(n-1) = O(n)</Katex>.</p>
    <p>Inside the loop, the <code>print()</code> accesses and prints each element of the input list using the index i. Each one of these operations are done in constant time.</p>
    <p>Since the constant elements happen <Katex>n</Katex> times because it is inside a loop we can do: <Katex>O(1) * n</Katex> to get <Katex>O(n)</Katex></p>
    <p>Finally, the overall time complexity of the function is <Katex>O(n) + O(1) * n = O(n + n) = O(2n) = 2 * O(n),</Katex> which is <Katex>O(n)</Katex>. Remember we do not care about constants!</p>
    <br>
 
<!--  
    <p style="text-align: center;">Great work! Click on the donut to go back to the home page!</p>
    <img src={donutHypeClosed} alt="Donut Image" style="width: 150px;display: block; margin-left: auto; margin-right: auto;" on:click={handleDonutClick}> -->
 </main>
 