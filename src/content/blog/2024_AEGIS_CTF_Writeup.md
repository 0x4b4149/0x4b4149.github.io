---
title: "2024 AEGIS 神盾盃 Writeup"
description: "Writeup"
date: 2024-09-14
tags: ["Writeup"]
---

隊名: 從缺 rk.11

我只解出一題，我超廢，隊友超給力!

![image](https://0x4b4149.github.io/2024_AEGIS_CTF/scoreboard.PNG)

## REV - Calculator

先用 die 看一下用啥寫的，很好，C#

![image](https://0x4b4149.github.io/2024_AEGIS_CTF/die.PNG)

用 dnspy 看一下寫了啥東西，這邊看起來就怪怪的，有藏一些東西在裡面

![image](https://0x4b4149.github.io/2024_AEGIS_CTF/dnspy.PNG)

把這段 code 直接塞上去 online compiler，直接出 flag

code(整理過的):
```C#
using System;

using System.Text;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        string text3 = "1565023222387235312162663";
		string text4 = string.Format("{0}", (long.Parse(text3.Substring(0, 5)) ^ 56L) + 65681531L) + string.Format("{0}", (long.Parse(text3.Substring(5, 4)) ^ 8L) + 83121454L) + string.Format("{0}", (long.Parse(text3.Substring(9, 8)) ^ 56L) + 65681531L) + string.Format("{0}", (long.Parse(text3.Substring(17, 8)) ^ 8L) + 83121454L);
		int[] array = new int[]
		{
			2,
			2,
			2,
			2,
			2,
			3,
			2,
			2,
			2,
			2,
			2,
			2,
			2,
			2,
			3
		};
		StringBuilder stringBuilder = new StringBuilder();
		int num = 0;
		foreach (int num2 in array)
		{
			string s = text4.Substring(num, num2);
			int num3 = int.Parse(s);
			char value = (char)num3;
			stringBuilder.Append(value);
			num += num2;
		}
        Console.WriteLine (stringBuilder.ToString());
    }
}
```

flag: `AEGIS{N0_5WE4T}`