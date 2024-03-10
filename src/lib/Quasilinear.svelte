<!-- src/routes/About.svelte -->
<script>
  import Katex from 'svelte-katex';
  import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely
  import donutWaveLeft from '../lib/donut-wave-left.png';
  import { goto } from '$app/navigation';


//   function handleDonutClick() {
//   console.log("Back to homepage!")
//   goto('homepage');
// }


  console.log('Quasilinear.svelte loaded');


  // import Sidebar from './Sidebar.svelte';
  // let sidebar_show = false;
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
</style>


<main class="container">
  <h1 style="text-align: center;">Quasilinear Time</h1>
  <p>More complex than <Katex>O(n)</Katex>, but less complex than <Katex>O(n^2)</Katex>.</p>

  <!-- <p>Now you might be wondering, "What's the big deal about quasilinear time complexity? It can't be that different from linear or even logarithmic time, right?"</p> -->
  <p>Some common algorithms that are <Katex>O(n \space \log(n))</Katex> are merge sort, heap sort, divide and conquer algorithms like Karatsuba multiplication or Stassen's algorithm for matrix multiplication, and operations on a self-balancing binary search tree.</p>
  <div class="donut-container">
    <img src={donutWaveLeft} alt="Donut Image" style="width: 100px; margin-top: 70px;">
    <div class="speech-bubble" style="top: 30px; width: 300px;">
        Wow! there are so many things in quasilinear time!
    </div>
</div>
  <p>Imagine Big O is sorting a large list of elements using an efficient sorting algorithm like quicksort. Quicksort has an average-case time complexity of <Katex>O(n \space \log n)</Katex>. Now, you might think, "That's not too bad. It's better than quadratic time!"</p>
 
  <p>But wait, there's more to consider. As you may have gathered, quasilinear time complexity grows slightly faster than linear time. Let's see how this can impact Big O's performance.</p>
 
  <p>Suppose we have a list of 1,000,000 elements to sort. In quasilinear time complexity, the number of operations grows proportionally to <Katex>O(n \space \log n)</Katex>.
  </p>
  <ul>
  <li>For 1,000,000 elements:</li>
  <ul>
    <li><Katex>n \space \log n ≈ 1,000,000 * \log(1,000,000) ≈ 6,000,000</Katex> operations.</li>
    <li>Assuming each operation takes 1 microsecond:</li>
    <li>Total time <Katex>≈ 6,000,000</Katex> microseconds <Katex>≈ 6</Katex> seconds.</li>
  </ul>
  </ul>
  <p>That's not too bad for sorting 1,000,000 elements... What if we double the size of the list?
  </p>
  <ul>
  <li>For 2,000,000 elements:</li>
  <ul>
  <li><Katex>n \space \log n ≈ 2,000,000 * \log(2,000,000) ≈ 12,000,000</Katex> operations.</li>
  <li>Total time <Katex>≈ 12,000,000</Katex> microseconds <Katex>≈ 12</Katex> seconds.</li>
  </ul>
  </ul>

  <p>As you can see, the time required doubles when the input size doubles. This slight increase in time can become significant for larger inputs, making the running time worse.
  </p>
  
  <h2 style="text-align: center;">Example:</h2>
  <pre>
      <code class="language-python">
        def quasilinear_example(input_list):
            sorted_list = sorted(input_list)  # Sorting the input list
            return sorted_list
      </code>
    </pre>
      
      <p>This function takes an input list and returns a sorted version of that list. Sorting algorithms like quicksort or merge sort achieve a time complexity of <Katex>O(n \log n)</Katex>, making them efficient for large datasets.</p>
      <p>As the input size increases, the runtime of these algorithms grows logarithmically with the size of the dataset. This means that doubling the input size results in a slightly more than doubling of the runtime, making them efficient choices for processing large datasets.</p>
      <br>
  <!-- <p style="text-align: center;">Great work! Click on the donut to go back to the home page!</p>
  <img src={donutWaveLeft} alt="Donut Image" style="width: 150px;display: block; margin-left: auto; margin-right: auto;" on:click={handleDonutClick}> -->
</main>
