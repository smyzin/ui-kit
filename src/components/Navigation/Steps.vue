<template>
    <div style="text-align: left;">
        <h2 class="title">Базовое использование</h2>
        <p class="basic-text">Простая панель шагов (прогресса). Установите атрибут <code>active</code> с типом <code>Number</code>, указывающий индекс шагов, начиная с 0. Вы можете установить атрибут <code>space</code>, когда необходимо изменить ширину шага, который принимает тип <code>Boolean</code>. Единицей измерения атрибута <code>space</code> является <code>px</code>. Если он не установлен, то он реагирует. Установив атрибут <code>finish-status</code>, вы можете изменить состояние выполненных шагов.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-steps :active="active" finish-status="success">
                    <el-step title="Step 1"></el-step>
                    <el-step title="Step 2"></el-step>
                    <el-step title="Step 3"></el-step>
                </el-steps>

                <el-button style="margin-top: 12px;" @click="next">Next step</el-button>
            </div>
        </div>

        <h2 class="title">Панель шагов со статусом</h2>
        <p class="basic-text">Такая панель показывает статус каждого шага. Используйте атрибут <code>title</code>, для того, чтобы задать имя шага или переопределить атрибут, используя имя <code>slot</code>. В конце страницы вы найдете все возможные имена слотов.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-steps :space="200" :active="1" finish-status="success">
                    <el-step title="Done"></el-step>
                    <el-step title="Processing"></el-step>
                    <el-step title="Step 3"></el-step>
                </el-steps>
            </div>
        </div>

        <h2 class="title">Центрирование</h2>
        <p class="basic-text">Название и описание шагов могут быть отцентрированы.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-steps :active="2" align-center>
                    <el-step title="Step 1" description="Some description"></el-step>
                    <el-step title="Step 2" description="Some description"></el-step>
                    <el-step title="Step 3" description="Some description"></el-step>
                    <el-step title="Step 4" description="Some description"></el-step>
                </el-steps>
            </div>
        </div>

        <h2 class="title">Панель шагов с описанием</h2>
        <p class="basic-text">Вы можете добавить описание для каждого шага.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-steps :active="1">
                    <el-step title="Step 1" description="Some description"></el-step>
                    <el-step title="Step 2" description="Some description"></el-step>
                    <el-step title="Step 3" description="Some description"></el-step>
                </el-steps>
            </div>
        </div>

        <h2 class="title">Панель шагов со значками</h2>
        <p class="basic-text">Вы можете использовать иконки для каждого шага на панели шагов. Значок задается свойством <code>icon</code>. Также вы можете настроить значок через имя <code>slot</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-steps :active="1">
                    <el-step title="Step 1" icon="el-icon-edit"></el-step>
                    <el-step title="Step 2" icon="el-icon-upload"></el-step>
                    <el-step title="Step 3" icon="el-icon-picture"></el-step>
                </el-steps>
            </div>
        </div>

        <h2 class="title">Вертикальная панель шагов</h2>
        <p class="basic-text">Для того, чтобы сделать вертикальную панель шагов установите значение <code>vertical</code> для атрибута <code>direction</code> в <code>el-steps</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div style="height: 300px;">
                    <el-steps direction="vertical" :active="1">
                        <el-step title="Step 1"></el-step>
                        <el-step title="Step 2"></el-step>
                        <el-step title="Step 3"></el-step>
                    </el-steps>
                </div>
            </div>
        </div>

        <h2 class="title">Простая панель шагов</h2>
        <p class="basic-text">На этом примере вы видите, панель шагов, на которой : <code>align-center</code>, <code>description</code>, <code>direction</code> и <code>space</code> были проигнорированы.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-steps :space="200" :active="1" simple>
                    <el-step title="Step 1" icon="el-icon-edit"></el-step>
                    <el-step title="Step 2" icon="el-icon-upload"></el-step>
                    <el-step title="Step 3" icon="el-icon-picture"></el-step>
                </el-steps>

                <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="Step 1" ></el-step>
                    <el-step title="Step 2" ></el-step>
                    <el-step title="Step 3" ></el-step>
                </el-steps>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Steps',
        data() {
            return {
                active: 0
            };
        },

        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            }
        }
    }
</script>

<style scoped>

</style>