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
