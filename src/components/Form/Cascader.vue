<template>
    <div style="text-align: left;">
        <h2 class="title">Основное использование</h2>
        <p class="basic-text">Существует два способа расширения дочерних элементов.
            Присвоение атрибута <code>options</code> массиву параметров отображает Cascader. Атрибут <code>expand-trigger</code> определяет , каким образом элементы расширяются. В этом примере также показано событие <code>change</code>, параметром которого является значение Cascader, массив, состоящий из значений каждого выбранного уровня.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <span class="demonstration demo-input-label demo-title">Параметры Child расширяются при нажатии (по умолчанию)</span>
                    <div style="display: block; width: 100%;">
                        <el-cascader
                                :options="options"
                                v-model="selectedOptions"
                                @change="handleChange">
                        </el-cascader>
                    </div>
                </div>
                <div class="block">
                    <span class="demonstration demo-input-label demo-title">Параметры Child расширяются при наведении курсора</span>
                    <el-cascader
                            expand-trigger="hover"
                            :options="options"
                            v-model="selectedOptions2"
                            @change="handleChange">
                    </el-cascader>
                </div>
            </div>
        </div>

        <h2 class="title">Отключенный элемент</h2>
        <p class="basic-text">Отключите параметр, установив поле <code>disabled</code> в объекте Option.
            В этом примере первый элемент массива <code>options</code> имеет <code>disabled: true</code> поле, поэтому он отключен. По умолчанию Cascader проверяет поле <code>disabled</code> в каждом объекте Option; если вы используете другое имя поля, чтобы указать, отключена ли опция, вы можете назначить ее в атрибуте  <code>props</code>. И, конечно, имя поля <code>value</code>, <code>label</code> в <code>children</code>также можно настроить таким же образом.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-cascader
                        :options="optionsWithDisabled"
                ></el-cascader>
            </div>
        </div>

        <h2 class="title">Отображение только последнего уровня</h2>
        <p class="basic-text">Поле ввода может отображать только последний уровень вместо всех уровней. Атрибут <code>show-all-levels</code> определяет , отображаются ли все уровни. Если он принимает значение <code>false</code>, отображается только последний уровень.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-cascader
                        :options="options"
                        :show-all-levels="false"
                ></el-cascader>
            </div>
        </div>

        <h2 class="title">Значением по умолчанию</h2>
        <p class="basic-text">Значение по умолчанию может быть определено с помощью массива.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-cascader
                        :options="options"
                        v-model="selectedOptions3"
                ></el-cascader>
            </div>
        </div>

        <h2 class="title">Изменение выбора</h2>
        <p class="basic-text">Параметры родителя также могут быть выбраны.
            По умолчанию могут быть выбраны только параметры на последнем уровне. Присваивая <code>change-on-select</code> значение <code>true</code>, можно также выбрать параметры в исходных уровнях.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-cascader
                        :options="options"
                        change-on-select
                ></el-cascader>
            </div>
        </div>

        <h2 class="title">Динамическая загрузка дочерних параметров</h2>
        <p class="basic-text">Загрузите дочерние параметры, когда их родительская опция нажата или выделена.
            В этом примере массив параметров не имеет данных о городах при инициализации. С помощью события <code>active-item-change</code> вы можете динамически загружать города определенного состояния. Кроме того, этот пример также демонстрирует, как используются <code>props</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-cascader
                        :options="options2"
                        @active-item-change="handleItemChange"
                        :props="props"
                ></el-cascader>
            </div>
        </div>

        <h2 class="title">Фильтрация</h2>
        <p class="basic-text">Найдите и выберите варианты с ключевым словом. Добавление <code>filterable</code> для <code>el-cascader</code> включает фильтрацию.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <span class="demonstration demo-input-label demo-title">Можно выбрать только параметры последнего уровня</span>
                    <el-cascader
                            placeholder="Попробуйте набрать: Guide"
                            :options="options"
                            filterable
                    ></el-cascader>
                </div>
                <div class="block">
                    <span class="demonstration demo-input-label demo-title">Можно выбрать только параметры последнего уровня</span>
                    <el-cascader
                            placeholder="Попробуйте набрать: Guide"
                            :options="options"
                            filterable
                            change-on-select
                    ></el-cascader>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Cascader',
        data() {
            return {
                options2: [{
                    label: 'California',
                    cities: []
                }, {
                    label: 'Florida',
                    cities: []
                }],
                props: {
                    value: 'label',
                    children: 'cities'
                },
                selectedOptions3: ['component', 'data', 'tag'],
                optionsWithDisabled: [{
                    value: 'guide',
                    label: 'Guide',
                    disabled: true,
                    children: [{
                        value: 'disciplines',
                        label: 'Disciplines',
                        children: [{
                            value: 'consistency',
                            label: 'Consistency'
                        }, {
                            value: 'feedback',
                            label: 'Feedback'
                        }, {
                            value: 'efficiency',
                            label: 'Efficiency'
                        }, {
                            value: 'controllability',
                            label: 'Controllability'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                            value: 'side nav',
                            label: 'Side Navigation'
                        }, {
                            value: 'top nav',
                            label: 'Top Navigation'
                        }]
                    }]
                }, {
                    value: 'component',
                    label: 'Component',
                    children: [{
                        value: 'basic',
                        label: 'Basic',
                        children: [{
                            value: 'layout',
                            label: 'Layout'
                        }, {
                            value: 'color',
                            label: 'Color'
                        }, {
                            value: 'typography',
                            label: 'Typography'
                        }, {
                            value: 'icon',
                            label: 'Icon'
                        }, {
                            value: 'button',
                            label: 'Button'
                        }]
                    }, {
                        value: 'form',
                        label: 'Form',
                        children: [{
                            value: 'radio',
                            label: 'Radio'
                        }, {
                            value: 'checkbox',
                            label: 'Checkbox'
                        }, {
                            value: 'input',
                            label: 'Input'
                        }, {
                            value: 'input-number',
                            label: 'InputNumber'
                        }, {
                            value: 'select',
                            label: 'Select'
                        }, {
                            value: 'cascader',
                            label: 'Cascader'
                        }, {
                            value: 'switch',
                            label: 'Switch'
                        }, {
                            value: 'slider',
                            label: 'Slider'
                        }, {
                            value: 'time-picker',
                            label: 'TimePicker'
                        }, {
                            value: 'date-picker',
                            label: 'DatePicker'
                        }, {
                            value: 'datetime-picker',
                            label: 'DateTimePicker'
                        }, {
                            value: 'upload',
                            label: 'Upload'
                        }, {
                            value: 'rate',
                            label: 'Rate'
                        }, {
                            value: 'form',
                            label: 'Form'
                        }]
                    }, {
                        value: 'data',
                        label: 'Data',
                        children: [{
                            value: 'table',
                            label: 'Table'
                        }, {
                            value: 'tag',
                            label: 'Tag'
                        }, {
                            value: 'progress',
                            label: 'Progress'
                        }, {
                            value: 'tree',
                            label: 'Tree'
                        }, {
                            value: 'pagination',
                            label: 'Pagination'
                        }, {
                            value: 'badge',
                            label: 'Badge'
                        }]
                    }, {
                        value: 'notice',
                        label: 'Notice',
                        children: [{
                            value: 'alert',
                            label: 'Alert'
                        }, {
                            value: 'loading',
                            label: 'Loading'
                        }, {
                            value: 'message',
                            label: 'Message'
                        }, {
                            value: 'message-box',
                            label: 'MessageBox'
                        }, {
                            value: 'notification',
                            label: 'Notification'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                            value: 'menu',
                            label: 'NavMenu'
                        }, {
                            value: 'tabs',
                            label: 'Tabs'
                        }, {
                            value: 'breadcrumb',
                            label: 'Breadcrumb'
                        }, {
                            value: 'dropdown',
                            label: 'Dropdown'
                        }, {
                            value: 'steps',
                            label: 'Steps'
                        }]
                    }, {
                        value: 'others',
                        label: 'Others',
                        children: [{
                            value: 'dialog',
                            label: 'Dialog'
                        }, {
                            value: 'tooltip',
                            label: 'Tooltip'
                        }, {
                            value: 'popover',
                            label: 'Popover'
                        }, {
                            value: 'card',
                            label: 'Card'
                        }, {
                            value: 'carousel',
                            label: 'Carousel'
                        }, {
                            value: 'collapse',
                            label: 'Collapse'
                        }]
                    }]
                }, {
                    value: 'resource',
                    label: 'Resource',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'docs',
                        label: 'Design Documentation'
                    }]
                }],
                options: [{
                    value: 'guide',
                    label: 'Guide',
                    children: [{
                        value: 'disciplines',
                        label: 'Disciplines',
                        children: [{
                            value: 'consistency',
                            label: 'Consistency'
                        }, {
                            value: 'feedback',
                            label: 'Feedback'
                        }, {
                            value: 'efficiency',
                            label: 'Efficiency'
                        }, {
                            value: 'controllability',
                            label: 'Controllability'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                            value: 'side nav',
                            label: 'Side Navigation'
                        }, {
                            value: 'top nav',
                            label: 'Top Navigation'
                        }]
                    }]
                }, {
                    value: 'component',
                    label: 'Component',
                    children: [{
                        value: 'basic',
                        label: 'Basic',
                        children: [{
                            value: 'layout',
                            label: 'Layout'
                        }, {
                            value: 'color',
                            label: 'Color'
                        }, {
                            value: 'typography',
                            label: 'Typography'
                        }, {
                            value: 'icon',
                            label: 'Icon'
                        }, {
                            value: 'button',
                            label: 'Button'
                        }]
                    }, {
                        value: 'form',
                        label: 'Form',
                        children: [{
                            value: 'radio',
                            label: 'Radio'
                        }, {
                            value: 'checkbox',
                            label: 'Checkbox'
                        }, {
                            value: 'input',
                            label: 'Input'
                        }, {
                            value: 'input-number',
                            label: 'InputNumber'
                        }, {
                            value: 'select',
                            label: 'Select'
                        }, {
                            value: 'cascader',
                            label: 'Cascader'
                        }, {
                            value: 'switch',
                            label: 'Switch'
                        }, {
                            value: 'slider',
                            label: 'Slider'
                        }, {
                            value: 'time-picker',
                            label: 'TimePicker'
                        }, {
                            value: 'date-picker',
                            label: 'DatePicker'
                        }, {
                            value: 'datetime-picker',
                            label: 'DateTimePicker'
                        }, {
                            value: 'upload',
                            label: 'Upload'
                        }, {
                            value: 'rate',
                            label: 'Rate'
                        }, {
                            value: 'form',
                            label: 'Form'
                        }]
                    }, {
                        value: 'data',
                        label: 'Data',
                        children: [{
                            value: 'table',
                            label: 'Table'
                        }, {
                            value: 'tag',
                            label: 'Tag'
                        }, {
                            value: 'progress',
                            label: 'Progress'
                        }, {
                            value: 'tree',
                            label: 'Tree'
                        }, {
                            value: 'pagination',
                            label: 'Pagination'
                        }, {
                            value: 'badge',
                            label: 'Badge'
                        }]
                    }, {
                        value: 'notice',
                        label: 'Notice',
                        children: [{
                            value: 'alert',
                            label: 'Alert'
                        }, {
                            value: 'loading',
                            label: 'Loading'
                        }, {
                            value: 'message',
                            label: 'Message'
                        }, {
                            value: 'message-box',
                            label: 'MessageBox'
                        }, {
                            value: 'notification',
                            label: 'Notification'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                            value: 'menu',
                            label: 'NavMenu'
                        }, {
                            value: 'tabs',
                            label: 'Tabs'
                        }, {
                            value: 'breadcrumb',
                            label: 'Breadcrumb'
                        }, {
                            value: 'dropdown',
                            label: 'Dropdown'
                        }, {
                            value: 'steps',
                            label: 'Steps'
                        }]
                    }, {
                        value: 'others',
                        label: 'Others',
                        children: [{
                            value: 'dialog',
                            label: 'Dialog'
                        }, {
                            value: 'tooltip',
                            label: 'Tooltip'
                        }, {
                            value: 'popover',
                            label: 'Popover'
                        }, {
                            value: 'card',
                            label: 'Card'
                        }, {
                            value: 'carousel',
                            label: 'Carousel'
                        }, {
                            value: 'collapse',
                            label: 'Collapse'
                        }]
                    }]
                }, {
                    value: 'resource',
                    label: 'Resource',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'docs',
                        label: 'Design Documentation'
                    }]
                }],
                selectedOptions: [],
                selectedOptions2: []
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            },
            handleItemChange(val) {
                console.log('active item:', val);
                setTimeout(_ => {
                    if (val.indexOf('California') > -1 && !this.options2[0].cities.length) {
                        this.options2[0].cities = [{
                            label: 'Los Angeles'
                        }];
                    } else if (val.indexOf('Florida') > -1 && !this.options2[1].cities.length) {
                        this.options2[1].cities = [{
                            label: 'Orlando'
                        }];
                    }
                }, 300);
            }
        }
    }
</script>

<style scoped>
    .block{
        display: inline-block;
        width: 49%;
        text-align: center;
    }
    .demo-input-label {
        display: inline-block;
        width: 410px;
    }
    .demo-title{
        margin-bottom: 10px;
        font-size: 14px;
        color: #5e6d82;
    }
</style>