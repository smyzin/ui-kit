<template>
    <div style="text-align: left;">
        <h2 class="title">Стандартное использование</h2>
        <p class="basic-text">ColorPicker требует, чтобы переменная типа «string» была привязана к v-модели.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <span class="demonstration">Со значением по умолчанию</span>
                    <el-color-picker v-model="color1"></el-color-picker>
                </div>
                <div class="block">
                    <span class="demonstration">Бес значения по умолчанию</span>
                    <el-color-picker v-model="color2"></el-color-picker>
                </div>
            </div>
        </div>

        <h2 class="title">С альфа-каналом</h2>
        <p class="basic-text">ColorPicker поддерживает выбор альфа-канала. Чтобы активировать альфа-выбор, просто добавьте атрибут <code>show-alpha</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-color-picker v-model="color3" show-alpha></el-color-picker>
            </div>
        </div>

        <h2 class="title">Предопределенные цвета</h2>
        <p class="basic-text">ColorPicker поддерживает предопределенные параметры цвета.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-color-picker
                        v-model="color5"
                        show-alpha
                        :predefine="predefineColors">
                </el-color-picker>
            </div>
        </div>

        <h2 class="title">Размеры</h2>
        <p class="basic-text"></p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-color-picker v-model="color4" size="large"></el-color-picker>
                <el-color-picker v-model="color4" size="medium"></el-color-picker>
                <el-color-picker v-model="color4" size="small"></el-color-picker>
                <el-color-picker v-model="color4" size="mini"></el-color-picker>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ColorPicker',
        data() {
            return {
                color1: '#409EFF',
                color2: null,
                color3: 'rgba(19, 206, 102, 0.8)',
                color5: 'rgba(255, 69, 0, 0.68)',
                predefineColors: [
                    '#ff4500',
                    '#ff8c00',
                    '#ffd700',
                    '#90ee90',
                    '#00ced1',
                    '#1e90ff',
                    '#c71585',
                    'rgba(255, 69, 0, 0.68)',
                    'rgb(255, 120, 0)',
                    'hsv(51, 100, 98)',
                    'hsva(120, 40, 94, 0.5)',
                    'hsl(181, 100%, 37%)',
                    'hsla(209, 100%, 56%, 0.73)',
                    '#c7158577'
                ],
                color4: '#409EFF'
            }
        }
    }
</script>

<style scoped>

</style>