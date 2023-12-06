<script setup lang="ts">
import MForm from '@/components/m-form/form.vue'
import MInput from '@/components/m-input/input.vue'
import { userInfo , login } from '@/apis/user';
import {reactive, computed, ref } from 'vue';
import router from '@/router';
interface UserCredentials {
    username:any,
    password:string
}
// 用户账号密码
const userCredentials:UserCredentials= reactive({
    username:'',
    password:''
});
const submit = (value:any) => {
    login(value).then(res=>{
        if(res.code == 0){
            router.push("/")
        }
        else{
            console.log(res.msg);
        }
    })
};



</script>

<template>
    <div class="min-h-screen w-full flex justify-center items-center bg-slate-300">
        <div
            class="bg-white rounded-md flex justify-center flex-col w-[600px] px-4 shadow-2xl sm:px-6 mx-6 md:px-8 lg:px-10 py-8">
            <h1 class="text-lg text-gray-800 mb-3 self-center">Login</h1>
            <button
                class="py-2 relative text-sm rounded-lg text-gray-800 bg-gray-200 hover:bg-gray-300 hidden md:block">扫码登陆</button>
            <div class="relative mt-10 h-px flex bg-gray-300">
                <div class="absolute left-0 top-0 w-full flex justify-center -mt-2">
                    <span class=" bg-white px-4 text-xs uppercase text-gray-500">hello word</span>
                </div>
            </div>
            <m-form @submit="submit" :model="userCredentials" btn-text="登陆" label-position="left" class="w-full">
                    <m-input class="mb-6" name="name" v-model="userCredentials.username" placeholder="请输入手机号码"/>
                    <m-input class="mb-4" name="password" v-model="userCredentials.password" type="password" placeholder="请输入密码"/>
            </m-form>
            <div class="flex justify-around px-15 my-2 text-sm text-sky-900">
                <a href="">网站首页</a>
                <a href="">修改密码</a>
                <a href="">忘记密码</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>