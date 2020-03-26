class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        def stackPop(char):
            if len(stack) > 0:
                if stack.pop() != char:
                    return False
                else:
                    return True
            else:
                return False
        for i in range(0, len(s)):
            if s[i] == '(':
                stack.append('p')
            elif s[i] == '[':
                stack.append('bk')
            elif s[i] == '{':
                stack.append('bc')
            elif s[i] == ')':
                if stackPop('p') == False:
                    return False
            elif s[i] == ']':
                if stackPop('bk') == False:
                    return False
            elif s[i] == '}':
                if stackPop('bc') == False:
                    return False
        if len(stack) > 0:
            return False
        else:
            return True

