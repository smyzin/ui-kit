<template>
    <div style="text-align: left;">
        <h2 class="title">Базовое использование</h2>
        <p class="basic-text">Свойство диалог создаст диалоговое окно, которое довольно кастомизируемое.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>

                <el-dialog
                        title="Tips"
                        :visible.sync="dialogVisible"
                        width="30%"
                        :before-close="handleClose">
                    <span>This is a message</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
                    </span>
                </el-dialog>
            </div>
        </div>

        <h2 class="title">Кастомизация</h2>
        <p class="basic-text">Контент диалогового окна может быть любым, даже таблицейй или формой. В данном примере показано, как будет выглядить встроенная таблица и форма в диалоговое окно.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <!-- Table -->
                <el-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</el-button>

                <el-dialog title="Shipping address" :visible.sync="dialogTableVisible">
                    <el-table :data="gridData">
                        <el-table-column property="date" label="Date" width="150"></el-table-column>
                        <el-table-column property="name" label="Name" width="200"></el-table-column>
                        <el-table-column property="address" label="Address"></el-table-column>
                    </el-table>
                </el-dialog>

                <br>
                <!-- Form -->
                <el-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</el-button>

                <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="Promotion name" :label-width="formLabelWidth">
                            <el-input v-model="form.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="Zones" :label-width="formLabelWidth">
                            <el-select v-model="form.region" placeholder="Please select a zone">
                                <el-option label="Zone No.1" value="shanghai"></el-option>
                                <el-option label="Zone No.2" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
                    </span>
                </el-dialog>
            </div>
        </div>

        <h2 class="title">Вложенное диалоговое окно</h2>
        <p class="basic-text">Если диалоговое окно встроено в другое диалоговое окно, то указание атрибута <code>append-to-body</code> обязательно.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button type="text" @click="outerVisible = true">open the outer Dialog</el-button>

                <el-dialog title="Outer Dialog" :visible.sync="outerVisible">
                    <el-dialog
                            width="30%"
                            title="Inner Dialog"
                            :visible.sync="innerVisible"
                            append-to-body>
                    </el-dialog>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="outerVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="innerVisible = true">open the inner Dialog</el-button>
                    </div>
                </el-dialog>
            </div>
        </div>

        <h2 class="title">Центрирование контента</h2>
        <p class="basic-text">Содержимое диалогового окна может быть отцентрировано. Для этого достаточно атрибуту <code>center</code> задать значение <code>true</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</el-button>

                <el-dialog
                        title="Warning"
                        :visible.sync="centerDialogVisible"
                        width="30%"
                        center>
                    <span>It should be noted that the content will not be aligned in center by default</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
                    </span>
                </el-dialog>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Dialog',
        data() {
            return {
                centerDialogVisible: false,
                outerVisible: false,
                innerVisible: false,
                gridData: [{
                    date: '2016-05-02',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District'
                }, {
                    date: '2016-05-04',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District'
                }, {
                    date: '2016-05-01',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District'
                }, {
                    date: '2016-05-03',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District'
                }],
                dialogTableVisible: false,
                dialogFormVisible: false,
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
                formLabelWidth: '120px',
                dialogVisible: false
            };
        },
        methods: {
            handleClose(done) {
                this.$confirm('Are you sure to close this dialog?')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
        }
    }
</script>

<style scoped>

</style>