<template>
    <div id="app">
        <el-container class="demo-container__main" >
            <el-aside width="170px" class="asideBlock">
                <el-menu class="demo-nav-left">
                    <el-menu-item-group>
                        <template slot="title"><div style="text-align: center;">Made by Upoint Team with</div></template>
                        <a href="https://element.eleme.io/" title="Element" target="_blank">
                            <img src="../static/elementio.svg" alt="Element" style="width: 50%;">
                        </a>
                    </el-menu-item-group>
                    <div class="demo-menu-block">
                        <el-menu-item-group>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/" type="text" @click="goTo($event.target, '/')">Главная</el-button></el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">Базовые</template>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/color" type="text" @click="goTo($event.target, '/color')">Цвет</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/typography" type="text" @click="goTo($event.target, '/typography')">Типографика</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/button" type="text" @click="goTo($event.target, '/button')">Кнопки</el-button></el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">Форма</template>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/radio" type="text" @click="goTo($event.target, '/radio')">Radio</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/checkbox" type="text" @click="goTo($event.target, '/checkbox')">Checkbox</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/input" type="text" @click="goTo($event.target, '/input')">Input</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/input-number" type="text" @click="goTo($event.target, '/input-number')">InputNumber</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/select" type="text" @click="goTo($event.target, '/select')">Select</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/cascader" type="text" @click="goTo($event.target, '/cascader')">Cascader</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/switch" type="text" @click="goTo($event.target, '/switch')">Switch</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/slider" type="text" @click="goTo($event.target, '/slider')">Slider</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/time-picker" type="text" @click="goTo($event.target, '/time-picker')">TimePicker</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/date-picker" type="text" @click="goTo($event.target, '/date-picker')">DatePicker</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/date-time-picker" type="text" @click="goTo($event.target, '/date-time-picker')">TimeDatePicker</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/upload" type="text" @click="goTo($event.target, '/upload')">Upload</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/rate" type="text" @click="goTo($event.target, '/rate')">Rate</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/color-picker" type="text" @click="goTo($event.target, '/color-picker')">ColorPicker</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/transfer" type="text" @click="goTo($event.target, '/transfer')">Transfer</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/form" type="text" @click="goTo($event.target, '/form')">Form</el-button></el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">Данные</template>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/table" type="text" @click="goTo($event.target, '/table')">Table</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/tag" type="text" @click="goTo($event.target, '/tag')">Tag</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/progress" type="text" @click="goTo($event.target, '/progress')">Progress</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/tree" type="text" @click="goTo($event.target, '/tree')">Tree</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/pagination" type="text" @click="goTo($event.target, '/pagination')">Pagination</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/badge" type="text" @click="goTo($event.target, '/badge')">Badge</el-button></el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">Оповещения</template>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/alert" type="text" @click="goTo($event.target, '/alert')">Alert</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/loading" type="text" @click="goTo($event.target, '/loading')">Loading</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/message" type="text" @click="goTo($event.target, '/message')">Message</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/message-box" type="text" @click="goTo($event.target, '/message-box')">MessageBox</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/notification" type="text" @click="goTo($event.target, '/notification')">Notification</el-button></el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">Навигация</template>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/nav-menu" type="text" @click="goTo($event.target, '/nav-menu')">NavMenu</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/tabs" type="text" @click="goTo($event.target, '/tabs')">Tabs</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/breadcrumb" type="text" @click="goTo($event.target, '/breadcrumb')">Breadcrumb</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/dropdown" type="text" @click="goTo($event.target, '/dropdown')">Dropdown</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/steps" type="text" @click="goTo($event.target, '/steps')">Steps</el-button></el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">Разное</template>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/dialog" type="text" @click="goTo($event.target, '/dialog')">Dialog</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/tooltip" type="text" @click="goTo($event.target, '/tooltip')">Tooltip</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/popover" type="text" @click="goTo($event.target, '/popover')">Popover</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/card" type="text" @click="goTo($event.target, '/card')">Card</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/carousel" type="text" @click="goTo($event.target, '/carousel')">Carousel</el-button></el-menu-item>
                            <el-menu-item class="el-menu-item__custom" index="ui"><el-button class="blockBtn blockBtn__text-left" data-path="/collapse" type="text" @click="goTo($event.target, '/collapse')">Collapse</el-button></el-menu-item>
                        </el-menu-item-group>
                    </div>
                </el-menu>

            </el-aside>
            <el-main class="demo-main-right">
                <div class="demo-navigation-top">
                    <el-button type="text" icon="el-icon-back" v-if="$route.meta.previous" @click="top_goTo($route.meta.previous.path)">{{$route.meta.previous.name}}</el-button>
                    <div class="demo-navigation-top__title demo__title page__title">{{$route.name}}</div>
                    <el-button type="text" v-if="$route.meta.next" @click="top_goTo($route.meta.next.path)">{{$route.meta.next.name}} <i class="el-icon-back" style="transform: rotate(180deg);"></i></el-button>
                </div>
                <div class="demo-content" ref="mainContainer">
                    <router-view/>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'App',
        watch: {
            '$route' (to, from) {
                this.$refs.mainContainer.scrollTo(0, 0);
            }
        },
        mounted(){
            let buttons = document.querySelectorAll('.blockBtn');
            for(let i = 0; i < buttons.length; i++){
                if(buttons[i].dataset.path === this.$route.path){
                    buttons[i].classList.add('is-active__btn');
                    break;
                }
            }
        },
        methods: {
            top_goTo(path){
                let buttons = document.querySelectorAll('.blockBtn');
                for(let i = 0; i < buttons.length; i++){
                    if(buttons[i].classList.contains('is-active__btn')){
                        buttons[i].classList.remove('is-active__btn');
                        break;
                    }
                }
                for(let j = 0; j < buttons.length; j++){
                    if(buttons[j].dataset.path === path){
                        buttons[j].classList.add('is-active__btn');
                        break;
                    }
                }

                this.$router.push(path);
            },
            goTo(e, path){
                let buttons = document.querySelectorAll('.blockBtn');
                for(let i = 0; i < buttons.length; i++){
                    if(buttons[i].classList.contains('is-active__btn')){
                        buttons[i].classList.remove('is-active__btn');
                        break;
                    }
                }
                if(e.classList.contains('blockBtn')){
                    e.classList.add('is-active__btn');
                }else{
                    e.parentElement.classList.add('is-active__btn');
                }

                this.$router.push(path);
            },

        }
    }
</script>

<style lang="scss">


    body{
        margin: 0;
        font-family: 'Roboto', 'Arial', sans-serif;
    }
    .el-menu-item{
        padding: 0 15px !important;
    }
    .code-block{
        display: block;
        line-height: 1.8;
        font-family: Menlo,Monaco,Consolas,Courier,monospace;
        font-size: 12px;
        padding: 18px 24px !important;
        background-color: #fafafa;
        border: 1px solid #eaeefb;
        margin-bottom: 20px;
        margin-top: 15px;
        color: black;
        border-radius: 4px;
        -webkit-font-smoothing: auto;
        & .blue{ color: #3182bd; }
        & .green{ color: #31a354; }
        & .comment{ color: #636363; }
        & .name{ color: #756bb1; }
    }
    .el-menu-item .el-menu-item__custom{
        padding-left: 10px !important;
    }
    .demo-menu-block{
        padding-bottom: 25px;
    }
    .demo__title{
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        font-smoothing: antialiased;
    }
    .title{
        margin: 20px 0 10px;
        border-bottom: 1px solid #dddddd;
        font-size: 18px;
        text-align: left;
    }

    .basic-text{
        font-size: 14px;
        color: #5e6d82;
        line-height: 1.5em;
        margin: 7px 0;
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
        padding-bottom: 25px;
        padding-right: 15px !important;
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
        padding: 10px 0 0 20px;
    }
    .demo-navigation-top{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 40px;
        margin-bottom: 20px;
        text-align: center;
        position: relative;
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
        display: block  !important;
        width: 100%  !important;
        color: #888888  !important;
        &:hover{
            color: #263238;
        }
        &:focus{
            color: #263238;
        }
        &__text-left{
            text-align: left !important;
        }
    }
    .is-active__btn{
        color: #ff5722 !important;
    }
    .el-menu-item-group__title{
        padding: 15px 0 7px 0;
        text-align: left;
        padding-left: 15px !important;
        font-size: 12px;
    }
    .el-menu-item__custom{ height: auto !important; }
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
