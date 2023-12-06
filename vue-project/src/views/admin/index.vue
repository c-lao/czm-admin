<template>
    <div class="w-full bg-gray-200 min-h-screen flex">
        <div class="w-[200px] h-screen bg-gray-800 text-sm text-gray-300">
            <div v-for="item in menuList">
                <div class="h-12 px-4 text-base flex items-center cursor-pointer hover:text-white justify-between" @click="item.isShow = !item.isShow">
                    {{item.name}}
                    <span
                    v-if="item?.children"
                    class="iconfont icon-arrow-down duration-300"
                    :class="`${item.isShow ? 'transform -rotate-180' : ''}`"
                    ></span>
                </div>
                <Transition>
                    <div v-if="item.isShow">
                    <div>123213</div>
                    <div>123213</div>
                    <div>123213</div>
                    <div>123213</div>
                    <div>123213</div>
                    <div>123213</div>
                    <div>123213</div>
                    <div>123213</div>
                    <div>123213</div>
                    </div>
                </Transition>
            </div>
        </div>
        <div class="flex-1 bg-sky-200 flex flex-col">
            <div class="h-12 bg-red-600">
            </div>
            <div class="m-3 bg-white flex-1">123</div>
        </div>
    </div>
</template>


<script setup lang="ts">
import {reactive} from 'vue'
const menu = [
    {
        name:"首页",
        url:""
    },
    {
        name:"角色管理",
        url:"",
        isShow:false,
        children:[
            {
                name:"老师管理"
            },
            {
                name:"学生管理"
            }
        ]
    },
    {
        name:"业务中心",
        url:"",
        isShow:false,
        children:[
            {
                name:"用户充值"
            },
            {
                name:"用户提现"
            }
        ]
    }
];
const menuList = reactive(menu)
</script>


<style scoped>
</style>

