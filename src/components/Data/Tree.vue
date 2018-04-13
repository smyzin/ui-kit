<template>
    <div style="text-align: left;">
        <h2 class="title">Основное использование</h2>
        <p class="basic-text">Основная древовидная структура.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </div>
        </div>

        <h2 class="title">Возможность выбора</h2>
        <p class="basic-text">Используется для выбора элемента списка. В этом примере также показано, как загружать данные узла асинхронно.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tree
                        :props="props"
                        :load="loadNode"
                        lazy
                        show-checkbox
                        @check-change="handleCheckChange">
                </el-tree>
            </div>
        </div>

        <h2 class="title">Пользовательский листовой узел (lazy mode)</h2>
        <p class="basic-text">Данные элемента не извлекаются до щелчка, поэтому Дерево не может предсказать, является ли узел листовым. Поэтому к каждому элементу добавляется раскрывающаяся кнопка, он является листовым, при нажатии кнопка раскрывающегося списка исчезает. При этом вы также можете заранее сообщить Дереву, является ли элемент листовым узлом, избегая рендеринга выпадающей кнопки перед ним.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tree
                        :props="props1"
                        :load="loadNode1"
                        lazy
                        show-checkbox>
                </el-tree>
            </div>
        </div>

        <h2 class="title">Отключенный чекбокс</h2>
        <p class="basic-text">Чекбокс узла можно установить как отключенный. В этом примере свойство disabled не объявлено в defaultProps, а некоторые узлы установлены как 'disabled: true'. Соответствующие чекбоксы отключены и не могут быть нажаты.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tree
                        :data="data3"
                        :props="defaultProps"
                        show-checkbox
                        @check-change="handleCheckChange">
                </el-tree>
            </div>
        </div>

        <h2 class="title">Значение по умолчанию «раскрыто» и «выбрано»</h2>
        <p class="basic-text">Узлы деревьев могут быть изначально раскрыты или выбраны. Используйте <code>default-expanded-keys</code> и <code>default-checked-keys</code> для установки первоначально раскрытых и первоначально выбранных узлов соответственно. Обратите внимание, что для их работы требуется <code>node-key</code>. Его значение - это имя ключа в объекте данных, а значение этого ключа должно быть уникальным для всего дерева.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tree
                        :data="data2"
                        show-checkbox
                        node-key="id"
                        :default-expanded-keys="[2, 3]"
                        :default-checked-keys="[5]"
                        :props="defaultProps">
                </el-tree>
            </div>
        </div>

        <h2 class="title">Проверка узлов дерева</h2>
        <p class="basic-text">В этом примере показано, как получить и установить проверенные узлы. Оба они могут выполняться двумя способами: узлом и ключом. Если вы используете ключевой подход, требуется <code>node-key</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tree
                        :data="data2"
                        show-checkbox
                        default-expand-all
                        node-key="id"
                        ref="tree"
                        highlight-current
                        :props="defaultProps">
                </el-tree>

                <div class="buttons">
                    <el-button @click="getCheckedNodes">get by node</el-button>
                    <el-button @click="getCheckedKeys">get by key</el-button>
                    <el-button @click="setCheckedNodes">set by node</el-button>
                    <el-button @click="setCheckedKeys">set by key</el-button>
                    <el-button @click="resetChecked">reset</el-button>
                </div>
            </div>
        </div>

        <h2 class="title">Пользовательский контент узла</h2>
        <p class="basic-text">Содержимое узлов дерева можно настроить, чтобы вы могли добавлять значки или кнопки. Существует два способа настройки шаблона для узлов дерева: <code>render-content</code> и слот с областью действия. Используйте <code>render-content</code> для назначения функции рендеринга, которая возвращает содержимое узлов дерева. См. Документацию Vue для подробного ознакомления с функциями рендеринга. Если вы предпочитаете использовать слот с областью действия, у вас будет доступ к <code>node</code> и <code>data</code>, стоящий для объекта TreeNode и данных узла текущего узла соответственно. Обратите внимание, что демонстрация <code>render-content</code> демонстрация не может работать в jsfiddle, потому что она не поддерживает синтаксис JSX. В реальном проекте <code>render-content</code> будет работать, если соответствующие зависимости будут правильно настроены.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <div class="custom-tree-container">
                    <div class="block">
                        <p>Using render-content</p>
                        <el-tree
                                :data="data4"
                                show-checkbox
                                node-key="id"
                                default-expand-all
                                :expand-on-click-node="false"
                                :render-content="renderContent">
                        </el-tree>
                    </div>
                    <div class="block">
                        <p>Using scoped slot</p>
                        <el-tree
                                :data="data5"
                                show-checkbox
                                node-key="id"
                                default-expand-all
                                :expand-on-click-node="false">
                          <span class="custom-tree-node" slot-scope="{ node, data }">
                            <span>{{ node.label }}</span>
                            <span>
                              <el-button
                                      type="text"
                                      size="mini"
                                      @click="() => append(data)">
                                Append
                              </el-button>
                              <el-button
                                      type="text"
                                      size="mini"
                                      @click="() => remove(node, data)">
                                Delete
                              </el-button>
                            </span>
                          </span>
                        </el-tree>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="title">Фильтрация узлов дерева</h2>
        <p class="basic-text">Узлы деревьев могут быть отфильтрованы. Вызовите метод <code>filter</code> экземпляра дерева для фильтрации узлов дерева. Его параметром является ключевое слово фильтрации. Обратите внимание, что для его работы требуется <code>filter-node-method</code>, и его значение является методом фильтрации.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-input
                        placeholder="Filter keyword"
                        v-model="filterText">
                </el-input>

                <el-tree
                        class="filter-tree"
                        :data="data2"
                        :props="defaultProps"
                        default-expand-all
                        :filter-node-method="filterNode"
                        ref="tree2">
                </el-tree>
            </div>
        </div>

        <h2 class="title">Аккордеон</h2>
        <p class="basic-text">Одновременно может быть расширен только один узел на одном уровне.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tree
                        :data="data"
                        :props="defaultProps"
                        accordion
                        @node-click="handleNodeClick">
                </el-tree>
            </div>
        </div>

        <h2 class="title">Перетаскиваемый</h2>
        <p class="basic-text">Вы можете перетаскивать узлы дерева, добавляя атрибут <code>draggable</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-tree
                        :data="data6"
                        node-key="id"
                        default-expand-all
                        @node-drag-start="handleDragStart"
                        @node-drag-enter="handleDragEnter"
                        @node-drag-leave="handleDragLeave"
                        @node-drag-over="handleDragOver"
                        @node-drag-end="handleDragEnd"
                        @node-drop="handleDrop"
                        draggable
                        :allow-drop="allowDrop"
                        :allow-drag="allowDrag">
                </el-tree>
            </div>
        </div>

    </div>
</template>

<script>
    let id = 1000;
    export default {
        name: 'Tree',
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },
        data() {
            const data = [{
                id: 1,
                label: 'Level one 1',
                children: [{
                    id: 4,
                    label: 'Level two 1-1',
                    children: [{
                        id: 9,
                        label: 'Level three 1-1-1'
                    }, {
                        id: 10,
                        label: 'Level three 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: 'Level one 2',
                children: [{
                    id: 5,
                    label: 'Level two 2-1'
                }, {
                    id: 6,
                    label: 'Level two 2-2'
                }]
            }, {
                id: 3,
                label: 'Level one 3',
                children: [{
                    id: 7,
                    label: 'Level two 3-1'
                }, {
                    id: 8,
                    label: 'Level two 3-2'
                }]
            }];
            return {
                filterText: '',
                data6: [{
                    label: 'Level one 1',
                    children: [{
                        label: 'Level two 1-1',
                        children: [{
                            label: 'Level three 1-1-1'
                        }]
                    }]
                }, {
                    label: 'Level one 2',
                    children: [{
                        label: 'Level two 2-1',
                        children: [{
                            label: 'Level three 2-1-1'
                        }]
                    }, {
                        label: 'Level two 2-2',
                        children: [{
                            label: 'Level three 2-2-1'
                        }]
                    }]
                }, {
                    label: 'Level one 3',
                    children: [{
                        label: 'Level two 3-1',
                        children: [{
                            label: 'Level three 3-1-1'
                        }]
                    }, {
                        label: 'Level two 3-2',
                        children: [{
                            label: 'Level three 3-2-1'
                        }]
                    }]
                }],
                data4: JSON.parse(JSON.stringify(data)),
                data5: JSON.parse(JSON.stringify(data)),
                data2: [{
                    id: 1,
                    label: 'Level one 1',
                    children: [{
                        id: 4,
                        label: 'Level two 1-1',
                        children: [{
                            id: 9,
                            label: 'Level three 1-1-1'
                        }, {
                            id: 10,
                            label: 'Level three 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: 'Level one 2',
                    children: [{
                        id: 5,
                        label: 'Level two 2-1'
                    }, {
                        id: 6,
                        label: 'Level two 2-2'
                    }]
                }, {
                    id: 3,
                    label: 'Level one 3',
                    children: [{
                        id: 7,
                        label: 'Level two 3-1'
                    }, {
                        id: 8,
                        label: 'Level two 3-2'
                    }]
                }],
                data3: [{
                    id: 1,
                    label: 'Level one 1',
                    children: [{
                        id: 3,
                        label: 'Level two 2-1',
                        children: [{
                            id: 4,
                            label: 'Level three 3-1-1'
                        }, {
                            id: 5,
                            label: 'Level three 3-1-2',
                            disabled: true
                        }]
                    }, {
                        id: 2,
                        label: 'Level two 2-2',
                        disabled: true,
                        children: [{
                            id: 6,
                            label: 'Level three 3-2-1'
                        }, {
                            id: 7,
                            label: 'Level three 3-2-2',
                            disabled: true
                        }]
                    }]
                }],

                data: [{
                    label: 'Level one 1',
                    children: [{
                        label: 'Level two 1-1',
                        children: [{
                            label: 'Level three 1-1-1'
                        }]
                    }]
                }, {
                    label: 'Level one 2',
                    children: [{
                        label: 'Level two 2-1',
                        children: [{
                            label: 'Level three 2-1-1'
                        }]
                    }, {
                        label: 'Level two 2-2',
                        children: [{
                            label: 'Level three 2-2-1'
                        }]
                    }]
                }, {
                    label: 'Level one 3',
                    children: [{
                        label: 'Level two 3-1',
                        children: [{
                            label: 'Level three 3-1-1'
                        }]
                    }, {
                        label: 'Level two 3-2',
                        children: [{
                            label: 'Level three 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                props: {
                    label: 'name',
                    children: 'zones'
                },
                count: 1,
                props1: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
                },
            };
        },
        methods: {
            handleDragStart(node, ev) {
                console.log('drag start', node);
            },
            handleDragEnter(draggingNode, dropNode, ev) {
                console.log('tree drag enter: ', dropNode.label);
            },
            handleDragLeave(draggingNode, dropNode, ev) {
                console.log('tree drag leave: ', dropNode.label);
            },
            handleDragOver(draggingNode, dropNode, ev) {
                console.log('tree drag over: ', dropNode.label);
            },
            handleDragEnd(draggingNode, dropNode, dropType, ev) {
                console.log('tree drag end: ', dropNode && dropNode.label, dropType);
            },
            handleDrop(draggingNode, dropNode, dropType, ev) {
                console.log('tree drop: ', dropNode.label, dropType);
            },
            allowDrop(draggingNode, dropNode) {
                return dropNode.data.label !== 'Level two 3-1';
            },
            allowDrag(draggingNode) {
                return draggingNode.data.label.indexOf('Level three 3-1-1') === -1;
            },
            handleNodeClick(data) {
                console.log(data);
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            append(data) {
                const newChild = { id: id++, label: 'testtest', children: [] };
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },

            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },

            renderContent(h, { node, data, store }) {
                return (
                    <span class="custom-tree-node">
                    <span>{node.label}</span>
                <span>
                <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
                <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
                </span>
                </span>);
            },
            getCheckedNodes() {
                console.log(this.$refs.tree.getCheckedNodes());
            },
            getCheckedKeys() {
                console.log(this.$refs.tree.getCheckedKeys());
            },
            setCheckedNodes() {
                this.$refs.tree.setCheckedNodes([{
                    id: 5,
                    label: 'Level two 2-1'
                }, {
                    id: 9,
                    label: 'Level three 1-1-1'
                }]);
            },
            setCheckedKeys() {
                this.$refs.tree.setCheckedKeys([3]);
            },
            resetChecked() {
                this.$refs.tree.setCheckedKeys([]);
            },
            loadNode1(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region' }]);
                }
                if (node.level > 1) return resolve([]);

                setTimeout(() => {
                    const data = [{
                        name: 'leaf',
                        leaf: true
                    }, {
                        name: 'zone'
                    }];

                    resolve(data);
                }, 500);
            },
            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            },
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'Root1' }, { name: 'Root2' }]);
                }
                if (node.level > 3) return resolve([]);

                var hasChild;
                if (node.data.name === 'region1') {
                    hasChild = true;
                } else if (node.data.name === 'region2') {
                    hasChild = false;
                } else {
                    hasChild = Math.random() > 0.5;
                }

                setTimeout(() => {
                    var data;
                    if (hasChild) {
                        data = [{
                            name: 'zone' + this.count++
                        }, {
                            name: 'zone' + this.count++
                        }];
                    } else {
                        data = [];
                    }

                    resolve(data);
                }, 500);
            }
        }
    }
</script>

<style scoped>
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
</style>