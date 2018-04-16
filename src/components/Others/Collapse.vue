<template>
    <div style="text-align: left;">
        <h2 class="title">Основное использование</h2>
        <p class="basic-text">Вы можете развернуть несколько панелей.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="Consistency" name="1">
                        <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
                        <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
                    </el-collapse-item>
                    <el-collapse-item title="Feedback" name="2">
                        <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
                        <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
                    </el-collapse-item>
                    <el-collapse-item title="Efficiency" name="3">
                        <div>Simplify the process: keep operating process simple and intuitive;</div>
                        <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
                        <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
                    </el-collapse-item>
                    <el-collapse-item title="Controllability" name="4">
                        <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
                        <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>

        <h2 class="title">Аккордеон</h2>
        <p class="basic-text">В режиме аккордеона можно развернуть только одну панель. Активируйте режим аккордеона, используя атрибут <code>accordion</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="Consistency" name="1">
                        <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
                        <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
                    </el-collapse-item>
                    <el-collapse-item title="Feedback" name="2">
                        <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
                        <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
                    </el-collapse-item>
                    <el-collapse-item title="Efficiency" name="3">
                        <div>Simplify the process: keep operating process simple and intuitive;</div>
                        <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
                        <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
                    </el-collapse-item>
                    <el-collapse-item title="Controllability" name="4">
                        <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
                        <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>

        <h2 class="title">Пользовательское название</h2>
        <p class="basic-text">Помимо использования атрибута <code>title</code>, вы можете настроить заголовок панели с именованными слотами, что позволяет добавлять пользовательский контент, например значки.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-collapse accordion>
                    <el-collapse-item name="1">
                        <template slot="title">
                            Consistency <i class="header-icon el-icon-info"></i>
                        </template>
                        <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
                        <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
                    </el-collapse-item>
                    <el-collapse-item title="Feedback" name="2">
                        <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
                        <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
                    </el-collapse-item>
                    <el-collapse-item title="Efficiency" name="3">
                        <div>Simplify the process: keep operating process simple and intuitive;</div>
                        <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
                        <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
                    </el-collapse-item>
                    <el-collapse-item title="Controllability" name="4">
                        <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
                        <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Collapse',
        data() {
            return {
                activeNames: ['1'],
                activeName: '1'
            };
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style scoped>
    .block{
        display: inline-block;
        width: 49%;
    }
    .demo-input-suffix{
        padding: 5px;
    }
    .demo-input-label {
        display: inline-block;
        width: 130px;
    }
    .demo-title{
        margin-bottom: 10px;
        font-size: 14px;
        color: #5e6d82;
    }
</style>