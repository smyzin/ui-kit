<template>
    <div style="text-align: left;">
        <h2 class="title">Базовое использование</h2>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-switch v-model="value1">
                </el-switch>
                <el-switch
                        v-model="value2"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                </el-switch>
            </div>
        </div>

        <h2 class="title">С текстовым описанием</h2>
        <p class="basic-text">Вы можете добавить атрибуты <code>active-text</code> и <code>inactive-text</code>, чтобы отобразить текст.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-switch
                        v-model="value3"
                        active-text="Оплатить за месяц"
                        inactive-text="Оплатить за год">
                </el-switch>
                <el-switch
                        style="display: block"
                        v-model="value4"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        active-text="Оплатить за месяц"
                        inactive-text="Оплатить за год">
                </el-switch>
            </div>
        </div>

        <h2 class="title">Расширенные типы значений</h2>
        <p class="basic-text">Вы можете указать атрибуты <code>active-value</code> и <code>inactive-value</code>. Они опа получают типы значений <code>Boolean</code>, <code>String</code> или <code>Number</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tooltip :content="'Переключить значение: ' + value5" placement="top">
                    <el-switch
                            v-model="value5"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                            active-value="Вкл"
                            inactive-value="Выкл">
                    </el-switch>
                </el-tooltip>
            </div>
        </div>

        <h2 class="title">Неактивный переключатель</h2>
        <p class="basic-text">Добавьте атрибут <code>disabled</code>, чтобы сделать переключатель не активным.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-switch
                        v-model="value6"
                        disabled>
                </el-switch>
                <el-switch
                        v-model="value7"
                        disabled>
                </el-switch>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Switch',
        data() {
            return {
                value1: true,
                value2: true,
                value3: true,
                value4: true,
                value5: 'Выкл',
                value6: true,
                value7: false
            }
        }
    }
</script>

<style scoped>

</style>