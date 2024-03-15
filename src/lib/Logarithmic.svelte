<!-- src/routes/About.svelte -->
<script>
  console.log('Logarithmic.svelte loaded');


  import Katex from 'svelte-katex';
  import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

  import log from '../lib/log-no-amber.png';


  import { onMount } from 'svelte';
  import { plotOLogNLine } from './logGraph.js';

  onMount(() => {
    plotOLogNLine('graph2', 'Logarithmic Time', 'Slow but steady!');
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

  #graph2 {
    transform: scale(1.2);
    display: flex;
    justify-content: center;
    margin-left: 15%;
  }

</style>


<main class="container">
  <h1>Logarithmic Time</h1>
  <p>Imagine yourself on a journey through the realm of algorithms. As you delve deeper into the complexities of computational efficiency, you encounter a concept known as logarithmic time.</p>
  <p>When an algorithm operates in <Katex>O(\log n)</Katex> time complexity, it signifies a fascinating characteristic: as the input size grows, the number of operations required grows very slowly.</p>
  <br>
  <div id = "graph2"></div>
  <p>Consider it akin to navigating through a vast library of books. With each doubling of the library's size, your search strategy evolves only incrementally. This is precisely the essence of logarithmic time.</p>
  <div class = "donut-container" style = "margin-top: 10">
    <img src={log} alt="Log Image" style="width: 120px; margin-top: 70px;">
      <div class="speech-bubble" style={`top: 30px; width: 300px`}> 
        <!-- adjust style as needed for placement -->
      Basically, we like logarithmic time a lot!
      </div>
    </div>
  <h4>Verbal Example:</h4>
  <p>Imagine yourself as an adventurer exploring the depths of an enchanted forest. Deep within its heart lies a mystical array of treasures, each hidden within a series of interconnected chambers. Your quest? To uncover the greatest treasure of them all - the maximum value hidden within an array of numbers.</p>
  <p>As you step into the first chamber, you encounter a curious mechanism - a recursive algorithm called <code>find_max_recursive</code>. This algorithm holds the key to unraveling the secrets of the forest's treasures.</p>
  <p>The chamber's inscription reveals the workings of the algorithm:</p>
  <pre>
      <code class="language-python">
          # this function is meant to recursively find the 
            #largest element in an array, given a specific range between 'start' and 'end'

          def find_max_recursive(arr, start, end):

          if start == end:
              return arr[start]

          mid = (start + end) // 2

          max_left = find_max_recursive(arr, start, mid)
          max_right = find_max_recursive(arr, mid + 1, end)

          return max(max_left, max_right)
      </code>
  </pre>


  <p>The algorithm divides the array into smaller segments, akin to exploring different sections of the forest. At each step, it splits the array into halves, symbolizing your journey through the forest's pathways.</p>

  <p>Now, let's analyze the time complexity of this mystical algorithm. Imagine the array as a labyrinth of corridors, each step revealing new insights. The time taken to explore each segment depends on its size - much like the time taken to traverse different parts of the forest.</p>

  <p>At each recursive step, the algorithm divides the array in half, reducing the search space by half with each iteration. This halving process resembles a journey through a labyrinth, where each turn leads to a narrower path.</p>

  <p>In mathematical terms, the time complexity of find_max_recursive can be expressed as <Katex>O(\log n)</Katex>, where <Katex>n</Katex> represents the size of the input array. This signifies that as the array grows in size, the number of recursive steps required grows very slowly, mirroring the gradual narrowing of pathways in the enchanted forest.
  </p>

  <br>

  <h4>Let's look at another example:</h4>
  <pre>
      <code class="language-python">
def largest_power_of_two(n):
    result = 1
    while result * 2 %= n:
        result *= 2
    return result
      </code>
</pre>

  <p>Let us imagine this function as an incantation which holds the key to the largest power of two within the realm of integers.</p>
  <p>As the ritual unfolds, you observe a pattern emerging - the number's ascension follows a binary progression. With each multiplication, the number doubles in magnitude, mirroring an exponential growth.</p>
  <p>As the incantation unfolds, you realize its time complexity follows a logarithmic pattern. With each iteration, the number's magnitude doubles, while the search space diminishes by half.</p>
<br>
  <p>Mathematically, the time complexity of <code>largest_power_of_two</code> can be expressed as <Katex>O(\log n)</Katex>, where <Katex>n</Katex> represents the integer given.</p>
  <!-- <p style="text-align: center;">Your journey continues! Click on the donut to return to the home page.</p>
  <img src={donutWave} alt="Donut Image" style="width: 150px;" on:click={handleDonutClick}> -->
</main>
