function getSecondLargest(nums) {
    // const secLagNum = [... new Set(nums.sort((a,b) => b-a))]

    return [...new Set(nums.sort((a, b) => b - a))][1];

    //O(n) solution
    //for (let i = 0; i < nums.length; i++) {

    //     if (nums[i] > first) {
    //         second = first;
    //         first = nums[i]
    //     }

    //     if (nums[i] > second && nums[i] < first) {
    //         second = nums[i];
    //     }
    // }

    // return second;
}
