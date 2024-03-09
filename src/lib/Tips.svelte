<!-- src/routes/About.svelte -->
<script>
    import edmund from '../lib/Edmund_Landau.jpg';
    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely
    import donutWaveLeft from '../lib/donut-wave-left.png';
    import { goto } from '$app/navigation';
  
    // function handleDonutClick() {
    //   // Navigate to the desired location when the donut image is clicked
    //   console.log("Back to homepage!")
    //   goto('homepage');
    // }
  
    console.log('Tips.svelte loaded');
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

  </style>
    
  <main class="container">
      <h1>How do you go about calculating Big O?</h1>
      <h2>Big O Notation Rules:</h2>
      <ol style="text-align: left;">
        <li>Break your algorithm/code into individual operations.</li>
        <li>Calculate the Big O of each operation.</li>
        <li>Add up the Big O of each operation together or multiply with caution.</li>
        <li>Remove constants.</li>
        <li>Find the highest order term.</li>
      </ol>
      <h2>Things to Keep in Mind</h2>
      <ul>
        <li>Big O for the algorithm is the portion that takes the longest time (is the slowest).</li>
        <li>If your algorithm has multiple sections to it that utilize <Katex>n</Katex> that are not nested together then you add the functions.</li>
        <pre>
          <code class="language-python">
  # n is 5 (length of the list)
    # Creating a list like this is O(1)
  lst = [1, 2, 3, 4, 5]
  
  # Creating a variable is O(1)
  total = 0
  
  # Going through the number of data points means we will do actions inside the for loop n times
  for elem in lst:
  
    # Addition is O(1), but it happens n times
            # This means: O(1) * n = O(n)
    total += elem
  
  # Printing is O(1)
  print(total)
  
  # O(1) + O(1) + O(n) + O(1) = O(n)
            # We look at the action that takes the slowest, which is O(n)
          </code>
      </pre>
      <br>
        <li>We say <Katex>n</Katex> is approaching infinity because we want to see how algorithms scale. This means that constants do not matter when calculating Big O.</li>
          <ul>
            <li>This is to say, we only care about dominant terms and not the coefficients.</li>
            <li>For example: If you have <Katex>O(3 + 5n + n^2 + 6n^2)</Katex> then the Big O Notation is <Katex>O(n^2)</Katex>. In general we ignore the constants. If you did look at constants we know <Katex>6n^2</Katex> will take the longest, but when we ignore the coefficient it becomes <Katex>O(n^2)</Katex>.</li>
          </ul>
        <br>
        <li>When calculating Big O Notation for recursive functions one should look at where <Katex>n</Katex> is shrinking and calculate by solving recurrences.</li>
        <ol>
          <li>"Unroll" several times to find a pattern.</li>
          <li>Write a general formula for the <Katex>kth</Katex> unroll.</li>
          <li>Solve for the number of unrolls needed to get to the base case.</li>
          <li>Plug this number into the general formula.</li>
        </ol>
<p>Lets look at an example of this:</p>
<pre>
<code class="language-python">
def binary_search(arr, t, start, stop):
"""
Searches arr[start:stop] for t.
Assumes arr is sorted
"""
  # This is constant
  if stop - start &le; 0:
    return None
  middle = math.floor((start + stop)/2)

  # This is also constant
  if arr[middle] == t:
    return middle

  # Here is the exciting part!
  elif arr[middle] &gt; t:
                    #Notice we are halving the array
    return binary_search(arr, t, start, middle)
  else:
    return binary_search(arr, t, middle + 1, stop)
          </code>
        </pre>
        <br>
        The worst case time complexity can be written like so:<Katex>T(n) = T(n/2)+O(1)</Katex> when <Katex>n &ge; 2</Katex> and <Katex>O(1)</Katex> when <Katex>n = 1</Katex>. We got <Katex>T(n/2)</Katex> from where we are making the array smaller (halving it). We got <Katex>O(1)</Katex> from every other operation. Note that because <Katex>O(1)</Katex> is constant we can substitute it with <Katex>1</Katex>. From here we can now follow the steps above.
        <br>
        <ol>
          <br>
          <li>"Unroll" several times to find a pattern.</li>
          <ul>
            <li>We start with what we were given: <Katex>T(n) = T(n/2) + 1</Katex>. We now have to calculate <Katex>T(n/2)</Katex>.</li>
              <ul>
                <li><Katex>T(n/2) = T(n/2/2) + 1 = T(n/4) + 1</Katex></li>
              </ul>
            <li>We can now replace <Katex>T(n/2)</Katex> with <Katex>T(n/4) + 1</Katex> to get: <Katex>T(n) = [T(n/4) + 1] + 1</Katex></li>
            <li>We repeat this process and now calculate <Katex>T(n/4)</Katex>.</li>
              <ul>
                <li><Katex>T(n) = T(n/2/4) + 1 = T(n/8) + 1</Katex></li>
              </ul>
            <li>We can now replace <Katex>T(n/4)</Katex> with <Katex>T(n/8) + 1</Katex> to get: <Katex>T(n) = [[T(n/8) + 1] + 1]+ 1</Katex></li>
            <li>We can see that every time we unravel we are halving <Katex>T(n/2)</Katex> and the constant grows by one.</li>
          </ul>
          <br>
          <li>Write a general formula for the <Katex>kth</Katex> unroll.</li>
          <ul>
            <li>We are trying to figure out what the formula will be on step <Katex>k</Katex>.</li>
            <li>We know <Katex>2^k</Katex> will increase the denominator in the pattern we saw before and the constant is the same as the number of times we unroll, so we get <Katex>T(n)=T(n/2^k)+k</Katex>.</li>
          </ul>
          <br>
          <li>Solve for the number of unrolls needed to get to the base case.</li>
          <ul>
            <li>Now we want to solve for K to figure out how many unrolls is needed to get to the base case.</li>
            <li>We set what is inside of <Katex>T</Katex> to be equal to one: <Katex>n/2^k = 1</Katex>. Now we solve!</li>
            <li><Katex>n=2^k</Katex> means that <Katex>k = log_2(n)</Katex></li>
          </ul>
          <br>
          <li>Plug this number into the general formula.</li>
          <ul>
            <li>We are almost done! now we need to plug <Katex>k = log_2(n)</Katex> into our general equation.</li>
            <li>Plugging it in we get: <Katex>T(n/2**(log_2(n)) + log_2(n))</Katex>.</li>
            <li>We then simplify to get: <Katex>T(n/n) + log_2(n)</Katex>, which then becomes <Katex>T(1) + log_2(n)</Katex>.</li>
            <li>This means we essentially have <Katex>1 + log_2(n)</Katex>!</li>
            <li>The operation that will take longer is <Katex>log_2(n)</Katex>, so our time complexity is: <Katex>O(n)</Katex>.</li>
          </ul>
        </ol>
      </ul>
      <!-- <p style="text-align: center;">Great work! Click on the donut to go back to the home page!</p>
      <img src={donutWaveLeft} alt="Donut Image" style="width: 150px;display: block; margin-left: auto; margin-right: auto;"> -->
</main>