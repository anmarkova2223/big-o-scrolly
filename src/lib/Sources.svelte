<!-- src/routes/About.svelte -->
<script>
    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely
    import donutWaveLeft from '../lib/donut-wave-left.png';
    import { goto } from '$app/navigation';
  
    // function handleDonutClick() {
    //   // Navigate to the desired location when the donut image is clicked
    //   console.log("Back to homepage!")
    //   goto('homepage');
    // }
  
    console.log('Sources.svelte loaded');
  </script>
  
  <style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      padding: 0 40px;
      height: 100%; /* Ensure the container takes up the full height */
    }
  
  </style>
    
  <main class="container">
      <h1>Sources</h1>
      <p>We used a variety of sources to choose examples, provide accurate information, and to make our visualizations better.</p>
      <p>AndrewBadr. "Time Complexity." <a href="https://wiki.python.org/moin/TimeComplexity">Time Complexity - Python Wiki</a>, 1 Jan. 2023</p>
      <p>"Big O Notation in Data Structure: An Introduction: Simplilearn." <a href="https://www.simplilearn.com/big-o-notation-in-data-structure-article">Big O Notation in Data Structures</a>, Simplilearn, 6 Nov. 2023</p>
      <p>"Big O Notation." <a href="https://en.wikipedia.org/wiki/Big_O_notation">Wikipedia</a>, Wikimedia Foundation, 5 Mar. 2024</p>
      <p>Huang, Shen. "What Is Big O Notation Explained: Space and Time Complexity." <a href="https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/">freeCodeCamp.Org</a>, freeCodeCamp.org, 8 Dec. 2022</p>
      <p>Prado, Kelvin Salton do. <a href="https://towardsdatascience.com/understanding-time-complexity-with-python-examples-2bda6e8158a7">Understanding Time Complexity with Python Examples</a>, Towards Data Science, 4 Mar. 2019</p>
      <p>Rowell, Eric. <a href="https://www.bigocheatsheet.com/">Know Thy Complexities!</a> Big-O Algorithms, 2016</p>
      <p>"Web Safe Color Chart." <a href="https://htmlcolorcodes.com/color-chart/web-safe-color-chart/">HTML Color Codes</a>, htmlcolorcodes.com. Accessed 28 Feb. 2024.</p>
      
      <!-- <h3 style="text-align: center;">Click on the donut to go back to the home page!</h3>
      <img src={donutWaveLeft} alt="Donut Image" style="width: 150px;display: block; margin-left: auto; margin-right: auto;" on:click={handleDonutClick}> -->
</main>