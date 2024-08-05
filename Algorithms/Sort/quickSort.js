function partition(nums, left, right) {
    // Choose the pivot as the first element in the subarray
    const pivot = nums[left];
    
    // Initialize pointers
    let start = left + 1;
    let end = right;
  
    // Continue processing while start pointer is less than or equal to end pointer
    while (start <= end) {
      // Move the end pointer to the left to find an element less than the pivot
      while (start <= end && nums[end] >= pivot) {
        end--;
      }
  
      // Move the start pointer to the right to find an element greater than the pivot
      while (start <= end && nums[start] <= pivot) {
        start++;
      }
  
      // Swap elements if start pointer is still less than or equal to end pointer
      if (start < end) {
        // Swap nums[start] and nums[end]
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
      }
    }
  
    // Swap the pivot element with the element at the end pointer
    // This places the pivot in its correct position
    let temp = nums[left];
    nums[left] = nums[end];
    nums[end] = temp;
  
    // Return the index where the pivot is now located
    return end;
  }
  
  
  function quickSort(nums, left, right) {
    if (left < right) {
      // Partition the array and get the pivot index
      let pivotIndex = partition(nums, left, right);
      // Recursively sort the subarray before the pivot
      quickSort(nums, left, pivotIndex - 1);
      
      // Recursively sort the subarray after the pivot
      quickSort(nums, pivotIndex + 1, right);
    }
  }
  
  // Example usage:
  let nums = [3, 6, 8, 10, 1,5,0, 2, 1];
  console.log("Original array:", nums);
  
  quickSort(nums, 0, nums.length - 1);
  
  console.log("Sorted array:", nums);
  