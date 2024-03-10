<!-- src/routes/About.svelte -->
<script>
  console.log('Factorial.svelte loaded');


  import Katex from 'svelte-katex';
  import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely


  import donutThink from '../lib/donut-think-left.png'
//   import donutSad from '../lib/donut-sad.png'
  import omgBanana from '../lib/omg-banana.png'
  import donutHypeClosed from '../lib/donut-hype-eyes-closed.png';
  import { goto } from '$app/navigation';


  import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely


//   function handleDonutClick() {
//   console.log("Back to homepage!")
// //   goto('homepage');
// }


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

  ul {
    list-style-type: disc;
    text-align: left;
    padding-left: 0;
}


  ul ul {
      list-style-type: circle;
      text-align: left;
      margin-top: 5px;
      margin-left: 40px;
  }


  li {
      text-align: left;
      margin-left: 20px;
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
  <h1 style="text-align: center;">Factorial Time</h1>
  <p>Now let's dive into Factorial Time, one of the slowest complexities out there. Brace yourself!</p>
  <div class="donut-container">
      <img src={omgBanana} alt="Banana Image" style="width: 100px; margin-top: 70px;">
      <div class="speech-bubble" style="top: 30px;">
          Oh no, here we go again...
      </div>
  </div>
  <p>Imagine Big O is trying to generate all possible permutations of a given list of elements using the Heap's algorithm. This algorithm recursively generates all permutations of a list, resulting in a large number of recursive calls and computations.</p>
  <p>The Heap's algorithm has a time complexity of <Katex>O(n!)</Katex>, where <Katex>n</Katex> is the size of the input list. This means that the runtime of the algorithm increases factorially with the size of the input (!).</p>
  <br>
  <p>For example, if the input list has 5 elements, the algorithm will perform 120 operations. If the input list has 10 elements, the algorithm will perform 3,628,800 operations (!). As the input size grows, the number of operations required grows at an astronomical rate!</p>
  <p><Katex>O(mg!)</Katex>. This is bad.</p>


  <h2>Examples</h2>
  <pre>
  <code class="language-python">
      def heap_permutation(data, n):
          if n == 1:
              print(data)
              return
         
          for i in range(n):
              heap_permutation(data, n - 1)
              if n % 2 == 0:
                  data[i], data[n-1] = data[n-1], data[i]
              else:
                  data[0], data[n-1] = data[n-1], data[0]
  </code>
  </pre>
  <p>This code demonstrates Heap's algorithm for generating permutations of a list. The recursive nature of the algorithm leads to a factorial number of recursive calls and computations, resulting in a time complexity of <Katex>O(n!)</Katex>.</p>
  <p>As you can imagine, factorial time complexity can quickly become unmanageable for even moderately sized inputs. We avoid algorithms with this time complexity as much as we can!</p>


  <!-- <p style="text-align: center;">Awesome, you just learned about Factorial Time Complexity! Click on the donut to go back to the home page!</p>
  <img src={donutHypeClosed} alt="Donut Image" style="width: 150px;display: block; margin-left: auto; margin-right: auto;" on:click={handleDonutClick}> -->
</main>
