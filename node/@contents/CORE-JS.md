<!--
title : CORE-JS
category : javascript
date : 2022-06-24
summary : 코어 자바스크립트
thumb : /image/thumb.png
-->

# CORE JS

## undefined와 null의 차이

undefined는 변수를 선언하고 값을 할당하지 않은 상태이다.

null은 변수를 선언하고 빈 값을 할당한 상태이다.

undefined는 전역 객체의 속성 중 하나이고 전역 스코프에서 변수이기도 하다.

undefined는 예약어가 아니기 때문에 변수 이름으로 사용할 수 있다.

아래의 경우 변수가 undefined를 반환한다.

- 값을 할당하지 않은 변수
- 메서드와 선언에서 변수가 할당받지 않은 경우
- 함수가 값을 return 하지 않았을 때

- null은 어떤 값이 의도적으로 비어 있음을 말한다. null은 해당 변수가 어떤 객체도 가리키고 있지 않다는 것을 의미한다.
- null은 undefined 처럼 전역 객체의 속성 중 하나가 아니라 리터럴 값이다.
- typeof null 은 object를 반환 하지만 하위 호환성을 유지하기위한 오류를 남겨둔 것이다. null은 object가 아니다.

## 형 변환

숫자형으로 변환은 수학과 관련된 함수와 표현식에서 자동으로 일어난다.

```jsx
alert('6' / '2'); // 3을 반환한다. 자동 형변환 됨
alert('hi' / 2); // Nan을 반환한다.
```

## 연산자의 우선순위

17 단항 덧셈 +

17 단항 부정 -

16 지수 **

15 곱셈 *

15 나눗셈 /

13 덧셈 +

13 뺄셈 -

3   할당 =

## 복합연산

복합연산은 오른쪽에서 왼쪽으로 진행된다.

```jsx
let a,b,c;

a = b = c = 2 + 2;
```

## 쉼표 연산자

, 는 여러 표현식을 코드 한 줄에서 평가할 수 있게 해준다.

## 문자열 비교 알고리즘

1. 유니코드 순서로 비교한다 (유니코드 값으로 비교하면 a가 A보다 크다)
2. 글자를 첫 글자부터 하나씩 비교해 나가면서 크기를 비교한다

- 비교하려는 자료형이 다르면 숫자로 변환하여 비교한다

## null과 0의 비교

```jsx
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
```

- ==은 피연산자가 null일때 형변환을 하지 않는다.
- ≥ ≤ < > 는 형변환을 하고 비교를 진행한다.

```jsx
console.log( undefined >= 0 ); //false
```

- undefined는 Nan으로 형변환 된다.

### 위 상황을 피하는 방법

- ===을 제외한 비교 연산자의 피 연산자에 undefined나 null이 오지 않도록 주의한다.
- undefined나 null이 될 가능성이 있는 변수가 <,>,≤,≥의 피 연산자가 되지 않도록 주의한다.

## OR의 반환 값

OR가 참일 때 의 반환 값은 boolean이 아니라 결과 값 그 자체

```jsx
const a = false;
const b = 10;

const c = a || b; // c = 10
```

## AND와 OR의 우선순위

- AND가 OR 보다 우선순위가 더 높다
    - a && b || c && d는 (a && b) || (c && d)와 동일하게 동작


```jsx
alert( null || 2 && 3 || 4 );

// 3이 출력된다 &&가 || 보다 우선순위가 높다 
// 2도 참이고 3도 참이기 때문에 2 && 3 은 3을 반환한다.

if(-1) {
    console.log(1); // 실행된다.
}
```

## nullish 병합 연산자

??는 =와 ? 보다는 먼저, 대부분의 연산자보다는 나중에 평가

```jsx
a !== null && a !== undefined;
a ?? b;

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

## 루프

? 연산자 우측에 루프문 continue를 사용 할 수 없다

```
(i > 5) ? alert(i) : continue; // 여기에 continue를 사용하면 안 됩니다.
```

## 바벨(Babel)

- 코드를 재작성해주는 트랜스파일러 프로그램
- 실행하면 기존 코드가 구 표준을 준수하는 코드로 변경됨
- 웹팩과 함께 사용하면 코드가 변경될 때 자동으로 트랜스파일러를 동작시킴

## 계산된 프로퍼티

```jsx
const a = 'hello';

const o = {
	[a] : 'world'
}
```

## 객체의 정렬

- 키 값이 숫자라면 키 순서로 자동 정렬 된다.
- ‘1’ 은 숫자로 자동 형 변환된다.
- 문자는 추가되는 순서로 들어간다.

```jsx
const o2 = {
    45:'test45',
    1:'test1'
};

//결과 : { '1': 'test1', '45': 'test45' }
```

## Symbol

Symbol은 유일한 식별자를 만들고 싶을 때 사용함

### 특징

- for in 으로 접근 할 수 없음
- Object.properties로 출력 되지 않음
- alert(Symbol(’test’))로 출력 되지 않음(문자열로 변환 안됨)

### 전역심볼

- Symbol.for(”id”) 없으면 만들어 쓰고 있으면 가저옴

## ..

.. 은 숫자에 래퍼 메소드를 사용할때 사용됨

```jsx
123.toString() // error .을 소수점으로 판단함
123..toString() // ok
```

## isNan 과 isFinite

- Nan은 자기 자신을 포함하여 그 어떤 값과도 같지 않다
- isFinite는 문자열이 일반 숫자인지 검증하는 데 사용되곤 한다.

```jsx
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

alert( NaN === NaN ); // false
//자기 자신을 포함하여 그 어떤 값과도 같지 않다
alert( Object.is(NaN,NaN )); // true
```

## 숫자 형변환 차이점 (+, parseInt, Number)

```jsx
alert( +"100px" ); // NaN

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, 정수 부분만 반환됩니다.
alert( parseFloat('12.3.4') ); // 12.3, 두 번째 점에서 숫자 읽기를 멈춥니다.
```

## 태그드리터럴

```jsx
function myString(str,name,age){
    return `${str.join('')} ${name} ${age}`;
}

const name = '홍길동';
const age = 18;

const a = myString`hello world ${name} ${age}`;

console.log(a); // hello world  홍길동 18
```

## for..in

- 모든 프로퍼티를 순회하기 때문에 사용을 지양한다.
- 객체와 함께 사용할 때 최적화 되어있다. 배열을 순회할 때 성능 저하가 있으므로 배열에서 사용을 지양한다.

## 배열

### 삭제

- delete로 삭제했을때의 문제점

    ```jsx
    let arr = ["I", "go", "home"];
    
    delete arr[1]; // "go"를 삭제합니다.
    
    alert( arr[1] ); // undefined
    
    // delete를 써서 요소를 지우고 난 후 배열 --> arr = ["I",  , "home"];
    alert( arr.length ); // 3
    
    //값은 삭제되지만 요소가 삭제되지 않는다.
    ```


### 교체

```jsx
let arr = ["I", "study", "JavaScript", "right", "now"];

// 처음(0) 세 개(3)의 요소를 지우고, 이 자리를 다른 요소로 대체합니다.
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]
```

### 추가

```jsx
let arr = ["I", "study", "JavaScript"];

// 인덱스 2부터
// 0개의 요소를 삭제합니다.
// 그 후, "complex"와 "language"를 추가합니다.
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"
```

### 정렬

- sort는 문자열로 취급되어 정렬된다.
- sort는 최적화된 퀵 정렬을 이용한다.
- 숫자로 취급하기 위해서는 다음과 같이 정렬 함수를 넘겨준다.

    ```jsx
    const arr = [1,2,3,4,15];
    arr.sort((a,b)=>a-b); // 오름차순
    arr.sort((a,b)=>a+b); // 내림차순
    ```

- sort는 배열 자체를 변경하므로 다음과 같이 방어적 복사를 진행하는 것이 좋다

    ```jsx
    const arr = [1,2,15,4,6];
    const sorted = [...arr].sort((a,b)=>a-b);
    ```


## iterable 객체

- iterable은 메서드 Symbol.iterator가 구현된 객체이다.
- array-like는 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체이다.
- iterable과 array-like는 다르다.

1. for..of가 시작되자마자 for..of는 Symbol.iterator를 호출합니다(Symbol.iterator가 없으면 에러가 발생합니다). Symbol.iterator는 반드시 이터레이터(iterator, 메서드 next가 있는 객체) 를 반환해야 합니다.
2. 이후 for..of는 반환된 객체(이터레이터)만을 대상으로 동작합니다.
3. for..of에 다음 값이 필요하면, for..of는 이터레이터의 next()메서드를 호출합니다.
4. next()의 반환 값은 {done: Boolean, value: any}와 같은 형태이어야 합니다. done=true는 반복이 종료되었음을 의미합니다. done=false일땐 value에 다음 값이 저장됩니다.

```jsx
console.log("test"[Symbol.iterator]); //[Function: [Symbol.iterator]]
console.log(([][Symbol.iterator])); //[Function: values]
```

### 직접 구현해보기

```jsx
const Range = (from, to) => {
    return {
        [Symbol.iterator](){
            this.current = from;
            return this;
        },

        next(){
            if(this.current <= to){
                return {done:false,value:this.current++};
            }else{
                return {done:true}
            }
        }
    }
};

console.log(Range(1,10));
console.log(Array.from(Range(1,10)));
```

### 문자열도 iterable이다

```jsx
Array.from("test"); // ['t','e','s','t']
```

## 맵

Object.entries() 객체를 맵으로 바꾸기

```jsx
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

alert( map.get('name') ); // John
```

## 위크 맵,위크 셋

가비지컬렉션이 메모리에서 자동으로 삭제 될 수 있도록 도와준다.

```jsx
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // 참조를 덮어씀

// john을 나타내는 객체는 이제 메모리에서 지워집니다!
```

## 구조분해할당

- 할당 연산자 우측엔 모든 이터러블이 올 수 있다.
- 할당 연산자의 좌측에는 어떤 것이든 올 수 있다

    ```jsx
    let user = {};
    [user.name, user.surname] = "Bora Lee".split(' ');
    
    alert(user.name); // Bora
    ```


## JSON

직렬화

```jsx
const User = (name,age,date = new Date()) => {
    return {
        toJSON : () => {
            return {name,age,date}
        }
    }
}

const user = User('홍길동',15);

const jsonString = JSON.stringify(user);

const toObject = JSON.parse(jsonString,(key,value)=>{
    if (key === 'date'){
        return new Date(value);
    }

    return value;
});

console.log(toObject);
```

- 순환참조가 발생하면 JSON.parse를 사용할 수 없다. revival 함수에서 순환참조가 발생하는 property는 건너 뛰어야 한다.,

## 클로저

### Lexical Environment

실행 중인 함수, 코드 블록, 스크립트 전체는 렉시컬 환경(Lexcial Environment)라 불리는 내부 숨김 연관 객체를 갖는다.

렉시컬 환경 객체는 두 부분으로 구성된다. 렉시컬 횐경은 이론상의 객체이다.

- 환경 레코드 (Environment Record) : 모든 지역 변수를 프로퍼티로 저장하고 있느 ㄴ객체.
- 외부 렉시컬 환경(Outer) : 외부 코드와 연관된다.

## 렉시컬 등록 순서

1. 호이스팅한다
2. 렉시컬 환경에 등록한다. (이때 함수는 위로 올라가고 즉시 실행 가능해진다. let, const로 선언한 변수는 렉시컬 환경에 등록되지만 let이 실행되기 전까지 참조가 불가능하다)
3. 변수는 uninitialized로 올라가며 함수는 function으로 즉시 등록된다.

### 변수의 렉시컬 환경

```jsx
let test = 'hello';

//이 경우에 렉시컬 환경이 하나만 존재한다. 전역 변수 이므로 outer는 null이다.
```

### 함수의 렉시컬 환경

```jsx
say('hello');

function say(name) {
   console.log(`${name}`);
}
```

함수는 렉시컬 환경에 등록되는 즉시 사용이 가능하다. 함수가 선언되기 전에 사용 가능한 것은 이러한 이유이다.

## 비동기

```jsx
function block(time){
    const endTime = Date.now() + time;

    while(true){
        const currentTime = Date.now();

        if(currentTime > endTime){
            break;
        }
    }

    console.log('end');
}

function hello(){
    console.log('hello');
}

setTimeout(hello,2500);

block(3000);
```

hello 는 100ms 가 지난 후 바로 호출되지 않으며 block 메소드가 종료되고 난 이후 호출된다.

## 기명 함수 표현식

이름이 있는 함수 표현식

```jsx
let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // func를 사용해서 자신을 호출합니다.
  }
};

sayHi(); // Hello, Guest

// 하지만 아래와 같이 func를 호출하는 건 불가능합니다.
func(); // Error, func is not defined (기명 함수 표현식 밖에서는 그 이름에 접근할 수 없습니다.)
```

## new Function

- eval을 사용하지 않고 문자열을 함수로 변경 할 수 있다.

```
let str = ... 서버에서 동적으로 전달받은 문자열(코드 형태) ...

let func = new Function(str);
func();
```

- new Function을 이용해 함수를 만들면 함수의 Environment 프로퍼티가 현재 렉시컬 환경이 아닌 전역 렉시컬 환경을 참조하게 된다.

```jsx
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // ReferenceError: value is not defined
```

## setTimeout,setInterval

### 가비지 컬렉션과 setInterval·setTimeout

setInterval이나 setTimeout에 함수를 넘기면, 함수에 대한 내부 참조가 새롭게 만들어지고 이 참조 정보는 스케줄러에 저장됩니다. 따라서 해당 함수를 참조하는 것이 없어도 setInterval과 setTimeout에 넘긴 함수는 가비지 컬렉션의 대상이 되지 않습니다.

```jsx
// 스케줄러가 함수를 호출할 때까지 함수는 메모리에 유지됩니다.
setTimeout(function() {...}, 100);
//setInterval의 경우는, clearInterval이 호출되기 전까지 함수에 대한 참조가 메모리에 유지됩니다.
```

그런데 이런 동작 방식에는 부작용이 하나 있습니다.

외부 렉시컬 환경을 참조하는 함수가 있다고 가정해 봅시다. 이 함수가 메모리에 남아있는 동안엔 외부 변수 역시 메모리에 남아있기 마련입니다. 그런데 이렇게 되면 실제 함수가 차지했어야 하는 공간보다 더 많은 메모리 공간이 사용됩니다.

이런 부작용을 방지하고 싶다면 스케줄링할 필요가 없어진 함수는 아무리 작더라도 취소하도록 합시다.

### 브라우저 환경에서 실제 대기 시간은 0이 아닙니다.

브라우저는 HTML5 표준에서 정한 중첩 타이머 실행 간격 관련 제약을 준수합니다. 해당 표준엔 "다섯 번째 중첩 타이머 이후엔 대기 시간을 최소 4밀리초 이상으로 강제해야 한다."라는 제약이 명시되어있습니다.

지연 없이 중첩 setTimeout을 5회 이상 호출하거나 지연 없는 setInterval에서 호출이 5회 이상 이뤄지면, 4밀리초 이상의 지연 간격이 강제로 더해집니다. 이는 브라우저에만 적용되는 사항이며, 하위 호환성을 위해 유지되고 있습니다.

스케줄링 메서드를 사용할 땐 명시한 지연 간격이 보장되지 않을 수도 있다는 점에 유의해야 합니다.

아래와 같은 상황에서 브라우저 내 타이머가 느려지면 지연 간격이 보장되지 않습니다.

- CPU가 과부하 상태인 경우
- 브라우저 탭이 백그라운드 모드인 경우
- 노트북이 배터리에 의존해서 구동 중인 경우

## Promise

- resolve는 첫 성공 호출만 실행된다

    ```jsx
    let promise = new Promise(function(resolve, reject) {
      resolve(1);//여기만 실행됨
    
      setTimeout(() => resolve(2), 1000);
    });
    
    promise.then(alert);
    ```

- Promise 는 마이크로태스크 큐에 들어가서 작업이 진행된다.
    - 마이크로태스크 큐는 먼저 들어온 작업을 먼저 실행(FIFO, first-in-first-out).
    - 실행할 것이 아무것도 남아있지 않을 때만 마이크로태스크 큐에 있는 작업이 실행되기 시작
- setTimeout, Promise, script는 다음 우선 순위를 갖는다.
    1. script
    2. 마이크로 테스크 Promise
    3. 매크로 테스크 setTimeout

참고

![https://uploads.disquscdn.com/images/9466d8aa53fc5b3e63a92858a94bb429df02bbd20012b738f0461343beaa6f90.gif](https://uploads.disquscdn.com/images/9466d8aa53fc5b3e63a92858a94bb429df02bbd20012b738f0461343beaa6f90.gif)

### Chaining

```jsx
function loadScript(src){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(src);
            
            resolve(src);
        },1000);
    })
}

loadScript('a')
    .then(a => loadScript('b'))
    .then(b => loadScript('c'))
    .then(c=>{
        console.log(111);
    });
```

## Thenable

- 서드파티 라이브러리가 ‘프라미스와 호환 가능한’ 자체 객체를 구현할 수 있다는 점에서 나옴
- 네이티브 프라미스와 호환 가능
- 비동기 동작은 항상 프라미스를 반환하도록 하는 것이 좋다

```jsx
class Thenable {
    num;

    constructor(num) {
        this.num = num;
    }

    then(resolve,reject){
        setTimeout(()=>{
            resolve(this.num+1);
        },3000);
    }
}

new Promise(resolve => {
    resolve(1);
}).then(res=>{
    return new Thenable(res);
}).then(res=>{
    console.log(res);//3초후 2출력
    return new Thenable(res);
}).then(res=>{
    console.log(res);//3초후 3출력
    return new Thenable(res);
});
```

## Module

- 모듈은 항상 use Strict로 실행된다.
- 한번만 평가된다. import를 두번한다고 두번 실행되지 않는다.
- 모듈은 지연실행(defer)된다. html이 모두 로드되고 난 이후 실행 된다.
- html이 모두 로드되기전에 실행하려면 async로 로드한다.
