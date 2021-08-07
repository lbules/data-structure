
        function count(str) {
            const obj = {}
            // 去除空格
            const arr = str.replace(/\s*/g, "").split('')

            arr.forEach(item => {
                if (!obj[item]) {
                    obj[item] = 1
                } else {
                    obj[item] += 1
                }
            });

            console.log(obj);

            const res = []

            for(let key in obj) {
                res.push(obj[key])
            }

            console.log(res);

            const max= Math.max(...res)

            return max
        }

        const s = 'hello world';

        console.log(count(s));
  