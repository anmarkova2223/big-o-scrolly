<!-- src/routes/About.svelte -->
<script>
    console.log('Exponential.svelte loaded');

    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

    import donutHypeClosed from '../lib/donut-hype-eyes-closed.png';
    import donutThink from '../lib/donut-think-left.png'
    import { goto } from '$app/navigation';

    import { onMount } from 'svelte';
    import { plotTwoNLine } from './2nGraph.js';

  onMount(() => {
    plotTwoNLine('graph6', 'Exponential Time', 'Holy cow!');
    });
</script>

<!-- <Sidebar bind:show={sidebar_show} /> -->

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
      display: flex;
      flex-direction: column;
      align-items: center;
    }

  .speech-bubble {
    position: absolute;
    /* max-width: 300px; */
    background-color: #CCCCCC;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    white-space: normal;
    transform: translateY(-50%);
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
        text-align: left;
        margin-left: 20px; /* Adjust the space between bullet and text */
    }
    #graph6 {
    transform: scale(1.2);
    display: flex;
    justify-content: center;
    margin-left: 15%;
  }
</style>

<main class="container">
    <h1 style="text-align: center;">Exponential Time</h1>
    <p>Now you might be wondering, "Big O" exponential time cannot be that bad. I think you're being a bit dramatic... it can't be that different from quadratics!"</p>
    <div class = "donut-container" style = "margin-top: 10">
    <img src={donutThink} alt="Donut Image" style="width: 100px; margin-top: 70px;">
      <div class="speech-bubble" style={`top: 30px; width: 300px`}> 
        <!-- adjust style as needed for placement -->
      Bet. Let's look at an example.
      </div>
    </div>
    <p>Imagine Big O is trying to solve the Towers of Hanoi problem. This problem involves moving a stack of disks from one rod to another. However, a larger disk cannot be placed on top of a smaller one! Big O knows he can solve this problem using recursion, but the number of moves required to solve it grows exponentially with the number of disks. The equation for this problem is: <Katex>2^n-1</Katex>, where <Katex>n</Katex> is the number of disks.</p>
    <p>Since we know that the time complexity of the Towers of Hanoi problem is <Katex>O(n^2)</Katex> we can do some calculations! Let's assume that each move takes Big O 1 microsecond (1 millionth of a second).</p>
    <p>Let's imagine we have 20 disks we have to move. This is a pretty small number compared to infinity, where we say <Katex>n</Katex> is approaching. We would get: <Katex>2**20 - 1 = 1048575</Katex> moves.</p>
    <p>We then multiply the number of moves by 1 microsecond. <Katex>1048575</Katex> moves <Katex>* 1/10^6</Katex> seconds/move <Katex>= 1.05</Katex> seconds. That's not so bad! How about if we had 30 disks?</p>
    <p><Katex>2**30 - 1 = 1073741823</Katex> moves, which takes <Katex>1073741823</Katex> moves <Katex>* 1/10^6</Katex> seconds/move <Katex>= 1073741.82</Katex> seconds</p>
    <p>Wait a minute... that's about 12.4 days! Oh no!</p>
    <br>
    <p>Now you might be saying: "Big O, what about negative exponentials?" That would be a very smart question, so Big O would say:</p>
    <div class="donut-container" style="margin-top: 10px;">
        <img src={donutHypeClosed} alt="Donut Image" style="width: 120px; margin-top: 70px;">
        <div class="speech-bubble" style="top: 40px; width: 700px ;"> 
            <!-- adjust style as needed for placement -->
            What a great observation! As long as coefficients are positive multiples of <Katex>n</Katex> then the exponentials have a greater time complexity.
        </div>
    </div>
    <h4>Lets look at another example of how we can calculate exponential time.</h4>
    <pre>
      <code class="language-python">
# Here is a very straightforward example of exponential time

i = 1 #this is constant time

while i &lt 2**n: # This loop repeats everything inside 2**n times

  print(i) # this is constant time

  i += 1 # this is also constant time
      </code>
    </pre>
    <p>This means we have <Katex>O(1) + O(2^n) * O(1) + O(2^n) * O(1)</Katex>. We can then simplify it to: <Katex>O(1) + O(2^n) + O(2^n)</Katex>. The thing that takes the slowest amount of time is <Katex>O(2^n)</Katex>.</p>
    <p>Another way to solve this problem is to go through a few iterations of the loop:</p>
      <li>For <Katex>n = 1</Katex> the loop will run <Katex>2^1</Katex> times.</li>
        <ul>
          <li>It will print <code>0, 1</code>.</li>
        </ul>
      <li>For <Katex>n = 2</Katex> the loop will run <Katex>2^2</Katex> times.</li>
        <ul>
          <li>It will print <code>0, 1, 2, 3</code>.</li>
        </ul>
      <li>For <Katex>n = 3</Katex> the loop will run <Katex>2^3</Katex> times.</li>
        <ul>
          <li>It will print <code>0, 1, 2, 3, 4, 5, 6, 7</code>.</li>
        </ul>
      <li>We can see as <Katex>n</Katex> increases the number of elements printed doubles each time (2, 4, 8)! This tells us that this loop runs with a time complexity of <Katex>O(2^n)</Katex>.</li>
    <br><br>
    <div id = "graph6"></div>
    <h4>How about another recursive example?</h4>
    <pre>
      <code class="language-python">
def exponential(n):

  if n &lt 0:

    return 1 #This is constant!

  else:

    return exponential(n - 1) + exponential (n - 1) # This shrinks n one at a time
      </code>
    </pre>
    <p>You've seen the mathematical way to solving recursion, so let's try another way that may be more intuitive to others. Just like the mathematical way we start by...</p>
    <ul>
        <li>For <Katex>n = 1</Katex> the code will do: <code>exponential(1 - 1) + exponential(1 - 1)</code>, which becomes <code>exponential(0) + exponential(0)</code></li>
        <li>For <Katex>n = 2</Katex> the code will do: <code>exponential(2 - 1) + exponential(2 - 1)</code>, which becomes <code>exponential(1) + exponential(1)</code></li>
        <ul>
          <li>Then it will be: <code>exponential(1 - 1) + exponential(1 - 1) + exponential(1 - 1) + exponential(1 - 1)</code>, which becomes <code>exponential(0) + exponential(0) + exponential(0) + exponential(0)</code></li>
        </ul>
        <li>For <Katex>n = 3</Katex> the code will do: <code>exponential(3 - 1) + exponential(3 - 1)</code>, which becomes <code>exponential(2) + exponential(2)</code></li>
        <ul>
          <li>Then it will be: <code>exponential(1) + exponential(1) + exponential(1) + exponential(1)</code>, which becomes <code>exponential(0) + exponential(0) + exponential(0) + exponential(0) + exponential(0) + exponential(0) + exponential(0) + exponential(0)</code></li>
        </ul>
        <li>We see that the number of <code>exponential(0)</code> seems to double each time! This means we can say the general equation for this problem is <Katex>2^n</Katex>. This means that the time complexity is <Katex>O(n^2)</Katex>.</li>
      </ul>
    <p>As you can see exponential time is quite slow. You want to avoid creating algorithms that run in this time, as very little data will take a long time.</p>
    <br>
    <!-- <p style="text-align: center;">Great work! Click on the donut to go back to the home page!</p>
    <img src={donutHypeClosed} alt="Donut Image" style="width: 150px;display: block; margin-left: auto; margin-right: auto;" on:click={handleDonutClick}> -->
</main>