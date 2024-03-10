<script>
    console.log('Constant.svelte loaded');

    //import cheatsheet from './cheatsheet.js';
    import donutHype from '../lib/donut-hype-eyes-open.png';
    import { goto } from '$app/navigation';

    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

    let selected = '';
    let showAnswer = false;
    let correctAnswer = 'n';
    let answerText = 'Reveal Answer';
    function select(event) {
        selected = event.target.value;
    }
    function revealAnswer() {
        showAnswer = !showAnswer;
        answerText = showAnswer ? 'Hide Answer' : 'Reveal Answer';
    }
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

  .practice-question {
    display: flex;
    justify-content: center;
    align-items: space-between;
  }
  .answer {
    margin-left: 10px;
    text-align: left;
    width: auto;
    max-width: 300px;
  }
  .answer.check {
    color: green;
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

</style>

<main class="container">
    <h1>Practice Questions</h1>
    <p>Select wich time complexity best </p>
    
    <br>
    <h2>Problem 1</h2>
    <div class="practice-question">
    <pre>
        <code class="language-python">
        def funct(n):
        if (n==1):
            return
        for i in range(1, n+1):
            for j in range(1, n + 1):
                print("*", end = "")
                break
            print()
        </code>
    </pre>
    <div class="answer-choices">
        <h3>Answer Choices</h3>
        <label>
          <input type="checkbox" 
                class="radio" 
                value="1" 
                name="status" 
                on:click={select} checked={selected === '1'}/>O(1)
        </label>
        <label>
          <input type="checkbox" 
            class="radio" 
            value="logn" 
            name="status"
            on:click={select} checked={selected === 'logn'}/>O(log(n))
        </label>
        <label>
            <input type="checkbox" 
                class="radio" 
                value="n" 
                name="status"
                on:click={select} checked={selected === 'n'}/>O(n)
        </label>
        <label>
            <input type="checkbox" 
                class="radio" 
                value="nlog(n)" 
                name="status"
                on:click={select} checked={selected === 'nlog(n)'}/>O(nlog(n))
        </label> 
        <div>
        <button on:click={revealAnswer}>{answerText}</button>
        {#if showAnswer}
            <p class="answer check">{selected === correctAnswer ? 'Correct answer!' : 'Incorrect answer. Please try again.'}</p>
            <p class="answer explanation"> Notice that even though the inner loop is bounded 
                by n, it is only executed once due to the break statement. Hence, 
                the time complexity of this algorithm is O(n).</p>
        {/if}
        </div>
      </div>
    </div>
</main>