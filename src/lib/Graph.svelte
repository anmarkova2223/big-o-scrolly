<script>
    import { onMount } from 'svelte';
    import { funTable } from './funTable.js';
    import { plotComplexities } from './cheatSheet.js';
    import { goto } from '$app/navigation';
    import donutHype from '../lib/donut-hype-eyes-open.png';
  
    // function handleDonutClick() {
    //     // Navigate to the desired location when the donut image is clicked
    //     console.log("Back to homepage!");
    //     goto('homepage');
    // }
  
    console.log('Graph.svelte loaded');
  
    onMount(() => {
        plotComplexities("big-o-graph", "Big O Complexity Visualization", "Try hovering over the lines!");
        funTable("fun-table");
    });
  </script>
  
  <style>
    .main-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
    }
  
    #big-o-graph {
      flex: 2;
      overflow: auto;
      transform: scale(0.9);
    }
  
    #fun-table-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      overflow-y: auto;
      margin-right: 70px;
      height: 100%;
      transform: scale(0.9);
    }
  
    #fun-table {
      text-align: center;
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
  
    :global(.katex) {
        font-size: inherit; /* Make KaTeX font size same as the regular text */
      }
  
    :global(.katex-display) {
        font-size: inherit; /* Adjust font size for KaTeX display mode */
    }
  
    
  </style>
  
  <div class="main-container">
    <div id="big-o-graph">
        <!-- Your big-o-graph component here -->
    </div>
  
    <div id="fun-table-container" class="donut-container">
        <div id="fun-table">
            <!-- Your table component here -->
            <img src={donutHype} alt="Donut Image" style="width: 200px;">
            <div class="speech-bubble" style={`top: 10%; left: 23%;`}>
              <!-- Your speech bubble content here -->
              Very cool!
            </div>
        </div>
    </div>
  </div>
  