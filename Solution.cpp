
#include<deque>
#include<vector>
using namespace std;

class Solution {
    
public:

    int largestRectangleArea(vector<int>& heights) {

        const size_t size = heights.size();
        const int dummyValue = -1;
        int maxArea = 0;

        deque<int> stackIndexes;
        stackIndexes.push_back(dummyValue);

        for (int i = 0; i < size; i++) {
            while (stackIndexes.back() != dummyValue && heights[stackIndexes.back()] >= heights[i]) {
                int currentHeight = heights[stackIndexes.back()];
                stackIndexes.pop_back();
                int currentWidth = i - stackIndexes.back() - 1;
                maxArea = max(maxArea, (currentHeight * currentWidth));
            }
            stackIndexes.push_back(i);
        }

        while (stackIndexes.back() != dummyValue) {
            int currentHeight = heights[stackIndexes.back()];
            stackIndexes.pop_back();
            int currentWidth = size - stackIndexes.back() - 1;
            maxArea = max(maxArea, (currentHeight * currentWidth));
        }
        return maxArea;
    }
};
