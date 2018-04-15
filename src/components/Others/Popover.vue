<template>
    <div style="text-align: left;">
        <h2 class="title">Базовое использование</h2>
        <p class="basic-text">'Popover' очень похож на элемент Tooltip и также построен на <code>Vue-popper</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-popover
                        ref="popover1"
                        placement="top-start"
                        title="Title"
                        width="200"
                        trigger="hover"
                        content="this is content, this is content, this is content">
                </el-popover>

                <el-popover
                        ref="popover2"
                        placement="bottom"
                        title="Title"
                        width="200"
                        trigger="click"
                        content="this is content, this is content, this is content">
                </el-popover>

                <el-button v-popover:popover1>Hover to activate</el-button>
                <el-button v-popover:popover2>Click to activate</el-button>
                <el-popover
                        placement="right"
                        title="Title"
                        width="200"
                        trigger="focus"
                        content="this is content, this is content, this is content">
                    <el-button slot="reference">Focus to activate</el-button>
                </el-popover>
            </div>
        </div>

        <h2 class="title">Вложенная информация</h2>
        <p class="basic-text">Другие компоненты могут быть вложены в 'Popover'. Ниже приведен пример вложенной таблицы.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-popover
                        ref="popover4"
                        placement="right"
                        width="400"
                        trigger="click">
                    <el-table :data="gridData">
                        <el-table-column width="150" property="date" label="date"></el-table-column>
                        <el-table-column width="100" property="name" label="name"></el-table-column>
                        <el-table-column width="300" property="address" label="address"></el-table-column>
                    </el-table>
                </el-popover>

                <el-button v-popover:popover4>Click to activate</el-button>
            </div>
        </div>

        <h2 class="title">Вложенные операции</h2>
        <p class="basic-text">Вы можете вкладывать "дркгие операции" внутрь вашего 'Popover'. Это более легковесное решение, чем использваоть диалоговые окна.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-popover
                        ref="popover5"
                        placement="top"
                        width="160"
                        v-model="visible2">
                    <p>Are you sure to delete this?</p>
                    <div style="text-align: right; margin: 0">
                        <el-button size="mini" type="text" @click="visible2 = false">cancel</el-button>
                        <el-button type="primary" size="mini" @click="visible2 = false">confirm</el-button>
                    </div>
                </el-popover>

                <el-button v-popover:popover5>Delete</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Popover',
        data() {
            return {
                gridData: [{
                    date: '2016-05-02',
                    name: 'Jack',
                    address: 'New York City'
                }, {
                    date: '2016-05-04',
                    name: 'Jack',
                    address: 'New York City'
                }, {
                    date: '2016-05-01',
                    name: 'Jack',
                    address: 'New York City'
                }, {
                    date: '2016-05-03',
                    name: 'Jack',
                    address: 'New York City'
                }],
                visible2: false,
            };
        }
    }
</script>

<style scoped>

</style>