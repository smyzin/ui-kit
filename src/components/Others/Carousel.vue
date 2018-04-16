<template>
    <div style="text-align: left;">
        <h2 class="title">Базовое использование</h2>
        <p class="basic-text">Объедените <code>el-carousel</code> с <code>el-carousel-item</code> и вы получите карусель. Контент каждого слайда полностью кастомизируется, его необходимо поместить внутрь тега <code>el-carousel-item</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source" style="text-align: center;">
                <div class="block">
                    <span class="demonstration demo-input-label demo-title">Switch when indicator is hovered (default)</span>
                    <el-carousel height="150px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="block">
                    <span class="demonstration demo-input-label demo-title">Switch when indicator is clicked</span>
                    <el-carousel trigger="click" height="150px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>

        <h2 class="title">Индикаторы</h2>
        <p class="basic-text">Индикаторы могут отображаться снаружи карусели. Атрибут <code>indicator-position</code> определяет где будут отображаться индикаторы. По умолчанию, индикаторы располагаются внутри карусели, но указав значение <code>outside</code> в атрибуте <code>indicator-position</code>, они будут отображены снаружи. Также, если задать атрибуту значение <code>none</code>, то они не будут отображаться вовсе.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source" style="text-align: center;">
                <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="big__block">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

        <h2 class="title">Стрелочки</h2>
        <p class="basic-text">Вы можете указать, будут ли отображаться стрелочки карусели или нет. Это опредлеляется атрибутом <code>arrow</code>, который по умолчанию отображает стрелочки при наведение мышки на карусель. Значения <code>always</code> и <code>never</code>, отобразят или скроют стрелочки соответственно.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source" style="text-align: center;">
                <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="big__block">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

        <h2 class="title">Режим карточек</h2>
        <p class="basic-text">Когда страница достаточно широкая, но имеет ограниченную высоту, вы можете активировать режим карточек для карусели. Задав атрибуту <code>type</code> - <code>card</code>, вы активируете режим карточек.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source" style="text-align: center;">
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <h3 class="card__block">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Carousel',

    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 16px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }
    .big__block{
        line-height: 300px !important;
    }
    .card__block{
        line-height: 200px !important;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .demo-input-suffix{
        padding: 5px;
    }
    .demo-input-label {
        display: inline-block;
        width: 270px;
    }
    .demo-title{
        margin-bottom: 10px;
        font-size: 14px;
        color: #5e6d82;
    }
    .block{
        display: inline-block;
        width: 49%;
    }
</style>