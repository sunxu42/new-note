# Displaying values with interpolation

> Interpolation use the double curly brace`{{`and `}}`as delimiters.

```html
<ng-container>{{ value }}</ng-container>
```



# Template expression

```html
<ng-container>{{ 1 + 1 + getValue() }}</ng-container>
```



# Expression context

*In the following snippet, the expression `recommended` and the expression `itemImageUrl2` refer to properties of the `Component`.*

```html
<h4>{{recommended}}</h4>
<img alt="item 2" [src]="itemImageUrl2">
```



An expression can also refer to properties of the *template's* context such as a [template input variable](https://angular.io/guide/structural-directives#shorthand) or a [template reference variable](https://angular.io/guide/template-reference-variables).



*The following example uses a template input variable of `customer`.*

```html
<ul>
  <li *ngFor="let customer of customers">{{customer.name}}</li>
</ul>
```



*This next example features a template reference variable, `#customerInput`.*

```html
<label>Type something:
  <input #customerInput>{{customerInput.value}}
</label>
```



# Statement context

The statement context may also refer to properties of the ==template's own context==.

In the following example, the `onSave()` takes the template's own `$event` object as an argument. The `deleteHero()` method takes a template input variable, `hero`, and `onSubmit()` takes a template reference variable, `#heroForm`.

```html
<button type="button" (click)="onSave($event)">Save</button>
<button type="button" *ngFor="let hero of heroes" (click)="deleteHero(hero)">{{hero.name}}</button>
<form #heroForm (ngSubmit)="onSubmit(heroForm)"> ... </form>
```





