<template>
    <div style="text-align: left;">
        <h2 class="title">Стандартная таблица</h2>
        <p class="basic-text">Базовая таблица предназначена только для отображения данных. После установки атрибута <code>data</code> для <code>el-tableс</code> с массивом объектов, вы можете использовать <code>prop</code> (что соответствует ключу объекта в <code>data</code> массиве) в <code>el-table-column</code> для вставки данных в столбцы таблицы, и установить атрибут <code>label</code> для определения имени столбца. Вы также можете использовать атрибут <code>width</code>для определения ширины столбцов.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="Дата"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Имя"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="Адрес">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Разделение строк цветом</h2>
        <p class="basic-text">Атрибут <code>stripe</code> принимает <code>Boolean</code>. Если <code>true</code>, то будет разделение строк цветом.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="Дата"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Имя"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="Адрес">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Таблица с границами</h2>
        <p class="basic-text">По умолчанию таблица не имеет вертикальных границ. Если вам это нужно, вы можете установить <code>true</code> для атрибута <code>border</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="Дата"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Имя"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="Адрес">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Таблица со статусом</h2>
        <p class="basic-text">Вы можете выделить содержимое своей таблицы, чтобы различать «success, info, warning, danger» и другие состояния. Использование <code>row-class-name</code> в <code>el-table</code> добавит пользовательский класс в определенной строке. Затем вы можете создать его с помощью пользовательских классов.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData2"
                        style="width: 100%"
                        :row-class-name="tableRowClassName">
                    <el-table-column
                            prop="date"
                            label="Дата"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Имя"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="Адрес">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Таблица с фиксированным заголовком</h2>
        <p class="basic-text">Когда слишком много строк, вы можете использовать фиксированный заголовок. Установив атрибут <code>height</code> в <code>el-table</code>, вы можете исправить заголовок таблицы без каких - либо других кодов.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData3"
                        height="250"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="Дата"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Имя"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="Адрес">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Таблица с фиксированным столбцом</h2>
        <p class="basic-text">Когда слишком много столбцов, вы можете зафиксировать некоторые из них. Используйте арибут <code>fixed</code> в <code>el-table-column</code> со значением <code>Boolean</code>. Если <code>true</code>, то столбец будет зафиксирован слева. Он также принимает два строковых литерала: «left» и «right», оба указывают, что столбец будет зафиксирован в соответствующем направлении.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData50"
                        style="width: 100%">
                    <el-table-column
                            fixed
                            prop="date"
                            label="Дата"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Имя"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="state"
                            label="Штат"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="city"
                            label="Город"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="Адрес"
                            width="300">
                    </el-table-column>
                    <el-table-column
                            prop="zip"
                            label="Zip-код"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="Действия"
                            width="120">
                        <template slot-scope="scope">
                            <el-button @click="handleClick" type="text" size="small">Ещё</el-button>
                            <el-button type="text" size="small">Изменить</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Таблица с фиксированными столбцами и заголовком</h2>
        <p class="basic-text">Когда у вас есть огромные куски данных для размещения в таблице, вы можете одновременно зафиксировать заголовок и столбцы.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData60"
                        style="width: 100%"
                        height="250">
                    <el-table-column
                            fixed
                            prop="date"
                            label="Дата"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Имя"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="state"
                            label="Штат"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="city"
                            label="Город"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="Адрес"
                            width="300">
                    </el-table-column>
                    <el-table-column
                            prop="zip"
                            label="Zip-код"
                            width="120">
                    </el-table-column>
                </el-table>

            </div>
        </div>

        <h2 class="title">Таблица с плавающей высотой и фиксированным заголовком (и столбцами)</h2>
        <p class="basic-text">Когда данные динамически изменяются, вам может потребоваться, чтобы таблица имела максимальную высоту, а не фиксированную высоту, и, если нужно, показывать полосу прокрутки. Установив атрибут <code>max-height</code> в <code>el-table</code>, вы можете зафиксировать заголовок таблицы. Тело таблицы прокручивается только в том случае, если высота строк превышает максимальное значение высоты.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData4"
                        style="width: 100%"
                        max-height="250">
                    <el-table-column
                            fixed
                            prop="date"
                            label="Дата"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Имя"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="state"
                            label="Штат"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="city"
                            label="Город"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="Адрес"
                            width="300">
                    </el-table-column>
                    <el-table-column
                            prop="zip"
                            label="Zip-код"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="Действия"
                            width="120">
                        <template slot-scope="scope">
                            <el-button
                                    @click.native.prevent="deleteRow(scope.$index, tableData4)"
                                    type="text"
                                    size="small">
                                Удалить
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Группировка заголовков таблицы</h2>
        <p class="basic-text">Когда структура данных сложна, вы можете использовать заголовок группы, чтобы показать иерархию данных.
            Вставьте <code>el-table-column</code> внутри столбца<code>el-table</code>, так вы получите заголовок группы.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData3"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="Дата"
                            width="150">
                    </el-table-column>
                    <el-table-column label="Информация по доставке">
                        <el-table-column
                                prop="name"
                                label="Имя"
                                width="120">
                        </el-table-column>
                        <el-table-column label="Информация по адресу">
                            <el-table-column
                                    prop="state"
                                    label="Штат"
                                    width="120">
                            </el-table-column>
                            <el-table-column
                                    prop="city"
                                    label="Город"
                                    width="120">
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="Адрес"
                                    width="300">
                            </el-table-column>
                            <el-table-column
                                    prop="zip"
                                    label="Zip-код"
                                    width="120">
                            </el-table-column>
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Выбор одной строки</h2>
        <p class="basic-text">Таблица поддерживает выбор одной строки. Вы можете активировать его, добавив атрибут <code>highlight-current-row</code>. Событие <code>current-change</code> будет срабатывать при изменении выбора строки, а его параметры - строки после и до этого изменения: <code>currentRow</code> и <code>oldCurrentRow</code>. Если вам нужно отобразить индекс строки, вы можете добавить новый столбец <code>el-table-column</code> с атрибутом <code>type</code> со значением <code>index</code>, и вы увидите индекс, начинающийся с 1.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        ref="singleTable"
                        :data="tableData"
                        highlight-current-row
                        @current-change="handleCurrentChange"
                        style="width: 100%">
                    <el-table-column
                            type="index"
                            width="50">
                    </el-table-column>
                    <el-table-column
                            property="date"
                            label="Дата"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            property="name"
                            label="Имя"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            property="address"
                            label="Адрес">
                    </el-table-column>
                </el-table>
                <div style="margin-top: 20px">
                    <el-button @click="setCurrent(tableData[1])">Выбрать вторую строчку</el-button>
                    <el-button @click="setCurrent()">Очистить выбор</el-button>
                </div>
            </div>
        </div>

        <h2 class="title">Множественный выбор</h2>
        <p class="basic-text">Вы также можете выбрать несколько строк. Активировать множественный выбор легко: просто добавьте <code>el-table-column</code> с <code>type</code> со значением <code>selection</code>. Помимо множественного выбора, в этом примере также используется <code>show-overflow-tooltip</code>: по умолчанию, если контент слишком длинный, он будет разбит на несколько строк. Если вы хотите сохранить его в одной строке, используйте атрибут <code>show-overflow-tooltip</code>, который принимает значение <code>Boolean</code>. Когда установлено <code>true</code>, дополнительный контент будет отображаться в подсказке при наведении курсора на ячейку.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        ref="multipleTable"
                        :data="tableData3"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            label="Дата"
                            width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                            property="name"
                            label="Имя"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            property="address"
                            label="Адрес"
                            show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                <div style="margin-top: 20px">
                    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">Выбрать 2-ю и 3-ю строчки</el-button>
                    <el-button @click="toggleSelection()">Очистить выбор</el-button>
                </div>
            </div>
        </div>

        <h2 class="title">Сортировка</h2>
        <p class="basic-text">Сортируйте данные, чтобы быстро найти или сравнить данные. Установите атрибут <code>sortable</code> в определенном столбце для сортировки данных на основе этого столбца. Он принимает значение <code>Boolean</code> со значением по умолчанию <code>false</code>. Установите атрибут таблицы <code>default-sort</code> для определения столбца сортировки по умолчанию и порядка. Чтобы применить свои собственные правила сортировки, используйте <code>sort-method</code> или <code>sort-by</code>. Если вам нужна удаленная сортировка из бэкэнд, установите <code>sortable</code> на <code>custom,</code> и послушайте <code>sort-change</code> события в таблице. В обработчике событий у вас есть доступ к столбцу сортировки и порядку сортировки, чтобы вы могли получать данные отсортированной таблицы из API. В этом примере мы используем другой атрибут <code>formatter</code> для форматирования значений определенных столбцов. Он принимает функцию, которая имеет два параметра: <code>row</code> и <code>column</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData"
                        :default-sort = "{prop: 'date', order: 'descending'}"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="Дата"
                            sortable
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Имя"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="Адрес"
                            :formatter="formatter">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Фильтр</h2>
        <p class="basic-text">Отфильтруйте таблицу, чтобы найти нужные данные. Установите атрибуты <code>filters</code> и <code>filter-method</code> в <code>el-table-column</code> чтобы этот столбец был фильтруемым. <code>filters</code> является массивом и <code>filter-method</code> является функцией, определяющей, какие строки отображаются. Он имеет три параметра: <code>value</code>, <code>row</code> и <code>column</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData70"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="Дата"
                            sortable
                            width="180"
                            :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                            :filter-method="filterHandler"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Имя"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="Адрес"
                            :formatter="formatter">
                    </el-table-column>
                    <el-table-column
                            prop="tag"
                            label="Тег"
                            width="100"
                            :filters="[{ text: 'Дом', value: 'Home' }, { text: 'Офис', value: 'Office' }]"
                            :filter-method="filterTag"
                            filter-placement="bottom-end">
                        <template slot-scope="scope">
                            <el-tag
                                    :type="scope.row.tag === 'Home' ? 'primary' : 'success'"
                                    close-transition>{{scope.row.tag}}</el-tag>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Пользовательский шаблон столбца</h2>
        <p class="basic-text">Настройте столбец таблицы, чтобы он мог быть интегрирован с другими компонентами.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            label="Дата"
                            width="180">
                        <template slot-scope="scope">
                            <i class="el-icon-time"></i>
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="Имя"
                            width="180">
                        <template slot-scope="scope">
                            <el-popover trigger="hover" placement="top">
                                <p>Имя: {{ scope.row.name }}</p>
                                <p>Адрес: {{ scope.row.address }}</p>
                                <div slot="reference" class="name-wrapper">
                                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                                </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="Действия">
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)">Изменить</el-button>
                            <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">Удалить</el-button>
                        </template>
                    </el-table-column>
                </el-table>

            </div>
        </div>

        <h2 class="title">Расширяемая строка</h2>
        <p class="basic-text">Когда содержимое строки слишком велико, и вы не хотите отображать горизонтальную полосу прокрутки, вы можете использовать функцию расширяемой строки. Активируйте расширяемую строку, добавив type = "expand" и слот с областью действия. Шаблон для <code>el-table-column</code> будет отображаться как содержимое расширенной строки, и вы можете получить доступ к тем же атрибутам, что и при использовании <code>Scoped slot</code> в пользовательских шаблонах столбцов.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData3"
                        style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <p>Штат: {{ props.row.state }}</p>
                            <p>Город: {{ props.row.city }}</p>
                            <p>Адрес: {{ props.row.address }}</p>
                            <p>Zip-код: {{ props.row.zip }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="Дата"
                            prop="date">
                    </el-table-column>
                    <el-table-column
                            label="Имя"
                            prop="name">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Сводная строка</h2>
        <p class="basic-text">Для таблицы чисел вы можете добавить дополнительную строку в нижнем колонтитуле таблицы, отображая сумму каждого столбца. Вы можете добавить итоговую строку, установив <code>true</code> для <code>show-summary</code>. По умолчанию для итоговой строки первый столбец не суммирует ничего, но всегда отображает «Сумма» (вы можете настроить отображаемый текст с помощью <code>sum-text</code>), в то время как другие столбцы суммируют каждое число в этом столбце вверх и отображают их. Конечно, вы можете определить свое собственное поведение. Для этого передайте метод <code>summary-method</code>, который возвращает массив, и каждый элемент возвращаемого массива будет отображаться в столбцах итоговой строки. Вторая таблица этого примера - подробная демонстрация.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData6"
                        border
                        show-summary
                        style="width: 100%">
                    <el-table-column
                            prop="id"
                            label="ID"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Имя">
                    </el-table-column>
                    <el-table-column
                            prop="amount1"
                            sortable
                            label="Сумма 1">
                    </el-table-column>
                    <el-table-column
                            prop="amount2"
                            sortable
                            label="Сумма 2">
                    </el-table-column>
                    <el-table-column
                            prop="amount3"
                            sortable
                            label="Сумма 3">
                    </el-table-column>
                </el-table>

                <el-table
                        :data="tableData6"
                        border
                        height="200"
                        :summary-method="getSummaries"
                        show-summary
                        style="width: 100%; margin-top: 20px">
                    <el-table-column
                            prop="id"
                            label="ID"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Имя">
                    </el-table-column>
                    <el-table-column
                            prop="amount1"
                            label="Стоимость 1 ($)">
                    </el-table-column>
                    <el-table-column
                            prop="amount2"
                            label="Стоимость 2 ($)">
                    </el-table-column>
                    <el-table-column
                            prop="amount3"
                            label="Стоимость 3 ($)">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <h2 class="title">Rowspan и colspan</h2>
        <p class="basic-text">Настройка rowspan и colspan позволяет объединить ячейки. Используйте атрибут <code>span-method</code> для настройки rowspan и colspan. Он принимает метод и передает объект этому методу, включая текущую строку <code>row</code>, текущий столбец <code>column</code>, текущий индекс строки <code>rowIndex</code> и текущий индекс столбца <code>columnIndex</code>. Метод должен возвращать массив из двух чисел, первое <code>rowspan</code> и второе <code>colspan</code>. Он также может возвращать объект с реквизитами <code>rowspan</code> и <code>colspan</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div>
                    <el-table
                            :data="tableData6"
                            :span-method="arraySpanMethod"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="id"
                                label="ID"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="Имя">
                        </el-table-column>
                        <el-table-column
                                prop="amount1"
                                sortable
                                label="Сумма 1">
                        </el-table-column>
                        <el-table-column
                                prop="amount2"
                                sortable
                                label="Сумма 2">
                        </el-table-column>
                        <el-table-column
                                prop="amount3"
                                sortable
                                label="Сумма 3">
                        </el-table-column>
                    </el-table>

                    <el-table
                            :data="tableData6"
                            :span-method="objectSpanMethod"
                            border
                            style="width: 100%; margin-top: 20px">
                        <el-table-column
                                prop="id"
                                label="ID"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="Имя">
                        </el-table-column>
                        <el-table-column
                                prop="amount1"
                                label="Сумма 1">
                        </el-table-column>
                        <el-table-column
                                prop="amount2"
                                label="Сумма 2">
                        </el-table-column>
                        <el-table-column
                                prop="amount3"
                                label="Сумма 3">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>

        <h2 class="title">Пользовательский индекс</h2>
        <p class="basic-text">Вы можете настроить индекс строки в <code>type=index</code> столбцах. Чтобы настроить индексы строк, используйте  атрибут<code>index</code> в <code>el-table-column</code> с  <code>type=index</code>. Если ему присвоено число, все индексы будут иметь смещение этого числа. Он также принимает метод с каждым индексом (начиная с 0) в качестве параметра, а возвращаемое значение будет отображаться как индекс.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-table
                        :data="tableData70"
                        style="width: 100%">
                    <el-table-column
                            type="index"
                            :index="indexMethod">
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="Дата"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Имя"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="Адрес">
                    </el-table-column>
                </el-table>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Table',
        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }],
                tableData2: [{
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }],
                tableData3: [{
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-08',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-06',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-07',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }],
                tableData50: [{
                    date: '2016-05-03',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Home'
                }, {
                    date: '2016-05-02',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office'
                }, {
                    date: '2016-05-04',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Home'
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office'
                }],
                tableData60: [{
                    date: '2016-05-03',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }, {
                    date: '2016-05-02',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }, {
                    date: '2016-05-04',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }, {
                    date: '2016-05-08',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }, {
                    date: '2016-05-06',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }, {
                    date: '2016-05-07',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }],
                tableData4: [{
                    date: '2016-05-03',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }, {
                    date: '2016-05-02',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }, {
                    date: '2016-05-04',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }, {
                    date: '2016-05-08',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }, {
                    date: '2016-05-06',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }, {
                    date: '2016-05-07',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036'
                }],
                tableData70: [{
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                    tag: 'Home'
                }, {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                    tag: 'Office'
                }, {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                    tag: 'Home'
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                    tag: 'Office'
                }],
                tableData6: [{
                    id: '12987122',
                    name: 'Tom',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                }, {
                    id: '12987123',
                    name: 'Tom',
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12
                }, {
                    id: '12987124',
                    name: 'Tom',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9
                }, {
                    id: '12987125',
                    name: 'Tom',
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17
                }, {
                    id: '12987126',
                    name: 'Tom',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }],
            }
        },
        methods: {
            indexMethod(index) {
                return index * 2;
            },
            arraySpanMethod({ row, column, rowIndex, columnIndex }) {
                if (rowIndex % 2 === 0) {
                    if (columnIndex === 0) {
                        return [1, 2];
                    } else if (columnIndex === 1) {
                        return [0, 0];
                    }
                }
            },
            objectSpanMethod({ row, column, rowIndex, columnIndex }) {
                if (columnIndex === 0) {
                    if (rowIndex % 2 === 0) {
                        return {
                            rowspan: 2,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            },
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = 'Total Cost';
                        return;
                    }
                    const values = data.map(item => Number(item[column.property]));
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = '$ ' + values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                    } else {
                        sums[index] = 'N/A';
                    }
                });

                return sums;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            setCurrent(row) {
                this.$refs.singleTable.setCurrentRow(row);
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            handleClick() {
                console.log('Клик');
            }
        },
    }
</script>

<style scoped>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>