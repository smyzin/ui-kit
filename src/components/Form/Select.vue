<template>
    <div style="text-align: left;">
        <h2 class="title">Обычное использование</h2>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-select v-model="value" placeholder="Выберите">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>

        <h2 class="title">Неактивная опция</h2>
        <p class="basic-text">Значение <code>disabled</code> в <code>el-option</code> определяет активность опции.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-select v-model="value2" placeholder="Выберите">
                    <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled">
                    </el-option>
                </el-select>
            </div>
        </div>

        <h2 class="title">Неактивный выпадающий список</h2>
        <p class="basic-text">Атрибут <code>disabled</code> определит активность выпадающего списка в целом</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-select v-model="value3" disabled placeholder="Выберите">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>

        <h2 class="title">Очищение выбранной опции в выпадающем списке</h2>
        <p class="basic-text">Атрибут <code>clearable</code> добавит кнопку отчистки выбранной опции.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-select v-model="value4" clearable placeholder="Выберите">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>

        <h2 class="title">Выбор нескольких опций</h2>
        <p class="basic-text">Отображает теги выбранных опций в поле выпадающего списка.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-select v-model="value5" multiple placeholder="Выберите">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>

                <el-select
                        v-model="value11"
                        multiple
                        collapse-tags
                        style="margin-left: 20px;"
                        placeholder="Выберите">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>

        <h2 class="title">Собствыенный шаблон</h2>
        <p class="basic-text">Вы можете добавить свой HTML шаблон для опций выпадающего списка.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-select v-model="value6" placeholder="Выберите">
                    <el-option
                            v-for="item in cities"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        <span style="float: left">{{ item.label }}</span>
                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                    </el-option>
                </el-select>
            </div>
        </div>

        <h2 class="title">Группировка</h2>
        <p class="basic-text">Отображает опции в группах.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-select v-model="value7" placeholder="Выберите">
                    <el-option-group
                            v-for="group in options3"
                            :key="group.label"
                            :label="group.label">
                        <el-option
                                v-for="item in group.options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-option-group>
                </el-select>
            </div>
        </div>

        <h2 class="title">Фильтрация опций</h2>
        <p class="basic-text">Вы можете отфильтровать опции по вашемиу желанию.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-select v-model="value8" filterable placeholder="Выберите">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>

        <h2 class="title">Удаленный поиск</h2>
        <p class="basic-text">Введите ключевое слово и ищите данные на вашем сервере.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-select
                        v-model="value9"
                        multiple
                        filterable
                        remote
                        reserve-keyword
                        placeholder="Введите ключевое слово"
                        :remote-method="remoteMethod"
                        :loading="loading">
                    <el-option
                            v-for="item in options4"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>

        <h2 class="title">Создание нового элемента</h2>
        <p class="basic-text">Создаййте и выберите новый элемент, который не включен в список.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-select
                        v-model="value10"
                        multiple
                        filterable
                        allow-create
                        default-first-option
                        placeholder="Выберите тег для вашей статьи">
                    <el-option
                            v-for="item in options5"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Select',
        data() {
            return {
                options: [{
                    value: 'Опция 1',
                    label: 'Опция 1'
                }, {
                    value: 'Опция 2',
                    label: 'Опция 2'
                }, {
                    value: 'Опция 3',
                    label: 'Опция 3'
                }, {
                    value: 'Опция 4',
                    label: 'Опция 4'
                }, {
                    value: 'Опция 5',
                    label: 'Опция 5'
                }],
                value: '',
                options2: [{
                    value: 'Опция 1',
                    label: 'Опция 1'
                }, {
                    value: 'Опция 2',
                    label: 'Опция 2',
                    disabled: true
                }, {
                    value: 'Опция 3',
                    label: 'Опция 3'
                }, {
                    value: 'Опция 4',
                    label: 'Опция 4'
                }, {
                    value: 'Опция 5',
                    label: 'Опция 5'
                }],
                value2: '',
                value3: '',
                value4: '',
                value5: [],
                value11: [],
                cities: [{
                    value: 'Beijing',
                    label: 'Beijing'
                }, {
                    value: 'Shanghai',
                    label: 'Shanghai'
                }, {
                    value: 'Nanjing',
                    label: 'Nanjing'
                }, {
                    value: 'Chengdu',
                    label: 'Chengdu'
                }, {
                    value: 'Shenzhen',
                    label: 'Shenzhen'
                }, {
                    value: 'Guangzhou',
                    label: 'Guangzhou'
                }],
                value6: '',
                options3: [
                    {
                        label: 'Popular cities',
                        options: [
                            { value: 'Shanghai', label: 'Shanghai' },
                            { value: 'Beijing', label: 'Beijing' }
                        ]
                    }, {
                        label: 'City name',
                        options: [
                            { value: 'Chengdu', label: 'Chengdu' },
                            { value: 'Shenzhen', label: 'Shenzhen' },
                            { value: 'Guangzhou', label: 'Guangzhou' },
                            { value: 'Dalian', label: 'Dalian' }
                        ]
                    }
                ],
                value7: '',
                value8: '',
                options4: [],
                value9: [],
                list: [],
                loading: false,
                states: ["Alabama", "Alaska", "Arizona",
                    "Arkansas", "California", "Colorado",
                    "Connecticut", "Delaware", "Florida",
                    "Georgia", "Hawaii", "Idaho", "Illinois",
                    "Indiana", "Iowa", "Kansas", "Kentucky",
                    "Louisiana", "Maine", "Maryland",
                    "Massachusetts", "Michigan", "Minnesota",
                    "Mississippi", "Missouri", "Montana",
                    "Nebraska", "Nevada", "New Hampshire",
                    "New Jersey", "New Mexico", "New York",
                    "North Carolina", "North Dakota", "Ohio",
                    "Oklahoma", "Oregon", "Pennsylvania",
                    "Rhode Island", "South Carolina",
                    "South Dakota", "Tennessee", "Texas",
                    "Utah", "Vermont", "Virginia",
                    "Washington", "West Virginia", "Wisconsin",
                    "Wyoming"],
                options5: [{
                    value: 'HTML',
                    label: 'HTML'
                }, {
                    value: 'CSS',
                    label: 'CSS'
                }, {
                    value: 'JavaScript',
                    label: 'JavaScript'
                }],
                value10: []
            }
        },
        mounted() {
            this.list = this.states.map(item => {
                return { value: item, label: item };
            });
        },
        methods: {
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options4 = this.list.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.options4 = [];
                }
            }
        }
    }
</script>

<style scoped>

</style>