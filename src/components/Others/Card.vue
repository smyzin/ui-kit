<template>
    <div style="text-align: left;">
        <h2 class="title">Базовое использование</h2>
        <p class="basic-text">Карточка включает в себя заголовок, контент и действия. </p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Card name</span>
                        <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'List item ' + o }}
                    </div>
                </el-card>
            </div>
        </div>

        <h2 class="title">Простая карточка</h2>
        <p class="basic-text">Заголовок может быть опущен, т.е. его указывать не обязательно.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-card class="box-card">
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'List item ' + o }}
                    </div>
                </el-card>
            </div>
        </div>

        <h2 class="title">С картинкой</h2>
        <p class="basic-text">Вы можете сделать карточку более информативной, добавив в нее изображение.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-row>
                    <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                        <el-card :body-style="{ padding: '0px' }">
                            <img src="../../assets/hamburger.png" class="image">
                            <div style="padding: 14px;">
                                <span>Yummy hamburger</span>
                                <div class="bottom clearfix">
                                    <time class="time">{{ date }}</time>
                                    <el-button type="text" class="button">Operating button</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>

        <h2 class="title">Тени</h2>
        <p class="basic-text">Вы можете указать, когда отображать тень карточки. Это делается с помощью атрибута <code>shadow</code>, которому указывается значение - <code>always</code>, <code>hover</code> или <code>never</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-row :gutter="12">
                    <el-col :span="8">
                        <el-card shadow="always">
                            Always
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover">
                            Hover
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="never">
                            Never
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Card',
        computed:{
            date(){
                let day = this.currentDate.getDay() < 10 ? '0' + this.currentDate.getDay() : this.currentDate.getDay();
                let month = this.currentDate.getMonth() < 10 ? '0' + this.currentDate.getMonth() : this.currentDate.getMonth();
                let year = this.currentDate.getFullYear();

                return day + '.' + month + '.' + year;
            }
        },
        data() {
            return {
                currentDate: new Date()
            };
        }
    }
</script>

<style scoped>
    /*.text {*/
          /*font-size: 14px;*/
      /*}*/

    /*.clearfix:before,*/
    /*.clearfix:after {*/
        /*display: table;*/
        /*content: "";*/
    /*}*/
    /*.clearfix:after {*/
        /*clear: both*/
    /*}*/

    /*.box-card {*/
        /*width: 480px;*/
    /*}*/

    /*.item {*/
        /*padding: 7px 0;*/
    /*}*/

    .box-card {
        width: 320px;
    }
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>