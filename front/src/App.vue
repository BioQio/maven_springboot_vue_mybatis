<template>
    <div id="app">
        <form @submit.prevent="submit">
            <div>
                姓名：<input type="text" v-model="user.name">
            </div>

            <div>
                性別：
                <label>
                    <input type="radio" value="男" v-model="user.gender"> 男
                </label>
                <label>
                    <input type="radio" value="女" v-model="user.gender"> 女
                </label>
            </div>

            <input type="submit" value="提交">
        </form>
    </div>
</template>

<script type="text/javascript" charset="utf-8">
    export default {
        data:function() {
        return {
                student:{
                    username:"lqy",
                    gender:"male"
                }
        };
        },
        method:{
            submit() {
                var formData=JSON.stringify(this.student)//对象转为jsonString
                this.$http.post("",formData).then(function (data) {//url:
                    if (data.json().state=="success"){
                        console.log("success")
                    }
                }).catch(function () {
                    console.log("服务器异常！");
                });
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
