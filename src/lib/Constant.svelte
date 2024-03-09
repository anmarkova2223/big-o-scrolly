<script>
    console.log('Constant.svelte loaded');

    //import cheatsheet from './cheatsheet.js';
    import donutHype from '../lib/donut-hype-eyes-open.png';
    import { goto } from '$app/navigation';

    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

    // function handleDonutClick() {
    // console.log("Back to homepage!")
    // goto('homepage');
  //}
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

</style>

<main class="container">
    <h1>Constant Time</h1>
    <p>The easiest and best time complexity!</p>
    <p>When the algorithm is not dependent on the input size, it has constant time complexity <Katex>O(1)</Katex>. i.e., the runtime will always be the same regardless of the input size.</p>

    <br>

    <h2>Examples</h2>

    <p>The time complexity of a line initializing a variable is constant. Examples:</p>
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
        
        # another example: 
        lst = [1, 2, 3, 4] # remember, initializing a varable only takes O(1)
        i = 0 # O(1)
        while i &lt; range(4): # here we are simply comparing a constant value to another, which also takes O(1)
            if i == 0: 
                break
        
        </code>
    </pre>
</main>