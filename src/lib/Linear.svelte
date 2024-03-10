<!-- src/routes/About.svelte -->
<script>
    console.log('Linear.svelte loaded');
 
 
    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely
 
 
    import donutHypeClosed from '../lib/donut-hype-eyes-closed.png';
    import { goto } from '$app/navigation';
 
 
      import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely
 
 
    function handleDonutClick() {
    console.log("Back to homepage!")
    goto('homepage');
  }
 
 
    import Sidebar from './Sidebar.svelte';
    let sidebar_show = false;
 </script>
 
 
 <Sidebar bind:show={sidebar_show} />
 
 
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
 
 
 </style>
 
 
 <main class="container">
    <h1 style="text-align: center;">Linear Time</h1>
 
 
    <p>An algorithm is said to have a linear time complexity when the running time increases linearly with the length of the input.</p>
    <p>When the function involves checking all the values in input data, with this order <Katex>O(n)</Katex>.</p>
    <p>In other words, the run time will linearly increase based on the length of the input.</p>
 
 
    <h2 style="text-align: center;">Examples</h2>
 
 
    <p>The time complexity of any command or method that involves checking the length of a list, tuple, string, or any python object is <Katex>O(n)</Katex>.</p>
    <p>This is because under the hood, python is going through every element in the list (for example) and counting how many elements there are. Therefore, the larger the size of the list, the longer it will take to count the elements in it.</p>
    <pre>
        <code class="language-python">
 
 
        len(lst) # The time complexity of this line is O(n)!
 
 
        len(my_string) # also O(n).
 
 
        max(lst) # both max() and min() take O(n) because python has to go through every element in the list/array to find the smallest or largest one.
 
 
        </code>
    </pre>
 
 
    <p>Conditionals and methods that involve counting or summing elements will also take linear time <Katex>O(n)</Katex>.</p>
 
 
    <pre>
        <code class="language-python">
            sum(lst) # summing elements takes O(n) because python has to go through every element
 
 
            count(a) # counting occurrences of a certain element in, say, a list also takes O(n)
 
 
            3 in lst # Conditionals take O(n) time. This is because python must go over the entire list to find the element.
        </code>
    </pre>
 
 
    <p>Here is a simple example of code that runs in linear time!</p>
    <pre>
        <code class="language-python">
            def example(input_list):
                n = len(input_list)
                for i in range(n):
                    print(input_list[i])
    </pre>
    <p>This funcion function takes in a list as an input and iterates over each element of the list to perform some operation.</p>
 
 
    <p>the first line of the function which stores the length of the input list in a variable 'n' takes <Katex>O(n)</Katex> because it requires iterating over the entire list to count the number of elements.</p>
    <p>the for loop iterates 'n' times (where 'n' is the length of the list) and goes from 0 tp n-1. So, the complexity of that line is <Katex>O(n-1) = O(n)</Katex>.</p>
    <p>Inside the loop, the print() line accesses and prints each element of the input list using the index i. Since it accesses each element of the list once, this operation also takes linear time <Katex>O(n)</Katex> because it scales linearly with the size of the list.
    <p>Finally, the overall time complexity of the function is <Katex>O(n) + O(n-1) + O(n) = O(n + (n-1) + n) = O(3n-1) = O(3n) = 3 * O(n),</Katex> which is <Katex>O(n)</Katex>.</p>
 
 
    <p style="text-align: center;">Great work! Click on the donut to go back to the home page!</p>
    <img src={donutHypeClosed} alt="Donut Image" style="width: 150px;display: block; margin-left: auto; margin-right: auto;" on:click={handleDonutClick}>
 </main>
 