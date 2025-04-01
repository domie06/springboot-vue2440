const base = {
    get() {
                return {
            url : "http://localhost:8080/wangpaiguanli/",
            name: "wangpaiguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wangpaiguanli/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "网盘管理系统"
        } 
    }
}
export default base
