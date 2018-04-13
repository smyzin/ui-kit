<template>
    <div style="text-align: left;">
        <h2 class="title">Основное использование</h2>
        <p class="basic-text">Используйте атрибут <code>type</code> для определения типа тега. Кроме того, атрибут <code>color</code> может использоваться для установки цвета фона тега.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tag
                        v-for="tag in tags"
                        :key="tag.name"
                        :type="tag.type">
                    {{tag.name}}
                </el-tag>
            </div>
        </div>

        <h2 class="title">Удаляемый тег</h2>
        <p class="basic-text">Атрибут <code>closable</code> может использоваться для определения возможности удаления тега. Он принимает значения <code>Boolean</code>. По умолчанию удаление тега имеет затухающую анимацию. Если вы не хотите ее использовать, вы можете установить атрибут <code>disable-transitions</code>, который принимает значения <code>Boolean</code>, <code>true</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tag
                        v-for="tag in tags"
                        :key="tag.name"
                        closable
                        :type="tag.type">
                    {{tag.name}}
                </el-tag>
            </div>
        </div>

        <h2 class="title">Динамическое редактирование</h2>
        <p class="basic-text">Вы можете использовать событие <code>close</code> для динамического добавления и удаления тега.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tag
                        :key="tag"
                        v-for="tag in dynamicTags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                    {{tag}}
                </el-tag>
                <el-input
                        class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="mini"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                >
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ Новый тег</el-button>
            </div>
        </div>

        <h2 class="title">Размеры</h2>
        <p class="basic-text">Компонент Tag предоставляет четыре размера для выбора между различными сценариями. Использовать атрибут <code>size</code> для установки размеров с помощью <code>large</code>. <code>medium</code>, <code>small</code> или <code>mini</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tag size="large">Large</el-tag>
                <el-tag size="medium">Medium</el-tag>
                <el-tag size="small">Small</el-tag>
                <el-tag size="mini">Mini</el-tag>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Tag',
        data() {
            return {
                tags: [
                    { name: 'Тег 1', type: '' },
                    { name: 'Тег 2', type: 'success' },
                    { name: 'Тег 3', type: 'info' },
                    { name: 'Тег 4', type: 'warning' },
                    { name: 'Тег 5', type: 'danger' }
                ],
                dynamicTags: ['Тег 1', 'Тег 2', 'Тег 3'],
                inputVisible: false,
                inputValue: '',
            };
        },
        methods: {
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        }
    }
</script>

<style scoped>
    .el-tag + .el-tag {
         margin-left: 10px;
     }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
</style>