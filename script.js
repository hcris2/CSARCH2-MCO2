let cacheSize = 32; // Assuming 32 cache blocks
let memoryBlocks = []; // Array to store memory blocks
let cacheMemory = new Array(cacheSize).fill(null); // Initialize cache memory array
let currentStep = 0; // Variable to keep track of the current simulation step
let totalAccesses = 0;
let cacheHits = 0;
let cacheMisses = 0;

// REPLACEMENT ALGORITHM USED: Math.floor(Math.random() * cacheSize)

        function startSimulation() {
            // Clear the text log
            document.getElementById('textLog').value = '';
            // Reset cache and memory
            cacheMemory.fill(null);
            memoryBlocks = [];

            // Clear the cache table
            clearCacheTable();
            
            totalAccesses = 0;
            cacheHits = 0;
            cacheMisses = 0;
            // Initialize memory blocks
            let numberOfBlocks = parseInt(document.getElementById('memoryBlocks').value);
            for (let i = 0; i < numberOfBlocks; i++) {
                memoryBlocks.push(i);
            }

            // Perform the sequential sequence test case
            currentStep = 0;
            //fullAssociativeTest();
        }

        function sequentialTest() {
            // Calculate the current iteration values
            let i = Math.floor(currentStep / memoryBlocks.length);
            let blockIndex = currentStep % memoryBlocks.length;

            // Check if the current step is within the total number of accesses
            if (currentStep < memoryBlocks.length * 4) {
                // Increment the total accesses only once per step
                totalAccesses++;

                // Process the block based on the current iteration
                let blockNumber = memoryBlocks[blockIndex];

                // Check if the block is in the cache
                let cacheIndex = cacheMemory.indexOf(blockNumber);
                if (cacheIndex !== -1) {
                    // Cache hit
                    cacheHits++;
                } else {
                    // Cache miss
                    cacheMisses++;

                    if (cacheMemory.includes(null)) {
                        // Cache is not full, use first come first serve (FIFO) or direct mapping
                        cacheIndex = cacheMemory.findIndex((block) => block === null);
                    } else {
                        // Cache is full, use random replacement algorithm
                        cacheIndex = Math.floor(Math.random() * cacheSize);
                    }

                    // Update cache
                    cacheMemory[cacheIndex] = blockNumber;
                }

                // Update the text log only if it's a new step
                updateTextLog(`Step: ${totalAccesses}, Block: ${blockNumber}, Cache Hit: ${cacheHits}, Cache Miss: ${cacheMisses}`);
            }

            // Increment the current step after completing the simulation for the current step
            currentStep++;

            // Display final statistics if the simulation is complete
            if (currentStep >= memoryBlocks.length * 4) {
                displayFinalStatistics();
            }

            // Update the cache table after the loop completes
            updateCacheTable();
        }

        function generateRandomSequence(length) {
            let randomSequence = [];
            
            for (let i = 0; i < length; i++) {
                randomSequence.push(Math.floor(Math.random() * length));
            }

            return randomSequence;
        }



        function randomTest() {
            // Check if the current step is within the total number of accesses
            if (currentStep < 4 * memoryBlocks.length) {
                // Clear the cache table before starting the test
                clearCacheTable();

                // Generate a random sequence of 4n memory block accesses
                let randomSequence = generateRandomSequence(4 * memoryBlocks.length);

                // Increment the total accesses only once per step
                totalAccesses++;

                let blockNumber = randomSequence[currentStep];

                // Check if the block is in the cache
                let cacheIndex = cacheMemory.indexOf(blockNumber);
                if (cacheIndex !== -1) {
                    // Cache hit
                    cacheHits++;
                } else {
                    // Cache miss
                    cacheMisses++;

                    if (cacheMemory.includes(null)) {
                        // Cache is not full, use first come first serve (FIFO) or direct mapping
                        cacheIndex = cacheMemory.findIndex((block) => block === null);
                    } else {
                        // Cache is full, use random replacement algorithm
                        cacheIndex = Math.floor(Math.random() * cacheSize);
                    }

                    // Update cache
                    cacheMemory[cacheIndex] = blockNumber;
                }

                // Update the text log only if it's a new step
                updateTextLog(`Step: ${totalAccesses}, Block: ${blockNumber}, Cache Hit: ${cacheHits}, Cache Miss: ${cacheMisses}`);

                // Update the cache table after each step
                updateCacheTable();

                // Increment the current step after completing the simulation for the current step
                currentStep++;

                // Display final statistics if the simulation is complete
                if (currentStep >= 4 * memoryBlocks.length) {
                    displayFinalStatistics();
                }
            }
        }

        function generateMidRepeatSequence(n) {
            let sequence = [];


            // Repeat the sequence in the middle twice up to n-1 blocks
            for (let m = 0; m <4; m++){
                sequence.push(0);
                for (let i = 0; i < 2; i++) {
                    for (let j = 1; j < n-1; j++) {
                        sequence.push(j);
                    }
                }

                // Continue up to 2n
                for (let k = n-1; k < 2 * n; k++) {
                    sequence.push(k);
                }
            }
            console.log(sequence.length);
            return sequence;
        }


        function midRepeatTest() {
            // Check if the current step is within the total number of accesses
            
            // Generate the mid-repeat sequence
            let midRepeatSequence = generateMidRepeatSequence(memoryBlocks.length);

            if (currentStep < midRepeatSequence.length) {
                // Clear the cache table before starting the test
                clearCacheTable();

                // Increment the total accesses only once per step
                totalAccesses++;

                let blockNumber = midRepeatSequence[currentStep];

                // Check if the block is in the cache
                let cacheIndex = cacheMemory.indexOf(blockNumber);
                if (cacheIndex !== -1) {
                    // Cache hit
                    cacheHits++;
                } else {
                    // Cache miss
                    cacheMisses++;

                    if (cacheMemory.includes(null)) {
                        // Cache is not full, use first come first serve (FIFO) or direct mapping
                        cacheIndex = cacheMemory.findIndex((block) => block === null);
                    } else {
                        // Cache is full, use random replacement algorithm
                        cacheIndex = Math.floor(Math.random() * cacheSize);
                    }

                    // Update cache
                    cacheMemory[cacheIndex] = blockNumber;
                }

                // Update the text log only if it's a new step
                updateTextLog(`Step: ${totalAccesses}, Block: ${blockNumber}, Cache Hit: ${cacheHits}, Cache Miss: ${cacheMisses}`);

                // Update the cache table after each step
                updateCacheTable();

                // Increment the current step after completing the simulation for the current step
                currentStep++;

                // Display final statistics if the simulation is complete
                if (currentStep >= midRepeatSequence.length) {
                    displayFinalStatistics();
                }
            }
        }




        function updateCacheTable() {
            // Clear the table body before inserting new rows
            let tableBody = document.getElementById('cacheTable').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = '';

            for (let i = 0; i < cacheSize; i++) {
                let row = tableBody.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);

                cell1.innerHTML = i;
                cell2.innerHTML = cacheMemory[i] !== null ? cacheMemory[i] : '';
            }
        }

        function clearCacheTable() {
            // Clear the values under the "Data" column only
            let tableBody = document.getElementById('cacheTable').getElementsByTagName('tbody')[0];
            let rows = tableBody.getElementsByTagName('tr');

            for (let i = 0; i < rows.length; i++) {
                let cells = rows[i].getElementsByTagName('td');
                if (cells.length > 1) {
                    // Set the content of the second cell (Data) to an empty string
                    cells[1].innerHTML = '';
                }
            }
        }



        function stepByStep() {
            // Perform the selected test case
            let selectedTestCase = document.getElementById('testCases').value;
            if (selectedTestCase === 'sequential') {
                sequentialTest();
            } else if (selectedTestCase === 'random') {
                randomTest();
            } else if (selectedTestCase === 'midRepeat') {
                midRepeatTest();
            }
        }


        function skipToEnd() {
            // Code to skip to the end of the simulation
            let selectedTestCase = document.getElementById('testCases').value;
            if (selectedTestCase === 'sequential') {
                while (currentStep < memoryBlocks.length * 4) {
                sequentialTest();
                }
            } else if (selectedTestCase === 'random') {
                while (currentStep < memoryBlocks.length * 4) {
                randomTest();
                }
            } else if (selectedTestCase === 'midRepeat') {
                    // Generate the mid-repeat sequence
                let midRepeatSequence = generateMidRepeatSequence(memoryBlocks.length);
                while (currentStep < midRepeatSequence.length) {
                midRepeatTest();
                }
            }
            
        }

        function displayFinalStatistics() {
            let hitRate = cacheHits / totalAccesses;
            let missRate = cacheMisses / totalAccesses;

            updateTextLog(`--- Test Case Complete ---`);
            updateTextLog(`Total Accesses: ${totalAccesses}`);
            updateTextLog(`Cache Hits: ${cacheHits}`);
            updateTextLog(`Cache Misses: ${cacheMisses}`);
            updateTextLog(`Cache Hit Rate: ${(hitRate * 100).toFixed(2)}%`);
            updateTextLog(`Cache Miss Rate: ${(missRate * 100).toFixed(2)}%`);
        }

        function updateTextLog(message) {
            var textLog = document.getElementById('textLog');
            textLog.value += message + '\n';
        }