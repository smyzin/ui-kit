<template>
    <div style="text-align: left;">
        <h2 class="title">Top bar - верхняя панель (верхнее меню)</h2>
        <p class="basic-text">Верхнее меню может использоваться в различных сценариях.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">Processing Center</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">Workspace</template>
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                        <el-menu-item index="2-3">item three</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">item four</template>
                            <el-menu-item index="2-4-1">item one</el-menu-item>
                            <el-menu-item index="2-4-2">item two</el-menu-item>
                            <el-menu-item index="2-4-3">item three</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3" disabled>Info</el-menu-item>
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
                </el-menu>
                <div class="line"></div>
                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-menu-item index="1">Processing Center</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">Workspace</template>
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                        <el-menu-item index="2-3">item three</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">item four</template>
                            <el-menu-item index="2-4-1">item one</el-menu-item>
                            <el-menu-item index="2-4-2">item two</el-menu-item>
                            <el-menu-item index="2-4-3">item three</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3" disabled>Info</el-menu-item>
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
                </el-menu>
            </div>
        </div>

        <h2 class="title">Side bar - боковое меню</h2>
        <p class="basic-text">Вертикальное меню с подменю.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-row class="tac">
                    <el-col :span="12">
                        <h5>Default colors</h5>
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>Navigator One</span>
                                </template>
                                <el-menu-item-group title="Group One">
                                    <el-menu-item index="1-1">item one</el-menu-item>
                                    <el-menu-item index="1-2">item one</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group Two">
                                    <el-menu-item index="1-3">item three</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                    <template slot="title">item four</template>
                                    <el-menu-item index="1-4-1">item one</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span>Navigator Two</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <i class="el-icon-document"></i>
                                <span>Navigator Three</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span>Navigator Four</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                    <el-col :span="12">
                        <h5>Custom colors</h5>
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose"
                                background-color="#545c64"
                                text-color="#fff"
                                active-text-color="#ffd04b">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>Navigator One</span>
                                </template>
                                <el-menu-item-group title="Group One">
                                    <el-menu-item index="1-1">item one</el-menu-item>
                                    <el-menu-item index="1-2">item one</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group Two">
                                    <el-menu-item index="1-3">item three</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                    <template slot="title">item four</template>
                                    <el-menu-item index="1-4-1">item one</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span>Navigator Two</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <i class="el-icon-document"></i>
                                <span>Navigator Three</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span>Navigator Four</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
        </div>

        <h2 class="title">Collapse</h2>
        <p class="basic-text">Вы можете свернуть вертикальное меню.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">expand</el-radio-button>
                    <el-radio-button :label="true">collapse</el-radio-button>
                </el-radio-group>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">Navigator One</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">Group One</span>
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <span slot="title">item four</span>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Navigator Two</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">Navigator Three</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Navigator Four</span>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'NavMenu',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                isCollapse: true
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>