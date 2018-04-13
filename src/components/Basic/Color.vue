<template>
    <div style="text-align: left;">
        <h2 class="subtitle">Основной цвет</h2>
        <el-row :gutter="10">
            <el-col :xs="12" :span="6" class="demo-col">
                <div class="demo-color-box demo-color-box__color_primary">
                    Primary
                    <div class="demo-color-box__value">#ff5722</div>
                </div>
            </el-col>
        </el-row>

        <h2 class="subtitle">Дополнительные цвета</h2>
        <el-row :gutter="10">
            <el-col :xs="12" :span="6" class="demo-col">
                <div class="demo-color-box demo-color-box__color_success">
                    Success
                    <div class="demo-color-box__value">#67c23a</div>
                </div>
            </el-col>
            <el-col :xs="12" :span="6" class="demo-col">
                <div class="demo-color-box demo-color-box__color_warning">
                    Warning
                    <div class="demo-color-box__value">#e6a23c</div>
                </div>
            </el-col>
            <el-col :xs="12" :span="6" class="demo-col">
                <div class="demo-color-box demo-color-box__color_danger">
                    Danger
                    <div class="demo-color-box__value">#f56c6c</div>
                </div>
            </el-col>
            <el-col :xs="12" :span="6" class="demo-col">
                <div class="demo-color-box demo-color-box__color_info">
                    Info
                    <div class="demo-color-box__value">#909399</div>
                </div>
            </el-col>
        </el-row>

        <h2 class="subtitle">Нейтральные цвета</h2>
        <el-row :gutter="10">
            <el-col :xs="12" :span="6" class="demo-col">
                <div class="demo-color-box-group">
                    <div class="demo-color-box demo-color-box__color-text_primary">
                        Основной текст
                        <div class="demo-color-box__value">#303133</div>
                    </div>
                    <div class="demo-color-box demo-color-box__color-text_regular">
                        Обычный текст
                        <div class="demo-color-box__value">#606266</div>
                    </div>
                    <div class="demo-color-box demo-color-box__color-text_secondary">
                        Дополнительный текст
                        <div class="demo-color-box__value">#888888</div>
                    </div>
                    <div class="demo-color-box demo-color-box__color-text_placeholder">
                        Placeholder
                        <div class="demo-color-box__value">#cccccc</div>
                    </div>
                </div>
            </el-col>
            <el-col :xs="12" :span="6" class="demo-col">
                <div class="demo-color-box-group">
                    <div class="demo-color-box demo-color-box__color-border demo-color-box__color-border_base">
                        Основная граница
                        <div class="demo-color-box__value">#cccccc</div>
                    </div>
                    <div class="demo-color-box demo-color-box__color-border demo-color-box__color-border_lighter">
                        Светлая граница
                        <div class="demo-color-box__value">#ebeef5</div>
                    </div>
                    <div class="demo-color-box demo-color-box__color-border demo-color-box__color-border_exLight">
                        Доролнительная граница
                        <div class="demo-color-box__value">#f2f6fc</div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Color',
    }
</script>

<style>
    .demo-color-box{
        text-align: left;
        border-radius: 4px;
        padding: 20px;
        /*margin: 5px 0;*/
        height: 74px;
        box-sizing: border-box;
        color: #fff;
        font-size: 14px;
    }
    .demo-color-box__value {
        font-size: 12px;
        opacity: .69;
        line-height: 24px;
    }
    .demo-color-box__color-border{color: #000;}
    .demo-color-box-group .demo-color-box{ border-radius: 0; }
    .demo-color-box-group .demo-color-box:first-child{ border-radius: 4px 4px 0 0; }
    .demo-color-box-group .demo-color-box:last-child{ border-radius: 0 0 4px 4px; }

    .demo-color-box__color_primary{ background-color: #ff5722; }
    .demo-color-box__color_success{ background-color: #67c23a; }
    .demo-color-box__color_warning{ background-color: #e6a23c; }
    .demo-color-box__color_danger{ background-color: #f56c6c; }
    .demo-color-box__color_info{ background-color: #909399; }
    .demo-color-box__color-text_primary{ background-color: #303133; }
    .demo-color-box__color-text_regular{ background-color: #606266; }
    .demo-color-box__color-text_secondary{ background-color: #888888; }
    .demo-color-box__color-text_placeholder{ background-color: #cccccc; }
    .demo-color-box__color-border_base{ background-color: #cccccc; }
    .demo-color-box__color-border_light{ background-color: #cccccc; }
    .demo-color-box__color-border_lighter{ background-color: #ebeef5; }
    .demo-color-box__color-border_exLight{ background-color: #f2f6fc; }
</style>