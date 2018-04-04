//循环递归
function factorial(n) {
    var total = 1;
    for (var i=1; i<n; i++) {
        total = n * factorial(n-1);
    }
    return total;
}

//条件判断递归
function factorial(n) {
    var total = 1;
    if (n>1) { total = n * factorial(n-1); }
    return total;
}

//条件判断+函数属性缓存递归
function factorial(n) {
    if (isFinite(n) && n > 0 && n == Math.round(n)) {
        if (!(n in factorial)) factorial[n] = n * factorial(n-1);
        return factorial[n];   
    } 
    else { 
        return NaN;
    }
}
factorial[1] = 1;
