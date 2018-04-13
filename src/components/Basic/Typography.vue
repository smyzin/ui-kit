<template>
    <div style="text-align: left;">
        <h2 class="subtitle">Заголовки</h2>

        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="Name">
            </el-table-column>
            <el-table-column
                    prop="example"
                    label="Example">
            </el-table-column>
            <el-table-column
                    prop="size"
                    label="Size">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'Typography',
        data(){
            return{
                tableData: [{
                    name: 'Main Title',
                    example: 'Build with Element',
                    size: '20px Extra large'
                }, {
                    name: 'Title',
                    example: 'Build with Element',
                    size: '18px large'
                }, {
                    name: 'Small Title',
                    example: 'Build with Element',
                    size: '16px Medium'
                }, {
                    name: 'Body',
                    example: 'Build with Element',
                    size: '14px Small'
                }, {
                    name: 'Body (small)',
                    example: 'Build with Element',
                    size: '13px Extra Small'
                }, {
                    name: 'Supplementary text',
                    example: 'Build with Element',
                    size: '12px Extra Extra Small'
                }]
            }
        }
    }
</script>

<style scoped>

</style>