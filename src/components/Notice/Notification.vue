<template>
    <div style="text-align: left;">
        <h2 class="title">Основное использование</h2>
        <p class="basic-text">Element зарегистрировал метод <code>$notify</code> и получает объект в качестве параметра. Вы можете установить поля<code>title</code> и <code>message</code> для заголовка и тела уведомления. По умолчанию уведомление автоматически закрывается через 4500 мс, но вы можете изменить это путем изменения значения <code>duration</code>. В том, случае, если установлено значение <code>0</code>, то уведомление не будет закрыто автоматически. Обратите внимание на то, что <code>duration</code> принимает <code>Number</code> в миллисекундах.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button
                        plain
                        @click="open">
                    Closes automatically
                </el-button>
                <el-button
                        plain
                        @click="open2">
                    Won't close automatically
                </el-button>
            </div>
        </div>

        <h2 class="title">Типы</h2>
        <p class="basic-text">4 типа тем, определяемых по атрибуту <code>type</code> со значениями <code>success</code>, <code>error</code>, <code>info</code> или <code>warning</code>. Также вы можете напрямую вызвать такие методы, как <code>open5</code> и <code>open6</code> без прохождения поля <code>type</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button
                        plain
                        @click="open3">
                    Success
                </el-button>
                <el-button
                        plain
                        @click="open4">
                    Warning
                </el-button>
                <el-button
                        plain
                        @click="open5">
                    Info
                </el-button>
                <el-button
                        plain
                        @click="open6">
                    Error
                </el-button>
            </div>
        </div>

        <h2 class="title">Настройка позиции уведомления</h2>
        <p class="basic-text">Уведомление может появляться их любого угла страницы на ваше усмотрение. Атрибут <code>position</code> определяет то, в каком углу будет появляться уведомление. Этот атрибут может иметь такие значения, как: <code>top-right</code> (верхний правый угол), <code>top-left</code> (верхний левый угол), <code>bottom-right</code> (правый нижний угол) или <code>bottom-left</code>(нижний правый угол). По умолчанию выставляется значение <code>top-right</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button
                        plain
                        @click="open7">
                    Top Right
                </el-button>
                <el-button
                        plain
                        @click="open8">
                    Bottom Right
                </el-button>
                <el-button
                        plain
                        @click="open9">
                    Bottom Left
                </el-button>
                <el-button
                        plain
                        @click="open10">
                    Top Left
                </el-button>
            </div>
        </div>

        <h2 class="title">Уведомления с смещением</h2>
        <p class="basic-text">Вы можете настроить смещение уведомлений от края экрана. Для того, чтобы настроить смещение от края экрана, вы можете использовать атрибут <code>offset</code>. Обратите внимание на то, что каждый элемент уведомления должен иметь такое же смещение.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button
                        plain
                        @click="open11">
                    Notification with offset
                </el-button>
            </div>
        </div>

        <h2 class="title">Использовать HTML-строку</h2>
        <p class="basic-text">Установите <code>dangerouslyUseHTMLString</code> значение <code>true</code> и <code>message</code> будет рассматриваться как HTML-строка.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button
                        plain
                        @click="open12">
                    Use HTML String
                </el-button>
            </div>
        </div>

        <h2 class="title">Скрыть кнопку закрытия</h2>
        <p class="basic-text">Можно скрыть кнопку закрытия. Установите <code>showClose</code> атрибут <code>false</code> так, чтобы пользователь не закрывал уведомление.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button
                        plain
                        @click="open13">
                    Hide close button
                </el-button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Notification',
        methods: {
            open() {
                const h = this.$createElement;

                this.$notify({
                    title: 'Title',
                    message: h('i', { style: 'color: teal' }, 'This is a reminder')
                });
            },
            open2() {
                this.$notify({
                    title: 'Prompt',
                    message: 'This is a message that does not automatically close',
                    duration: 0
                });
            },
            open3() {
                this.$notify({
                    title: 'Success',
                    message: 'This is a success message',
                    type: 'success'
                });
            },
            open4() {
                this.$notify({
                    title: 'Warning',
                    message: 'This is a warning message',
                    type: 'warning'
                });
            },
            open5() {
                this.$notify.info({
                    title: 'Info',
                    message: 'This is an info message'
                });
            },
            open6() {
                this.$notify.error({
                    title: 'Error',
                    message: 'This is an error message'
                });
            },
            open7() {
                this.$notify({
                    title: 'Custom Position',
                    message: 'I\'m at the top right corner'
                });
            },
            open8() {
                this.$notify({
                    title: 'Custom Position',
                    message: 'I\'m at the bottom right corner',
                    position: 'bottom-right'
                });
            },
            open9() {
                this.$notify({
                    title: 'Custom Position',
                    message: 'I\'m at the bottom left corner',
                    position: 'bottom-left'
                });
            },
            open10() {
                this.$notify({
                    title: 'Custom Position',
                    message: 'I\'m at the top left corner',
                    position: 'top-left'
                });
            },
            open11() {
                this.$notify.success({
                    title: 'Success',
                    message: 'This is a success message',
                    offset: 100
                });
            },
            open12() {
                this.$notify({
                    title: 'HTML String',
                    dangerouslyUseHTMLString: true,
                    message: '<strong>This is <i>HTML</i> string</strong>'
                });
            },
            open13() {
                this.$notify.success({
                    title: 'Info',
                    message: 'This is a message without close button',
                    showClose: false
                });
            }
        }
    }
</script>

<style scoped>

</style>