#Number of Distinct Islands Problem

#DFS approach

#By Vishakha V

import sys
from typing import List
class Solution:
    
    sys.setrecursionlimit(10**8)

    def dfs(self,row,col,visited,vector,grid,row0,col0):
        visited[row][col]=1
        m = len(grid)
        n = len(grid[0])
        vector.append(str(row-row0)+" "+(str(col-col0)))
        del_row=[-1,0,1,0]
        del_col = [0,-1,0,1]
        for i in range(4):
            n_row = row + del_row[i]
            n_col = col + del_col[i]
            if n_row>=0 and n_row<m and n_col>=0 and n_col<n and visited[n_row][n_col]==0 and grid[n_row][n_col]==1:
                self.dfs(n_row,n_col,visited,vector,grid,row0,col0)
                
                
    
    def countDistinctIslands(self, grid : List[List[int]]) -> int:
        # code here
        m = len(grid)
        n = len(grid[0])
        res=set()
        visited = [[0 for j in range(n)] for i in range(m)]
        for i in range(m):
            for j in range(n):
                if visited[i][j]==0 and grid[i][j]==1:
                    vector=[]
                    self.dfs(i,j,visited,vector,grid,i,j)
                    res.add(tuple(vector))
        return len(res)
                

#{ 
 # Driver Code Starts
#Initial Template for Python 3

#This will be given by the Coding Platform
if __name__=="__main__":
    for _ in range(int(input())):
        n,m=map(int,input().strip().split())
        grid=[]
        for i in range(n):
            grid.append([int(i) for i in input().strip().split()])
        obj=Solution()
        print(obj.countDistinctIslands(grid))
# } Driver Code Ends
