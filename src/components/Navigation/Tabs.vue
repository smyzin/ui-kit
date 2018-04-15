<template>
    <div style="text-align: left;">
        <h2 class="title">Базовое использование</h2>
        <p class="basic-text">Базовые и короткие вкладки.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="User" name="first">User</el-tab-pane>
                    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
                    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
                    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <h2 class="title">Card Style - стиль вкладок</h2>
        <p class="basic-text">Tabs (вкладки) стилизованные под карточки (card). Установите значение <code>card</code> для атрибута <code>type</code> для того, чтобы получить вкладку в стиле карточки.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tabs type="card" @tab-click="handleClick">
                    <el-tab-pane label="User">User</el-tab-pane>
                    <el-tab-pane label="Config">Config</el-tab-pane>
                    <el-tab-pane label="Role">Role</el-tab-pane>
                    <el-tab-pane label="Task">Task</el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <h2 class="title">Табы с обводкой</h2>
        <p class="basic-text">Вы можете стилизовать вкладки под карточки с рамками. Установите значение <code>border-card</code> для атрибута <code>type</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tabs type="border-card">
                    <el-tab-pane label="User">User</el-tab-pane>
                    <el-tab-pane label="Config">Config</el-tab-pane>
                    <el-tab-pane label="Role">Role</el-tab-pane>
                    <el-tab-pane label="Task">Task</el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <h2 class="title">Позиционирование вкладок</h2>
        <p class="basic-text">Вы можете использовать атрибут <code>tab-position</code> для того, чтобы определить месторасположение вкладок.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                    <el-radio-button label="top">top</el-radio-button>
                    <el-radio-button label="right">right</el-radio-button>
                    <el-radio-button label="bottom">bottom</el-radio-button>
                    <el-radio-button label="left">left</el-radio-button>
                </el-radio-group>

                <el-tabs :tab-position="tabPosition" style="height: 200px;">
                    <el-tab-pane label="User">User</el-tab-pane>
                    <el-tab-pane label="Config">Config</el-tab-pane>
                    <el-tab-pane label="Role">Role</el-tab-pane>
                    <el-tab-pane label="Task">Task</el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <h2 class="title">Кастомизация вкладок</h2>
        <p class="basic-text">Вы можете использовать слот имени для настройки содержимого вкладки.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tabs type="border-card">
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-date"></i> Route</span>
                        Route
                    </el-tab-pane>
                    <el-tab-pane label="Config">Config</el-tab-pane>
                    <el-tab-pane label="Role">Role</el-tab-pane>
                    <el-tab-pane label="Task">Task</el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <h2 class="title">Добавление и закрытие вкладок</h2>
        <p class="basic-text">Добавлять и закрывать вкладки можно только вкладки стилизованные под карточки (card tabs).</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
                    <el-tab-pane
                            v-for="(item, index) in editableTabs"
                            :key="item.name"
                            :label="item.title"
                            :name="item.name"
                    >
                        {{item.content}}
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <h2 class="title">Настраиваемая кнопка добавления вкладки</h2>
        <p class="basic-text"></p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div style="margin-bottom: 20px;">
                    <el-button
                            size="small"
                            @click="addTab(editableTabsValue2)"
                    >
                        add tab
                    </el-button>
                </div>
                <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
                    <el-tab-pane
                            v-for="(item, index) in editableTabs2"
                            :key="item.name"
                            :label="item.title"
                            :name="item.name"
                    >
                        {{item.content}}
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'Tabs',
        data() {
            return {
                activeName: 'first',
                tabPosition: 'top',
                editableTabsValue: '2',
                editableTabs: [{
                    title: 'Tab 1',
                    name: '1',
                    content: 'Tab 1 content'
                }, {
                    title: 'Tab 2',
                    name: '2',
                    content: 'Tab 2 content'
                }],
                tabIndex: 2,
                editableTabsValue2: '2',
                editableTabs2: [{
                    title: 'Tab 1',
                    name: '1',
                    content: 'Tab 1 content'
                }, {
                    title: 'Tab 2',
                    name: '2',
                    content: 'Tab 2 content'
                }],
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleTabsEdit(targetName, action) {
                if (action === 'add') {
                    let newTabName = ++this.tabIndex + '';
                    this.editableTabs.push({
                        title: 'New Tab',
                        name: newTabName,
                        content: 'New Tab content'
                    });
                    this.editableTabsValue = newTabName;
                }
                if (action === 'remove') {
                    let tabs = this.editableTabs;
                    let activeName = this.editableTabsValue;
                    if (activeName === targetName) {
                        tabs.forEach((tab, index) => {
                            if (tab.name === targetName) {
                                let nextTab = tabs[index + 1] || tabs[index - 1];
                                if (nextTab) {
                                    activeName = nextTab.name;
                                }
                            }
                        });
                    }

                    this.editableTabsValue = activeName;
                    this.editableTabs = tabs.filter(tab => tab.name !== targetName);
                }
            },
            addTab(targetName) {
                let newTabName = ++this.tabIndex + '';
                this.editableTabs2.push({
                    title: 'New Tab',
                    name: newTabName,
                    content: 'New Tab content'
                });
                this.editableTabsValue2 = newTabName;
            },
            removeTab(targetName) {
                let tabs = this.editableTabs2;
                let activeName = this.editableTabsValue2;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }

                this.editableTabsValue2 = activeName;
                this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
            }
        }
    }
</script>

<style scoped>

</style>