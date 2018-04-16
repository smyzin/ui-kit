<template>
    <div style="text-align: left;">
        <h2 class="title">Использование по умолчанию</h2>
        <p class="basic-text">Чекбокс может использоватьсяотдельно для обозначения одного из двух состояний.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <!-- `checked` should be true or false -->
                <el-checkbox v-model="checked">Включить</el-checkbox>
            </div>
        </div>

        <h2 class="title">Неактивное состояние</h2>
        <p class="basic-text">Атрибут <code>disabled</code> определяет не активность чекбокса.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-checkbox v-model="checked1" disabled>Опция 1</el-checkbox>
                <el-checkbox v-model="checked2" disabled>Опция 2</el-checkbox>
            </div>
        </div>

        <h2 class="title">Группа чекбоксов</h2>
        <p class="basic-text">Кнопки без границы и заливки</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="Опция A"></el-checkbox>
                    <el-checkbox label="Опция B"></el-checkbox>
                    <el-checkbox label="Опция C"></el-checkbox>
                    <el-checkbox label="Не активный" disabled></el-checkbox>
                    <el-checkbox label="Выбранный и не активный" disabled></el-checkbox>
                </el-checkbox-group>
            </div>
        </div>

        <h2 class="title">Выбор всех опций</h2>
        <p class="basic-text">Свойство <code>indeterminate</code> используется для определения состояния всех чекбоксов.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Выбрать все</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </div>
        </div>

        <h2 class="title">Ограниченный выбор</h2>
        <p class="basic-text">Свойства <code>min</code> и <code>max</code> ограничевают количество выбранных чекбоксов.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-checkbox-group
                        v-model="checkedCities1"
                        :min="1"
                        :max="2">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </div>
        </div>

        <h2 class="title">Чекбокс в виде кнопки</h2>
        <p class="basic-text">Чекбокс в стиле кнопки.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div>
                    <el-checkbox-group v-model="checkboxGroup1" size="large">
                        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox-group v-model="checkboxGroup2" size="medium">
                        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox-group v-model="checkboxGroup3" size="small">
                        <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === 'Beijing'" :key="city">{{city}}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
                        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
            </div>
        </div>

        <h2 class="title">Чекбокс с обводкой</h2>
        <p class="basic-text">Атрибут <code>border</code> добавляет чекбоксу обводку.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div>
                    <el-checkbox v-model="checked3" label="Опция 1" border size="large"></el-checkbox>
                    <el-checkbox v-model="checked4" label="Опция 2" border size="large"></el-checkbox>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox v-model="checked5" label="Опция 1" border size="medium"></el-checkbox>
                    <el-checkbox v-model="checked6" label="Опция 2" border size="medium"></el-checkbox>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox-group v-model="checkboxGroup5" size="small">
                        <el-checkbox label="Опция 1" border></el-checkbox>
                        <el-checkbox label="Опция 2" border disabled></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
                        <el-checkbox label="Опция 1" border></el-checkbox>
                        <el-checkbox label="Опция 2" border></el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const cityOptions = ['Москва', 'Санкт-Петербург', 'Омск', 'Екатеринбург'];
    export default {
        name: 'Checkbox',
        data() {
            return {
                checked: true,
                checked1: false,
                checked2: true,
                checkList: ['Выбранный и не активный','Опция A'],
                checkAll: false,
                checkedCities: ['Москва', 'Екатеринбург'],
                cities: cityOptions,
                isIndeterminate: true,
                checkedCities1: ['Омск', 'Санкт-Петербург'],
                checkboxGroup1: ['Москва'],
                checkboxGroup2: ['Москва'],
                checkboxGroup3: ['Москва'],
                checkboxGroup4: ['Москва'],
                checked3: true,
                checked4: false,
                checked5: false,
                checked6: true,
                checkboxGroup5: [],
                checkboxGroup6: []
            };
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        }
    }
</script>

<style scoped>

</style>