<template>
    <div style="text-align: left;">
        <h2 class="title">Стандартный выбор даты</h2>
        <p class="basic-text">Стандартный выбор даты, измеряемый <code>date</code>. Для измерения используйте атрибут <code>type</code>. Вы можете включить быстрые параметры, создав объект <code>picker-options</code> с <code>shortcuts</code> свойством. Для отключения дат используется функция <code>disabledDate</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <span class="demonstration">По умолчанию</span>
                    <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="Выберите день">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">Выбор с доп. опциями</span>
                    <el-date-picker
                            v-model="value2"
                            type="date"
                            placeholder="Выберите день"
                            :picker-options="pickerOptions1">
                    </el-date-picker>
                </div>
            </div>
        </div>

        <h2 class="title">Другие измерения</h2>
        <p class="basic-text">Вы можете выбрать для измерения <code>week</code>, <code>month</code> или <code>year</code>, добавив стандартный компонент выбора даты.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <span class="demonstration">Неделя</span>
                    <el-date-picker
                            v-model="value3"
                            type="week"
                            format="Week WW"
                            placeholder="Выберите неделю">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">Месяц</span>
                    <el-date-picker
                            v-model="value4"
                            type="month"
                            placeholder="Выберите месяц">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">Год</span>
                    <el-date-picker
                            v-model="value5"
                            type="year"
                            placeholder="Выберите год">
                    </el-date-picker>
                </div>
            </div>
        </div>

        <h2 class="title">Диапазон дат</h2>
        <p class="basic-text">Выбор диапазона дат. Для независимого переключения месяца в панелях используйте атрибут <code>unlink-panels</code>. Его значение должно быть проанализировано <code>new Date()</code>. </p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <span class="demonstration">По умолчанию</span>
                    <el-date-picker
                            v-model="value6"
                            type="daterange"
                            range-separator="До"
                            start-placeholder="Дата начала"
                            end-placeholder="Дата окончания">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">С доп. опциями</span>
                    <el-date-picker
                            v-model="value7"
                            type="daterange"
                            align="right"
                            unlink-panels
                            range-separator="До"
                            start-placeholder="Дата начала"
                            end-placeholder="Дата окончания"
                            :picker-options="pickerOptions2">
                    </el-date-picker>
                </div>
            </div>
        </div>

        <h2 class="title">Значение по умолчанию</h2>
        <p class="basic-text">Если пользователь не выбрал дату, по умолчанию отображается текущая. Вы можете указать другую дату по умолчанию с помощью <code>default-value</code>. Если <code>type="daterange"</code>, <code>default-value</code> добавляет левый боковой календарь.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <span class="demonstration">Дата</span>
                    <el-date-picker
                            v-model="value8"
                            type="date"
                            placeholder="Выберите дату"
                            default-value="2010-10-01">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">Диапозон дат</span>
                    <el-date-picker
                            v-model="value9"
                            type="daterange"
                            align="right"
                            start-placeholder="Дата начала"
                            end-placeholder="Дата окончания"
                            default-value="2010-10-01">
                    </el-date-picker>
                </div>
            </div>
        </div>

        <h2 class="title">Форматы даты</h2>
        <p class="basic-text">Используйте <code>format</code> для управления отображаемым текстом в поле ввода. Используйте <code>value-format</code> для управления форматом привязки. По умолчанию компонент принимает и отдает объект <code>date</code>. Ниже приведены поддерживаемые форматы:
            Обратите внимание на капитализацию!</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <span class="demonstration">Создание объекта Date</span>
                    <div class="demonstration">Значение: {{ value10 }}</div>
                    <el-date-picker
                            v-model="value10"
                            type="date"
                            placeholder="Выберите дату"
                            format="yyyy/MM/dd">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">Использует значение формата</span>
                    <div class="demonstration">Значение: {{ value11 }}</div>
                    <el-date-picker
                            v-model="value11"
                            type="date"
                            placeholder="Выберите дату"
                            format="yyyy/MM/dd"
                            value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">Timestamp</span>
                    <div class="demonstration">Значение：{{ value12 }}</div>
                    <el-date-picker
                            v-model="value12"
                            type="date"
                            placeholder="Выберите дату"
                            format="yyyy/MM/dd"
                            value-format="timestamp">
                    </el-date-picker>
                </div>
            </div>
        </div>

        <h2 class="title">Время по умолчанию для даты начала и окончания</h2>
        <p class="basic-text">При выборе диапазона дат вы можете назначить отрезок времени для даты начала и окончания. По умолчанию временной отрезок даты начала и даты окончания - <code>00:00:00</code>. Изменить время можно с помощью <code>0default-time</code>. Он принимает массив из двух строк с форматом <code>12:00:00</code>. Первая строка устанавливает время для даты начала, а вторая - для даты окончания.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <p>Значение компонента：{{ value13 }}</p>
                    <el-date-picker
                            v-model="value13"
                            type="daterange"
                            start-placeholder="Дата начала"
                            end-placeholder="Дата окончания"
                            :default-time="['00:00:00', '23:59:59']">
                    </el-date-picker>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'DatePicker',
        data() {
            return {
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: 'Сегодня',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: 'Вчера',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: 'Неделю назад',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                pickerOptions2: {
                    shortcuts: [{
                        text: 'Последняя неделя',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: 'Последний месяц',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: 'Последние три месяца',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value6: '',
                value7: '',
                value8: '',
                value9: '',
                value10: '',
                value11: '',
                value12: '',
                value13: []
            }
        }
    }
</script>

<style scoped>

</style>