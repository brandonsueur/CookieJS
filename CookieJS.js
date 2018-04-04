'use strict'

class CookieJS{

    /**
     * Create a cookie.
     */
    set(name, value, expmin){
        if(typeof(name) === 'string' && typeof(value) === 'string'){
            if(typeof(expmin) !== 'undefined'){
                let now = new Date()
                let time = now.getTime()
                let exp = time + expmin*1000*60

                now.setTime(exp)

                value += ";expires="+now.toGMTString()+';path=/'
            }

            document.cookie = name + '=' + value
        }
    }

    /**
     * Read cookie.
     */
    get(name){
        let start = document.cookie.indexOf(name+'=')

        if(-1 < start){
            start += name.length+1

            let end = document.cookie.indexOf(';', start)

            end = (end < 0) ? document.cookie.length : end

            return document.cookie.substring(start, end)
        }else{
            return false
        }
    }

    /**
     * Read all visible cookies.
     */
    show(){
        return document.cookie
    }

    /**
     * Delete cookie
     */
    del(name){
        if(typeof(name) !== 'undefined' && cookie.get(name) !== false){
            document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;'

            return true
        }else{
            return false
        }
    }
}
