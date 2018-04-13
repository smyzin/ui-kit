<template>
    <div style="text-align: left;">
        <h2 class="title">Стандартное использование</h2>
        <p class="basic-text">Данные передаются в Transfer через атрибут <code>data</code>. Данные должны быть массивом объектов, и каждый объект должен иметь следующие атрибуты: <code>key</code> идентификация элемента данных, <code>label</code> отображаемый текст, и <code>disabled</code> указание, отключен ли элемент данных. Элементы внутри целевого списка синхронизируются с привязкой переменной к ней <code>v-model</code>, а значение этой переменной представляет собой массив ключей целевых элементов. Если вы не хотите, чтобы целевой список был первоначально пустым, вы можете инициализировать <code>v-model</code> массив с массивом.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-transfer
                        v-model="value1"
                        :data="data">
                </el-transfer>
            </div>
        </div>

        <h2 class="title">Фильтрация данных</h2>
        <p class="basic-text">Вы можете искать и фильтровать элементы данных. Установите для атрибута <code>filterable</code>атрибут значение <code>true</code> для включения режима фильтра. По умолчанию, если элемент данных <code>label</code> содержит ключевое слово поиска, он будет включен в результат поиска. Вы можете реализовать собственный метод фильтрации с помощью атрибута <code>filter-method</code>. Он принимает метод и передает ему ключевое слово поиска и каждый элемент данных всякий раз, когда изменяется ключевое слово. Для определенного элемента данных, если метод возвращает true, он будет включен в список результатов.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-transfer
                        filterable
                        :filter-method="filterMethod"
                        filter-placeholder="Абривиатура штата"
                        v-model="value2"
                        :data="data2">
                </el-transfer>
            </div>
        </div>

        <h2 class="title">Настраиваемые</h2>
        <p class="basic-text">Вы можете настроить заголовки списков, тексты кнопок, функцию рендеринга для элементов данных, проверку текстов состояния в нижнем колонтитуле списка и нижний колонтитул списка. Используйте <code>titles</code>, <code>button-texts</code>, <code>render-content</code> и  <code>format</code>, чтобы соответственно настроить список заголовков, текстов кнопок, функции для визуализации элементов данных, проверки текста статуса в заголовке списка. Также использовать слот для настройки элементов данных. Для содержимого нижнего колонтитула списка предоставляются два именованных слота: <code>left-footer</code> и <code>right-footer</code>. Если вы хотите, чтобы некоторые элементы первоначально были проверены, вы можете использовать <code>left-default-checked</code> и <code>right-default-checked</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <p style="text-align: center; margin: 0 0 20px">Кастомизируйте даные используя <code>render-content</code></p>
                <div style="text-align: center">
                    <el-transfer
                            style="text-align: left; display: inline-block"
                            v-model="value3"
                            filterable
                            :left-default-checked="[2, 3]"
                            :right-default-checked="[1]"
                            :render-content="renderFunc"
                            :titles="['Источник', 'Цель']"
                            :button-texts="['Источник', 'Цель']"
                            :format="{
                                noChecked: '${total}',
                                hasChecked: '${checked}/${total}'
                              }"
                            @change="handleChange"
                            :data="data">
                        <el-button class="transfer-footer" slot="left-footer" size="small">Действие</el-button>
                        <el-button class="transfer-footer" slot="right-footer" size="small">Действие</el-button>
                    </el-transfer>
                    <p style="text-align: center; margin: 50px 0 20px">Кастомизируйте даные используя <code>scoped</code> слот</p>
                    <div style="text-align: center">
                        <el-transfer
                                style="text-align: left; display: inline-block"
                                v-model="value4"
                                filterable
                                :left-default-checked="[2, 3]"
                                :right-default-checked="[1]"
                                :titles="['Источник', 'Цель']"
                                :button-texts="['Источник', 'Цель']"
                                :format="{
                                  noChecked: '${total}',
                                  hasChecked: '${checked}/${total}'
                                }"
                                @change="handleChange"
                                :data="data">
                            <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
                            <el-button class="transfer-footer" slot="left-footer" size="small">Действие</el-button>
                            <el-button class="transfer-footer" slot="right-footer" size="small">Действие</el-button>
                        </el-transfer>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="title">Профили псевдонимов</h2>
        <p class="basic-text">По умолчанию, передача ищет <code>key</code>, <code>label</code> и <code>disabled</code> в элементе данных. Если ваши данные имеют разные имена ключей, вы можете использовать атрибут <code>props</code> для определения псевдонимов. Элементы данных в этом примере не имеют <code>key</code>s или <code>label</code>s, вместо этого они имеют <code>value</code>s и <code>desc</code>s. Поэтому вам нужно установить псевдонимы для <code>key</code> и <code>label</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-transfer
                        v-model="value5"
                        :props="{
                          key: 'value',
                          label: 'desc'
                        }"
                        :data="data3">
                </el-transfer>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Transfer',
        data() {
            const generateData = _ => {
                const data = [];
                for (let i = 1; i <= 15; i++) {
                    data.push({
                        key: i,
                        label: `Опция ${ i }`,
                        disabled: i % 4 === 0
                    });
                }
                return data;
            };
            const generateData2 = _ => {
                const data = [];
                const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
                const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
                states.forEach((city, index) => {
                    data.push({
                        label: city,
                        key: index,
                        initial: initials[index]
                    });
                });
                return data;
            };
            const generateData3 = _ => {
                const data = [];
                for (let i = 1; i <= 15; i++) {
                    data.push({
                        value: i,
                        desc: `Опция ${ i }`,
                        disabled: i % 4 === 0
                    });
                }
                return data;
            };
            return {
                data: generateData(),
                value1: [1, 4],
                data2: generateData2(),
                value2: [],
                filterMethod(query, item) {
                    return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
                },
                value3: [1],
                value4: [1],
                renderFunc(h, option) {
                    return <span>{ option.key } - { option.label }</span>;
                },
                data3: generateData3(),
                value5: []
            }
        },
        methods: {
            handleChange(value, direction, movedKeys) {
                console.log(value, direction, movedKeys);
            }
        }
    }
</script>

<style scoped>
    .transfer-footer {
        margin-left: 20px;
        padding: 6px 5px;
    }
</style>