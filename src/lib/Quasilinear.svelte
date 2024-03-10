<!-- src/routes/About.svelte -->
<script>
  import Katex from 'svelte-katex';
  import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely
  import donutWaveLeft from '../lib/donut-wave-left.png';
  import { goto } from '$app/navigation';


  function handleDonutClick() {
  console.log("Back to homepage!")
  goto('homepage');
}


  console.log('Quasilinear.svelte loaded');


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


</style>


<main class="container">
  <h1 style="text-align: center;">Quasilinear Time</h1>
  <p>More complex than <Katex>O(n)</Katex>, but less complex than <Katex>O(n^2)</Katex>.</p>

  <p>Now you might be wondering, "What's the big deal about quasilinear time complexity? It can't be that different from linear or even logarithmic time, right?"</p>
  <div class = "donut-container">
  <img src={donutThink} alt="Donut Image" style="width: 150px;">
    <div class="speech-bubble" style={`top: 10%; left: 23%;`}>
      <!-- adjust style as needed for placement -->
      Well, let's explore quasilinear time complexity with an example.
    </div>
  </div>
  <p>Imagine Big O is sorting a large list of elements using an efficient sorting algorithm like quicksort. Quicksort has an average-case time complexity of O(n log n). Now, you might think, "That's not too bad. It's better than quadratic time!"</p>
 
  <p>But wait, there's more to consider. Quasilinear time complexity grows slightly faster than linear time. Let's see how this can impact Big O's performance.</p>
 
  <p>Suppose we have a list of 1,000,000 elements to sort. In quasilinear time complexity, the number of operations grows proportionally to n log n.
  </p>
  <p>For 1,000,000 elements:</p>
  <p><Katex>n log n ≈ 1,000,000 * log(1,000,000) ≈ 6,000,000</Katex> operations.</p>


  <br>


  <p>Assuming each operation takes 1 microsecond:</p>
  <p>Total time <Katex>≈ 6,000,000</Katex> microseconds <Katex>≈ 6 seconds</Katex>.</p>
 
  <p>That's not too bad for sorting 1,000,000 elements. But what if we double the size of the list?
  </p>


  <p>For 2,000,000 elements:</p>
  <p><Katex>n log n ≈ 2,000,000 * log(2,000,000) ≈ 12,000,000</Katex> operations.</p>


  <br>


  <p>Total time <Katex>≈ 12,000,000</Katex> microseconds <Katex>≈ 12 seconds</Katex>.</p>


  <p>As you can see, the time required doubles when the input size doubles. This slight increase in time can become significant for larger inputs, making the running time even worse.
  </p>
  <br>
  
  <h2 style="text-align: center;">Example:</h2>
  <pre>
      <code class="language-python">
        def quasilinear_example(input_list):
            sorted_list = sorted(input_list)  # Sorting the input list
            return sorted_list
      </code>
      
      <p>This function takes an input list and returns a sorted version of that list. Sorting algorithms like quicksort or merge sort achieve a time complexity of <Katex>O(n \log n)</Katex>, making them efficient for large datasets.</p>
      <p>As the input size increases, the runtime of these algorithms grows logarithmically with the size of the dataset. This means that doubling the input size results in a slightly more than doubling of the runtime, making them efficient choices for processing large datasets.</p>

      <br>
      <p>Fun Fact: Some common algorithms that are <Katex>O(n \space \log(n))</Katex> are merge sort, quicksort, and operations on a self-balancing binary search tree.</p>
    
  </pre>
  <p style="text-align: center;">Great work! Click on the donut to go back to the home page!</p>
  <img src={donutWaveLeft} alt="Donut Image" style="width: 150px;display: block; margin-left: auto; margin-right: auto;" on:click={handleDonutClick}>
</main>
