<script>
//import cheatsheet from './cheatsheet.js';
import donutHype from '../lib/donut-hype-eyes-open.png';
    import { goto } from '$app/navigation';

    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

    let selected = '';
    let showAnswer = false;
    let correctAnswer = 'nx';
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
    width: 400px;
  }
  .correct {
    color: green;
  }
  .incorrect {
    color:red;
  }
  .radio-boxes {
    margin-bottom: 5px;
  }
  .radio {
    display: none;
  }

  .radio + label {
    padding: 10px;
    display: inline-block;
    background: white;
    border-radius: 5px;
    border: 2px solid #fa96e1;
  }
  .radio + label:hover {
  background: #fa96e1; /* Add this line */
  color:#f4f4f4;
}

  .radio:checked + label {
    background: #fa96e1;
    color:#f4f4f4;
  }

  button {
        font-size: 12px;
        background-color: #fa96e1;
        border-radius: 5px;
        padding: 2px 7px;
        box-shadow: none;
        border-color: #fa96e1;
        margin-top: 5px;
    }
    button:hover {
        color: #ffffff;
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
        <h2>Problem 3</h2>
        <div class="practice question" style="display:flex;">
        <pre>
            <code class="language-python">
a = 0;
for i in range(N):
    for j in reversed(range(i,N)):
        a = a + i + j;                
            </code>
        </pre>
        <div class="answer-choices">
            <h4>Select Answer From The Following Choices</h4>
            <div class="radio-boxes">
            <input type="checkbox" 
                    class="radio" 
                    id="option0"
                    value="1" 
                    name="status" 
                    on:click={select} checked={selected === '1'}/>
            <label for="option0"><Katex>O(1)</Katex>
            </label>
            <input type="checkbox" 
                class="radio"
                id="option1" 
                value="logn" 
                name="status"
                on:click={select} checked={selected === 'logn'}/>
            <label for="option1"><Katex>O(log(n))</Katex>
            </label>
                <input type="checkbox" 
                    class="radio"
                    id="option2" 
                    value="n" 
                    name="status"
                    on:click={select} checked={selected === 'n'}/>
            <label for="option2"><Katex>O(n)</Katex>
            </label>
                <input type="checkbox" 
                    class="radio"
                    id="option3"
                    value="nlog(n)" 
                    name="status"
                    on:click={select} checked={selected === 'nlog(n)'}/>
            <label for="option3"><Katex>O(nlog(n))</Katex>
            </label>
            </div>
            <div>
                <input type="checkbox" 
                    class="radio"
                    id="option4" 
                    value="nx" 
                    name="status"
                    on:click={select} checked={selected === 'nx'}/>
            <label for="option4"><Katex>O(n^x)</Katex>
            </label> 
                <input type="checkbox" 
                    class="radio"
                    id="option5" 
                    value="xn" 
                    name="status"
                    on:click={select} checked={selected === 'xn'}/>
            <label for="option5"><Katex>O(x^n)</Katex>
            </label>
                <input type="checkbox" 
                    class="radio" 
                    id="option6"
                    value="n!" 
                    name="status"
                    on:click={select} checked={selected === 'n!'}/>
            <label for="option6"><Katex>O(n!)</Katex>
            </label>
            </div>
            <div>
            <button on:click={revealAnswer}>{answerText}</button>
            {#if showAnswer}
                <p class="answer check {selected === correctAnswer ? 'correct' : 'incorrect'}">{selected === correctAnswer ? 'Correct answer!' : 'Incorrect answer.'}</p>
                <p class="answer explanation"> The above code can be written in the following way:<br><Katex>
                    N + (N - 1) + (N - 2) + … 1 + 0 </Katex>
                    <br>
                    <Katex>= N * (N + 1) / 2</Katex>
                    <br>
                    <Katex>= 1/2 * N^2 + 1/2 * N</Katex>
                    <br>
                    This means the time complexity is <Katex>O(N^2)</Katex>.
                    </p>
            {/if}
            </div>
        </div>
        </div>
    </div>
</main>