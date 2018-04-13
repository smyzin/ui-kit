<template>
    <div style="text-align: left;">
        <h2 class="title">Поле ввода</h2>
        <p class="basic-text">Стандартное поле ввода.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-input placeholder="Введите текст" class="demo-el-input-icon" v-model="input"></el-input>
            </div>
        </div>

        <h2 class="title">Неактивные поле</h2>
        <p class="basic-text">Атрибут <code>disabled</code> определяет активность поля.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-input
                        class="demo-el-input-icon"
                        placeholder="Введите текст"
                        v-model="input1"
                        :disabled="true">
                </el-input>
            </div>
        </div>

        <h2 class="title">Очищаемое поле</h2>
        <p class="basic-text">Атрибут <code>clearable</code> очищает поле по кнопке.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-input
                        class="demo-el-input-icon"
                        placeholder="Введите текст"
                        v-model="input10"
                        clearable>
                </el-input>
            </div>
        </div>

        <h2 class="title">Поле с иконкой</h2>
        <p class="basic-text">Добавьте иконку в поле, используя атрибуты <code>prefix-icon</code> и <code>suffix-icon</code>. Также, вы можете использовать слоты <code>prefix</code> и <code>suffix</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="demo-input-suffix">
                    <span class="demo-input-label demo-title">Атрибуты</span>
                    <el-input
                            class="demo-el-input-icon"
                            placeholder="Выберите дату"
                            suffix-icon="el-icon-date"
                            v-model="input2">
                    </el-input>
                    <el-input
                            class="demo-el-input-icon"
                            placeholder="Введите текст"
                            prefix-icon="el-icon-search"
                            v-model="input21">
                    </el-input>
                </div>
                <div class="demo-input-suffix">
                    <span class="demo-input-label demo-title">Слоты</span>
                    <el-input
                            class="demo-el-input-icon"
                            placeholder="Выберите дату"
                            v-model="input22">
                        <i slot="suffix" class="el-input__icon el-icon-date"></i>
                    </el-input>
                    <el-input
                            class="demo-el-input-icon"
                            placeholder="Введите текст"
                            v-model="input23">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>
            </div>
        </div>

        <h2 class="title">Текстовое поле</h2>
        <p class="basic-text">Изменяемое многострочное поле для большого объема информации. Добавьте атрибут <code>type="textarea"</code>, чтобы изменить поле ввода на нативное текстовое поле.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-input
                        class="demo-el-textarea"
                        type="textarea"
                        :rows="2"
                        placeholder="Введите текст"
                        v-model="textarea">
                </el-input>
            </div>
        </div>

        <h2 class="title">Авторазмер текстового поля</h2>
        <p class="basic-text">Указав свойство <code>autosize</code> для текстового поля, высота будет вычисляться автоматически, в зависимости от контента. Также, с помощью этого своства можно указать минимальное и максимальное количество строк в поле <code>:autosize="{ minRows: 2, maxRows: 4}"</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-input
                        class="demo-el-textarea"
                        type="textarea"
                        autosize
                        placeholder="Введите текст"
                        v-model="textarea2">
                </el-input>
                <div style="margin: 20px 0;"></div>
                <el-input
                        class="demo-el-textarea"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="Введите текст"
                        v-model="textarea3">
                </el-input>
            </div>
        </div>

        <h2 class="title">Смешанное поле (mixed)</h2>
        <p class="basic-text">Добавляет в начале или в конце поля элемент, лейбел или кнопку. Это реализуется с помощью <code>slot</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div>
                    <el-input placeholder="Введите текст" v-model="input3">
                        <template slot="prepend">Http://</template>
                    </el-input>
                </div>
                <div style="margin-top: 15px;">
                    <el-input placeholder="Введите текст" v-model="input4">
                        <template slot="append">.com</template>
                    </el-input>
                </div>
                <div style="margin-top: 15px;">
                    <el-input placeholder="Введите текст" v-model="input5">
                        <el-select v-model="select" class="el-input__inner-select" slot="prepend" placeholder="Выберите">
                            <el-option label="Ресторан" value="1"></el-option>
                            <el-option label="Номер заказа" value="2"></el-option>
                            <el-option label="Телефон" value="3"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </div>
        </div>

        <h2 class="title">Размеры</h2>
        <p class="basic-text">Можно задать размер, указав атрибут <code>size</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="demo-input-size">
                    <el-input
                            class="demo-el-input-icon"
                            size="large"
                            placeholder="Large"
                            v-model="input6">
                    </el-input>
                    <el-input
                            class="demo-el-input-icon"
                            size="medium"
                            placeholder="Medium"
                            v-model="input7">
                    </el-input>
                    <el-input
                            class="demo-el-input-icon"
                            size="small"
                            placeholder="Small"
                            v-model="input8">
                    </el-input>
                    <el-input
                            class="demo-el-input-icon"
                            size="mini"
                            placeholder="Mini"
                            v-model="input9">
                    </el-input>
                </div>
            </div>
        </div>

        <h2 class="title">Автозаполнение</h2>
        <p class="basic-text">Вы можете получить рекомендации по заполнению, в активном поле ввода.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source" style="text-align: center;">
                <el-row class="demo-autocomplete">
                    <el-col :span="12">
                        <div class="demo-title">Вывод подсказок при активации</div>
                        <el-autocomplete
                                class="inline-input"
                                v-model="state1"
                                :fetch-suggestions="querySearch"
                                placeholder="Начните ввод"
                                @select="handleSelect"
                        ></el-autocomplete>
                    </el-col>
                    <el-col :span="12">
                        <div class="demo-title">Вывод подсказок при вводе</div>
                        <el-autocomplete
                                class="inline-input"
                                v-model="state2"
                                :fetch-suggestions="querySearch"
                                placeholder="Начните ввод"
                                :trigger-on-focus="false"
                                @select="handleSelect"
                        ></el-autocomplete>
                    </el-col>
                </el-row>
            </div>
        </div>

        <h2 class="title">Собственный шаблон</h2>
        <p class="basic-text">Вы можете указать как предложения будут отображаться.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state3"
                        :fetch-suggestions="querySearch"
                        placeholder="Начните ввод"
                        @select="handleSelect">
                    <i
                            class="el-icon-edit el-input__icon"
                            slot="suffix"
                            @click="handleIconClick">
                    </i>
                    <template slot-scope="props">
                        <div class="value">{{ props.item.value }}</div>
                        <span class="link">{{ props.item.link }}</span>
                    </template>
                </el-autocomplete>
            </div>
        </div>

        <h2 class="title">Удаленный поиск</h2>
        <p class="basic-text">Поиск данных со стороны сервера.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-autocomplete
                        v-model="state4"
                        :fetch-suggestions="querySearchAsync"
                        placeholder="Начните ввод"
                        @select="handleSelect"
                ></el-autocomplete>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Input',
        data() {
            return {
                input: '',
                input1: '',
                input10: '',
                input2: '',
                input21: '',
                input22: '',
                input23: '',
                textarea: '',
                textarea2: '',
                textarea3: '',
                input3: '',
                input4: '',
                input5: '',
                select: '',
                input6: '',
                input7: '',
                input8: '',
                input9: '',
                links: [],
                state1: '',
                state2: '',
                state3: '',
                state4: '',
                timeout:  null
            }
        },
        methods: {
            querySearch(queryString, cb) {
                var links = this.links;
                var results = queryString ? links.filter(this.createFilter(queryString)) : links;
                // call callback function to return suggestions
                cb(results);
            },
            querySearchAsync(queryString, cb) {
                var links = this.links;
                var results = queryString ? links.filter(this.createFilter(queryString)) : links;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(results);
                }, 3000 * Math.random());
            },
            createFilter(queryString) {
                return (link) => {
                    return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [
                    { "value": "vue", "link": "https://github.com/vuejs/vue" },
                    { "value": "element", "link": "https://github.com/ElemeFE/element" },
                    { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
                    { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
                    { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
                    { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
                    { "value": "babel", "link": "https://github.com/babel/babel" }
                ];
            },
            handleSelect(item) {
                console.log(item);
            },
            handleIconClick(ev) {
                console.log(ev);
            }
        },
        mounted() {
            this.links = this.loadAll();
        }
    }
</script>

<style lang="scss">
    .my-autocomplete {
        li {
            line-height: normal;
            padding: 7px;

            .value {
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .link {
                font-size: 12px;
                color: #b4b4b4;
            }
        }
    }
    .demo-input-suffix{
        padding: 5px;
    }
    .demo-input-label {
        display: inline-block;
        width: 130px;
    }
    .el-select__mixed .el-input__mixed {
        width: 110px;
    }
    .el-input__inner-select{
        width: 110px;
    }
    .input-with-select__mixed .el-input-group__prepend__mixed {
        background-color: #fff;
    }
    .demo-el-input-icon{
        width: 140px;
    }
    .demo-el-textarea{
        font-family: 'Roboto', sans-serif !important;
        width: 300px;
    }
    .demo-title{
        margin-bottom: 10px;
        font-size: 14px;
        color: #5e6d82;
    }
</style>