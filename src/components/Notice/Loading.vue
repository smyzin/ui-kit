<template>
    <div style="text-align: left;">
        <h2 class="title">Загрузка внутри контейнера</h2>
        <p class="basic-text">Вы можете отобразить анимацию загрузки внутри контейнера во время загрузки данных. Элемент предоставляет два способа вызова функции Загрузка: директива и обслуживание. Для пользовательской директивы <code>v-loading</code> вам просто нужно привязать к ней значение <code>Boolean</code>. По умолчанию эта анимация будет добавляться к любому элементу, в котором используется эта директива. Добавление модификатора <code>body</code> добавляет маску к элементу body.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        v-loading="loading"
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="Date"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Name"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="Address">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Настройка анимации загрузки</h2>
        <p class="basic-text">Вы можете настроить текст, который отображается при загрузке, цвет фона и саму анимацию загрузки.  Добавьте атрибут <code>element-loading-text</code> к элементу с директивой <code>v-loading</code>, тогда его значение будет отображаться под индикатором загрузки. Также вы можете настраивать атрибуты <code>element-loading-spinner</code> и <code>element-loading-background</code> для настройки цвета фона и использовать другую анимацию загрузки.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        v-loading="loading2"
                        element-loading-text="Loading..."
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(0, 0, 0, 0.8)"
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="Date"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Name"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="Address">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Загрузка в полноэкранном режиме</h2>
        <p class="basic-text">При загрузке данных вы можете использовать анимацию загрузки в полноэкранном режиме. Для использования анимации загрузки в полноэкранном режиме необходимо использовать идентификатор <code>fullscreen</code>. В случае, если вы хотите отключить прокрутку страницы во время загрузки, то вам также нужно использовать модификатор <code>lock</code>. При использовании в качестве сервиса, загрузка будет использоваться по умолчанию.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-button
                        type="primary"
                        @click="openFullScreen"
                        v-loading.fullscreen.lock="fullscreenLoading">
                    As a directive
                </el-button>
                <el-button
                        type="primary"
                        @click="openFullScreen2">
                    As a service
                </el-button>
            </div>
        </div>

        <h2 class="title">Сервис</h2>
        <p class="basic-text">Вы также можете вызвать «Загрузка» службой. Сделайте импорт службы загрузки:
            <code class="code-block">
                <span class="blue">import</span> { Loading } <span class="blue">from</span> '<span class="name">element-ui</span>';
            </code>
            Вызовите его:
            <code class="code-block">
                Loading.service(options);
            </code>
            Параметр <code>options</code> -  - это конфигурация загрузки, а ее данные можно найти в следующей таблице. <code>LoadingService</code> возвращает экземпляр Loading instance, и вы можете закрыть его при помощи метода <code>close</code>:
            <code class="code-block">
                <span class="blue">let</span> loadingInstance = Loading.service(options);<br>
                <span class="blue">this</span>.$nextTick(() => { <span class="comment">// Loading should be closed asynchronously</span><br>
                loadingInstance.close();
                });
            </code>
            Обратите внимание на то, что в этом случае полноэкранная загрузка является одноэлементной. В том случае, если новая загрузка вызовится до закрытия существующего окна загрузки, то вместо фактического создания другого экземпляра загрузки будет возвращен существующий экземпляр загрузки в полоэкранном режиме:
            <code class="code-block">
                <span class="blue">let</span> loadingInstance1 = Loading.service({ fullscreen: <span class="green">true</span> });<br>
                <span class="blue">let</span> loadingInstance2 = Loading.service({ fullscreen: <span class="green">true</span> });<br>
                <span class="blue">console</span>.log(loadingInstance1 === loadingInstance2); // true
            </code>
            Вызов метода <code>Close</code> на любом из них может закрыть эту загрузку в полноэкранном режиме.
            Если элемент полностью импортирован, глобальный метод <code>$loading</code> будет зарегистрирован на Vue.prototype. Вы можете вызвать его так: <code>, this.$loading(options)</code> и он также возвращает экземпляр «Загрузка».</p>

    </div>
</template>

<script>
    export default {
        name: 'Loading',
        data() {
            return {
                tableData: [{
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
                }],
                loading: true,
                loading2: true,
                fullscreenLoading: false,
            };
        },
        methods: {
            openFullScreen() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 2000);
            },
            openFullScreen2() {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                }, 2000);
            }
        }
    }
</script>

<style scoped>

</style>