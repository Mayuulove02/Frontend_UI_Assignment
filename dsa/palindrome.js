const isPlaindrome = (x) => {
    return x === +x.toString().split("").reverse().join("");

}

const res = isPlaindrome(156464654)

console.log(res);
