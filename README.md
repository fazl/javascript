# javascript

While waiting for the twits to give me an api key so I can try out tweepy etc, let's check out a re-introduction to javascript, starting with https://bit.ly/mozilla-js-reintro-tutorial

## Basic syntax
Super-similar to C/Java:
- same **control structures** (for/while/do,switch/if/else if/else)
- two kinds of **foreach**: for(let _val_ of _array_) and for( let _prop_ in _object_)
- can **switch** on a **string** (handy)
- operators: arithmetic (**+ - * / %**) and conditional (**&& || !**) a la java (inc _short circuit_ behaviour)
- extra === operator does not promote operands (also has a !==):
  - **true:** 123 == '123' 
  - **false:** 123 === '123' 
- special values: **undefined** (variable not assigned), **null** (a la java)

## Declarations
  
  - **let** x = 1; // like C++/Java, x **scoped** to end of nearest block
  - **const** PI = 3.14; // like C/C++  (or _final_ in Java)
  - **var** globalVar = 7; //**Danger**: this makes globalVar accessible everywhere in file

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
  
    - single quotes (maybe double too?)
    - javascript strings are unicode, each char is either 1 or 2 'code points'
    - each code point is 16bits
    - length attribute on strings, returns num code points NB
    - Java-like methods on strings: s.charAt(n), s.toUppercase(), s.replace('foo', 'bar')
  
### Boolean
  - values are **true** and **false**
  - explicitly convert non boolean values: Boolean( myInt )
  - **implicitly**: _0_, _empty strings_, _null_, _NaN_ and _undefined_ yield **false**, everything else **true**
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
- Classes are defined by a prototype function    
```
function Student(name, age) {
  this.name = name;
  this.age = age;
}
var you = new Student('Bob', 24);  //note keyword new
    
    
