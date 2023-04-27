
#include <iostream>
#include <vector>

using std::vector;

class Solution;

class Solution
{
public:
	vector<vector<int>> getAncestors(int n, vector<vector<int>> &edges)
	{
		vector<int> adj[n];
		for (int i = 0; i < edges.size(); i++)
		{
			int u = edges[i][0];
			int v = edges[i][1];
			adj[u].push_back(v);
		}

		vector<vector<int>> rez(n);
		for (int i = 0; i < n; i++)
		{
			vector<bool> viz(n, false);
			dfs(adj, i, viz);

			for (int j = 0; j < n; j++)
			{
				if (viz[j] && i != j)
				{
					rez[j].push_back(i);
				}
			}
		}
		return rez;
	}

private:
	void dfs(vector<int> adj[], int s, vector<bool> &viz)
	{
		viz[s] = true;
		for (auto x : adj[s])
		{
			if (!viz[x])
			{
				dfs(adj, x, viz);
			}
		}
	}
};

int main()
{
	std::cout << "well?";
	Solution *sol; //= new Solution();
try{

	vector<vector<int>> g {
			{0, 3},
			{0, 4},
			{1, 3},
			{2, 4},
			{2, 7},
			{3, 5},
			{3, 6},
			{3, 7},
			{4, 6},
	};
vector<vector<int>> solution = 	sol->getAncestors(8, g);
	for(auto& arr:solution){
		std::vector<int> eachItem(arr);
		for(auto& item:eachItem){
			// std::string s(item.begin(),item.end());
			std::cout << item;
		}
	}
	std::cout << "well?";
}catch(...){
	// std::cerr << e.what() << std::endl;
	std::cout <<"some error" ;
}
	return 0;
}