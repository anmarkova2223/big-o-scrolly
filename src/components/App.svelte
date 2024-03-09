<script>
  import { onMount } from 'svelte';
  import Constant from '../lib/Constant.svelte';
  // import Exponential from '../lib/Exponential.svelte';

  import donutWave from '../lib/donut-wave.png';
  import donutWaveLeft from '../lib/donut-wave-left.png';
  import donutHypeOpen from '../lib/donut-hype-eyes-open.png';
  import donutHypeClosed from '../lib/donut-hype-eyes-closed.png';
  import donutThinkLeft from '../lib/donut-think-left.png';
  import donutThinkRight from '../lib/donut-think-right.png';

  import quadraticDonut from '../lib/quadratic-donut.png';
  import exponentialDonut from '../lib/exponential-donut.png';
  import graphDonut from '../lib/graph-donut.png';
  import factorialDonut from '../lib/factorial-donut.png';
  import linearDonut from '../lib/linear-donut.png';
  import logDonut from '../lib/log-donut.png';
  import nlognDonut from '../lib/nlogn-donut.png';
  import constantDonut from '../lib/constant-donut.png';
    import { index } from 'd3';

  import Sidebar from './Sidebar.svelte';
  let sidebar_show = false;

  let donutTexts = [
    "Explanation",
    "The How",
    "Graph & Table",
    "Constant",
    "Logarithmic",
    "Linear",
    "Quasilinear",
    "Quadratic",
    "Exponential",
    "Factorial",
    "Practice",
    "Sources"
  ]

  let donuts = [
    { src: donutWave, label: "", top: 100, left: 35, width: 150 },
    { src: donutThinkRight, label: donutTexts[0], top: 200, left: 35, width: 130 },
    { src: donutHypeClosed, label: donutTexts[1],top: 300, left: 35, width: 150 },
    { src: graphDonut, label: donutTexts[2],top: 400, left: 35, width: 180 },
    { src: constantDonut,label: donutTexts[3], top: 500, left: 35, width: 180 },
    { src: logDonut,label: donutTexts[4], top: 600, left: 35, width: 180 },
    { src: linearDonut,label: donutTexts[5], top: 700, left: 35, width: 180 },
    { src: nlognDonut,label: donutTexts[6], top: 800, left: 35, width: 180 },
    { src: quadraticDonut,label: donutTexts[7], top: 900, left: 35, width: 180 },
    { src: exponentialDonut,label: donutTexts[8], top: 1000, left: 35, width: 180 },
    { src: factorialDonut,label: donutTexts[9], top: 1100, left: 35, width: 180 },
    { src: donutThinkRight,label: donutTexts[10], top: 1200, left: 35, width: 130 },
    { src: donutWaveLeft,label: donutTexts[11], top: 1300, left: 35, width: 140 }
  ];


  function handleDonutHover(index) {
    donuts[index].hovered = true;
  }

  function handleDonutOut(index) {
    donuts[index].hovered = false;
  }

  function handleDonutClick(index) {
    donuts[index].clicked = true;
  }
  let boxes;
  let boxAppears = [false, false, false, false, false, false, false, false, false, false, false, false, false];

  onMount(() => {
    // Write your code here
    boxes = document.querySelectorAll('.box_container');
    window.addEventListener('scroll', checkBoxes);
    window.addEventListener('scroll', updateProgress);
  });

  function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((box, index) => {
      const boxTop = box.getBoundingClientRect().top;
      const boxBottom = box.getBoundingClientRect().top 
      + box.getBoundingClientRect().height;
      console.log(boxTop);
      if (boxTop < triggerBottom && boxBottom > triggerBottom/2) {
        boxAppears[index] = true;
      } else {
        boxAppears[index] = false;
      }
    });
  }

  function updateProgress() {
    const pixels = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    let percentage = (pixels / totalHeight) * 100;
    percentage = Math.min(percentage, 98.5);
    document.querySelector('.progress-bar').style.width = `${percentage}%`;
  }
  // Write your JS here, or import other files
</script>
<header>
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>
</header>

<Sidebar bind:show={sidebar_show} />

<main>
  {#each donuts as { src, label, top, left, width, hovered, clicked }, index}
  <div class="donut-container" style={`top: ${top}px; left: ${left}px;`}>
    <img class="donut" src={src} alt="Donut" style={`width: ${width}px`}/>
    {#if index === 1 || index === 11 || index === 12}
      {#if index === 1}
        <div class="label_short" style={`left: 30px`}>{label}</div>
      {:else if index === 11}
        <div class="label_short" style={`left: 40px`}>{label}</div>
      {:else}
        <div class="label_short" style={`left: 44px`}>{label}</div>
      {/if}
      <!-- <div class="label_short" style={`left: px`}>{label}</div> -->
    {:else}
      {#if index === 2 || index === 3}
        <div class="label_norm" style={`left: 43px`}>{label}</div>
      {:else if index === 4 || index === 10}
        <div class="label_norm" style={`left: 63px`}>{label}</div>
      {:else if index === 5}
        <div class="label_norm" style={`left: 50px`}>{label}</div>
        {:else if index === 6}
        <div class="label_norm" style={`left: 70px`}>{label}</div>
      {:else if index === 7}
        <div class="label_norm" style={`left: 55px`}>{label}</div>
      {:else if index === 8}
        <div class="label_norm" style={`left: 60px`}>{label}</div>
        {:else}
        <div class="label_norm" style={`left: 55px`}>{label}</div>
    {/if}
    {/if}
    <div class="box_container" class:appear={boxAppears[index]}>
      {#if index === 0}
        <div class="box_content" style="margin-top: 16%; text-align: center; padding: 20px;">
          Welcome to Big O Notation by the Graphic Girls! <br><br>My name is Big O! I am an adorable donut representing Big O itself! <br><br>This webpage was made by Anastasiya Markova, Maryam Almahashnah, and Zoe Ludena. I was actually drawn by Zoe herself! <br><br>I hope you are as excited as me to learn all about Big O Notation. This web page aims to teach you about the history of Big O notation, why it is relevant to you as a programmer, and how you can calculate it from other algorithms.
        </div>
      {:else if index === 1}
        <div class="box_content">
          Explanation
        </div>
      {:else if index === 2}
        <div class="box_content">
          The How
        </div>
      {:else if index === 3}
        <div class="box_content">
          Graph
        </div>
      {:else if index === 4}
        <div class="box_content">
          <Constant />
        </div>
        {:else if index === 5}
        <div class="box_content">
          Logarithmic
        </div>
      {:else if index === 6}
        <div class="box_content">
          Linear
        </div>
      {:else if index === 7}
        <div class="box_content">
          Quasilinear
        </div>
      {:else if index === 8}
        <div class="box_content">
          Quadratic
        </div>
      {:else if index === 9}
        <div class="box_content">
          Exponential
        </div>
      {:else if index === 10}
        <div class="box_content">
          Factorial
        </div>
      {:else if index === 11}
        <div class="box_content">
          Practice
        </div>
      {:else if index === 12}
      <div class="box_content">
        Sources
      </div>
      {/if}
    </div>
  </div>
  {/each}
</main>

<style>
  /* Write your CSS here */
  header{
    position: fixed;
    background-color: #f9f9f9;
    width: 1400px;
    height: 50px;
    padding-inline: 10px;
    z-index: 100;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }
  .progress-bar {
    position: inherit;
    top: 10px;
    left: 5;
    width: 1400px;
    height: 30px;
    border-radius: 5px;
    background-color: #4CAF50;
  }
  .progress-fill {
    width: 0%;
    height: 100%;
    background-color: #b1e8ea;
    overflow: hidden;
  }

  .donut-container {
    position: relative;
    display: flex;
    height: 500px;
    align-items: center;
    justify-content: flex-start;
  }

  .label_norm {
    position: absolute;
    font-size: 14px;
    text-align: center;
    margin-top: 145px; /* Adjust the margin as needed */
  }

  .label_short {
    position: absolute;
    font-size: 14px;
    text-align: center;
    margin-top: 125px; /* Adjust the margin as needed */
  }

  .speech-bubble {
    position: absolute;
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  .box_container {
    position: absolute;
    top: 0;
    left: 200px;
    width: 1000px;
    height: 550px;
    background-color: green ;
    opacity: 0;
    transition: opacity 500ms ease-in;
    overflow-y: auto;
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }

  .box_container.appear {
    opacity: 1;
    transform: opacity 500mx ease-out;
  }

  .box_content {
    text-align: center;
  }
</style>
