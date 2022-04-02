// 1.手写算法
// https://leetcode-cn.com/problems/add-to-array-form-of-integer/

// 加法模板
// while ( A 没完 || B 没完)
//     A 的当前位
//     B 的当前位

//     和 = A 的当前位 + B 的当前位 + 进位carry

//     当前位 = 和 % 10;
//     进位 = 和 / 10;

// 判断还有进位吗



/**
 * @param{number[]}num
 * @param{number}k
 * @return{number[]}
 */
const addToArrayForm = function (num, k) {
  const result = []
  let i = num.length - 1,
    carry = 0
  while (i >= 0 || k != 0) {
    const x = i >= 0 ? num[i] : 0
    const y = k != 0 ? k % 10 : 0
    const sum = x + y + carry
    result.push(sum % 10)
    // 是否有进位
    carry = Math.floor(sum / 10)
    i--
    k = Math.floor(k / 10)
  }
  if (carry) result.push(carry)
  return result.reverse()
};


//  2.编程题
// 1.手写函数柯里化

function curry(func) {
  //此处补全
}
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert(curriedSum(1, 2, 3)); // 6, still callable normally
alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
alert(curriedSum(1)(2)(3)); // 6, full curryi
 

