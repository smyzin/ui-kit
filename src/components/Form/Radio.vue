<template>
    <div style="text-align: left;">
        <h2 class="title">Использование по умолчанию</h2>
        <p class="basic-text">Радио кнопки по умолчанию.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-radio v-model="radio" label="1">Опция A</el-radio>
                <el-radio v-model="radio" label="2">Опция B</el-radio>
            </div>
        </div>

        <h2 class="title">Неактивное состояние</h2>
        <p class="basic-text">Атрибут <code>disabled</code> определяет активна ли радио кнопка.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-radio disabled v-model="radio1" label="disabled">Опция A</el-radio>
                <el-radio disabled v-model="radio1" label="selected and disabled">Опция B</el-radio>
            </div>
        </div>

        <h2 class="title">Группа радио кнопок</h2>
        <p class="basic-text">Подходит для выбора из ряда взаимоисключающих вариантов.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-radio-group v-model="radio2">
                    <el-radio :label="3">Опция A</el-radio>
                    <el-radio :label="6">Опция B</el-radio>
                    <el-radio :label="9">Опция C</el-radio>
                </el-radio-group>
            </div>
        </div>

        <h2 class="title">В виде кнопки</h2>
        <p class="basic-text">Радио кнопка со стилем обычной кнопки.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div>
                    <el-radio-group v-model="radio3">
                        <el-radio-button label="New York"></el-radio-button>
                        <el-radio-button label="Washington"></el-radio-button>
                        <el-radio-button label="Los Angeles"></el-radio-button>
                        <el-radio-button label="Chicago"></el-radio-button>
                    </el-radio-group>
                </div>
                <div style="margin-top: 20px">
                    <el-radio-group v-model="radio4" size="medium">
                        <el-radio-button label="New York" ></el-radio-button>
                        <el-radio-button label="Washington"></el-radio-button>
                        <el-radio-button label="Los Angeles"></el-radio-button>
                        <el-radio-button label="Chicago"></el-radio-button>
                    </el-radio-group>
                </div>
                <div style="margin-top: 20px">
                    <el-radio-group v-model="radio5" size="small">
                        <el-radio-button label="New York"></el-radio-button>
                        <el-radio-button label="Washington" disabled ></el-radio-button>
                        <el-radio-button label="Los Angeles"></el-radio-button>
                        <el-radio-button label="Chicago"></el-radio-button>
                    </el-radio-group>
                </div>
                <div style="margin-top: 20px">
                    <el-radio-group v-model="radio6" disabled size="mini">
                        <el-radio-button label="New York"></el-radio-button>
                        <el-radio-button label="Washington"></el-radio-button>
                        <el-radio-button label="Los Angeles"></el-radio-button>
                        <el-radio-button label="Chicago"></el-radio-button>
                    </el-radio-group>
                </div>
            </div>
        </div>

        <h2 class="title">С границей</h2>
        <p class="basic-text">Атрибут <code>border</code> добавляет границу радио кнопке.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div>
                    <el-radio v-model="radio7" label="1" border>Опция A</el-radio>
                    <el-radio v-model="radio7" label="2" border>Опция B</el-radio>
                </div>
                <div style="margin-top: 20px">
                    <el-radio v-model="radio8" label="1" border size="medium">Опция A</el-radio>
                    <el-radio v-model="radio8" label="2" border size="medium">Опция B</el-radio>
                </div>
                <div style="margin-top: 20px">
                    <el-radio-group v-model="radio9" size="small">
                        <el-radio label="1" border>Опция A</el-radio>
                        <el-radio label="2" border disabled>Опция B</el-radio>
                    </el-radio-group>
                </div>
                <div style="margin-top: 20px">
                    <el-radio-group v-model="radio10" size="mini" disabled>
                        <el-radio label="1" border>Опция A</el-radio>
                        <el-radio label="2" border>Опция B</el-radio>
                    </el-radio-group>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Radio',
        data () {
            return {
                radio: '1',
                radio1: 'selected and disabled',
                radio2: 3,
                radio3: 'New York',
                radio4: 'New York',
                radio5: 'New York',
                radio6: 'New York',
                radio7: '1',
                radio8: '1',
                radio9: '1',
                radio10: '1',


            };
        }
    }
</script>

<style scoped>

</style>