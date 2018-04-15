<template>
    <div style="text-align: left;">
        <h2 class="title">Alert</h2>
        <p class="basic-text">Предупреждение прерывает работу пользователя, пока пользователь не подтвердит. Откройте оповещение, вызвав метод <code>$alert</code>. Такое оповещение имитирует системный <code>alertr</code> и не может быть закрытым клавишей ESC или щелчком мыши вне пол. В приведенном примере получены два параметра: <code>message</code> и <code>title</code>. Стоит отметить, что когда всплывающее окно закрыто, то он возвращает объект <code>Promise</code> для дальнейшей обработки.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button type="text" @click="open">Click to open the Message Box</el-button>
            </div>
        </div>

        <h2 class="title">Confirm</h2>
        <p class="basic-text">Подтверждение используется для запроса пользователей. Вызовите метод <code>$confirm</code> для того, чтобы открыть окно подтверждения, которое имитирует окно подтверждения системы. Также можно настроить Message Box, передав третий атрибут <code>options</code>. Атрибут <code>type</code> определяет тип сообщения, его значением может быть <code>success</code>, <code>error</code>, <code>info</code> и <code>warning</code>. Обратите внимание на то, что второй атрибут <code>title</code> должен принимать <code>string</code>, и если он является <code>object</code>, то он будет обрабатываться как атрибут <code>option</code>. В этом примере мы используем <code>Promise</code> для управления дальнейшей обработкой.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button type="text" @click="open2">Click to open the Message Box</el-button>
            </div>
        </div>

        <h2 class="title">Prompt</h2>
        <p class="basic-text">Prompt используется, когда пользователю нужно внести данные. Вызовете метод <code>$prompt</code> для того, чтобы открыть всплывающее окно для ввода данных. Вы можете использовать параметр <code>inputPattern</code>, чтобы указать свой шаблон регулярного выражения. Используйте <code>inputValidator</code> для того, чтобы указать метод проверки. Он должен принимать <code>Boolean</code> или <code>String</code>. Возврат <code>false</code> или <code>String</code> означает, что проверка завершилась неудачно, и возвращенная строка будет использоваться в качестве <code>inputErrorMessage</code>. Также вы можете настроить заполнение поля ввода с помощью параметра <code>inputPlaceholder</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button type="text" @click="open3">Click to open Message Box</el-button>
            </div>
        </div>

        <h2 class="title">Настраиваемый</h2>
        <p class="basic-text">Такое окно может быть настроено для показа разного контента.  Три упомянутых выше метода - это переупаковки метода <code>$MsgBox</code>. В последующем примере метод <code>$MsgBox</code> вызывется непосредственно с помощью атрибута <code>showCancelButton</code>, который служит для указания того, отображается ли кнопка отмены. Кроме того, можно использовать <code>cancelButtonClass</code> для настройки стилей и <code>cancelButtonText</code> для того, чтобы настроить текст кнопки (кнопка подтверждения также содержит эти поля, а полный список полей вы найдете в конце этой документации). В этом примере также используется атрибут <code>beforeClose</code>. Он имеет три параметра: <code>action</code>, <code>instance</code> и <code>done</code>. Таким образом можно управлять MessageBox еще до его закрытия (если <code>done</code> не вызывается внутри <code>beforeClose</code>, экземпляр не будет закрыт).</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button type="text" @click="open4">Click to open Message Box</el-button>
            </div>
        </div>

        <h2 class="title">Использовать HTML-строку</h2>
        <p class="basic-text">Установите <code>dangerouslyUseHTMLString</code> значение <code>true</code> и <code>message</code> будет рассматриваться как HTML-строка.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button type="text" @click="open5">Click to open Message Box</el-button>
            </div>
        </div>

        <h2 class="title">Центрированный контент</h2>
        <p class="basic-text">Используйте атрибут <code>center</code> для центрирования содержимого.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button type="text" @click="open6">Click to open Message Box</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'MessageBox',
        methods: {
            open() {
                this.$alert('This is a message', 'Title', {
                    confirmButtonText: 'OK',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            },
            open2() {
                this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: 'Delete completed'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Delete canceled'
                    });
                });
            },
            open3() {
                this.$prompt('Please input your e-mail', 'Tip', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: 'Invalid Email'
                }).then(value => {
                    this.$message({
                        type: 'success',
                        message: 'Your email is:' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Input canceled'
                    });
                });
            },
            open4() {
                const h = this.$createElement;
                this.$msgbox({
                    title: 'Message',
                    message: h('p', null, [
                        h('span', null, 'Message can be '),
                        h('i', { style: 'color: teal' }, 'VNode')
                    ]),
                    showCancelButton: true,
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            instance.confirmButtonLoading = true;
                            instance.confirmButtonText = 'Loading...';
                            setTimeout(() => {
                                done();
                                setTimeout(() => {
                                    instance.confirmButtonLoading = false;
                                }, 300);
                            }, 3000);
                        } else {
                            done();
                        }
                    }
                }).then(action => {
                    this.$message({
                        type: 'info',
                        message: 'action: ' + action
                    });
                });
            },
            open5() {
                this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {
                    dangerouslyUseHTMLString: true
                });
            },
            open6() {
                this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: 'Delete completed'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Delete canceled'
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>