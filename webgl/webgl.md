#GSLS着色器语言
## 变量声明 
1. 存储限定符
```
	attribute 顶点相关
	unifrom 全局顶点
	textures 纹理变量
	Varying 可变变量
```
2. 数据类型
- 矢量```浮点型 整型 布尔类型```
> 对应一个三维的坐标，3个点的类型一致
- 矩阵
> 多维的数组
## 顶点着色器的内置变量
- vec4 gl_Positon```必须被赋值```
- float gl_PointSize```默认值1.0```