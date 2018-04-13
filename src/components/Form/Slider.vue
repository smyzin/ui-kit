<template>
    <div style="text-align: left;">
        <h2 class="title">Базовое использование</h2>
        <p class="basic-text">Текущие значение выводится, при использование слайдера.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <span class="demonstration">Default value</span>
                    <el-slider v-model="value1"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">Customized initial value</span>
                    <el-slider v-model="value2"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">Hide Tooltip</span>
                    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">Format Tooltip</span>
                    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">Disabled</span>
                    <el-slider v-model="value5" disabled></el-slider>
                </div>
            </div>
        </div>

        <h2 class="title">Отдельные значение</h2>
        <p class="basic-text">Значения могут быть обособлены.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <span class="demonstration">Breakpoints not displayed</span>
                    <el-slider
                            v-model="value6"
                            :step="10">
                    </el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">Breakpoints displayed</span>
                    <el-slider
                            v-model="value7"
                            :step="10"
                            show-stops>
                    </el-slider>
                </div>
            </div>
        </div>

        <h2 class="title">Слайдер с текстовым полем</h2>
        <p class="basic-text">Добавьте атрибут <code>show-input</code>, чтобы отобразить текстовое поле справа.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <el-slider
                            v-model="value8"
                            show-input>
                    </el-slider>
                </div>
            </div>
        </div>

        <h2 class="title">Слайдер с диапозоном</h2>
        <p class="basic-text">Атрибут <code>range</code> активирует мод диапозона для слайдера.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <el-slider
                            v-model="value9"
                            range
                            show-stops
                            :max="10">
                    </el-slider>
                </div>
            </div>
        </div>

        <h2 class="title">Вертикальный слайдер</h2>
        <p class="basic-text">Атрибут <code>vertical</code> делает слайдер вертикальным. В этом режиме атрибут <code>height</code> является обязательным.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <el-slider
                            v-model="value10"
                            vertical
                            height="200px">
                    </el-slider>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Slider',
        data() {
            return {
                value1: 0,
                value2: 50,
                value3: 36,
                value4: 48,
                value5: 42,
                value6: 0,
                value7: 0,
                value8: 0,
                value9: [4, 8],
                value10: 0
            }
        },
        methods: {
            formatTooltip(val) {
                return val / 100;
            }
        }
    }
</script>

<style scoped>

</style>