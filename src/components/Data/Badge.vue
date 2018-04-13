<template>
    <div style="text-align: left;">
        <h2 class="title">Основное использование</h2>
        <p class="basic-text">Отображает количество новых сообщений. Сумма определяется с помощью <code>value</code> которое принимает <code>Number</code> или <code>String</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-badge :value="12" class="item">
                    <el-button size="small">Комментарии</el-button>
                </el-badge>
                <el-badge :value="3" class="item">
                    <el-button size="small">Ответы</el-button>
                </el-badge>

                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        Нажми на меня<i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item class="clearfix">
                            Комментарии
                            <el-badge class="mark" :value="12" />
                        </el-dropdown-item>
                        <el-dropdown-item class="clearfix">
                            Ответы
                            <el-badge class="mark" :value="3" />
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>

        <h2 class="title">Максимальное значение</h2>
        <p class="basic-text">Вы можете настроить максимальное значение с помощью свойства <code>max</code> которые принимает <code>Number</code>. Обратите внимание, что оно работает только тогда, когда <code>value</code> также является <code>Number</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-badge :value="200" :max="99" class="item">
                    <el-button size="small">Комментарии</el-button>
                </el-badge>
                <el-badge :value="100" :max="10" class="item">
                    <el-button size="small">Ответы</el-button>
                </el-badge>
            </div>
        </div>

        <h2 class="title">Пользовательская настройка</h2>
        <p class="basic-text">Отображает текстовое содержимое, отличное от цифр. Когда <code>value</code> принимает <code>String</code>, может отображаться настроенный текст.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-badge value="new" class="item">
                    <el-button size="small">Комментарии</el-button>
                </el-badge>
                <el-badge value="hot" class="item">
                    <el-button size="small">Ответы</el-button>
                </el-badge>
            </div>
        </div>

        <h2 class="title">Маленькая красная точка</h2>
        <p class="basic-text">Используйте красную точку, чтобы отметить контент, который нужно заметить. Используйте атрибут <code>is-dot</code>, который принимает значения <code>Boolean</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-badge is-dot class="item">Выборка</el-badge>
                <el-badge is-dot class="item">
                    <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
                </el-badge>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Badge',

    }
</script>

<style scoped>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>