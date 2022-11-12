# JavaScript Basics

## npm package update

<details>
<summary>Check Installed package globally</summary>

``` PowerShell
npm list -g
C:\Users\nagar\AppData\Roaming\npm
├── @angular/cli@14.2.8
├── @google/clasp@2.4.2
├── @loopback/cli@4.1.4
├── cors@2.8.5
├── firebase-tools@11.16.0
├── jshint@2.13.5
├── json-server@0.17.1
├── live-server@1.2.2
├── nodemon@2.0.20
├── npm@8.19.3
├── serve@14.0.1
└── typescript@4.8.4
```

</details>

<details>
<summary>Check updatable packages</summary>

``` PowerShell
npm outdated -g
Package       Current  Wanted  Latest  Location                   Depended by
@angular/cli   14.2.8  14.2.9  14.2.9  node_modules/@angular/cli  global
jshint         2.13.5  2.13.6  2.13.6  node_modules/jshint        global
npm            8.19.3   9.1.1   9.1.1  node_modules/npm           global
serve          14.0.1  14.1.1  14.1.1  node_modules/serve         global
```

</details>

<details>
<summary>Update all global packages</summary>

``` PowerShell
 npm update -g
```

</details>

---

### References

<details>
<summary>urls</summary>

[数値の操作](https://site-builder.wiki/posts/2218)

[[JavaScript] 全角⇔半角の変換を行う（英数字、カタカナ） - YoheiM .NET](https://www.yoheim.net/blog.php?q=20191101)

[JavaScriptで英数を全角/半角に変換する方法 - Qiita](https://qiita.com/yamikoo@github/items/5dbcc77b267a549bdbae)

[JavaScriptで全角⇔半角の変換をサンプルコード付き解説！ | Qumeruマガジン](https://qumeru.com/magazine/395)

[parseInt() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

[JavaScript で全角英数字を半角英数字に変換する - プログラムを書こう！](https://www.paveway.info/entry/2021/09/06/javascript_fullwidth2halfwidth)

[JavaScriptやTypeScriptでAverage(平均)を計算する方法](https://awesome-linus.com/2021/06/08/js-reduce-average/)

</details>
