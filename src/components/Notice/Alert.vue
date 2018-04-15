<template>
    <div style="text-align: left;">
        <h2 class="title">Основное использование</h2>
        <p class="basic-text">Компоненты оповещения являются элементами без наложения на странице, которые не исчезают автоматически. Alert предоставляет 4 типа тем, определяемых по атрибуту<code>type</code> со значениями <code>success</code>, <code>error</code>, <code>info</code> и <code>warning</code>, по умолчанию <code>info</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-alert
                        class="demo-alert-ex__first"
                        title="success alert"
                        type="success">
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="info alert"
                        type="info">
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="warning alert"
                        type="warning">
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="error alert"
                        type="error">
                </el-alert>
            </div>
        </div>

        <h2 class="title">Настраиваемая кнопка закрытия</h2>
        <p class="basic-text">Отображение значка улучшает читаемость. При установке атрибута <code>show-icon</code> отображается значок, соответствующий текущему типу оповещений.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-alert
                        class="demo-alert-ex__first"
                        title="unclosable alert"
                        type="success"
                        :closable="false">
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="customized close-text"
                        type="info"
                        close-text="Gotcha">
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="alert with callback"
                        type="warning"
                        @close="hello">
                </el-alert>
            </div>
        </div>

        <h2 class="title">С иконкой</h2>
        <p class="basic-text">Отображение значка улучшает читаемость. Атрибут <code>show-icon</code> отображает значок/иконку, соответствующею текущему типу оповещения.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-alert
                        class="demo-alert-ex__first"
                        title="success alert"
                        type="success"
                        show-icon>
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="info alert"
                        type="info"
                        show-icon>
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="warning alert"
                        type="warning"
                        show-icon>
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="error alert"
                        type="error"
                        show-icon>
                </el-alert>
            </div>
        </div>

        <h2 class="title">Центрированный текст</h2>
        <p class="basic-text">Используйте атрибут <code>center</code> для центрирования текста.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-alert
                        class="demo-alert-ex__first"
                        title="success alert"
                        type="success"
                        center
                        show-icon>
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="info alert"
                        type="info"
                        center
                        show-icon>
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="warning alert"
                        type="warning"
                        center
                        show-icon>
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="error alert"
                        type="error"
                        center
                        show-icon>
                </el-alert>
            </div>
        </div>

        <h2 class="title">С описанием</h2>
        <p class="basic-text">Описание содержит сообщение с более подробной информацией. Помимо обязательного атрибута <code>title</code>, вы можете добавить атрибут <code>description</code>, который поможет вам описать оповещение с более подробной информацией. Описание может хранить только текстовую строку, и она автоматически переносит слово.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-alert
                        title="with description"
                        type="success"
                        description="This is a description.">
                </el-alert>
            </div>
        </div>

        <h2 class="title">Со значком и описанием</h2>
        <p class="basic-text">Это пример с обоими значками и описанием.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-alert
                        class="demo-alert-ex__first"
                        title="success alert"
                        type="success"
                        description="more text description"
                        show-icon>
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="info alert"
                        type="info"
                        description="more text description"
                        show-icon>
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="warning alert"
                        type="warning"
                        description="more text description"
                        show-icon>
                </el-alert>
                <el-alert
                        class="demo-alert-ex"
                        title="error alert"
                        type="error"
                        description="more text description"
                        show-icon>
                </el-alert>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Alert',
        methods: {
            hello() {
                alert('Hello World!');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .demo-alert-ex{
        margin: 20px 0 0;
        /*&:first-child{*/
            /*margin: 0;*/
        /*}*/
    }
</style>