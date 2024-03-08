
////// 1. Fibonacci
class Fib {
    result = 0
    constructor(number) {
        this.fibNumber = number
        this.fibRecursive = this.fibRecursive.bind(this)
        this.fibTopDown = this.fibTopDown.bind(this)
    }

    fibRecursive(number) {
        if(number <= 1) {
            return number
        }
        return this.fibRecursive(number - 1) + this.fibRecursive(number - 2)
    } 

    //// top down
    fibTopDown(n, cache = new Map()) {
        if (cache.has(n)) {
            return cache.get(n);
        }
     
        let result;
        // Base cases
        if (n === 0) {
            result = 0;
        } else if (n === 1) {
            result = 1;
        } else {
            result = this.fibTopDown(n - 1,cache) + this.fibTopDown(n - 2,cache);
        }
     
        // Cache the result for future use
        cache.set(n, result);
        return result;
    }

    fibBottomUp(n) {
        if (n <= 1){
            return 1;
        }
        const fibNums = [0, 1];
    
        for (let i = 2; i <= n; i++){
            fibNums[i] = fibNums[i-1] + fibNums[i-2];
        }
        return fibNums[n];
    }

    print() {
        console.log(this.result)
    }

    action(type) {
        const types = {
            'recursive': this.fibRecursive,
            'topDown': this.fibTopDown,
            'bottomUp': this.fibBottomUp
        }
        this.result = types[type](this.fibNumber)
        return this
    }
}

const fibNumber = new Fib(8)
fibNumber.action('recursive').print() // /21
fibNumber.action('topDown').print() // /21
fibNumber.action('bottomUp').print() // /21


/////// 2. Longest Common Subsequence (LCS)
class LongestCommonSubsequence {

    result = ""

    constructor(str1,str2) {
        this.firstString = str1
        this.secondString = str2
        this.lcsRecursive = this.lcsRecursive.bind(this)
    }

    lcsRecursive(str1, str2, m = str1.length, n = str2.length) {
        if (m === 0 || n === 0) {
            return { length: 0 , lcs: ''}
        } else if (str1[m - 1] === str2[n - 1]) {
            const result = this.lcsRecursive(str1, str2, m - 1, n - 1);
            return { length: result.length + 1 , lcs: result.lcs + str1[m -1] }
        } else {
            const result1 = this.lcsRecursive(str1, str2, m - 1, n);
            const result2 = this.lcsRecursive(str1, str2, m, n - 1);
            if (result1.length > result2.length) {
                return result1;
            } else {
                return result2;
            }
        }
    }

    lcsTopDown(str1, str2) {
        const memo = {};
    
        function lcsHelper(m, n) {
            const key = m + "," + n;
            if (key in memo) {
                return memo[key];
            }
            if (m === 0 || n === 0) {
                memo[key] = { length: 0, lcs: "" };
            } else if (str1[m - 1] === str2[n - 1]) {
                const result = lcsHelper(m - 1, n - 1);
                memo[key] = { length: result.length + 1, lcs: result.lcs + str1[m - 1] };
            } else {
                const result1 = lcsHelper(m - 1, n);
                const result2 = lcsHelper(m, n - 1);
                memo[key] = (result1.length > result2.length) ? result1 : result2;
            }
            return memo[key];
        }
    
        return lcsHelper(str1.length, str2.length);
    }

    lcsBottomUp(str1, str2) {
        const m = str1.length;
        const n = str2.length;
        const dp = [];
        for (let i = 0; i <= m; i++) {
            dp.push(new Array(n + 1).fill({ length: 0, lcs: "" }));
        }
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = { length: dp[i - 1][j - 1].length + 1, lcs: dp[i - 1][j - 1].lcs + str1[i - 1] };
                } else {
                    dp[i][j] = (dp[i - 1][j].length > dp[i][j - 1].length) ? dp[i - 1][j] : dp[i][j - 1];
                }
            }
        }
        return dp[m][n];
    }
    

    print() {
        console.log(this.result)
    }

    action(type) {
        const types = {
            'recursive': this.lcsRecursive,
            'topDown': this.lcsTopDown,
            'bottomUp': this.lcsBottomUp
        }
        this.result = types[type](this.firstString,this.secondString)
        return this
    }
}


// Example usage:
const str1 = "ABCBDAB";
const str2 = "BDCAB";
const LCS = new LongestCommonSubsequence(str1,str2)

LCS.action('recursive').print() // { length: 4, lcs: 'BDAB' }
LCS.action('topDown').print()
LCS.action('bottomUp').print()
