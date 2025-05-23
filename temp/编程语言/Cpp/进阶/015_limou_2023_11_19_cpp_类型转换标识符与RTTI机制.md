---
title: 015_limou_2023_11_19_cpp_类型转换标识符与RTTI机制
createTime: 2025/04/09 13:05:16
permalink: /article/kg2jb443/
---
[TOC]

# 1.C 语言类型转化

```cpp
//C 风格的“隐式类型转化”和“显式类型转化”
void Test ()
{
    //隐式类型转换
    int i = 1;
    double d = i;
    printf("%d, %f\n", i, d);

    //显式强制转换
    int* ptr = &i;
    int value = (int) p;
    printf("%x, %d\n" , ptr, value);
}
```

`C` 语言的转换格式过于精简，有不少缺点的：

1.   数据精度容易丢失
2.   显式类型转换将所有情况混合在一起，代码不清晰

# 2.C++ 的类型转化

因此 `C++` 提出了新的类型转化风格，使用四个“强制类型转化运算符”。但因为 `C++` 要兼容 `C` 语言，所以 `C++` 中还可以使用 `C` 语言的转化风格，这也导致新风格变成提倡遵循的非硬性规则。

## 2.1.static_cast<>()

编译器隐式执行的任何类型转换都可以使用 `static_cast`，但它不能用于两个不相关的类型进行转换，这会引发编译器报错，因此该转化比 `C` 语言要更加严格。

```cpp
#include <iostream>
using namespace std;
int main()
{
	double d = 12.34;
	int a = static_cast<int>(d);//转化成功
	cout << a << endl;

	//int* p = static_cast<int*>(a);//转化失败
	
	return 0;
}
```

## 2.2.reinterpret_cast<>()

强制类型转化可以使用 `reinterpret_cast` 表明。

```cpp
#include <iostream>
using namespace std;
int main()
{
	double d = 12.34;
	int a = static_cast<int>(d);//转化成功
	cout << a << endl;

	//int* p = static_cast<int*>(a);//转化失败
	int* p = reinterpret_cast<int*>(a);//转化成功
	cout << p << endl;
	
	return 0;
}
```

是最不安全的类型转换方式，完全忽略了类型之间的实际关系，仅仅在二进制层面上进行转换。

## 2.3.const_cast<>()

`const_cast` 最常用的用途就是删除变量的 const 属性（这里的变量原本不具有 const 属性，但因为某些原因导致具有 const 属性），方便赋值。

```cpp
//使用 const_cast<> 的典型例子
#include <iostream>

struct type
{
    int _i;

    type(int i) :
        _i(3)
    {}

    void f(int v) const //2.2.展开等价于 const type const * this
    {
        //this->_i = v;                    //2.3.编译错误：this 是指向 const 的指针
        const_cast<type*>(this)->_i = v;   //2.4.由于调用的对象不是 const，因此这里就是 OK 的，修改没有带来危险
    }
};

int main()
{
    //1.使用普通的内置类型时
    int i = 3;                 //1.1.不声明 i 为 const
    const int& rci = i;        //1.2.常引用（但是引用的对象却不是 const 类型的）
    //rci = 4;                 //1.3.修改失败，明明 i 这个对象可以被修改，但是由于使用了常引用，导致无法修改（哪怕我们修改了 i 也不会什么危险）
    const_cast<int&>(rci) = 4; //1.4.修改成功，并且 i 的修改不会带来危险，毕竟 i 本身就可以被修改，只需要保证 rci 这个引用不能修改 i 值即可
    std::cout << "i = " << i << '\n';

    //2.使用用户的自定义类型时
    type t(3);
    t.f(4); //2.1.由于 struct 中没有定义非 const 的 f()，只有 const 类型的 f()，因此会调用 const 版本的 f()
    std::cout << "type::_i = " << t._i << '\n';

    //3.如果上述定义的时 const type t，那么使用 t.f(4) 将会是未定义行为，这点需要尤其注意

    return 0;
}
```

>   补充：上述例子来源于 [C++官网](https://zh.cppreference.com/w/cpp/language/const_cast) 您看前去一看...

但如果一个变量原本就有 `const` 属性，就需要您注意一些“奇怪”现象（其实就是未定义行为），免得“坑”到自己。

```cpp
//使用 const_cast<> 容易遇到的未定义行为
#include <iostream>
using namespace std;

void Test()
{
	const int a = 10;
	int* pa = const_cast<int*>(&a);
	*pa = 3;
	cout << a << endl; //输出 10，由于 a 是一个常量，因此就会导致这里提前被替换为 10，还来不及被指针修改
	cout << *pa << endl; //输出 3
}

int main()
{
	Test();
	return 0;
}
```

## 2.4.dynamic_cast<>()

可以将一个父类对象的“指针/引用”转换为子类对象的“指针/引用”（动态转换），避免危险的行为。

```cpp
#include <iostream>
using namespace std;

class Father
{
public:
	virtual void f() {}
};

class Son : public Father
{};

void fun(Father* pf)
{
	//dynamic_cast 会先检查是否能转化成功，能成功转化，不能则返回 nullptr
	//如果 pf 得到的是子类指针还好，但如果真的就是父类指针本身，转化为子类后就有可能会造成越界问题
	Son* pb1 = static_cast<Son*>(pf);
	Son* pb2 = dynamic_cast<Son*>(pf);
	cout << "pb1:" << pb1 << " pb2:" << pb2 << endl;
}
int main()
{
	Father f;
	Son s;

	fun(&f);
	fun(&s);

	return 0;
}
```

>   补充：另外，我们可以看出 `C++` 的“强制类型转化运算符”和函数的使用很类似，如果您以前完全没有学过这种转化方法，是很有可能当作函数来看待的（事实上某些语言就是这么做的，例如 `python` 的 `int()`、`float()`、`str()` 方法），因此 `C++` 针对老式的 `C` 强制转化，多了一种转化格式，目的是为转化过程看起来和函数调用一样：
>
>   ```cpp
>   //新的转化格式
>   #include <iostream>
>   using namespace std;
>   
>   int main()
>   {
>   	char ch = 'A';
>   	int number = int(ch); //等价于 (int)ch
>   	cout << ch << " = " << number << endl;
>   
>   	return 0;
>   }
>   
>   /* 输出结果
>   A = 65
>   */
>   ```

# 3.RTTI 机制

`RTTI` 即 `Run-time Type identification` 的简称，翻译为“运行时类型识别”。用于在运行时获取对象的实际类型信息，它允许程序在运行时判断对象的实际类型，以便进行相应的操作。而 `C++` 主要通过以下方式来支持 `RTTI`：

1. `typeid` 运算符，用于获取变量或表达式的类型信息，但它并不能直接得到类型对应的字符串。`typeid` 返回的是 `std::type_info` 类型的对象，代表被查询对象的类型信息。要将类型信息转换为字符串，通常需要使用 `type_info::name()` 方法

    ```cpp
    #include <iostream>
    #include <typeinfo>
    using namespace std;
    
    class Base
    {
        //...
    };
    
    class Derived : public Base
    {
        //...
    };
    
    int main()
    {
        Base* ptr1 = new Derived();
        Derived* ptr2 = new Derived();
    
        if (typeid(*ptr1) == typeid(Derived))
        {
            cout << "YES" << endl;
        }
        if (typeid(*ptr2) == typeid(Derived))
        {
            cout << "YES" << endl;
        }
    
        cout << typeid(ptr1).name() << endl;
    
        delete ptr1;
        delete ptr2;
        return 0;
    }
    ```

1. `dynamic_cast` 强制类型转化运算符也是 `RTTI` 机制的产物，上面有介绍如何使用，这里不再多说...

1. `decltype()` 类型推导，`auto` 只能在声明的时候简化声明长度，而这个工具可以由用户放置任意表达式来推断表达式的类型，同时灵活定义变量的类型

    ```cpp
    #include <iostream>
    #include <typeinfo>
    using namespace std;
    
    // 定义一个函数 func，返回类型为 int
    int func()
    {
        return 42;
    }
    
    int main()
    {
        //使用 decltype 推导出变量 a 的类型
        //a 的类型为 int，与 func() 的返回类型相同
        decltype(func()) a = 10;
    
        cout << typeid(a).name() << endl;
        return 0;
    }
    ```

    