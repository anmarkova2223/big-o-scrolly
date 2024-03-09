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
    <h1>Welcome to Big O Notation by the Graphic Girls!</h1>
    My name is Big O! I am an adorable donut representing Big O itself! <br><br>This webpage was made by Anastasiya Markova, Maryam Almahashnah, and Zoe Ludena. I was actually drawn by Zoe herself! <br><br>I hope you are as excited as me to learn all about Big O Notation. This web page aims to teach you about the history of Big O notation, why it is relevant to you as a programmer, and how you can calculate it from other algorithms.
  </main>
  