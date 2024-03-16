<script>
    console.log('Constant.svelte loaded');

    //import cheatsheet from './cheatsheet.js';
    import donutHype from '../lib/donut-hype-eyes-open.png';
    import { goto } from '$app/navigation';

    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css';


    import { onMount } from 'svelte';
    import { plotO1Line } from './constantGraph.js';

-    onMount(() => {
        plotO1Line('graph', 'Constant Time', 'A very boring, but good graph!');
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
      /* height: 100%; Ensure the container takes up the full height */
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
  
    ul {
        list-style-type: disc; /* Set the bullet style */
        text-align: left;
        padding-left: 0; /* Remove default padding */
    }
  
    ul ul {
          list-style-type: circle; /* Change the bullet style for the nested list */
          text-align: left;
          margin-top: 5px; /* Adjust the spacing between the parent and nested lists */
          margin-left: 40px;
      }
  
    li {
        margin-left: 20px; /* Adjust the space between bullet and text */
    }

    .donut-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
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

  #graph {
    transform: scale(1.2);
    display: flex;
    justify-content: center;
    margin-left: 15%;
  }
</style>

<main class="container">
    <h1>Constant Time</h1>
    <p>The easiest and best time complexity!</p>
    <p>When the algorithm is not dependent on the input size, it has constant time complexity <Katex>O(1)</Katex>. i.e., the runtime will always be the same regardless of the input size.</p>
    <br>
    <div id = "graph"></div>
    <p>Some common algorithms in constant time are: a stack's push, pop, peek, a queue's enque, deque, peek, a linked list's insertion or deletion, and a hash table's insertion, deletion, and retrievel (when there are no collisions).</p>
    <div class="donut-container">
        <img src={donutHype} alt="Donut Image" style="width: 100px; margin-top: 70px;">
        <div class="speech-bubble" style="top: 30px; width: 300px;">
            We love constant time!!!
        </div>
    </div>
    <h2>Examples</h2>
    <ul>
        <li>Assigning a variable is done in constant time.</li>
        <li>Conditional statements are done in constant time.</li>
        <li>Accessing an element inside of a list using an index is in constant time.</li>
    </ul>
    <h4>Let's look at some code examples of the above!</h4>
    <pre>
        <code class="language-python">
        x = 1 # The time complexity of this line is O(1)!

        lst = [1, 2, 3] # and so is this one.

        y = 'hello!' # also this one! 
        
        # some other examples:
        if a &gt; b: # this is O(1) because we are simply comparing a and b
            return True # simply returning true also takes O(1)
        else:
            return False

        one = [lst][0] # This is in constant time!
        
        # another example: 
        lst = [1, 2, 3, 4] # remember, initializing a varable only takes O(1)
        i = 0 # O(1)
        while i &lt; range(4): # here we are simply comparing a constant value to another, which also takes O(1)
            if i == 0: 
                break
        </code>
    </pre>
    <p>It's amazing when we can work in constant time. Try to use things that are in constant time where you can to reduce run times in the future!</p>
</main>