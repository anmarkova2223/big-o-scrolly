<script>
    import { fly } from 'svelte/transition';
    import Modal from './Modal.svelte';
    import { plotComplexities } from './sidebarTips.js';
    import { onMount } from 'svelte';
    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely
  
    export let show = false;
    let modal_show = false;
  
    function toggleSidebar() {
      show = !show;
      if (show) {
        plotGraph();
      } else {
        clearGraph();
      }
    }
  
    function plotGraph() {
      const sidebarContent = document.getElementById("sidebar-content");
      sidebarContent.innerHTML = ""; // Clear existing content
      plotComplexities("sidebar-content", "Big O Visualization");
    }
  
    function clearGraph() {
      const sidebarContent = document.getElementById("sidebar-content");
      sidebarContent.innerHTML = ""; // Clear existing content
    }
  
    onMount(() => {
      if (show) {
        plotGraph();
      }
    });
  </script>
  
  <style>
    .sidebar-container {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 20rem;
      background: #fff;
      overflow-y: auto;
      z-index: 1000;
      transition: right 0.3s ease;
      border-left: 1px solid #aaa;
      transform: translateX(var(--sidebar-translate, 0));
    }
  
    .button-container {
      position: fixed;
      top: 50%;
      right: 18rem;
      transform: translateY(-50%);
      z-index: 1001;
      transition: right 0.3s ease;
    }
  
    button {
      transform: translateX(var(--button-translate)) rotate(-90deg);
    }
  
    #sidebar-content {
      padding: 20px;
    }
  </style>
  
  <div class="sidebar-container" style="right: {show ? '0' : '-20rem'}">
    <nav transition:fly={{x: 250, opacity: 1}}>
      <div id="sidebar-content"></div>
      <div class="graph-text" style="margin-top: -80px; text-align: left; font-size: 13px;padding: 20px;">
        <h4 style="font-size: 15px;">Rules to Big O Notation</h4>
        <ol>
          <li>Break your algorithm/code into individual operations.</li>
          <li>Calculate the Big O of each operation.</li>
          <li>Add up the Big O of each operation together or multiply with caution.</li>
          <li>Remove constants. Recall we only care about the slowest part of the algorithm/code.</li>
          <li>Find the highest order term (AKA the operation that takes the most time).</li>
        </ol>
        <br>
        <h4 style="font-size: 15px;">Things to Keep in Mind</h4>
        <li>We care about <Katex>n</Katex> as it gets bigger and bigger. So assume it is approaching infinity.</li>
        <li>Sometimes it is OK to multiply different Big O's together for an algorithm. Always double check to make sure it is appropriate. (If they are loops do any of them end early?)</li>
      </div>
    </nav>
    <Modal />
  </div>
  
  <div class="button-container" style="--button-translate: {show ? '0' : '20rem'}">
    <button on:click={toggleSidebar}>Click For Tips</button>
  </div>
  