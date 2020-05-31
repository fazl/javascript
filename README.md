# javascript

While waiting for the twits to give me an api key so I can try out tweepy etc, let's check out a re-introduction to javascript, starting with https://bit.ly/mozilla-js-reintro-tutorial
Note: At [Github](https://github.com/fazl/javascript) this file is 'marked up' i.e. easier to read.  You can also read it in a markdown viewer.

## Basic syntax
Super-similar to C/Java:
- same **control structures** (for/while/do,switch/if/else if/else)
    - for (let i=0; i<5; i++) {...}
    - but adds 2 kinds of _foreach_: for( let _val_ **of array**) and for( let _prop_ **in object**)
    - also adds a _forEach( callbackFunc )_ member on arrays
    - and can **switch** on a **string** (handy)
- same **operators**: _arithmetic_ (**+ - * / %**) and _conditional_ (**&& || !**) (inc _short circuit_ behaviour)
    - adds extra === operator (does not promote operands):
        - 123 == '123' //**true** 
        - 123 === '123' //**false** 
- same **null** (a la java)
    - adds special: **undefined** ('variable not assigned yet') 

## Declarations
  
  - **let** x = 1; // like C++/Java, x **scoped** to end of nearest block
  - **const** PI = 3.14; // like C/C++  (or _final_ in Java)
  - **var** globalVar = 7; //**Danger**: this leaks globalVar name

## Basic types:

### Number 
  
    - floating point doubles, so beware integer arithmetic
    - builtin Math obj has methods like Java Math package
    - builtin parseInt(), parseFloat('value', radix) methods 
      - happily convert numeric prefix in a string eg 10abc -> 10
    - short cut: prefix unary + operator converts a string arg to number
      - but it tries to consume whole string and returns NaN if extras present
      - nb NaN is 'infectious' (article says 'toxic' :-)
    - taste a value with isNan() or isFinite() before consuming
      - isFinite() checks for +/-Infinity and NaN, so safer
  
### String
  
    - single or double quotes 
    - strings are unicode, each char is 1 or 2 'code points' (2-byte words)
    - length attribute on strings, returns num code points NB not bytes or chars
    - Java-like methods on strings: 
        - s.charAt(n) 
        - s.toUppercase()
        - s.replace('foo', 'bar')
  
### Boolean
  - values: **true**, **false**
  - explicitly convert: Boolean( myInt )
  - **implicitly**: these _falsey_ values evaluate to **false**:
    - _0_ 
    - _empty strings_
    - _null_
    - _NaN_ and 
    - _undefined_ 
  - all other values evaluate **true**
  - allows some nice/concise idioms:
    - var name = x && x.getName() _// avoids call to getName() unless x exists_
    - var name = cached || (cached=getNameSlowMethod()) _//use cached copy if exists_

### Object
Objects are maps or collections of name,value pairs. Names are strings, values can be any javascript value.

- Constructor syntax: var x = new Object();
- Literal syntax (**JSON**): var x = {};  
- Can initialise with structure :
```
  var obj = {
    name: 'Carrot',
    age: 8,
    details: {
      color: 'orange',
      size: 12
    }
  };
```
- Reference fields via named subscripts / sub object notation:
  - obj['details']['size'] //12   -- flexible: variables for subscripts
  - obj.details.color //'orange'  -- easier to read, but hard coded names
- Classes can be defined by a prototype function :
```
function Student(name, age) {
  this.name = name;
  this.age = age;
}
var you = new Student('Bob', 24);  //note keyword new
```
- Classes can also be defined by a factory function.. here includes a method fullName:
```
function makeStudent(name, age) {
  return{
    name: name,
    age: age,
    describe: function() {
      return this.name + ' is ' + this.age + ' yrs old';
    }
  }
}
var me = makeStudent('Fred', 24);  //no new
let desc = me.describe(); // 'Fred is 24yrs old'
```

## Modules
Javascript files that export functions, data, classes etc can be used by other code ([MDN Javascript guide][https://wiki.developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#Exporting_module_features]).
- Decorate _top-level_ artefacts to expose, with *export* keyword:
```
export function makeStudent(name, age) {
  return{
    name: name,
    age: age,
    describe: function() {
      return this.name + ' is ' + this.age + ' yrs old';
    }
  }
}
export var fred = makeStudent('Fred', 24);  
export let desc = fred.describe(); // 'Fred is 24yrs old'
```
- Or, export a list of names at end of module, in {...}:
```
...
export {makeStudent, fred, desc};
```
    
    
# Node.js
Turns out Node is basically like a Java VM for Javascript, runs your javascript for you on a server rather than just in a browser.

- Strength is event-driven single threaded apparently services huge load
- Weakness is ditto - i.e. don't use it for compute intensive services
- Good for feeding into queue to update 'eventually consistent' database

## Node modules
Javascript files that export functions, classes etc can be used by other code ([Node reference docs][https://nodejs.org/api/modules.html]).
