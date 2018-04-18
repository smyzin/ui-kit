<template>
    <div style="text-align: left;">
        <h2 class="title">Базовое использование</h2>
        <p class="basic-text">Для того, чтобы раскрыть выпадающий список наведите курсор на выпадающее меню. По умолчанию вызванный элемент отображается как <code>slot</code>, а раскрывающаяся часть <code>slot</code> именуется <code>dropdown</code>. По умолчанию раскрывающийся список раскрывается при наведении на него мыши.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-dropdown type="primary">
                    <span class="el-dropdown-link">
                        Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>

        <h2 class="title">Вызывающий элемент</h2>
        <p class="basic-text">Использование кнопки для вызова выпадающего списка. Используйте <code>split-button</code> для того, чтобы разделить обычную кнопку и кнопку вызова выпадающего списка. Если вы хотите вставить разделительную линию между пунктом 3 и пунктом 4, просто добавтье класс <code>divider</code> к пункту 4.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-dropdown>
                    <el-button type="primary">
                        Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item>Action 4</el-dropdown-item>
                        <el-dropdown-item>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown split-button type="primary" @click="handleClick">
                    Dropdown List
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item>Action 4</el-dropdown-item>
                        <el-dropdown-item>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>

        <h2 class="title">Способы активации</h2>
        <p class="basic-text">Выпадающий список может активироваться при клике мышью или при наведении мыши. Используйте атрибут <code>trigger</code>. По умолчанию стоит <code>hover</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-row class="block-col-2">
                    <el-col :span="12">
                        <span class="demonstration">hover to trigger</span>
                        <el-dropdown>
                          <span class="el-dropdown-link">
                            Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>Action 1</el-dropdown-item>
                                <el-dropdown-item>Action 2</el-dropdown-item>
                                <el-dropdown-item>Action 3</el-dropdown-item>
                                <el-dropdown-item>Action 4</el-dropdown-item>
                                <el-dropdown-item>Action 5</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                    <el-col :span="12">
                        <span class="demonstration">click to trigger</span>
                        <el-dropdown trigger="click">
                          <span class="el-dropdown-link">
                            Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>Action 1</el-dropdown-item>
                                <el-dropdown-item>Action 2</el-dropdown-item>
                                <el-dropdown-item>Action 3</el-dropdown-item>
                                <el-dropdown-item>Action 4</el-dropdown-item>
                                <el-dropdown-item>Action 5</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </div>
        </div>

        <h2 class="title">Поведение скрытия меню</h2>
        <p class="basic-text">Используйте <code>hide-on-click</code> для того, чтобы меню закрывалось при клике. По умолчанию меню закрывается после того, как пользователь нажал на один из его пунктов, но это можно отключить, если установить значение <code>false</code> для атрибута <code>hide-on-click</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-dropdown :hide-on-click="false">
                  <span class="el-dropdown-link">
                    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>

        <h2 class="title">Командное событие</h2>
        <p class="basic-text">При нажатии на каждый выпадающий элемент возникает событие, параметр которого назначается каждым элементом.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">Action 1</el-dropdown-item>
                        <el-dropdown-item command="b">Action 2</el-dropdown-item>
                        <el-dropdown-item command="c">Action 3</el-dropdown-item>
                        <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>

        <h2 class="title"></h2>
        <p class="basic-text">Кроме размера, выбранного по умолчанию, вы можете использовать еще 3 размера, которые могут подойти для разных сценариев применения. Используйте одно из трех значений атрибута <code>size</code> для того, чтобы изменить размер: <code>large</code>, <code>medium</code>, <code>small</code> или <code>mini</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-dropdown size="large" split-button type="primary">
                    Large
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item>Action 4</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <el-dropdown size="medium" split-button type="primary">
                    Medium
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item>Action 4</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <el-dropdown size="small" split-button type="primary">
                    Small
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item>Action 4</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <el-dropdown size="mini" split-button type="primary">
                    Mini
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item>Action 4</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Dropdown',
        methods: {
            handleCommand(command) {
                this.$message('click on item ' + command);
            },
            handleClick() {
                alert('button click');
            }
        }
    }
</script>

<style scoped>
    .el-dropdown-link {
        cursor: pointer;
        /*color: #409EFF;*/
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .el-dropdown {
        vertical-align: top;
    }
    .el-dropdown + .el-dropdown {
        margin-left: 15px;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>