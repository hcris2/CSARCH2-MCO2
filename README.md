# CSARCH2-MCO2

## How to run the program
1. Open `index.html` on your browser
2. Choose a test case
3. Enter the number of blocks
4. Click **Start Simulation**
5. Click **step-by-step** or **skip to end**
6. To start a new simulation, press **Start Simulation** to reset the values.



## Detailed Analysis of the three test cases
Specifications of the cache simulation system: **FA + Random Replacement Algorithm**

Random Function Used: `Math.floor(Math.random() * cacheSize)`

- Sequential Sequence
  - Number of Memory Blocks used: 32
  - In sequential analysis, the blocks of data, starting from 0 to 31, are stored in the cache blocks based on two factors:
    - First, as long as there are remaining cache blocks, the data will be placed on the next available cache.
    - Second, if there are no more remaining cache blocks, the data will be placed based on a first-in first-out basis.
  - Considering these factors, given that the number of cache blocks and the number of memory blocks used are both 32, it makes sense that the cache hit and cache miss ratio is 3:1, this is considering that it was stated in the specs        that this sequence should be repeated 4 times.
  - Explaining the cache misses:
    - The cache miss only happens during the first run through since the blocks are empty at first.
  - Explaining the cache hits:
    - The cache hit happens after the first run through since the blocks are all occupied after the first run through.

- Random Sequence
  - analysis here

- Mid-repeat Blocks
  - analysis here

