---
title: "2025 6月 程式設計期末考 題庫解題紀錄"
description: "Writeup"
date: 2025-06-11
tags: ["Writeup"]
---

雲科資工 113 下學期 程式設計 期末考

老師: 林義隆 教授

=

大概是把沒寫過的題目寫過一次，解題思路大多用"建表查表"。

太簡單的我不會另外寫思路。

```
考試範圍:
CPE-0101A：連續輸入-先量後物-兩數之和 

CPE-0101B：連續輸入-先量後物-奇偶判斷
CPE-0102A：連續輸入-量量後物-多數之和 
CPE-0102B：連續輸入-量量後物-奇偶判斷 
CPE-0103A：連續輸入-檔尾結束-兩數之和    
CPE-0103B：連續輸入-檔尾結束-奇偶判斷    
CPE-0104A：連續輸入-單零結尾-單數奇偶    
CPE-0104B：連續輸入-飄零結尾-兩點之和    
CPE-0105A：連續輸入-井然有序-拼字檢查    
CPE-0105B：連續輸入-文零結尾-大數九九    
CPE-0106A：連續輸入-檔行結尾-多數之和    
CPE-0106B：連續輸入-檔行結尾-多項式和    
CPE-0107A：連續輸入-偷看放回-科學二則  
CPE-0107B：連續輸入-偷看放回-聚合計算    
CPE-0108A：連續輸入-遺落換行-整數排序  
CPE-0108B：連續輸入-遺落換行-月日換算  

CPE-0201A：串碼四入-字碼略白-整數三則    
CPE-0201B：串碼四入-字串略白-串頻統計    
CPE-0202A：串碼四入-字碼通吃-大小互換    
CPE-0202B：串碼四入-字碼通吃-去除標籤    
CPE-0203A：串碼四入-字串整行-行串統計    
CPE-0203B：串碼四入-字串整行-逗串統計    
CPE-0204A：串碼四入-混合運用-整數二則    
CPE-0204B：串碼四入-混合運用-單位四則    
           
CPE-0301A：井然有序-重複排序-內建排序
CPE-0301B：井然有序-重複排序-袋內排序

01.UVA10041 - Vito's Family
03.UVA10035 - Primary Arithmetic
04.UVA100 - The 3n+1 problem
06.UVA10101 - Bangla Numbers
10.UVA11332 - Summing Digits
```

### CPE-0105A

```c++
#include "bits/stdc++.h"

using namespace std;

int main (){
	vector<string>L;
	string tmp;
	bool j = true;
	while (cin >> tmp){
		if (tmp != "#"){
			if (j){
				L.push_back(tmp);
			}
			else{
				j = false;
				for (int i = 0 ; i < L.size(); i++){
					if (tmp == L[i]){
						cout << "YES" << endl;
						break;
					}
					else if (i == L.size()-1){
						cout << "NO" << endl;
					}
				}
			}
		}
		else {
			j = false;
		}
	}
}
```

### CPE-0108A

```c++
#include "bits/stdc++.h"

using namespace std;

int main(){
	int c;
	while (cin >> c){
		cin.ignore();
		for (int i = 0 ; i < c ; i++){
			string inp, tmp;
			getline(cin, inp);
			vector<int> L;
			for (int j = 0 ; j < inp.size();j++){
				if (inp[j] != ' '){
					tmp += inp[j];
					if (j == inp.size()-1){
						L.push_back(stoi(tmp));
					}
				}
				else {
					L.push_back(stoi(tmp));
					tmp = "";
				}
			}
			sort(L.begin(), L.end());
			
			for (int j = 0 ;j < L.size();j++){
				cout << L[j];
				if (j != L.size()-1){
					cout << " ";
				}
			}
			cout << endl;
		}
	}
}
```


### CPE-0108B

idea: 判斷輸入的第一個東西是不是數字，不是->轉換成數字，是->不影響直接輸出。

```c++
#include "bits/stdc++.h"
using namespace std;
string L[12] = {"Jan","Feb","Mar","Apr","May","Jun"
,"Jul","Aug","Sep","Oct","Nov","Dec"};

int main()
{
	int c;
	string inp;
	while (cin >> c){
		for (int i = 0 ; i < c ; i++){
			string m,d;
			cin >> m;
			cin >> d;
			if (!isdigit(m[0])){
				for (int j = 0; j < 12 ; j++){
					if (L[j] == m){
						cout << j+1 << " " << d << endl;
					}
				}
			}
			else{
				cout << stoi(m) << " " << d << endl;
			}
		}
	}
}

### UVA10041