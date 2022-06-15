# Angular 企业实战开发

## 1. 概述 Overview

框架定位

- 使用 HTML、CSS、TypeScript构建客户端应用的框架，~~用于构建单页应用程序~~
- 重量级的框架，内部集成了大量开箱即用的功能模块
- 为大型应用的开发而设计，提供了干净且松耦合的代码组织方式，使应用程序整洁更易于维护

## 2. 架构预览

### 2.1 模块 Module

Module： 一组相关功能的集合，专注于某个应用领域，可以将组件和一组相关代码关联起来，是应用组织代码结构的一种方式。

`Angular应用是由一个个模块（Module）组成的。至少要有一个根Module，用于启动应用程序。`

 

A模块导出了某个功能，B模块就可以引入该功能。

decorator: ==@NgModule==

<!--在下面代码中，导出了一个由NgModule所修饰的AppModule-->

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule
  ]
})
export class AppModule { }
```

### 2.2 组件 Component

`Angular应用中至少要有一个根组件，用于应用程序的启动。`

decorator: ==@Component==

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
```

Module为组件提供了编译的上下文环境

```typescript
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2.3 服务 Service

服务用于放置和特定组件无关并希望跨组件共享的数据或逻辑。

服务出现的目的在于解耦组件类中的代码，使组件中的代码干净整洁。

decorator: ==@Injectable==

``` typescript
import { Injectable } from '@angular/core';

@Injectable({})
export class AppService { }
```



在组件中，通过constructor构造函数的参数来获取服务的实例对象。

Angular会根据你指定的服务类型来传递你想要使用的服务实例对象。

在Angular中服务被设计为单例模式[^1]，这也是为什么服务可以被用来在组件之间共享数据和逻辑的原因。

```typescript
import { AppService } from './AppService';

export class AppComponent {
  constructor (
    // 如果想要在 template 中使用该 service， 应该声明为 public 类型
  	private readonly _appService: AppService
  ) {}
}
```

## 3. 快速开始

### 3.1 创建应用

1. 安装 angular-cli: `npm install @angular/cli -g`

2. 创建应用：`ng new ${applicationName} --minimal --inlineTemplate false`

   <!--如果报ng: command not found, 把node_global的path添加到环境变量中即可-->

[^1]:如A，B组件共享一个service， A组件修改了服务中的一个值，那么B组件中获取到的该值也会发生同样的改变

### 3.2 默认代码解析

#### 3.2.1 main.ts

```typescript
import { enableProdMode } from '@angular/core';
// Angular 应用程序的启动，在不同平台是不一样的
// 在浏览器中启动是需要用到 platformBrowserDynamic 方法，该方法返回平台实例对象
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The root module for starting the application
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Enable product mode in production process
// Builder工具会根据生产或开发，使用不同的 environment 文件进行打包
if (environment.production) {
  enableProdMode();
}

// Start application
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```

#### 3.2.2 index.html

Application的入口文件。

#### 3.2.3 app directory

Application的入口模块。

### 3.3 共享模块

在app下面添加一个shared文件夹，用于放置共享的文件。

#### 3.3.1 创建共享模块

`ng g m ${moduleName}` 会创建一个名为`${moduleName}`的module

<!--g: generate m: module moduleName: path and module name-->

`ng g c ${componentName}` 会创建一个名为`${componentName}`的component

<!--componentName: path and component name-->

## 4. 组件模板

### 4.1 数据绑定

数据驱动模板，Model-View-ViewModel

插值表达式 

### 4.2 属性绑定

#### 4.2.1 普通属性

1. Dom对象属性

   ```html
   <img [src]="imgUrl" />
   ```

   

2. HTML标记属性

   <!--若元素没有该属性，则会在渲染的元素上生成 data-colspan 属性 -->

   ```html
   <td [attr.colspan]="colSpan"></td>
   ```

   

#### 4.2.2 class属性

```html
<div class="normal"></div>
<div [ngClass]="'div-size--'large, 'div-color--'red"></div>
<div [class.isDisabled]="isDisabled"></div>
```

#### 4.2.3 style属性

```html
<div style="color:red"></div>
<div [ngStyle]="styleObject"></div>
<div [style.background]="red"></div>
```

### 4.3 事件绑定

```html
<div (click)="onClick()" (keydown)="onKeyDown($event)" (keydown.enter)="onEnter()"></div>
```

### 4.4 获取DOM对象

```html
<input #inputRef /> 
<ul>
  <li #li></li>
  <li #li></li>
  <li #li></li>
</ul>
```

```ty
@ViewChild('inputRef')
inputRef: ElementRef

@ViewChildren('li')
li: QueryList<ElementRef>

this.inputRef?.nativeElement

this.li?.toArray()[0].nativeElement

```

### 4.5内容投影

==ng-content==

==ng-container==



### 4.8 全局样式

<!-- 在最外层的 style.css 文件中引入 -->

`import "-bootstrap/dist/css/bootstrap.css"`

<!-- 在angular.json文件中配置 -->

```json
"style": [
  './node_modules/bootstrap/dist/css/bootstrap.min.css',
  'src/style.css'
]
```

00
