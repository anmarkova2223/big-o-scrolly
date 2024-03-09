<!-- src/routes/About.svelte -->
<script>
    import edmund from '../lib/Edmund_Landau.jpg';
    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely
    import donutWaveLeft from '../lib/donut-wave-left.png';
    // import { goto } from '$app/navigation';
  
    // function handleDonutClick() {
    //   // Navigate to the desired location when the donut image is clicked
    //   console.log("Back to homepage!")
    //   goto('homepage');
    // }
  
    console.log('About.svelte loaded');
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
        padding: 5px;
        background-color: #f4f4f4;
        border-radius: 5px;
        overflow-x: auto;
        display: flex;
        justify-content: center;
    }
  
    pre code {
        text-align: left; /* Ensure code is left-aligned */
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
  
    :global(.katex) {
          font-size: inherit; /* Make KaTeX font size same as the regular text */
    }
  
    :global(.katex-display) {
          font-size: inherit; /* Adjust font size for KaTeX display mode */
    }
  
  </style>
    
  <main class="container">
      <h1>What is Big O Notation?</h1>
      <p style="text-align: left;">Big O notation is a fundamental tool used to analyze the cost of an algorithm. It gives the upper-bound runtime or worst-case complexity of an algorithm. This allows one to classify algorithms depending on their run time or space requirements. Big O notation was invented by German mathematicians Paul Bachmann, Edmund Landau, and others. It is also called Bachmann-Landau notation or asymptotic notation. The letter <Katex>n</Katex> represents the input size (this can be the length of a list of a given integer). The letter <Katex>O</Katex> was chosen by Bachnmann to stand for Ordnung, which means the order of approximation.</p>
      <h2>Here is the formal definition:</h2>
      <p><Katex>f(N) = O(g(N))</Katex> if there exists possible constants <Katex>c</Katex>, <Katex>N_{0}</Katex> such that <Katex>f(N) \leq c * g(N)</Katex> for all <Katex>N \geq N_{0}</Katex>.</p>
      <h2>Why is Big O Notation Important?</h2>
      <p style="text-align: left;">Big O Notation is essential if you want to know how algorithms will scale. For example, if you are designing a big website and have a lot of users the time it takes to handle those requests are important. You need to know how to store all of this data efficiently, so when you write code it does not take a million years to run. Big O Notation gives you a high level idea of which algorithms are fast or slow and the tradeoffs.</p>
      <h2>Fun fact!</h2>
      <p>Big O is modeled after Edmund Landau! This picture of Landau is from Wikipedia.</p>
      <div style="display: flex; justify-content: center;">
        <div style="display: flex; flex-direction: row; align-items: center;">
            <img src={edmund} alt="Picture of Edmund Landau From Wikipedia" style="margin-right: 20px;">
            <img src={donutWaveLeft} alt="Donut Image" style="width: 400px;">
        </div>
    </div>
  </main>
  