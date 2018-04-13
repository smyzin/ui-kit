<template>
    <div style="text-align: left;">
        <h2 class="title">Основное использование</h2>
        <p class="basic-text">Установите <code>layout</code> с различными элементами разбиения на страницы, которые вы хотите отобразить, разделенными запятой. Элементы разбиения на страницы: <code>prev</code>(кнопка перемещения на предыдущую страницу), <code>next</code>(кнопка перемещения на следующую страницу), <code>pager</code>(список страниц), <code>jumper</code>(переход на страницу), <code>total</code>(общее количество элементов), <code>size</code>(выбор для определения размера страницы ) и <code>-></code>(каждый элемент после этого символа будет направлен вправо).</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <span class="demonstration">Когда у вас несколько страниц</span>
                    <el-pagination
                            layout="prev, pager, next"
                            :total="50">
                    </el-pagination>
                </div>
                <div class="block">
                    <span class="demonstration">Когда у вас больше 7 страниц</span>
                    <el-pagination
                            layout="prev, pager, next"
                            :total="1000">
                    </el-pagination>
                </div>
            </div>
        </div>

        <h2 class="title">Кнопки с фоновым цветом</h2>
        <p class="basic-text">Установите атрибут <code>background</code>, и кнопки будут иметь цвет фона.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
            </div>
        </div>

        <h2 class="title">Маленькая разбивка на страницы</h2>
        <p class="basic-text">Используйте небольшую разбивку на страницы в случае ограниченного пространства. Просто установите атрибут <code>small</code>, <code>true</code> и Pagination станет меньше.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-pagination
                        small
                        layout="prev, pager, next"
                        :total="50">
                </el-pagination>
            </div>
        </div>

        <h2 class="title">Дополнительные элементы</h2>
        <p class="basic-text">Добавьте больше модулей на основе вашего сценария. Этот пример является полным вариантом использования. Он использует <code>size-change</code> и событие для обработки изменений размера страницы и изменений текущей страницы <code>current-change</code>. <code>page-sizes</code> принимает массив целых чисел, каждый из которых представляет другой размер страницы в опциях выбора <code>sizes</code>, например, <code>[100, 200, 300, 400]</code> указывает, что выбор будет иметь четыре варианта: 100, 200, 300 или 400 элементов на страницу.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="block">
                    <div class="demonstration-title demo-title">Подсчет всех страниц</div>
                    <el-pagination
                            class="demonstration-pag"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage1"
                            :page-size="100"
                            layout="total, prev, pager, next"
                            :total="1000">
                    </el-pagination>
                </div>
                <div class="block">
                    <div class="demonstration-title demo-title">Изменение количества эл. на странице</div>
                    <el-pagination
                            class="demonstration-pag"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage2"
                            :page-sizes="[100, 200, 300, 400]"
                            :page-size="100"
                            layout="sizes, prev, pager, next"
                            :total="1000">
                    </el-pagination>
                </div>
                <div class="block">
                    <div class="demonstration-title demo-title">Перепрыгнуть к</div>
                    <el-pagination
                            class="demonstration-pag"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage3"
                            :page-size="100"
                            layout="prev, pager, next, jumper"
                            :total="1000">
                    </el-pagination>
                </div>
                <div class="block">
                    <div class="demonstration-title demo-title">Все комбинации</div>
                    <el-pagination
                            class="demonstration-pag"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage4"
                            :page-sizes="[100, 200, 300, 400]"
                            :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="400">
                    </el-pagination>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Pagination',
        methods: {
            handleSizeChange(val) {
                console.log(`${val} элементов на странице`);
            },
            handleCurrentChange(val) {
                console.log(`Текущая страница: ${val}`);
            }
        },
        data() {
            return {
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
            };
        }
    }
</script>

<style scoped>
    .demo-title{
        margin-bottom: 10px;
        font-size: 14px;
        color: #5e6d82;
    }
    .demonstration-title{
        width: 240px;
    }
    .demonstration-title, .demonstration-pag {
        display: inline-block;
    }
</style>