# mathjs-geo
A library of coordinate system math calculation. 

坐标系数学计算方法库。




## Usage 使用

下载release的文件或者``npm install --save mathjs-geo``，支持以下任一方式加入前端项目中：

1、作为JS文件通过``<script>``引入html中：

```html
<script src="./dist/mathjs-geo.min.js"></script>
```

2、支持ES6+的import引入：

```javascript
import mathgeo from 'mathjs-geo';
```

3、支持CommonJS语法引入：

```javascript
const mathgeo = require('mathjs-geo');
```



## API Doc 方法文档

### Math 数学方法

As we know, float number arithmetic is inaccurate. **mathgeo** provides four more accurate functions(add, subtract, multiply, and divide). 

正如我们所知，浮点数运算是不精确的，**mathgeo**提供了加减乘除的4个方法，能让浮点数运算也能得到较为精确的结果。

- add 加法

  ```javascript
  mathgeo.add(1.24, 567.0932); // 568.3332
  mathgeo.add(0.312, 690.4, 78, 33.34); // 802.052
  ```

- sub 减法

  ```javascript
  mathgeo.sub(1.24, 1); // 0.24
  mathgeo.sub(87.4, 1.028, 99.09); // -12.718
  ```

- multi 乘法

  ```javascript
  mathgeo.multi(3.4, 61.812, 2); // 420.3216
  ```

- div 除法

  ```javascript
  mathgeo.div(5, 2, 3, 4.2); // 0.19841269841269843
  ```

In addition, round method can help you round the float number.

另外，还有四舍五入的方法，保留n位小数。

- round 四舍五入

  ```javascript
  mathgeo.round(23.1119, 0); // 23
  mathgeo.round(23.1119, 1); // 23.1
  mathgeo.round(23.1119, 2); // 23.11
  mathgeo.round(23.1119, 3); // 23.112
  ```



### Geography 地理方法

At present, only 2d methods are supported, and 3d methods will be added in the future. 

目前只支持2d的方法，未来将补充3d的方法。

#### 2D

The following methods are based on a two-dimensional coordinate system, where each point in space has coordinates (x, y) representing its position.

以下方法基于二维坐标系，即空间内每个点都有坐标(x, y)表示其位置。

- **getKB([[x1, y1], [x2, y2]])**

  Calculate the **k** and **b** of the equation **y=k*x+b**. points [x1, y1] and [x2, y2] are  on the line **y=k*x+b**. 

  求斜截式**y=k*x+b**的k与b。点[x1, y1]和点[x2, y2]在直线 **y=k*x+b** 上。

  ```javascript
  mathgeo.getKB([[0.5, 1.5], [2.5, 1]]); // {k: -0.25, b: 1.625}
  mathgeo.getKB([[0.5, 1.5], [2.5, 1.5]]); // {k: 0, b: 1.5}
  mathgeo.getKB([[0.5, 1.5], [0.5, 3]]); // null（直线与y轴平行，返回null）
  ```

- **getVertical([x, y], [[x1, y1], [x2, y2]], l)**

  Find the coordinates of both ends of the line segment whose length is **l** and is perpendicular to the straight line [[x1, y1], [x2, y2]]. The required line segment is divided equally by point [x,y].

  求过点[x,y]并与直线垂直的长度为l的线段两端点坐标(所求线段被点[x,y]平分)。

  ```javascript
  mathgeo.getVertical([4, 2.125], [[6.5, 1.5], [0.5, 3]], 10); // [[2.787,-2.727],[5.213,6.977]]
  ```


- **getParallel([x, y], [[x1, y1], [x2, y2]], l)**

  Find the coordinates of both ends of the line segment whose length is **l** and is parallel to the straight line [[x1, y1], [x2, y2]]. The required line segment passes through the point [x,y] and is divided equally by point [x,y].

  求过点[x,y]作与直线平行的长度为l的线段两端点坐标(所求线段被点[x,y]平分)。

  ```javascript
  mathgeo.getParallel([1, 1], [[6.5, 1.5], [0.5, 3]], 10); // [[-3.851,2.213],[5.851,-0.213]]
  ```

- **getExtension([x, y], [[x1, y1], [x2, y2]], l)**

  Find the coordinates of the points where the distance between [x, y] and the point is **l** ([x, y] and the required points are all on the line [[x1, y1], [x2, y2]]).

  求直线[[x1, y1], [x2, y2]]上与点[x,y]的距离为l的点的坐标(点[x,y]也在直线上)。

  ```javascript
  mathgeo.getExtension([4, 2.125], [[6.5, 1.5], [0.5, 3]], 10); // [[-5.701,4.55],[13.701,-0.3]]
  ```

- **getAngle([[x1, y1], [x2, y2]])**

  Get the angle of the line [[x1, y1], [x2, y2]].

  求直线[[x1, y1], [x2, y2]]的角度(从X轴正向逆时针旋转的角度)。

  ```javascript
  mathgeo.getAngle([[1, 1], [2, 2]]); // -135
  ```

- **getYFromX(x, [[x1, y1], [x2, y2]])**

  Knowing the coordinates of the two points on the line and the x coordinate of third point, find the y coordinate of the third point.

  已知直线上两点和第三点的x坐标，求出第三点的y坐标。

- **getXFromY(y, [[x1, y1], [x2, y2]])**

  Knowing the coordinates of the two points on the line and the y coordinate of third point, find the x coordinate of the third point.

  已知直线上两点和第三点的y坐标，求出第三点的x坐标。

  ```javascript
  mathgeo.getYFromX(4, [[6.5, 1.5], [0.5, 3]]); // 2.125
  mathgeo.getXFromY(2.125, [[6.5, 1.5], [0.5, 3]]); // 4
  ```

- **lineCross([[x1, y1], [x2, y2]], [[x3, y3], [x4, y4]])**

  Determine whether the two line segments intersect (line1: [[x1, y1], [x2, y2]], line2: [[x3, y3], [x4, y4]]). If they intersect, return the coordinates of the intersection point. If they do not intersect, return false.

  判断两线段是否相交(点1与点2组成线段1，点3与点4组成线段2)，相交返回交点坐标，不相交返回false。

  ```javascript
  mathgeo.lineCross([[0, 0], [6, 6]], [[6.5, 1.5], [0.5, 3]]); // [2.5, 2.5]
  mathgeo.lineCross([[0, 0], [1, 1]], [[6.5, 1.5], [0.5, 3]]); // false
  ```

- **getClosestPointIdx([x, y], pointGroup, minDist)**

  Find the index of the point in the **pointGroup** which is nearest to point[x,y], to meet the distance less than **minDist**, and return -1 if none is not satisfied.

  找出点集合pointGroup中距离点[x,y]最近的点下标，要满足距离小于minDist，如果没有满足的返回-1。

  ```javascript
  const pointGroup = [
      [0, 1],
      [2.5, 6],
      [2.6, -9]
  ];
  mathgeo.getClosestPointIdx([0, 0], pointGroup, 1.5); // 0
  mathgeo.getClosestPointIdx([10, 1], pointGroup, 5); // -1
  ```

- **getClosetLineIdx([x, y], lineGroup, minDist)**

  Find the index of the line in the **lineGroup** which is nearest to point[x,y], to meet the distance less than **minDist**, and return -1 if none is not satisfied.

  找出线集合lineGroup中距离点[x,y]最近的线下标，要满足距离小于minDist，如果没有满足的返回-1。

  ```javascript
  const lineGroup = [
      [[0, 1], [1, 2]],
      [[3.5, 6], [-12, 9]],
      [[2, 5], [9, -11.6]]
  ];
  mathgeo.getClosetLineIdx([9, -8], lineGroup, 10); // 2
  mathgeo.getClosetLineIdx([1000, -8], lineGroup, 10); // -1
  ```

- **pointOnLine([x, y], [[x1, y1], [x2, y2]], t)**

  Determine if the point is on line segment. **t** is the deviation value (default is 0.01). If the deviation range is less than **t**, the point is also considered to be on the line segment.

  判断点是否在线段上。t为偏差值(默认为0.01)，如果偏差范围小于t，也认为在线段上。

  ```javascript
  const line = [[0.5, 6.77], [10.654, 4.5628]];
  mathgeo.pointOnLine([4.3, 5.9], line, 0.01); // true
  mathgeo.pointOnLine([4.3, 5.1], line, 0.5); // true
  mathgeo.pointOnLine([4.3, 5.1], line, 0.05); // false
  ```

  ​

To be continued...