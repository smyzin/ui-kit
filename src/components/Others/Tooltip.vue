<template>
    <div style="text-align: left;">
        <h2 class="title">Базовое использование</h2>
        <p class="basic-text">Tooltip имеет 9 вариаций размещения. Атрибут <code>content</code> используется для размещения контента, который будет отображаться при наведении. А атрибут <code>placement</code> задаст направление отображения подсказки.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="box">
                    <div class="top">
                        <el-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">
                            <el-button>top-start</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">
                            <el-button>top</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">
                            <el-button>top-end</el-button>
                        </el-tooltip>
                    </div>
                    <div class="left">
                        <el-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">
                            <el-button>left-start</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">
                            <el-button>left</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
                            <el-button>left-end</el-button>
                        </el-tooltip>
                    </div>

                    <div class="right">
                        <el-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">
                            <el-button>right-start</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">
                            <el-button>right</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
                            <el-button>right-end</el-button>
                        </el-tooltip>
                    </div>
                    <div class="bottom">
                        <el-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
                            <el-button>bottom-start</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
                            <el-button>bottom</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
                            <el-button>bottom-end</el-button>
                        </el-tooltip>
                    </div>
                </div>

            </div>
        </div>

        <h2 class="title">Темы</h2>
        <p class="basic-text">Tooltip имеет две темы: <code>light</code> и <code>dark</code>, которые задаются атрибутом <code>effect</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tooltip content="Сверху в центре" placement="top">
                    <el-button type="info">Темная</el-button>
                </el-tooltip>
                <el-tooltip content="Снизу в центре" placement="bottom" effect="light">
                    <el-button>Светлая</el-button>
                </el-tooltip>
            </div>
        </div>

        <h2 class="title">Больше контента</h2>
        <p class="basic-text">Замените атрибут <code>content</code> в элементе <code>el-tooltip</code> на <code>slot</code> с названием <code>content</code>, чтобы отобразить несколько строчек в сплывающей подсказке.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tooltip placement="top">
                    <div slot="content">Первая строчка<br/>Вторая строчка :)</div>
                    <el-button style="width: auto !important;">Сверху в центре</el-button>
                </el-tooltip>
            </div>
        </div>

        <h2 class="title">Расширенные опции</h2>
        <p class="basic-text">В добавление к базовому использованию, есть несколько атрибутов, которые можно смело использовать, для кастомизации вашей всплывающей подсказки:
            <br>
            атрибут <code>transition</code> позволяет изменить анимацию появления/исчезновения подсказки;<br>
            атрибут <code>disabled</code> позволяет сделать <code>tooltip</code> неактивным.
        </p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tooltip :disabled="disabled" content="Нажмите, чтобы деактивировать tooltip" placement="bottom" effect="light">
                    <el-button @click="disabled = !disabled" style="width: auto !important;">Нажмите для  {{disabled ? 'активации' : 'деактивации'}}</el-button>
                </el-tooltip>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Tooltip',
        data(){
            return{
                disabled: true
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 400px;
    }
    .top {
        text-align: center;
    }

    .left {
        float: left;
        width: 110px;
    }

    .right {
        float: right;
        width: 110px;
    }

    .bottom {
        clear: both;
        text-align: center;
    }

    .item {
        margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
        padding: 8px 10px;
    }

    .el-button {
        width: 110px;
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .expand-fade-leave-active {
        margin-left: 20px;
        opacity: 0;
    }
</style>