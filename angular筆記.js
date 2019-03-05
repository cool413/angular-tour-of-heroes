Angular 筆記

VSCODE:
Terminal: CTR+~
呼叫 命令選擇區:  Ctrl + Shift + P

行註解: Ctrl + K Ctrl + C	
取消註解: Ctrl + K Ctrl + U 
開啟 / 關閉檔案總管: CTR+B
縮排: alt + shift + f
縮排會單引轉雙引號問題解決:
https://dotblogs.com.tw/h20/2018/04/30/143848

----------------------------------------------------------------
Angular CLI 指令:
ng new 名稱:創建新的目錄並在新目錄下運行ng init命令
ng serve:啟動
ng serve -o :啟動後開啟http://localhost:4200/
使用Angular CLI創建一個名為heroes的新組件。

Angular:
<h1>{{title}}</h1>:
	雙花括號{{}}是Angular的插值綁定語法。此插值綁定title在HTML標頭標記內顯示組件的屬性值。

HeroesComponent 的類文件如下：
@Component 是個裝飾器函數，用於為該組件指定Angular 所需的元數據。

CLI 自動生成了三個元數據屬性：

selector— 組件的選擇器（CSS 元素選擇器）

templateUrl— 組件模板文件的位置。

templateUrl- 組件模板文件的位置。

styleUrls— 組件私有CSS 樣式表文件的位置。