/*
    *** Question #1 Google Interview Question Two Sum (Easy) ***
    
*/

/*
    Given an integer array nums sorted in non-decreasing order, 
    remove the duplicates in-place such that each unique element appears only once. 
    The relative order of the elements should be kept the same.

    Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. 
    After removing duplicates, return the number of unique elements k.

    The first k elements of nums should contain the unique numbers in sorted order. 
    The remaining elements beyond index k - 1 can be ignored.
*/
/*
    # Walk-through of `removeDuplicates` (step-by-step with example)

    You already have the correct in-place algorithm. I’ll explain **every step** so it’s crystal clear what the function does, why it works, and what the returned number means.

    ---

    ## The code (annotated)

    ```ts
    function removeDuplicates(nums: number[]): number {
        let left = 1;                        // index where next unique element will be placed
        for (let right = 1; right < nums.length; right++) {  // scan from index 1 to end
            if (nums[right] !== nums[right - 1]) {          // found a new unique value
                nums[left] = nums[right];                   // write it at `left`
                left++;                                     // move `left` to next write position
            }
        }
        return left;                    // number of unique elements (length of deduped prefix)
    };
    ```

    ---

    ## High-level idea (one-sentence)

    Because the array is **sorted**, equal values are adjacent. We scan with `right` to find the next *different* value and copy it forward to position `left`. `left` always points at where to place the next unique value. The function returns `left`, the count of unique elements.

    ---

    ## Example

    Input:
    `nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]`

    Initial state:

    * `left = 1`
    * `right` will iterate from `1` to `9` (array length − 1)

    I’ll show each `right` step: compare `nums[right]` with `nums[right-1]`, action taken, and array after action.

    | step  | right | nums[right] | nums[right-1] | equal? |                  Action                  | `left` after action | Array state (full)    |
    | ----- | ----: | :---------: | :-----------: | :----: | :--------------------------------------: | :-----------------: | --------------------- |
    | start |     — |      —      |       —       |    —   |                     —                    |          1          | [0,0,1,1,1,2,2,3,3,4] |
    | 1     |     1 |      0      |       0       |   yes  |                  nothing                 |          1          | [0,0,1,1,1,2,2,3,3,4] |
    | 2     |     2 |      1      |       0       |   no   | `nums[1]=1` → write 1 at index 1; left++ |          2          | [0,1,1,1,1,2,2,3,3,4] |
    | 3     |     3 |      1      |       1       |   yes  |                  nothing                 |          2          | [0,1,1,1,1,2,2,3,3,4] |
    | 4     |     4 |      1      |       1       |   yes  |                  nothing                 |          2          | [0,1,1,1,1,2,2,3,3,4] |
    | 5     |     5 |      2      |       1       |   no   |            `nums[2]=2`; left++           |          3          | [0,1,2,1,1,2,2,3,3,4] |
    | 6     |     6 |      2      |       2       |   yes  |                  nothing                 |          3          | [0,1,2,1,1,2,2,3,3,4] |
    | 7     |     7 |      3      |       2       |   no   |            `nums[3]=3`; left++           |          4          | [0,1,2,3,1,2,2,3,3,4] |
    | 8     |     8 |      3      |       3       |   yes  |                  nothing                 |          4          | [0,1,2,3,1,2,2,3,3,4] |
    | 9     |     9 |      4      |       3       |   no   |            `nums[4]=4`; left++           |          5          | [0,1,2,3,4,2,2,3,3,4] |

    End of loop: `left = 5`

    **Return value:** `5`

    **Meaning:** the first `5` elements of `nums` are the unique values: `[0,1,2,3,4]`. The remaining elements after index `4` are irrelevant — the function only guarantees the first `left` positions.

    ---

    ## Why `left` starts at 1

    * The first element `nums[0]` is always part of the unique set (if the array is non-empty). So we leave it in place and set `left = 1` to indicate the next free position to place a new unique element.
    * `right` also starts at 1 because we compare each element with the previous one (`nums[right] !== nums[right-1]`).

    ---

    ## Edge cases

    * Empty array `[]` → loop never runs; `left` was never initialized by code when using `let left = 1` — **so** you must handle `nums.length === 0` separately. (Your current function will return `1` incorrectly for an empty array in TypeScript unless you guard.)

    * Fix: add at top:

        ```ts
        if (nums.length === 0) return 0;
        ```
    * Single element `[7]` → loop does not run; function returns `1` (correct).
    * All duplicates `[2,2,2,2]` → `left` never increments; returns `1`, first element is `2` (correct).

    ---

    ## Corrected complete function with empty-array guard

    ```ts
    function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0; // handle empty array
    let left = 1;
    for (let right = 1; right < nums.length; right++) {
        if (nums[right] !== nums[right - 1]) {
        nums[left] = nums[right];
        left++;
        }
    }
    return left;
    }
    ```

    ---

    ## Complexity

    * Time: **O(n)** — single pass through the array.
    * Extra Space: **O(1)** — in-place, only a couple of integer variables used.

    ---

    ## Quick intuition recap

    * Use two pointers: `right` scans every element; `left` marks where to copy the next *new* value.
    * Because the array is sorted, a value is new exactly when it differs from the previous element.
    * After the function, the first `k = left` positions contain the unique sorted values.

    ---

    If you want, I can also:

    * Show a visual animation-style step trace for a different example, or
    * Convert this to a version that returns the deduplicated array slice (e.g., `nums.slice(0, left)`) for demonstration. Which would you prefer?


*/

