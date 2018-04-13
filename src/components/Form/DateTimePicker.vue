<template>
    <div style="text-align: left;">
        <h2 class="title">Дата и время</h2>
        <p class="basic-text">Вы можете выбрать дату и время в одном сборщике одновременно, установив для <code>type</code> значение <code>datetime</code>. Способ использования ярлыков аналогичен методу выбора даты.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source" style="text-align: center;">
                <div class="block">
                    <span class="demo-input-label demonstration demo-title">По умолчанию</span>
                    <el-date-picker
                            class="inline-input demo-el-input-icon"
                            v-model="value1"
                            type="datetime"
                            placeholder="Выберите дату и время">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demo-input-label demonstration demo-title">С доп. опциями</span>
                    <el-date-picker
                            class="inline-input demo-el-input-icon"
                            v-model="value2"
                            type="datetime"
                            placeholder="Выберите дату и время"
                            :picker-options="pickerOptions1">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demo-input-label demonstration demo-title">Стандартное время</span>
                    <el-date-picker
                            class="inline-input demo-el-input-icon"
                            v-model="value3"
                            type="datetime"
                            placeholder="Выберите дату и время"
                            default-time="12:00:00">
                    </el-date-picker>
                </div>
            </div>
        </div>

        <h2 class="title">Диапазон дат и времени</h2>
        <p class="basic-text">Вы можете выбрать дату и время, установив для <code>type</code> значение <code>datetimerange</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source" style="text-align: center;">
                <div class="block">
                    <span class="demo-input-label demonstration demo-title">По умолчанию</span>
                    <el-date-picker
                            class="inline-input demo-el-input-icon"
                            v-model="value4"
                            type="datetimerange"
                            range-separator="До"
                            start-placeholder="Дата начала"
                            end-placeholder="Дата окончания">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demo-input-label demonstration demo-title">С доп. опциями</span>
                    <el-date-picker
                            class="inline-input demo-el-input-icon"
                            v-model="value5"
                            type="datetimerange"
                            :picker-options="pickerOptions2"
                            range-separator="До"
                            start-placeholder="Дата начала"
                            end-placeholder="Дата окончания"
                            align="right">
                    </el-date-picker>
                </div>
            </div>
        </div>

        <h2 class="title">Значение по умолчанию для даты начала и окончания</h2>
        <p class="basic-text">При выборе диапазона дат на панели с типом <code>datetimerange</code>, <code>00:00:00</code> будет использоваться в качестве значения времени по умолчанию для начала и окончания. Мы можем управлять им с помощью атрибута <code>default-time</code>. <code>default-time</code> принимает массив из двух строк. Первый элемент управляет значением времени начала, а второй элемент управляет значением времени конечной даты.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source" style="text-align: center;">
                <div class="block">
                    <div class="demo-input-label demonstration demo-title">Начало дня 12:00:00</div>
                    <el-date-picker
                            class="inline-input demo-el-input-icon"
                            v-model="value6"
                            type="datetimerange"
                            start-placeholder="Дата начала"
                            end-placeholder="Дата окончания"
                            :default-time="['12:00:00']">
                    </el-date-picker>
                </div>
                <div class="block">
                    <div class="demo-input-label demonstration demo-title">Начало дня 12:00:00, окончание дня 08:00:00</div>
                    <el-date-picker
                            class="inline-input demo-el-input-icon"
                            v-model="value7"
                            type="datetimerange"
                            align="right"
                            start-placeholder="Дата начала"
                            end-placeholder="Дата окончания"
                            :default-time="['12:00:00', '08:00:00']">
                    </el-date-picker>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'DateTimePicker',
        data() {
            return {
                pickerOptions1: {
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
                value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                value5: '',
                value6: '',
                value7: ''
            }
        }
    }
</script>

<style>
    .demo-el-input-icon{
        width: 140px;
    }
    .demo-title {
        margin-bottom: 10px;
        font-size: 14px;
        color: #5e6d82;
    }
    .demo-input-label {
        display: inline-block;
        width: 130px;
    }
</style>