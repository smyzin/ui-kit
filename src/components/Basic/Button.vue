<template>
    <div style="text-align: left;">
        <h2 class="title">Базовое использование</h2>
        <p class="basic-text">Обычно используемые кнопки.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-row>
                    <el-button>По умолчанию</el-button>
                    <el-button type="primary">Primary</el-button>
                    <el-button type="success">Success</el-button>
                    <el-button type="info">Info</el-button>
                    <el-button type="warning">Warning</el-button>
                    <el-button type="danger">Danger</el-button>
                </el-row>

                <el-row>
                    <el-button plain>Простая</el-button>
                    <el-button type="primary" plain>Primary</el-button>
                    <el-button type="success" plain>Success</el-button>
                    <el-button type="info" plain>Info</el-button>
                    <el-button type="warning" plain>Warning</el-button>
                    <el-button type="danger" plain>Danger</el-button>
                </el-row>

                <el-row>
                    <el-button round>Круглая</el-button>
                    <el-button type="primary" round>Primary</el-button>
                    <el-button type="success" round>Success</el-button>
                    <el-button type="info" round>Info</el-button>
                    <el-button type="warning" round>Warning</el-button>
                    <el-button type="danger" round>Danger</el-button>
                </el-row>

                <el-row>
                    <el-button icon="el-icon-search" circle></el-button>
                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button type="success" icon="el-icon-check" circle></el-button>
                    <el-button type="info" icon="el-icon-message" circle></el-button>
                    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </el-row>
            </div>
        </div>

        <h2 class="title">Неактивные кнопки</h2>
        <p class="basic-text">Атрибут <code>disabled</code> определяет активна кнопка или нет.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-row>
                    <el-button disabled>По умолчанию</el-button>
                    <el-button type="primary" disabled>Primary</el-button>
                    <el-button type="success" disabled>Success</el-button>
                    <el-button type="info" disabled>Info</el-button>
                    <el-button type="warning" disabled>Warning</el-button>
                    <el-button type="danger" disabled>Danger</el-button>
                </el-row>

                <el-row>
                    <el-button plain disabled>Простая</el-button>
                    <el-button type="primary" plain disabled>Primary</el-button>
                    <el-button type="success" plain disabled>Success</el-button>
                    <el-button type="info" plain disabled>Info</el-button>
                    <el-button type="warning" plain disabled>Warning</el-button>
                    <el-button type="danger" plain disabled>Danger</el-button>
                </el-row>
            </div>
        </div>

        <h2 class="title">Текстовые кнопки</h2>
        <p class="basic-text">Кнопки без границы и заливки</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button type="text">Текстовая кнопка</el-button>
                <el-button type="text" disabled>Текстовая кнопка</el-button>
            </div>
        </div>

        <h2 class="title">Кнопки с иконками</h2>
        <p class="basic-text">Кнопки с иконкой. Можно использовать иконки соместно с текстом или отдельно.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button type="primary" icon="el-icon-edit"></el-button>
                <el-button type="primary" icon="el-icon-share"></el-button>
                <el-button type="primary" icon="el-icon-delete"></el-button>
                <el-button type="primary" icon="el-icon-search">Поиск</el-button>
                <el-button type="primary">Загрузить <i class="el-icon-upload el-icon-right"></i></el-button>
            </div>
        </div>

        <h2 class="title">Группа кнопок</h2>
        <p class="basic-text">Группирирование кнопок позволяет отображать несколько кнопок в рамках одной группы.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button-group>
                    <el-button type="primary" icon="el-icon-arrow-left">Предыдущая страница</el-button>
                    <el-button type="primary">Следующая страница<i class="el-icon-arrow-right el-icon-right"></i></el-button>
                </el-button-group>
                <el-button-group>
                    <el-button type="primary" icon="el-icon-edit"></el-button>
                    <el-button type="primary" icon="el-icon-share"></el-button>
                    <el-button type="primary" icon="el-icon-delete"></el-button>
                </el-button-group>
            </div>
        </div>

        <h2 class="title">Кнопка с загрузкой</h2>
        <p class="basic-text">Нажмите кнопку, чтобы загрузить данные, затем кнопка отобразит состояние загрузки.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button type="primary" :loading="true">Загрузка</el-button>
            </div>
        </div>

        <h2 class="title">Размеры кнопок</h2>
        <p class="basic-text">Помимо размера по умолчанию, компонент <code>Button</code> предоставляет три дополнительных размера на выбора.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-row>
                    <!--<el-button>По умолчанию</el-button>-->
                    <el-button size="large">large</el-button>
                    <el-button size="medium">medium</el-button>
                    <el-button size="small">small</el-button>
                    <el-button size="mini">mini</el-button>
                </el-row>
                <el-row>
                    <!--<el-button round>По умолчанию</el-button>-->
                    <el-button size="large" round>large</el-button>
                    <el-button size="medium" round>medium</el-button>
                    <el-button size="small" round>small</el-button>
                    <el-button size="mini" round>mini</el-button>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Button',

    }
</script>

<style scoped>

</style>