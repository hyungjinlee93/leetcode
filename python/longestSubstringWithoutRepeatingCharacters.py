class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) < 2:
            return len(s)
        left, right, longest = 0, 1, 0
        charset = {s[left]}
        while right < len(s):
            if s[right] not in charset:
                charset.add(s[right])
                longest = max(longest, right - left)
                right += 1
            else:
                charset.remove(s[left])
                left += 1
        return longest + 1
        
        
