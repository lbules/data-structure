var isBadVersion = function(version) {
    return version>=4?true:false
};

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        while(left<=right) {
            let mid = parseInt(left+(right-left)/2);
            if(isBadVersion(mid)&&!isBadVersion(mid-1)){
                return mid;
            }
            if(!isBadVersion(mid)) {
                left = mid+1;
            }else {
                right = mid-1;
            }
        }
    };
};

const res= solution(6);

console.log(res);

// console.log(isBadVersion(4));
