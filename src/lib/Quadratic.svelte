<!-- src/routes/About.svelte -->
<script>
  console.log('Quadratic.svelte loaded');
  import donutThinkRight from '../lib/donut-think-right.png';
  import { goto } from '$app/navigation';
  import croissant from '../lib/croissant-mascot.png';


  import Katex from 'svelte-katex';
  import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely


//   function handleDonutClick() {
//   console.log("Back to homepage!")
//   goto('homepage');
// }


// import Sidebar from './Sidebar.svelte';
//   let sidebar_show = false;
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

</style>
<main class="container">
    <h1>Quadratic Time</h1>
    <p>We classify quadratic time as very bad (yet it is not the worst)! This is because the complexity of polynomials increase as the exponent increases. AKA they are very slow. The notation for quadratic time is <Katex>O(n^2)</Katex>.</p>
    <p>But it is important to note just because we say it is bad does not mean it is never used.</p>
    <p>Some common algorithms that have <Katex>O(n^2)</Katex> time complexity are insertion sort, Floyd-Warshall's algorithm (shortest paths between all pairs of vertices in a graph), naive algorithms with nested loops, and matrix multiplication.</p>
    <div class="donut-container">
        <img src={croissant} alt="Croissant Image" style="width: 130px; margin-top: 70px;">
        <div class="speech-bubble" style="top: 40px; width: 800px;">
            We only care about when <Katex>n</Katex> is greater or equal to zero. This means that when you think about quadratics don't think like me, a croissant, instead pretend someone took a bite of me!
        </div>
    </div>
    <h4>Verbal Example:</h4>
    <p>Imagine Big O is trying to sort a list of numbers using a simple algorithm like Bubble Sort or Selection Sort. These algorithms involve nested loops where each element of the list is compared to every other element.</p>
    <p>This results in a runtime that scales quadratically with the size of the input list. As the input size increases, the number of comparisons and swaps increases exponentially.</p>
    <p>The time complexity of these algorithms is represented as <Katex>O(n^2)</Katex>, where <Katex>n</Katex> is the size of the input.</p>
    <br>


    <h4>Code Example:</h4>
  <pre>
      <code class="language-python">
# Here is a simple example of code
that runs in quadratic time!


for element1 in arr1:
    for element2 in arr2:
        print(element1, element2)
      </code>
  </pre>
  <br>
  <p>This code snippet demonstrates a nested loop structure where each element of the input list is compared to every other element. As a result, the runtime of the algorithm scales quadratically with the size of the input list, exhibiting a time complexity of <Katex>O(n^2)</Katex>.</p>
  <p>As you can see, quadratic time complexity can lead to significantly longer execution times for larger input sizes, making it important to optimize algorithms for better performance.</p>
  <br>

  <!-- <p style="text-align: center;">Great! Now you know a little more about Quadratic Time Complexity. Click on the donut to go back to the home page!</p>
  <img src={donutThinkRight} alt="Donut Image" style="width: 150px;" on:click={handleDonutClick}> -->
</main>
