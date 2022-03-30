# Overview

Each component consists of:
* selector
* template  /  templateUrl
* style     /  styleUrls
* typescript class

## Prerequisites

* Install the Angular Cli
* Create an Angular workspace

## Creating a component

### Using Angular CLI

Run `ng generate component <component-name>` command in your application

### Manually

Create a typescript file in directory as below
* component-name
    - <component-name>.component.ts

```typescript
import { Component } from '@angular/core';

@Component({
  selector: '<component-name>',
  templateUrl: './<component-name>.component.html',
  styleUrls: ['./<component-name>.component.css'],
})

export class CpNameComponent {
  
}
```
