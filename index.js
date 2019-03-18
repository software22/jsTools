//获取url参数
var getUrlParam = function(name,type) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    if(type == 'search'){
        var r = window.location.search.substr(1).match(reg);
    }else if(type == 'hash'){
        var r = window.location.hash.substr(1).match(reg);
    }
    if(r != null){
        return unescape(r[2]);
    }
}

//数组
class list{
    constructor(arr){
        this.arr = arr
    }
    //排序
    sort(type){
        const actions = new Map([
            ['down', ()=>{
                return this.arr.sort((a,b)=>{return b-a;})
            }],
            ['up', ()=>{
                return this.arr.sort((a,b)=>{return a-b;})
            }],
            ['default', ()=>{
                return this.arr.sort()
            }]
        ])

        let action = actions.get(type) || actions.get('default')
        action.call(this)
    }
}