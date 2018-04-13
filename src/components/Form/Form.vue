<template>
    <div style="text-align: left;">
        <h2 class="title">Стандартная форма</h2>
        <p class="basic-text">Включает в себя все виды входных элементов, таких как <code>input</code>, <code>select</code>, <code>radio</code> и <code>checkbox</code>. В каждом компоненте <code>form</code> необходимо использовать поле <code>form-item</code>, которое будет контейнером вашего элемента ввода.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="Имя активности">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Зона активности">
                        <el-select v-model="form.region" placeholder="Выберите зону">
                            <el-option label="Зона 1" value="shanghai"></el-option>
                            <el-option label="Зона 2" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Время деятельности">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="Выберите дату" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker type="fixed-time" placeholder="Выберите время" v-model="form.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Мгновенная доставка">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="Тип деятельности">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="Деятельность в интернете" name="type"></el-checkbox>
                            <el-checkbox label="Рекламная деятельность" name="type"></el-checkbox>
                            <el-checkbox label="Офлайная деятельносмсть" name="type"></el-checkbox>
                            <el-checkbox label="Простая узнаваемость бренда" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="Ресурсы">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="Спонсор"></el-radio>
                            <el-radio label="Заведение"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Форма деятельности">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Создать</el-button>
                        <el-button>Отмена</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <h2 class="title">Встроенная форма</h2>
        <p class="basic-text">Вы можете поместить форму в одну строку. Для этого установите для атрибута <code>inline</code> значение <code>true</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="Одобрено">
                        <el-input v-model="formInline.user" placeholder="Одобрено"></el-input>
                    </el-form-item>
                    <el-form-item label="Зона активности">
                        <el-select v-model="formInline.region" placeholder="Место активности">
                            <el-option label="Зона 1" value="shanghai"></el-option>
                            <el-option label="Зона 2" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Запросить</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <h2 class="title">Выравнивание</h2>
        <p class="basic-text">В зависимости от вашего дизайна существует несколько способов выравнивания лейбла поля. Атрибут <code>label-position</code> определяет , как будут выровнены лейблы, значения могу быть <code>top</code> или <code>left</code>. Когда установлено значение <code>top</code>, лейблы будут помещены в верхнюю часть поля формы.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-radio-group v-model="labelPosition" size="small">
                    <el-radio-button label="left">Слева</el-radio-button>
                    <el-radio-button label="right">Справа</el-radio-button>
                    <el-radio-button label="top">Сверху</el-radio-button>
                </el-radio-group>
                <div style="margin: 20px;"></div>
                <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                    <el-form-item label="Имя">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Место дейтельности">
                        <el-input v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                    <el-form-item label="Форма деятельности">
                        <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <h2 class="title">Валидация</h2>
        <p class="basic-text">Компонент формы позволяет вам проверять свои данные, помогая находить и исправлять ошибки. Просто добавьте атрибут <code>rules</code> для компонента <code>Form</code>, проверьте правила проверки и установите атрибут <code>prop</code> для <code>Form-Item</code> как определенный ключ, который необходимо проверить.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="Имя активности" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Место деятельности" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="Место деятельности">
                            <el-option label="Зона 1" value="shanghai"></el-option>
                            <el-option label="Зона 2" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Время деятельности" required>
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="Выберите дату" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="date2">
                                <el-time-picker type="fixed-time" placeholder="Выберите время" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Мгновенная доставка" prop="delivery">
                        <el-switch v-model="ruleForm.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="Тип деятельности" prop="type">
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="Деятельность в интернете" name="type"></el-checkbox>
                            <el-checkbox label="Рекламная деятельность" name="type"></el-checkbox>
                            <el-checkbox label="Офлайная деятельносмсть" name="type"></el-checkbox>
                            <el-checkbox label="Простая узнаваемость бренда " name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="Ресурсы" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="Спонсор"></el-radio>
                            <el-radio label="Заведение"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Форма деятельности" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">Создать</el-button>
                        <el-button @click="resetForm('ruleForm')">Сброс</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <h2 class="title">Пользовательские правила проверки</h2>
        <p class="basic-text">В этом примере показано, как настроить собственные правила проверки, чтобы завершить двухфакторную проверку пароля. Используйте <code>status-icon</code>, чтобы отразить результат проверки как значок.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="Пароль" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="ПОдтвердите пароль" prop="checkPass">
                        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Возраст" prop="age">
                        <el-input v-model.number="ruleForm2.age"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">Отправить</el-button>
                        <el-button @click="resetForm('ruleForm2')">Сбросить</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <h2 class="title">Динамическое добавление и удаление элементов формы</h2>
        <p class="basic-text">Помимо передачи всех правил проверки сразу в форму, вы также можете передавать правила проверки или удалять правила в одном поле формы динамически.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
                    <el-form-item
                            prop="email"
                            label="Email"
                            :rules="[
                              { required: true, message: 'Введите email адрес', trigger: 'blur' },
                              { type: 'email', message: 'Введите корректный email адрес', trigger: 'blur,change' }
                            ]"
                    >
                        <el-input v-model="dynamicValidateForm.email"></el-input>
                    </el-form-item>
                    <el-form-item
                            v-for="(domain, index) in dynamicValidateForm.domains"
                            :label="'Домен #' + index"
                            :key="domain.key"
                            :prop="'domains.' + index + '.value'"
                            :rules="{
                              required: true, message: 'домен не может быть пустым', trigger: 'blur'
                            }"
                    >
                        <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">Удалить</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('dynamicValidateForm')">Отправить</el-button>
                        <el-button @click="addDomain">Новый домен</el-button>
                        <el-button @click="resetForm('dynamicValidateForm')">Сброс</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <h2 class="title">Проверка числового значения</h2>
        <p class="basic-text">Для проверки числового значения нужен модификатор <code>.number</code>, добавленный в привязку ввода <code>v-model</code>, он используется для преобразования строкового значения в число, которое предоставляется Vuejs.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item
                            label="возраст"
                            prop="age"
                            :rules="[
                              { required: true, message: 'возраст обязателен'},
                              { type: 'number', message: 'возраст должен быть числом'}
                            ]"
                    >
                        <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('numberValidateForm')">Отправить</el-button>
                        <el-button @click="resetForm('numberValidateForm')">Сброс</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <h2 class="title">Размеры</h2>
        <p class="basic-text">Все компоненты в форме наследуют свой атрибут <code>size</code> из этой Формы. Аналогично, FormItem также имеет атрибут <code>size</code>. Вы можете точно настроить каждый компонент, если вы не хотите, чтобы этот компонент наследовал свой размер от From или FormItem.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-form ref="form" :model="sizeForm" label-width="120px" size="mini">
                    <el-form-item label="Название">
                        <el-input v-model="sizeForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Место">
                        <el-select v-model="sizeForm.region" placeholder="Выберите место">
                            <el-option label="Зона 1" value="shanghai"></el-option>
                            <el-option label="Зона 2" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Время">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="Выберите дату" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker type="fixed-time" placeholder="Выберите время" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Тип">
                        <el-checkbox-group v-model="sizeForm.type">
                            <el-checkbox-button label="Онлайн" name="type"></el-checkbox-button>
                            <el-checkbox-button label="Маркетинг" name="type"></el-checkbox-button>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="Ресурсы">
                        <el-radio-group v-model="sizeForm.resource" size="medium">
                            <el-radio border label="Спонсор"></el-radio>
                            <el-radio border label="Заведение"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item size="large">
                        <el-button type="primary" @click="onSubmit">Создать</el-button>
                        <el-button>Отмена</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('Please input the age'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('Please input digits'));
                    } else {
                        if (value < 18) {
                            callback(new Error('Age must be greater than 18'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password again'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('Two inputs don\'t match!'));
                } else {
                    callback();
                }
            };
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formInline: {
                    user: '',
                    region: ''
                },
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: 'Пожалуйста, введите имя активности', trigger: 'blur' },
                        { min: 3, max: 5, message: 'Длина должна быть от 3 до 5', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: 'Пожалуйста, выберите место', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: 'Пожалуйста, выберите дату', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: 'Пожалуйста, выберите время', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: 'Пожалуйста, выберите хотя бы один тип деятельности', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: 'Пожалуйста, выберите ресурс', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Пожалуйста, введите форму деятельности', trigger: 'blur' }
                    ]
                },
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                },
                dynamicValidateForm: {
                    domains: [{
                        key: 1,
                        value: ''
                    }],
                    email: ''
                },
                numberValidateForm: {
                    age: ''
                },
                sizeForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('Отправлено!');
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('Отправлено!');
                    } else {
                        console.log('Ошибка при отправке!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.dynamicValidateForm.domains.indexOf(item);
                if (index !== -1) {
                    this.dynamicValidateForm.domains.splice(index, 1);
                }
            },
            addDomain() {
                this.dynamicValidateForm.domains.push({
                    key: Date.now(),
                    value: ''
                });
            }
        }
    }
</script>

<style scoped>

</style>