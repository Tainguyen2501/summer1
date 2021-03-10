function run() {
  var len = 10;
  var text = "";
  for (i = 4; i < len; i++) {
    text = text + i + "  ";
    console.log("So " + text);
  }
}


function run0() {
  console.log(Math.abs(-3)); // returns 3
  console.log(Math.abs(4)); // returns 4
  console.log(Math.acos(1));   // 0
  console.log(Math.acos(2));   // NaN
  console.log(Math.asin(0));   // 0
  console.log(Math.asin(2));   // NaN
  console.log(Math.atan(0));   //
  console.log(Math.cbrt(8));  // 2 can bac 3
  console.log(Math.ceil(1));  // 1
  console.log(Math.ceil(1.01));  // 2 lay tren
  console.log(Math.floor(5.95));  // 5 lay duoi
  console.log(Math.floor(5));  // 5
  console.log(Math.hypot(3, 4)); // 5 (can bac 2 tong binh phuong cua 2 so da cho
  console.log(Math.hypot(5, 12)); // 13
  console.log(Math.max(1, 3, 2)); // 3
  console.log(Math.max(-1, -3, -2)); // -1
  console.log(Math.min(1, 3, 2)); // 1
  console.log(Math.min(-1, -3, -2)); // -2
  console.log(Math.pow(2, 3));    // 2^3 = 8
  console.log(Math.pow(7, 2));    // 7^2 =49
  console.log(Math.round(5.95)); // 6
  console.log(Math.round(5.5)); // 6
  console.log(Math.round(5.05)); // 5
  console.log(Math.sqrt(4)); // can bac 2 return 2
  console.log(Math.sqrt(9)); // 3
  console.log(Math.trunc(13.37)); // 13
  console.log(Math.trunc(-0.123)); // -0
  console.log(Math.trunc(0.123)); // 0
}
function run00() {
  var str = "JavaScript";
  str.charAt(0); // returns "J"
  str.charAt(str.length - 1); // returns "t"
  'ABC'.charCodeAt(0); // returns 65
  "Java".concat("Script"); // returns "JavaScript"
  "JavaScript".indexOf("J"); // returns 0
  "JavaScript".indexOf("X"); // returns -1
  'cunal'.lastIndexOf('n'); // returns 2
  'canal'.lastIndexOf('x'); // returns -1
  "Ab".replace('b', 'a'); // returns Aa
  "Mozilla".substr(1, 2); // returns "oz"
  "Mozilla".substr(0, 4); // returns "Mozi"
  "Mozilla".substring(1, 3); // returns "oz"
  var strr = 'The quick brown fox jumps over the lazy dog.';
  strr.slice(31); // returns "the lazy dog."
  strr.slice(4, 19); // returns "quick brown fox"
  strr.slice(-4);// returns "dog."
  "Abc".toLowerCase(); // returns "abc"
  "Abc".toUpperCase(); // returns "ABC"
  "The quick brown fox".split(' '); // returns ['The', 'quick', 'brown', 'fox']
  "11,22".split(','); // returns ['11', '22']
  strrr = 'To be, or not to be, that is the question.';
  strrr.includes('To be'); 	// true
  strrr.includes('question');    // true
  strrr.includes('nonexistent'); // false
  strrr.includes('To be', 1);	// false
  strrr.includes('TO BE');	// false
  strrr.includes('');	// true
}//console.log("done");}
  run00()

  function run1() {
    var str = "javascript";
    for (i = 0; i < str.length; i++) {
      console.log(str[i]);
    }
  }

//run1()

// kiểu 1 : giai thua

  function run2(n) {
    var factorial = 1;


    for (var i = 1; i <= n; i++) {
      factorial = factorial * i;
    }
    console.log(factorial);
  }

//run2(3)

// kiểu 2
  function run3(n) {
    var factorial = 1;

    for (var i = n; i >= 1; i--) {
      factorial = factorial * i;
    }
    console.log(factorial);
  }

//run3(5)

  function run4() {
    var i = 0;
    while (i++ < 5) {
      console.log(i + " ");
    }

  }

//run4()

  function run5(n) {
    var output = "";
    var i = 0;
    while (i++ < n) {
      if (i % 2 == 0) {
        output = output + i;
        if (i < (n - 1)) {
          output = output + ","
        }
      }
    }
    console.log(output);
  }

//run5(10)

  function tongDienTinh() {
    // dien tinh hinh vuong + dt hinh tron
// tinh dt hinh vuong
    var cdhv = 4
    var cdht = 2
    var crht = 3
    var dtHv = dtHinhVuong(cdhv)
// tinh dt hinh tron
    var dtHt = dtHinhTron(cdht, crht)
// tong 2 dien tinh
    var tong = dtHv + dtHt
// in ra
    console.log('TONG dt cach 1', tong)
    console.log('TONG dt', dtHinhVuong(4) + dtHinhTron(2, 3))
  }

  function tinhKichThuoc() {
    var kt1 = 213
    var cdHv = 10
    var dthv = dtHinhVuong(cdHv)
    console.log('TONG kich thuoc', kt1 + dthv)
  }

//tinhKichThuoc()

  function dtHinhVuong(a) { //
    return a * a
  }

  function dtHinhTron(b, c) { //
    return b + c
  }

//tongDienTinh()

  function run6(commentt) {
    var anht = " hoc JavaScriptt  ";

    console.log(anht.length)
  }

//run6()

  function run7(title, description) {
    var title = 'Hoc Javascript';
    var description = 'Hoc Javascript co ban'

    if (title.indexOf('Javascript') >= 0
      && description.indexOf('Javascript') >= 0 &&
      title.length > 0 && description.length > 0) {
      result = true;
    } else {
      result = false;
    }

    console.log(result)
  }

//run7()

  function run8(title) {
    var content = 'HOC JS va JS JS    ';
    var title = 'Học Javascript tại nha';
    var language = title.slice(4, 14);// cat chuoi theo vi tri
    var rest = title.slice(4); // cat chuoi vi tri bat dau den cuoi
    console.log(title.indexOf('Javascript'));// tim vi tri
    console.log(rest);
    console.log(content.replace('JS', 'Javascript'));// thay the chu dau
    console.log(content.replace(/JS/g, 'Javascript'));// thay the toan bo
    console.log(title.toUpperCase()); // chu in hoa
    console.log(content.toLowerCase().length); // chu thuong
    console.log(content.trim().length); // Loai bo khoang trang
    console.log(title.split(' '));// cat 1 chuoi thanh Array
    var pi = 3.141618;
    console.log(pi.toFixed(3)); // rut gon so thap phan
    var age = '31';
    var string = parseInt(age) // doi chuoi thanh so
    console.log(string);
    console.log(typeof pi.toString()); // doi so thanh chuoi
    var birthday = 250190;
    var sohuuhan = isFinite(birthday); // so huu han
    var songuyen = Number.isInteger(birthday);
    console.log(sohuuhan);
    console.log(songuyen);
  }

//run8()

  function run9(number) {           // tim so nguyen duong
    var songuyen = Number.isInteger(number);
    if (songuyen == true && number > 0) {
      result = true;
    } else {
      result = false;
    }
    console.log(result);
  }

//run9(-8)

  function run10(number) {

    if (Number.isInteger(number) && number > 0) {
      result = true;
    } else {
      result = false;
    }
    console.log(result);
  }

//run10(9);

  function run11(number) {
    return Number.isInteger(number) && number > 0;
  }

//console.log(run11(0))

  function run12() {
    var food = ['heo', 'bo', 'GA']
    var isArray = Array.isArray(food)
    if (isArray === false) {
      return console.log('ko phai Array')
    } else {
      return console.log(food[food.length - 1])
    }
  }

//run12()

  function run13() {
    var a = 'ABC';
    var b = 'CDE';
    console.log(`${a} - ${b}`)
    var title = 'Học Javascript tại Nhà';
    var languages = ['English', 'French', 'Italian', 'American'];
    var content = title.split(' '); // cat 1 chuoi thanh Array theo diem chung
    console.log(content.pop()); // cắt phần tử cuối và trả về nó
    console.log(content.shift());// cắt phần tử đầu và trả về nó
    console.log(languages.push('vietnamese')); // Thêm vào cuối Array trả về độ dài mảng
    console.log(content.unshift('LuyệnTập'));// Thêm vào đầu Array trả về dài mảng
    /*@*/
    languages.splice(1, 2, 'Janpan')// xoa va them theo vi tri
    console.log(languages);
    console.log(content);
    console.log(languages.concat(content)); // Nối Array
    console.log(languages.slice(1, 2));// cat Array va copy theo vi tri
    console.log(languages.join(', '));// 1 Array thanh chuoi
  }

// run13()

  function run14(anArray) {
    if (anArray.length <= 2) {
      anArray.shift();
    } else {
      anArray.splice(-2)
    }
    console.log(anArray);
  }

//run14([1, 2, 3, 4])

  /*
  Nếu mảng không có phần tử nào,hãy thêm hai phần tử Cat,Mouse vào mảng
  Nếu mảng có một phần tử, hãy thêm phần tử Elephant vào đầu mảng
  Nếu mảng có trên hai phần tử,
  hãy xóa phần tử thứ hai đi và thêm hai phần tử Monkey,
   Tiger vào vị trí đã xóa */

  function run15(animals) {

    if (animals.length == 0) {
      animals.push('Cat', 'Mouse');
    } else if (animals.length == 1) {
      animals.unshift('Elephant');
    } else if (animals.length >= 2) {
      animals.splice(1, 1, 'Monkey', 'Tiger')
    }
    console.log(animals);
  }

//run15([1, 2, 3, 4, 5])

  function run16() {
    var a = [1, 2, 3, 4, 5, 6];
    a[1] = 21;
    a[3] = 19;
    a[5] = 20;
    console.log(a);
  }

//run16()

  function run17(a, b) {
    if (!isNaN(a) && !isNaN(b) && typeof a === "number" & typeof b ==="number" ) {
      return a + b
    } else {
      return false
    }
  }

//console.log(run17(1, 2))

  function calculateTriangleArea(a, h) {
    var dientich = a * h / 2;
    if (a > 0 && h > 0) {
      console.log(dientich);
    } else {
      console.log(false);
    }
  }

//calculateTriangleArea(2, 3)

  /*function x() {
    alert('x')
  }
  var x1 = (a) => {
    alert(a)
  }

  var arr = [1,2,3,4]
  var arr1 = [1,2,3,58,90]
  arr.filter(function (i, index) {
    return i % 2 === 0
  })
  arr.filter((i, index) => {
    return i % 2 === 0
  })
  arr.filter(i => i % 2 === 0)
  arr.filter(timSoChan)
  arr1.filter(timSoChan)
  // x1
  function timSoChan(so) {
    return so % 2 === 0 // Boolean
  }
  */

  function stringInString(needle, haystack) {
    var isStr = typeof needle === "string" && typeof haystack === 'string';
    var isStr1IncludeStr2 = needle.includes(haystack);
    return isStr && isStr1IncludeStr2;

    /* var isStr1IncludeStr2 = needle.includes(haystack);
     if (typeof needle === "string" && typeof haystack === 'string'
       && isStr1IncludeStr2 === true) {
       return true;
     } else {
     }
   }
   */
  }

//console.log(stringInString('heo bo ga'.trim(), ""))

// xét 1 Array có chẵn ko? , nếu không phải Array thi dừng lại
  function findevenNumber(current) {
    return current % 2 === 0;
  }

  function run18(data) {
    var isarray = Array.isArray(data)
    if (isarray === false) {
      return console.error('ko phai Array')
    }
    var evenNumber = data.every(findevenNumber); // tim trong Array co tat ca theo yeu cau
    if (evenNumber) {
      console.log("Yes I'm evenNumber");
    } else {
      console.log("No I amn't evenNumber");
    }
  }

//run18([2, 2, 4])


  function sochan(current) {
    return current % 2 === 0
  }

  function run19(data) {
    var input = [1, 2, 3, 4]
    var isArray = Array.isArray(input)
    if (isArray === false) {
      return console.error('Ko phai Array')
    } else {
      var sochan1 = input.some(sochan); // tim 1 vai value trong Array theo yeu cau
      return console.log(sochan1);
    }
  }

//run19()

  function chiacho2(current) {
    return current % 2 === 0;
  }

  function run20(data) {
    var isArray = Array.isArray(data);

    if (isArray === false) {
      return console.log('ko phai Array');
    } else {
      var soduong = data.filter(chiacho2); // loc phan tu trong Array theo yeu cau
      return console.log(soduong)
    }
  }


//run20([12,3,4])

  function check(a) {
    return a > 0;
  }

  function run21(data) {
    var first = data.find(check);
    var index = data.findIndex(check);
    if (first && index != null) {
      console.log('vi tri ' + index + " " + "Gia tri " + first);
    } else {
      console.log("No result");
    }
  }

//run21([-1, -8, -6, 9, 8])


  function run22(data) {
    data.forEach(function (chia5) {
      if (chia5 % 5 === 0) {
        console.log(chia5);
      }
    });
  }

//run22([1, 5, 9, 10, 25])

  function chiacho5(element) { // dung cho filter
    return element % 5 === 0;
  }

  function run23(data) {
    /*in ra mang chia het cho 5*/
    // Cach 1: dung foreach
    var arrNew = []
    data.forEach(function (chia5) {
      if (chia5 % 5 === 0) {
        arrNew.push(chia5)
      }
    });
    console.log('arrNew', arrNew)
    // Cach 2: dung filter
    var newArrFilter = data.filter(chiacho5)
    console.log('newArrFilter', newArrFilter)
  }

//run23([1, 5, 10, 6, 3])


  function run24(data) {
    var isArray = (data.includes(5));
    console.log(isArray)
  }

//run24([1,2,4,9,6])

  function trituyetdoi(a) {
    if (a < 0) {
      return a * -1;
    } else {
      return a
    }
  }

  function run25(data) {
    var tritt = data.map(trituyetdoi)
    console.log(tritt)
  }

//run25([2,4,-5, 6,-8])

  function check(a, b) {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  }

  function run26(data) {
    data.sort(check)
    console.log(data);
  }

//run26([5,4,6,9,1])

  function run27(data) {
    data.sort(function (a, b) {
      return a - b;
    });
    console.log('"' + data.toString() + '"')
  }

//run27([2,4,5,8,1])

  var mychildren = 'mydaughter';
  var myInfo = {
    name: 'Tai Nguyen',
    age: 31,
    address: 'My Tho, TG',
    [mychildren]: 'Summer',
    getName: function () {
      return this.name;
    }
  };
  var mykey = 'address'
  myInfo.email = "Tainguyen250190@gmail.com" // them 1 key vao object
//console.log(myInfo.age);// console.log(myInfo.['age']);// lay ra value
//console.log(myInfo[mykey])// lay ra
  delete myInfo.age // xoa
//console.log(myInfo)
//console.log(myInfo.getName()) // Tai Nguyen
// Object Constructor // object prototype
  function User(firstName, lastName, avatar) { // var User = funtion()
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
      return `${this.firstName} ${this.lastName}`
    }
  }

  var author = new User('Tai', 'Nguyen', 'Hinh');
  var user = new User('Tri', 'Thien', 'Hinh1');
  author.title = 'Di lam'; // Them thuoc tinh
  user.comment = 'Di hoc'; //
  User.prototype.className = 'F8'; // them vao Object Construtor
  User.prototype.getClassName = function () { //
    return this.firstName;
  }
//console.log(author.className);
//console.log(user.getName());
//console.log(author.getClassName());

  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  console.log(date)


  function run28(a) {

    return Number.isInteger(a) === true ? a : Math.floor(a)// lay phan nguyen
  }

//console.log(run28(6.8))

  var myArray = ['A', 'B', 'C'];
  var arrlenght = myArray.length;
  for (var i = 0; i < arrlenght; i++) {
    //console.log(myArray[i]);
  }


  var myInfo = {
    name: 'Tai Nguyen',
    age: 31,
    address: 'My Tho, TG'
  };
//cach1
  for (var key in myInfo) {
    //console.log(myInfo[key]);
  }
//cach 2
  for (var key of Object.keys(myInfo)) {
    // console.log(myInfo[key])
  }
//cach 3
  for (var i of Object.values(myInfo)) {
//  console.log(i)
  }
  /* cach 1
  var languages = 'Javas';
  for(var key in languages){
    console.log(languages[key])
  }
  //cach 2
  var languages = 'Javas';
  for(var key of languages){
    console.log(key)
  }
  //cach 1
   var Arr =['A','B','C']
   for(var key in Arr){
     console.log(Arr[key]);
   }
   //cach 2
  var Arr =['A','B','C']
  for(var value of Arr){
    console.log(value);
  }
  */
  var myArray = ['A', 'B', 'C'];
  var arrlength = myArray.length
  var i = 0;
  while (i < arrlenght) {

    // console.log(myArray[i]);
    i++;
  }
  var i = 0;
  var isSuccess = false;
  do {
    i++;
    // console.log('lan ' + i);
    //thanh cong
    if (false) {
      isSuccess = true;
    }
  } while (!isSuccess && i < 3);

  for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    // console.log(i);
  }

  function run30() {
    var person = {
      name: "Tuan Phong",
      age: 1,
      addr: "Ha Noi",
      is_boy: true
    };
    for (var key in person) {
      // console.log(key+' is '+person[key]);
    }
  }

  run30()

  function run31(n) {
    var count = 0
    do {
      if (n % 2 == 0) {
        count += 1
        n = n / 2
      }
    } while (n % 2 == 0)
    // console.log(count);
  }

  run31(16)

  function run32(n) {
    var count = 0;
    while (n % 2 == 0) {
      count++;
      n /= 2;
    }
    // console.log(count);
  }

  run32(10)
  var Arr = ['A', 'B', 'C']
  for (var value of Arr) {
    // console.log(value);
  }

  function run33(datas) {
    var sum = 0
    for (var value of datas) {
      if (value > 0) {
        sum = sum + value;
      }
    }
    // console.log(sum);
  }

  run33([1, 3, 2, 4])

  function run34(datas) {
    for (var value of datas) {
      if (value % 4 === 0 && value % 3 === 0) {
        break;
      }
      if (value % 4 === 0) {
        continue;
      }
      console.log(value);
    }
  }

//run34([2,4,6,8,5,12,5,1])
  function run35(datas) {
    for (var i = 0; i < datas.length; i++) {
      if (datas[i] % 4 === 0 && datas[i] % 3 === 0) {
        break;
      }
      if (datas[i] % 4 === 0) {
        continue;
      }
      console.log(datas[i]);
    }
  }

//run35([1,3,4,12,5])

  function run36(arr_input) {
    var s = '';
    for (var value of arr_input)
      s = value + s;
   // console.log(s);
  }

  run36([1, 2, 7])

  function run37() {
    var d = new Date();
    var current_year = d.getFullYear();
    // define a object
    var myInfo = {
      name: 'Tai nguyen',
      namsinh: 1990,
      address: "Ha Noi"
    }
    // Calculate age
    var age = current_year - myInfo.namsinh;
    // console.log(myInfo); // print object
    // console.log(myInfo.name + " is " + age + " years old");
  }

  run37()
  var o1 = {a: 1, b: 1, c: 1, e: 5};
  var o2 = {b: 2, c: 2};
  var o3 = {c: 3};

  var obj = Object.assign(o1, o2, o3);

//console.log(obj); // { a: 1, b: 2, c: 3 ,e: 5}

  function run38() {
    const person = {
      name: "Tai",
      job: "lam",
      printIntroduction: function () {
        return this.name + ' Di ' + this.job;
      }
    }
    const son = Object.create(person);
    son.name = 'Tri'
    son.job = 'hoc'
    console.log(son.printIntroduction())
  };

//run38()
  function run39() {
    const person = {
      name: "Tri",
      job: "Hoc",
      printIntroduction: function () {
        console.log(`My name is ${this.name}. My job is ${this.job}`);
      }
    };
    const me = Object.create(person);
    me.name = 'Tai';
    me.job = 'Di hoc';
    me.printIntroduction();
  }

//run39()
  function run40() {  // chuyen 1 chuoi thanh nhieu Array theo key va value
    var data = {
      a: 'AB',
      b: 'CD'
    };
    var array = Object.entries(data);
    console.log(array);
  }

//run40()
  var object1 = {
    a: 'somestring',
    b: 42
  };
  for (var [key, value] of Object.entries(object1)) {
    //console.log(key + ":" + value);
  }

  function run41() {
    var person = {
      firstName: "Trung",
      lastName: "Vuong",
      age: 50,
      eyeColor: "blue"
    };
    for (var key of Object.keys(person)) {
      console.log(key, person[key])
    }
    for (var value of Object.values(person)) {
      console.log(value)
    }
  }

//run41()
  String.prototype.isbig = function () {
    if (this.length <= 10) {
      return false;
    } else {
      return true;
    }
  }

  function run42() {
    var name = 'Javascriptttt'
    var result = name.isbig();
    console.log(result);
  }

//run42()
  String.prototype.add_more = function (name) {
    return this + name;
  };
  var a = "Java";
  var new_string = a.add_more("Script");

//console.log(new_string)

  function run43() {
    var strr = 'viet nam su luoc'
    var ketqua = "";
    var a = strr.split(" ");
    for (i = 0; i < a.length; i++) {
      var chuMoi = a[i].charAt(0).toUpperCase() + a[i].slice(1)
      ketqua = chuMoi + " " + ketqua
    }
    console.log(ketqua)

  }

 // run43()

  function uc_first(word) {
    return word.charAt(0).toUpperCase().concat(word.slice(1));
  }

  function run44(str) {
    //cách 1
    //var List = str.split(" ");
    // for(var i=0;i<List.length;i++)
    // {
    //  List[i]=uc_first(List[i]);
    // }
    //console.log(List.join(" "));
    // Cách 2
    var List = str.split(" ").map(uc_first);
    console.log(List.join(" "));
  }

  //run44("viet nam su luoc")

  function first(a) {
    return a.charAt(0).toUpperCase() + a.slice(1)
  }

  function second(string) {
    var strr = "viet nam su luoc";
    var result = strr.split(" ");
    var newResult = result.map(first);
    console.log(result);
    console.log(newResult.join(" "));
  }

second()
function run45(year, month, day) {
  var d = new Date();
  d.setFullYear(2013);
  d.setMonth(1);
  d.setDate(9);
  console.log("Year is " + d.getFullYear() );
  console.log("Month is " + (d.getMonth() ) );
  console.log("Day is " + d.getDate() );
}
//run45()

var s = []
 var myarr = [ [1,2],[3,4],[5,6] ];
  for(var i = 0 ; i< myarr.length ; i++){
        s= s +" "+ myarr[i]
   // console.log(s)
  }
 //console.log(s) //1,2 3,4 5,6

var s =[]
var myarr = [ [1,2],[3,4],[5,6] ];
for(var i = 0 ; i< myarr.length ; i++){
   for (var u = 0 ; u < myarr[i].length ; u++ ){
     s = s + myarr[i][u]
    // console.log(myarr[i][u])
   }
}
//console.log(s)
function run46(n){
  if(!isNaN(n)){
    return true;
  }else {
    return false;
  }
}
console.log()
console.log(run46("12.5"))
