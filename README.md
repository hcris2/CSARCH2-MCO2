# CSARCH2-MCO2

## How to run the program
1. Open `index.html` on your browser
2. Choose a test case
3. Enter the number of blocks
4. Click **Start Simulation**
5. Click **step-by-step** or **skip to end**
6. To start a new simulation, press **Start Simulation** to reset the values.
7. To clear the cache table or reset the simulation, press **Reset Simulation**.



## Specifications of the cache simulation system: 

_**FA + Random Replacement Algorithm**_

**Cache Specifications:**

**Number of Cache Blocks**: 32

**Cache Line**: 64 Words

**Read Policy**: Load-through

**Random Function Used**: `Math.floor(Math.random() * cacheSize)`

Number of Memory Blocks used: 32
The memory blocks are stored in the cache blocks based on two factors
- First, as long as there are remaining cache blocks, the data will be placed on the next available cache (first come first serve).
- Second, if there are no more remaining cache blocks, the data will be placed on a random cache block based on the generated value by the random function used.

  
## Detailed Analysis of the three test cases
- Sequential Sequence
  - In sequential analysis, the blocks of data, starting from 0 to 63 (2n-1) and the length of the sequence is 256.
  - Because of the random replacement algorithm, the average hitrate accross 5 tries was 15% and the average missrate was around 85%. This is because blocks that would normally be a hit if the random replacement algorithm was LIFO or FIFO are no longer a hit because the blocks that would be replaced are chosen randomly.
  - Additionally, this test case had the most amount of elements, leading to it having a low hit rate due to the random replacement algorithm even if the sequence was repeating. 

- Random Sequence
  - In the random sequence test case, the length of the sequence was 128.
  - The hit rate and miss rate varied across different attempts, but after doing five attempts, the average hit rate was 22.812% while the average miss rate was 77.188%. The random sequence combined with the random replacement algorithm made it one of the test cases that varied more with regards to its hit rate and miss rate.

- Mid-repeat Blocks
  - In the mid-repeat test case, the total length of the whole sequence was 376 elements.
  - This test case had the most amount of elements in the sequence.
  -  However, because the elements were repeated across the sequence, this led to more hits compared to the other two test cases even if the replacement algorithm was chosen randomly. Because of this, the average hit rate across 5 attempts in this test case was 31.38% while the average miss rate was 68.62%
 

