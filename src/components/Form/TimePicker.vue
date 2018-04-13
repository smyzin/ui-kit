<template>
    <div style="text-align: left;">
        <h2 class="title">Фиксированное время</h2>
        <p class="basic-text">Список фиксированного времени для выбора пользователями. Используйте метку <code>el-time-select</code>, затем назначьте время начала, время окончания и время, используя <code>start</code>, <code>end</code> и <code>step</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-time-select
                        v-model="value1"
                        :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                            }"
                        placeholder="Выберите время">
                </el-time-select>
            </div>
        </div>

        <h2 class="title">Произвольный выбор времени</h2>
        <p class="basic-text">Используя <code>el-time-picker</code> вы можете ограничить временной диапазон, указав <code>selectableRange</code>. Для управления стрелками, а не колесом мыши, используйте атрибут <code>arrow-control</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-time-picker
                        v-model="value2"
                        :picker-options="{
                            selectableRange: '18:30:00 - 20:30:00'
                        }"
                        placeholder="Произвольное время">
                </el-time-picker>
                <el-time-picker
                        arrow-control
                        v-model="value3"
                        :picker-options="{
                            selectableRange: '18:30:00 - 20:30:00'
                        }"
                        placeholder="Произвольное время">
                </el-time-picker>
            </div>
        </div>

        <h2 class="title">Фиксированный временной диапазон</h2>
        <p class="basic-text">Если сначала выбирается время начала, то время окончания будет соответствующим образом изменено.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-time-select
                        placeholder="Время начала"
                        v-model="startTime"
                        :picker-options="{
                          start: '08:30',
                          step: '00:15',
                          end: '18:30'
                        }">
                </el-time-select>
                <el-time-select
                        placeholder="Время окончания"
                        v-model="endTime"
                        :picker-options="{
                          start: '08:30',
                          step: '00:15',
                          end: '18:30',
                          minTime: startTime
                        }">
                </el-time-select>
            </div>
        </div>

        <h2 class="title">Произвольный временной диапазон</h2>
        <p class="basic-text">Позволяет выбрать произвольный временной диапазон.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-time-picker
                        is-range
                        v-model="value4"
                        range-separator="До"
                        start-placeholder="Время начала"
                        end-placeholder="Время окончания">
                </el-time-picker>
                <el-time-picker
                        is-range
                        arrow-control
                        v-model="value5"
                        range-separator="До"
                        start-placeholder="Время начала"
                        end-placeholder="Время окончания">
                </el-time-picker>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'TimePicker',
        data() {
            return {
                value1: '',
                value2: new Date(2016, 9, 10, 18, 40),
                value3: new Date(2016, 9, 10, 18, 40),
                startTime: '',
                endTime: '',
                value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
                value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
            };
        }
    }
</script>

<style scoped>

</style>