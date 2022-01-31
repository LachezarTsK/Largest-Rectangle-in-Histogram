
import java.util.ArrayDeque;
import java.util.Deque;

public class Solution {

    public int largestRectangleArea(int[] heights) {

        final int size = heights.length;
        final int dummyValue = -1;
        int maxArea = 0;

        Deque<Integer> stackIndexes = new ArrayDeque<>();
        stackIndexes.push(dummyValue);

        for (int i = 0; i < size; i++) {
            while (stackIndexes.peek() != dummyValue && heights[stackIndexes.peek()] >= heights[i]) {
                int currentHeight = heights[stackIndexes.pop()];
                int currentWidth = i - stackIndexes.peek() - 1;
                maxArea = Math.max(maxArea, (currentHeight * currentWidth));
            }
            stackIndexes.push(i);
        }

        while (stackIndexes.peek() != dummyValue) {
            int currentHeight = heights[stackIndexes.pop()];
            int currentWidth = size - stackIndexes.peek() - 1;
            maxArea = Math.max(maxArea, (currentHeight * currentWidth));
        }
        return maxArea;
    }
}
