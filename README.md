# CSARCH2-MCO2

## How to run the program
1. Open `index.html` on your browser
2. Choose a test case
3. Enter the number of blocks
4. Click **Start Simulation**
5. Click **step-by-step** or **skip to end**
6. To start a new simulation, press **Start Simulation** to reset the values.



## Specifications of the cache simulation system: 

**FA + Random Replacement Algorithm**

Random Function Used: `Math.floor(Math.random() * cacheSize)`

Number of Memory Blocks used: 32
The memory blocks are stored in the cache blocks based on two factors
- First, as long as there are remaining cache blocks, the data will be placed on the next available cache (first come first serve).
- Second, if there are no more remaining cache blocks, the data will be placed on a random cache block based on the generated value by the random function used.

  
## Detailed Analysis of the three test cases
- Sequential Sequence
  - In sequential analysis, the blocks of data, starting from 0 to 63 (2n-1), are stored in the cache blocks based on two factors:

  - However, because of the random replacement algorithm, the average hitrate accross 5 tries was 15% and the average missrate was around 85%. This is because blocks that would normally be a hit if the random replacement algorithm was LIFO or FIFO are no longer a hit because the blocks that would be replaced are chosen randomly. 

- Random Sequence
  - analysis here

- Mid-repeat Blocks
  - In the mid-repeat test case, the length of the sequence was 94 elements. However, because the elements were repeated across the sequence, this led to more hits compared to the other two test cases even if the replacement algorithm was chosen randomly. Because of this, the average hit rate across 5 attempts in this test case was 31.38% while the average miss rate was 68.62% 

