<template>
    <div style="text-align: left;">
        <h2 class="title">Линейный индикатор выполнения (внешний процент)</h2>
        <p class="basic-text">Используйте атрибут <code>percentage</code> для установки процента. Это необходимо и должно быть между ними <code>0-100</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-progress class="demo-el-progress--line" :percentage="0"></el-progress>
                <el-progress class="demo-el-progress--line" :percentage="70"></el-progress>
                <el-progress class="demo-el-progress--line" :percentage="80" color="#8e71c7"></el-progress>
                <el-progress class="demo-el-progress--line" :percentage="100" status="success"></el-progress>
                <el-progress class="demo-el-progress--line" :percentage="50" status="exception"></el-progress>
            </div>
        </div>

        <h2 class="title">Линейный индикатор выполнения (внутренний процент)</h2>
        <p class="basic-text">В этом случае процент не занимает дополнительного места. Атрибут <code>stroke-width</code> определяет индикатор выполнения <code>width</code> и использует атрибут <code>text-inside</code> для указания описания внутри индикатора выполнения.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-progress class="demo-el-progress--line" :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
                <el-progress class="demo-el-progress--line" :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
                <el-progress class="demo-el-progress--line" :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
                <el-progress class="demo-el-progress--line" :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
                <el-progress class="demo-el-progress--line" :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
            </div>
        </div>

        <h2 class="title">Круговой прогресс бар</h2>
        <p class="basic-text">Вы можете указать атрибут <code>type</code> для <code>circle</code>, чтобы использовать круговой индикатор выполнения и использовать атрибут <code>width</code> для изменения размера круга.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-progress type="circle" :percentage="0"></el-progress>
                <el-progress type="circle" :percentage="25"></el-progress>
                <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
                <el-progress type="circle" :percentage="100" status="success"></el-progress>
                <el-progress type="circle" :percentage="50" status="exception"></el-progress>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Progress',
    }
</script>

<style scoped>
    .demo-el-progress--line{
        margin-bottom: 15px;
        width: 350px;
    }
</style>