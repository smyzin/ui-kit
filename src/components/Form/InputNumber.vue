<template>
    <div style="text-align: left;">
        <h2 class="title">Основное использование</h2>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
            </div>
        </div>

        <h2 class="title">Неактивное поле</h2>
        <p class="basic-text">Атрибут <code>disabled</code> определяет активно поле или нет.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-input-number v-model="num2" :disabled="true"></el-input-number>
            </div>
        </div>

        <h2 class="title">Шаг переключения между числами</h2>
        <p class="basic-text">Позволяет определить шаг увеличения числа.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-input-number v-model="num3" :step="2"></el-input-number>
            </div>
        </div>

        <h2 class="title">Размер поля</h2>
        <p class="basic-text">Используйте атрибут <code>size</code>, чтобы указать размер поля.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-input-number size="large" v-model="num4"></el-input-number>
                <el-input-number size="medium" v-model="num5"></el-input-number>
                <el-input-number size="small" v-model="num6"></el-input-number>
                <el-input-number size="mini" v-model="num7"></el-input-number>
            </div>
        </div>

        <h2 class="title">Положение кнопок управления</h2>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'InputNumber',
        data() {
            return {
                num1: 1,
                num2: 1,
                num3: 5,
                num4: 1,
                num5: 1,
                num6: 1,
                num7: 1,
                num8: 1
            };
        },
        methods: {
            handleChange(value) {
                console.log(value)
            }
        }
    }
</script>

<style scoped>

</style>