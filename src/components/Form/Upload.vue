<template>
    <div style="text-align: left;">
        <h2 class="title">Нажмите, чтобы загрузить файлы</h2>
        <p class="basic-text">Настройте тип кнопки загрузки и текст <code>slot</code>. Установите <code>limit</code> и <code>on-exceed</code> для ограничения максимального количества загружаемых файлов и укажите метод, когда предел превышен. Кроме того, вы можете прервать удаление файла с помощью хука <code>before-remove</code>.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                    <el-button size="small" type="primary">Загрузить</el-button>
                    <div slot="tip" class="el-upload__tip">jpg/png файлы, размером менее 500kb</div>
                </el-upload>
            </div>
        </div>

        <h2 class="title">Загрузка аватара пользователя</h2>
        <p class="basic-text">Используйте <code>before-upload</code> для ограничения формата и размера файла загрузки.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
        </div>

        <h2 class="title">Photo Wall</h2>
        <p class="basic-text">Используйте <code>list-type</code> чтобы изменить стиль списка загруженных файлов.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </div>
        </div>

        <h2 class="title">Список файлов с миниатюрой</h2>
        <p class="basic-text"></p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList2"
                        list-type="picture">
                    <el-button size="small" type="primary">Загрузить</el-button>
                    <div slot="tip" class="el-upload__tip">jpg/png файлы, размером менее 500kb</div>
                </el-upload>
            </div>
        </div>

        <h2 class="title">Контроль списка файлов</h2>
        <p class="basic-text">Используйте хук <code>on-change</code> для управления списком файлов загрузки.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-change="handleChange"
                        :file-list="fileList3">
                    <el-button size="small" type="primary">Загрузить</el-button>
                    <div slot="tip" class="el-upload__tip">jpg/png файлы, размером менее 500kb</div>
                </el-upload>
            </div>
        </div>

        <h2 class="title">Перетащите, чтобы загрузить</h2>
        <p class="basic-text">Вы можете перетащить свой файл в определенную область, чтобы загрузить его.</p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">Бросьте файл сюда или <em>нажмите для загрузки здесь</em></div>
                    <div class="el-upload__tip" slot="tip">jpg/png файлы, размером менее 500kb</div>
                </el-upload>
            </div>
        </div>

        <h2 class="title">Ручная загрузка</h2>
        <p class="basic-text"></p>
        <div class="demo-block-container">
            <div class="demo-block-container__source">
                <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">Выбрать файл</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">Загрузить на сервер</el-button>
                    <div class="el-upload__tip" slot="tip">jpg/png файлы, размером менее 500kb</div>
                </el-upload>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Upload',
        data() {
            return {
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                imageUrl: '',
                dialogImageUrl: '',
                dialogVisible: false,
                fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                fileList3: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }, {
                    name: 'food2.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }],

            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('Avatar picture must be JPG format!');
                }
                if (!isLt2M) {
                    this.$message.error('Avatar picture size can not exceed 2MB!');
                }
                return isJPG && isLt2M;
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleChange(file, fileList) {
                this.fileList3 = fileList.slice(-3);
            },
            submitUpload() {
                this.$refs.upload.submit();
            }
        }
    }
</script>

<style lang="scss">
    .demo-block-container__source{
        .el-upload{
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            i{
                font-size: 28px;
                color: #8c939d;
                width: 178px;
                height: 178px;
                line-height: 178px;
                text-align: center;
            }
        }
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>