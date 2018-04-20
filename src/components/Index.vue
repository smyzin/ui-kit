<template>
    <div style="text-align: left;">
        <h2 class="title">Описание</h2>
        <p class="basic-text">Данный UI-kit предназначен для программы Upoint, разрабатываемой командой Component17. Этот UI-kit создан на базе темы UI-фреймворка Element и настроен под нужды программного обеспечения Upoint.</p>
        <!--<div class="demo-block-container">-->
            <!--<div class="demo-block-container__source" style="text-align: center;">-->
                <!--&lt;!&ndash;<video autoplay loop="loop">&ndash;&gt;-->
                    <!--&lt;!&ndash;<source src="../assets/123.mp4">&ndash;&gt;-->
                <!--&lt;!&ndash;</video>&ndash;&gt;-->
            <!--</div>-->
        <!--</div>-->
        <h2 class="title">Работа с UI-kit</h2>
        <p class="basic-text">Скачать данный UI-kit вы можете нажав на кнопку "Скачать", которая располагается ниже. Скаченный ZIP-архив нужно распаковать, например в папке '/static' и подключить в вашем проекте. Содежание архива:</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source" style="text-align: center;">
                СОДЕРЖАНИЕ АРХИВА
            </div>
        </div>
        <el-button type="primary" class="download__btn" size="medium" @click="download('./static/upoint-ui.zip')">Скачать <i class="el-icon-upload el-icon-right"></i></el-button>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return { }
        },
        methods: {
            download(filePath){
                console.log(filePath);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .download__btn{
        display: block !important;
        margin: 15px auto !important;
    }
</style>
