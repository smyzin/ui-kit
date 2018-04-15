<template>
    <div style="text-align: left;">
        <h2 class="title">Основное использование</h2>
        <p class="basic-text">Отображается вверху и исчезает через 3 секунды. Настройка Message очень похожа на настройку уведомлений. Вы можете проверить приведенную ниже таблицу параметров в сочетании с уведомлениями. Element может зарегистрировал <code>$message</code> для вызова. Сообщение может принимать строку или параметр VNode в качестве параметра, и он будет отображаться как основной элемент.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button :plain="true" @click="open">Show message</el-button>
                <el-button :plain="true" @click="openVn">VNode</el-button>
            </div>
        </div>

        <h2 class="title">Типы</h2>
        <p class="basic-text">Используются для отображения таких сообщений, как: Success, Warning, Message и Error. При необходимости дополнительных настроек компонент Message также может принимать объект в качестве параметра. Например значение параметра <code>type</code> может определяться разными типами, по умолчанию <code>info</code>". В таких случаях передается значение <code>message</code>. Кроме того, у нас есть зарегистрированные методы для разных типов оповещений, поэтому вы можете напрямую вызывать их без передавания типа <code>open4</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button :plain="true" @click="open2">success</el-button>
                <el-button :plain="true" @click="open3">warning</el-button>
                <el-button :plain="true" @click="open">message</el-button>
                <el-button :plain="true" @click="open4">error</el-button>
            </div>
        </div>

        <h2 class="title">Закрываемые уведомления</h2>
        <p class="basic-text">Можно добавить кнопку закрытия. По умолчанию всплывающее уведомление не может быть закрыто. В случае, если вам необходимо закрываемое уведомление, вы можете установить поле <code>showClose</code>. Кроме того, сообщение имеет управляемый <code>duration</code>. По умолчанию уведомление показывается на 3000 мс, но оно не исчезнет при установке <code>0 </code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button :plain="true" @click="open5">message</el-button>
                <el-button :plain="true" @click="open6">success</el-button>
                <el-button :plain="true" @click="open7">warning</el-button>
                <el-button :plain="true" @click="open8">error</el-button>
            </div>
        </div>

        <h2 class="title">Центрированный текст</h2>
        <p class="basic-text">Используйте атрибут <code>center</code> для центрирования текста.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button :plain="true" @click="openCenter">Centered text</el-button>
            </div>
        </div>

        <h2 class="title">Использовать HTML-строку</h2>
        <p class="basic-text">Установите <code>dangerouslyUseHTMLString</code> значение <code>true</code> и <code>message</code> будет рассматриваться как HTML-строка.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button :plain="true" @click="openHTML">Use HTML String</el-button>
            </div>
        </div>

        <h2 class="title">Глобальный метод</h2>
        <p class="basic-text">Element добавил глобальный метод <code>$message</code> для Vue.prototype. Таким образом, в vue вы можете вызывать <code>message</code>, также, как мы сделали на этой странице.</p>

        <h2 class="title">Локальный метод</h2>
        <p class="basic-text">Выполните импорт <code>Message</code>:
            <code class="code-block">
                <span class="blue">import</span> { Message } <span class="blue">from</span> '<span class="name">element-ui</span>';
            </code>
            В этом случае вы сможете выполнить вызов <code>Message(options)</code>. Также, вы можете вызвать метод для разных типов, например <code>Message.success(options)</code>. Вы можете вызвать <code>Message.closeAll()</code>, чтобы закрыть все сообщения сразу.
            для Vue.prototype. Таким образом, в vue вы можете вызывать <code>message</code>, также, как мы сделали на этой странице.</p>

    </div>
</template>

<script>
    export default {
        name: 'Message',
        methods: {
            open() {
                this.$message('This is a message.');
            },
            open2() {
                this.$message({
                    message: 'Congrats, this is a success message.',
                    type: 'success'
                });
            },
            open3() {
                this.$message({
                    message: 'Warning, this is a warning message.',
                    type: 'warning'
                });
            },
            open4() {
                this.$message.error('Oops, this is a error message.');
            },
            open5() {
                this.$message({
                    showClose: true,
                    message: 'This is a message.'
                });
            },
            open6() {
                this.$message({
                    showClose: true,
                    message: 'Congrats, this is a success message.',
                    type: 'success'
                });
            },
            open7() {
                this.$message({
                    showClose: true,
                    message: 'Warning, this is a warning message.',
                    type: 'warning'
                });
            },
            open8() {
                this.$message({
                    showClose: true,
                    message: 'Oops, this is a error message.',
                    type: 'error'
                });
            },

            openHTML() {
                this.$message({
                    dangerouslyUseHTMLString: true,
                    message: '<strong>This is <i>HTML</i> string</strong>'
                });
            },
            openCenter() {
                this.$message({
                    message: 'Centered text',
                    center: true
                });
            },
            openVn() {
                const h = this.$createElement;
                this.$message({
                    message: h('p', null, [
                        h('span', null, 'Message can be '),
                        h('i', { style: 'color: teal' }, 'VNode')
                    ])
                });
            }
        }
    }
</script>

<style scoped>

</style>