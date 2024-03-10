<script>
//import cheatsheet from './cheatsheet.js';
import donutHype from '../lib/donut-hype-eyes-open.png';
    import { goto } from '$app/navigation';

    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

    let selected = '';
    let showAnswer = false;
    let correctAnswer = 'nlog(n)';
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
    .practice.question {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .answer-choices {
    margin-left: 20px;
    text-align: left;
    width: 500px;
  }
  .correct {
    color: green;
  }
  .incorrect {
    color:red;
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
<main>
    <div class="practice">
        <h2>Problem 2</h2>
        <div class="practice question">
        <pre>
            <code class="language-python">
            k = 0;
            for i in range(n//2,n):
                for j in range(2,n,pow(2,j)):
                    k = k + n / 2;
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
            <label>
                <input type="checkbox" 
                    class="radio" 
                    value="nx" 
                    name="status"
                    on:click={select} checked={selected === 'nx'}/>O(n^x)
            </label> 
            <label>
                <input type="checkbox" 
                    class="radio" 
                    value="xn" 
                    name="status"
                    on:click={select} checked={selected === 'xn'}/>O(x^n)
            </label>
            <label>
                <input type="checkbox" 
                    class="radio" 
                    value="n!" 
                    name="status"
                    on:click={select} checked={selected === 'n!'}/>O(n!)
            </label>  
            <div>
            <button on:click={revealAnswer}>{answerText}</button>
            {#if showAnswer}
                <p class="answer check {selected === correctAnswer ? 'correct' : 'incorrect'}">{selected === correctAnswer ? 'Correct answer!' : 'Incorrect answer.'}</p>
                <p class="answer explanation"> If you notice, j keeps doubling till it is less than or equal to n. Several times, we can double a number till it is less than n would be log(n). 
                    Let’s take the examples here. 
                    for n = 16, j = 2, 4, 8, 16 
                    for n = 32, j = 2, 4, 8, 16, 32 
                    So, j would run for O(log n) steps. 
                    i runs for n/2 steps. 
                    So, total steps = O(n/ 2 * log (n)) = O(n * log n)</p>
            {/if}
            </div>
        </div>
        </div>
    </div>
</main>