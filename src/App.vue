<template>
    <div id="app">
        <el-container class="demo-container__main" >
            <el-aside width="200px" class="asideBlock">
                <el-menu>
                    <el-menu-item-group>
                        <template slot="title">Made by Upoint Team with</template>
                        <a href="https://element.eleme.io/" title="Element" target="_blank">
                            <img src="../static/elementio.svg" alt="Element">
                        </a>
                    </el-menu-item-group>
                    <div class="demo-menu-block">
                        <el-menu-item-group>
                            <template slot="title">Базовые</template>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/color')">Цвет</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/typography')">Типографика</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/button')">Кнопки</el-button></el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">Форма</template>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/radio')">Radio</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/checkbox')">Checkbox</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/input')">Input</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/input-number')">InputNumber</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/select')">Select</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/cascader')">Cascader!!!</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/switch')">Switch</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/slider')">Slider</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/time-picker')">TimePicker</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/date-picker')">DatePicker</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/date-time-picker')">TimeDatePicker</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/upload')">Upload</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/rate')">Rate</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/color-picker')">ColorPicker</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/transfer')">Transfer</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/form')">Form</el-button></el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">Данные</template>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/table')">Table</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/tag')">Tag</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/progress')">Progress</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/tree')">Tree</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/pagination')">Pagination</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/badge')">Badge</el-button></el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">Оповещения</template>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/alert')">Alert</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/loading')">Loading</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/message')">Message</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/message-box')">MessageBox</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/notification')">Notification</el-button></el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">Навигация</template>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/nav-menu')">NavMenu</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/tabs')">Tabs</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/breadcrumb')">Breadcrumb</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/dropdown')">Dropdown</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/steps')">Steps</el-button></el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">Разное</template>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/dialog')">Dialog</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/tooltip')">Tooltip</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/popover')">Popover</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/card')">Card</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/carousel')">Carousel</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" type="text" @click="goTo('/collapse')">Collapse</el-button></el-menu-item>
                        </el-menu-item-group>
                    </div>
                </el-menu>

            </el-aside>
            <el-main class="demo-main-right">
                <div class="demo-navigation-top">
                    <el-button type="text" icon="el-icon-back" v-if="$route.meta.previous" @click="goTo($route.meta.previous.path)">{{$route.meta.previous.name}}</el-button>
                    <div class="demo-navigation-top__title title">{{$route.name}}</div>
                    <el-button type="text" v-if="$route.meta.next" @click="goTo($route.meta.next.path)">{{$route.meta.next.name}} <i class="el-icon-back" style="transform: rotate(180deg);"></i></el-button>
                </div>
                <div class="demo-content">
                    <router-view/>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'App',
        mounted(){ },
        methods: {
            goTo(path){
                this.$router.push(path);
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&subset=cyrillic-ext');

    body{
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    .title{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 500;
        color: #263238;
        letter-spacing: 0;
        line-height: 24px;
    }
    .subtitle{
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        color: #263238;
        line-height: 21px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
    }
    .basic-text{
        font-size: 14px;
        color: #5e6d82;
        line-height: 1.5em;
        & code{
            background-color: #f9fafc;
            padding: 0 4px;
            border: 1px solid #eaeefb;
            border-radius: 4px;
        }
    }
    .asideBlock{
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .el-menu{
            display: flex;
            flex-direction: column;
        }
        .demo-menu-block{
            flex-grow: 2;
            overflow-y: auto;
            &::-webkit-scrollbar {
                width: 4px;
            }
            &::-webkit-scrollbar-thumb {
                background: #888888;
            }
            &::-webkit-scrollbar-track {
                background: #cccccc;
                cursor: pointer;
            }
        }
    }
    .demo-content{
        display: flex;
        flex-direction: column;
        flex-grow: 2;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-thumb {
            background: #888888;
        }
        &::-webkit-scrollbar-track {
            background: #cccccc;
            cursor: pointer;
        }
    }
    .demo-main-right{
        display: flex;
        flex-direction: column;
        flex-grow: 2;
        overflow: hidden;
        box-sizing: border-box;
    }
    .demo-navigation-top{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 40px;
        margin-bottom: 20px;
        text-align: center;
        position: relative;
        &__title{
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 1px;
            -webkit-font-smoothing: antialiased;
            -moz-font-smoothing: antialiased;
            font-smoothing: antialiased;
            color: #606266;
        }
        button {
            position: absolute;
            font-size: 14px;
            padding: 0;
        }
        button:first-child {
            left: 0;
        }
        button:last-child {
            right: 0;
        }
    }
    .blockBtn{
        display: block;
        width: 100%;
        &__text-left{
            text-align: left;
        }
    }
    .el-menu-item-group__title{
        padding: 7px 0 7px 0px;
        padding-left: 0 !important;
    }
    .el-menu-item__custom{ height: auto; }
    .demo-container__main{
        width: 1140px;
        padding: 0;
        margin: 0 auto;
    }
    .el-row{
        margin-left: 0!important;
        margin-right: 0 !important;
    }

    .demo-block-container{
        border: 1px solid #ebebeb;
        border-radius: 3px;
        &__source{
            padding: 24px;
        }
        & .el-row {
            margin-bottom: 20px;
        }
        & .el-row:last-child {
            margin-bottom: 0;
        }
    }

    #app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
        font-family: 'Roboto', sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
</style>
