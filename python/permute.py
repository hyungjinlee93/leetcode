class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        visited = set()
        perms = []
        def helper(perm):
            for x in range(0, len(nums)):
                if nums[x] not in visited:
                    visited.add(nums[x])
                    perm.append(nums[x])
                    if len(perm) == len(nums):
                        perms.append(perm[0:])
                    else:
                        helper(perm)
                    visited.remove(nums[x])
                    perm.pop()
        helper([])
        return perms
        
