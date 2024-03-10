<script>
    console.log('Constant.svelte loaded');

    //import cheatsheet from './cheatsheet.js';
    import donutHype from '../lib/donut-hype-eyes-open.png';
    import { goto } from '$app/navigation';
    import Question1 from './practiceq1.svelte';
    import Question2 from './practiceq2.svelte';
    import Question3 from './practiceq3.svelte';

    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

    let currentQuestion = 1;

    function nextQuestion() {
        if (currentQuestion < 3) {
        currentQuestion += 1;
        }
        else if (currentQuestion >=  3) {
            currentQuestion = 1;
        }
    }

    function prevQuestion() {
        if (currentQuestion > 1) {
        currentQuestion -= 1;
        }
        else if (currentQuestion <=  1) {
            currentQuestion = 3;
        }
    }
</script>

<style>
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0 100px;
    height: 100%;
    }
    .buttons {
        display: flex;
        top: 490px;
        width: 980px;
        position: absolute;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        margin-inline: 10px;
    }
    .button {
        font-size: 15px;
        background-color: #fa96e1;
        border-radius: 10px;
        padding: 5px 10px;
        box-shadow: none;
        border-color: none;
    }
    .button:hover {
        color: #ffffff;
    }

    :global(.katex) {
        font-size: inherit; /* Make KaTeX font size same as the regular text */
    }

    :global(.katex-display) {
        font-size: inherit; /* Adjust font size for KaTeX display mode */
    }

</style>

<main class="container">
    <h1>Practice Questions</h1>
    <p>Select which time complexity best describes the given code.</p>
    <br>
    {#if currentQuestion === 1}
    <Question1 />
    {:else if currentQuestion === 2}
        <Question2 />
    {:else if currentQuestion === 3}
        <Question3 />
    {/if}
    <div class="buttons">
        <button class="button" on:click={prevQuestion}>Previous</button>
        <button class="button" on:click={nextQuestion}>Next</button>
    </div>
</main>