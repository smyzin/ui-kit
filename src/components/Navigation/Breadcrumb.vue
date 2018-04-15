<template>
    <div style="text-align: left;">
        <h2 class="title">Базовое использование</h2>
        <p class="basic-text"></p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
                    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>

        <h2 class="title">Разделени иконками</h2>
        <p class="basic-text"></p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Breadcrumb',

    }
</script>

<style scoped>

</style>