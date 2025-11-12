let person = {
    name: "정지유",
    age: 24,
    hobbies: ["독서", "음악 듣기", "코딩"],
    tall: 165,
    gender: '여성',
    sayHello: function() {
        console.log(`안녕하세요, 저는 ${this.name}입니다.`);
    }
}

let dog ={
    name: "뽀삐",
    age: 3,
    breed: "골든 리트리버",
    color: "황금색",
    bark: function() {
        console.log("멍멍!");
    }
}

//오브젝트 복제 방법
let dog2 = {...dog};
dog2.name = "뽀삐2"; //나머지 정보는 그대로 넘어옴

let personDog = {...person, ...dog}; //두 오브젝트 합치기

console.log(person.name);
console.log(person.sayHello());
console.log(dog.bark());
