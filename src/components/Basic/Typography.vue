<template>
    <div style="text-align: left;">
        <h2 class="title">Основные стили по тегам</h2>
        <el-col :span="12">
            <el-row class="element--row_t">
                <h1 class="h1__text">H1 - Card title</h1>
                <div class="px">
                    Roboto / 16px / 24px<br>
                    font-weight: 500<br>
                    color: #263238
                </div>
            </el-row>
            <el-row class="element--row_t">
                <h2 class="h2__text">H2 - Subtitle</h2>
                <div class="px">
                    Roboto / 14px / 21px<br>
                    font-weight: 500<br>
                    color: #263238
                </div>
            </el-row>
            <el-row class="element--row_t">
                <h3 class="h3__text">H3 - Small title</h3>
                <div class="px">
                    Roboto / 12px / 18px <br>
                    font-weight: 500<br>
                    color: #263238
                </div>
            </el-row>
        </el-col>
        <el-col :span="12">
            <el-row class="element--row_t">
                <p class="p__text">Paragraph - All users on MySpace will know that there are millions of people out there. Every day besides so many people joining this community, there are many others who will be looking out for friends. This will mean that they are naturally looking out for good people who are interesting enough. For this, the profile has to be very interesting. To make the profile unique, you can use good MySpace layouts. This will make a world of a difference to the profile.</p>
                <div class="px">
                    Roboto / 12px / 18px <br>
                    font-weight: 400 <br>
                    color: #515254
                </div>
            </el-row>
            <el-row class="element--row_t">
                <a href="#!" class="a__text">Link to somewhere</a>
                <div class="px">
                    Roboto / 12px / 18px <br>
                    font-weight: 400<br>
                    color: #ffa588
                </div>
            </el-row>
        </el-col>
        <h2 class="title">Дополнительные классы</h2>
        <el-col :span="12">
            <el-row class="element--row_t">
                <div class="page__title">
                    web Page title
                </div>
                <div class="px">
                    Class - <b>page__title</b>
                </div>
            </el-row>
        </el-col>
        <el-col :span="12">
            <el-row class="element--row_t">
                <span class="span__text">Span - Going Wireless With Your Headphones</span>
                <div class="px">
                    Class - <b>span__text</b>
                </div>
            </el-row>
            <el-row class="element--row_t">
                <div class="placeholder__text">Placeholder text</div>
                <div class="px">
                    Class - <b>placeholder__text</b>
                </div>
            </el-row>
        </el-col>
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
    .element--row_t{
        margin: 7px 0;
    }
    .px {
        width: 142px;
        font-size: 11px;
        font-weight: normal;
        font-style: italic;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #c1c4cb;
    }
</style>