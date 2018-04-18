<template>
    <div style="text-align: left;">
        <h2 class="title">Стандартное использование</h2>
        <p class="basic-text">Рейтинг делит баллы оценки на три уровня, и эти уровни можно отличить, используя разные цвета фона. По умолчанию цвета фона одинаковы, но вы можете назначить их для отражения трех уровней с использованием атрибута <code>colors</code>, а их два порога можно определить с помощью <code>low-threshold</code> и <code>high-threshold</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <span class="demonstration">По умолчанию</span>
                    <el-rate v-model="value1"></el-rate>
                </div>
                <div class="block">
                    <span class="demonstration">Для разных уровней, разные цвета</span>
                    <el-rate
                            v-model="value2"
                            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                    </el-rate>
                </div>
            </div>
        </div>

        <h2 class="title">С текстом</h2>
        <p class="basic-text">Используйте текст для указания значения рейтинга. Добавить атрибут <code>show-text</code> для отображения текста справа от элемента. Вы можете назначать тексты для разных оценок с помощью <code>texts</code>. <code>texts</code> представляет собой массив, длина которого должна быть равна максимальной оценке <code>max</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-rate
                        v-model="value3"
                        :texts="['уупс', 'все плохо', 'нормально', 'хорошо', 'замечательно']"
                        show-text>
                </el-rate>
            </div>
        </div>

        <h2 class="title">Дополнительные иконки</h2>
        <p class="basic-text">Вы можете использовать разные значки, чтобы различать состояния рейтинга. Вы можете настроить значки для трех разных уровней с помощью <code>icon-classes</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-rate
                        v-model="value4"
                        :icon-classes="[
                            'mdi mdi-emoticon-sad', 'mdi mdi-emoticon-happy', 'mdi mdi-emoticon-excited',
                        ]"
                        void-icon-class="mdi mdi-emoticon-neutral"
                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
            </div>
        </div>

        <h2 class="title">Только для чтения</h2>
        <p class="basic-text">Показан только для чтения. Поддерживается нецелое значение. Используйте атрибут <code>disabled </code>, чтобы сделать компонент доступным только для чтения. Добавьте <code>show-score</code>, чтобы отобразить рейтинг с правой стороны. Кроме того, вы можете использовать атрибут <code>score-template</code> для создания шаблона оценки. Он должен содержать <code>{value}</code>, и <code>{value}</code> будет заменен рейтинговой оценкой.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-rate
                        v-model="value5"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value} points">
                </el-rate>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Rate',
        data() {
            return {
                value1: null,
                value2: null,
                value3: null,
                value4: null,
                value5: 3.7
            }
        }
    }
</script>

<style scoped>

</style>