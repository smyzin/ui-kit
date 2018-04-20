import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'

import Color from '@/components/Basic/Color'
import Typography from '@/components/Basic/Typography'
import Button from '@/components/Basic/Button'

import Radio from '@/components/Form/Radio'
import Checkbox from '@/components/Form/Checkbox'
import Input from '@/components/Form/Input'
import InputNumber from '@/components/Form/InputNumber'
import Select from '@/components/Form/Select'
import Cascader from '@/components/Form/Cascader'
import Switch from '@/components/Form/Switch'
import Slider from '@/components/Form/Slider'
import TimePicker from '@/components/Form/TimePicker'
import DatePicker from '@/components/Form/DatePicker'
import DateTimePicker from '@/components/Form/DateTimePicker'
import Upload from '@/components/Form/Upload'
import Rate from '@/components/Form/Rate'
import ColorPicker from '@/components/Form/ColorPicker'
import Transfer from '@/components/Form/Transfer'
import Form from '@/components/Form/Form'

import Table from '@/components/Data/Table'
import Tag from '@/components/Data/Tag'
import Progress from '@/components/Data/Progress'
import Tree from '@/components/Data/Tree'
import Pagination from '@/components/Data/Pagination'
import Badge from '@/components/Data/Badge'

import Alert from '@/components/Notice/Alert'
import Loading from '@/components/Notice/Loading'
import Message from '@/components/Notice/Message'
import MessageBox from '@/components/Notice/MessageBox'
import Notification from '@/components/Notice/Notification'

import NavMenu from '@/components/Navigation/NavMenu'
import Tabs from '@/components/Navigation/Tabs'
import Breadcrumb from '@/components/Navigation/Breadcrumb'
import Dropdown from '@/components/Navigation/Dropdown'
import Steps from '@/components/Navigation/Steps'

import Dialog from '@/components/Others/Dialog'
import Tooltip from '@/components/Others/Tooltip'
import Popover from '@/components/Others/Popover'
import Card from '@/components/Others/Card'
import Carousel from '@/components/Others/Carousel'
import Collapse from '@/components/Others/Collapse'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', name: 'Upoint UI-kit', component: Index},

        {path: '/color', name: 'Цвет', component: Color, meta: { next: {name: 'Типографика', path: '/typography'} }},
        {path: '/typography', name: 'Типографика', component: Typography,  meta: { next: {name: 'Кнопки', path: '/button'}, previous: {name: 'Цвет', path: '/color'} }},
        {path: '/button', name: 'Кнопки', component: Button, meta: { next: {name: 'Radio', path: '/radio'}, previous: {name: 'Типографика', path: '/typography'} }},

        {path: '/radio', name: 'Radio', component: Radio, meta: { next: {name: 'Checkbox', path: '/checkbox'}, previous: {name: 'Кнопки', path: '/button'} }},
        {path: '/checkbox', name: 'Checkbox', component: Checkbox, meta: { next: {name: 'Input', path: '/input'}, previous: {name: 'Radio', path: '/radio'} }},
        {path: '/input', name: 'Input', component: Input, meta: { next: {name: 'InputNumber', path: '/input-number'}, previous: {name: 'Checkbox', path: '/checkbox'} }},
        {path: '/input-number', name: 'InputNumber', component: InputNumber, meta: { next: {name: 'Select', path: '/select'}, previous: {name: 'Input', path: '/input'} }},
        {path: '/select', name: 'Select', component: Select, meta: { next: {name: 'Cascader', path: '/cascader'}, previous: {name: 'InputNumber', path: '/input-number'} }},
        {path: '/cascader', name: 'Cascader', component: Cascader, meta: { next: {name: 'Switch', path: '/switch'}, previous: {name: 'Select', path: '/select'} }},
        {path: '/switch', name: 'Switch', component: Switch, meta: { next: {name: 'Slider', path: '/slider'}, previous: {name: 'Cascader', path: '/cascader'} }},
        {path: '/slider', name: 'Slider', component: Slider, meta: { next: {name: 'TimePicker', path: '/time-picker'}, previous: {name: 'Switch', path: '/switch'} }},
        {path: '/time-picker', name: 'TimePicker', component: TimePicker, meta: { next: {name: 'DatePicker', path: '/date-picker'}, previous: {name: 'Slider', path: '/slider'} }},
        {path: '/date-picker', name: 'DatePicker', component: DatePicker, meta: { next: {name: 'DateTimePicker', path: '/date-time-picker'}, previous: {name: 'TimePicker', path: '/time-picker'} }},
        {path: '/date-time-picker', name: 'DateTimePicker', component: DateTimePicker, meta: { next: {name: 'Upload', path: '/upload'}, previous: {name: 'DatePicker', path: '/date-picker'} }},
        {path: '/upload', name: 'Upload', component: Upload, meta: { next: {name: 'Rate', path: '/rate'}, previous: {name: 'DateTimePicker', path: '/date-time-picker'} }},
        {path: '/rate', name: 'Rate', component: Rate, meta: { next: {name: 'ColorPicker', path: '/color-picker'}, previous: {name: 'Upload', path: '/upload'} }},
        {path: '/color-picker', name: 'ColorPicker', component: ColorPicker, meta: { next: {name: 'Transfer', path: '/transfer'}, previous: {name: 'Rate', path: '/rate'} }},
        {path: '/transfer', name: 'Transfer', component: Transfer, meta: { next: {name: 'Form', path: '/form'}, previous: {name: 'ColorPicker', path: '/color-picker'} }},
        {path: '/form', name: 'Form', component: Form, meta: { next: {name: 'Table', path: '/table'}, previous: {name: 'Transfer', path: '/transfer'} }},

        {path: '/table', name: 'Table', component: Table, meta: { next: {name: 'Tag', path: '/tag'}, previous: {name: 'Form', path: '/form'} }},
        {path: '/tag', name: 'Tag', component: Tag, meta: { next: {name: 'Progress', path: '/progress'}, previous: {name: 'Table', path: '/table'} }},
        {path: '/progress', name: 'Progress', component: Progress, meta: { next: {name: 'Tree', path: '/tree'}, previous: {name: 'Tag', path: '/tag'} }},
        {path: '/tree', name: 'Tree', component: Tree, meta: { next: {name: 'Pagination', path: '/pagination'}, previous: {name: 'Progress', path: '/progress'} }},
        {path: '/pagination', name: 'Pagination', component: Pagination, meta: { next: {name: 'Badge', path: '/badge'}, previous: {name: 'Tree', path: '/tree'} }},
        {path: '/badge', name: 'Badge', component: Badge, meta: { next: {name: 'Alert', path: '/alert'}, previous: {name: 'Pagination', path: '/pagination'} }},


        {path: '/alert', name: 'Alert', component: Alert, meta: { next: {name: 'Loading', path: '/loading'}, previous: {name: 'Badge', path: '/badge'} }},
        {path: '/loading', name: 'Loading', component: Loading, meta: { next: {name: 'Message', path: '/message'}, previous: {name: 'Alert', path: '/alert'} }},
        {path: '/message', name: 'Message', component: Message, meta: { next: {name: 'MessageBox', path: '/message-box'}, previous: {name: 'Loading', path: '/loading'} }},
        {path: '/message-box', name: 'MessageBox', component: MessageBox, meta: { next: {name: 'Notification', path: '/notification'}, previous: {name: 'Message', path: '/message'} }},
        {path: '/notification', name: 'Notification', component: Notification, meta: { next: {name: 'NavMenu', path: '/nav-menu'}, previous: {name: 'MessageBox', path: '/message-box'} }},

        {path: '/nav-menu', name: 'NavMenu', component: NavMenu, meta: { next: {name: 'Tabs', path: '/tabs'}, previous: {name: 'Notification', path: '/notification'} }},
        {path: '/tabs', name: 'Tabs', component: Tabs, meta: { next: {name: 'Breadcrumb', path: '/breadcrumb'}, previous: {name: 'NavMenu', path: '/nav-menu'} }},
        {path: '/breadcrumb', name: 'Breadcrumb', component: Breadcrumb, meta: { next: {name: 'Dropdown', path: '/dropdown'}, previous: {name: 'Tabs', path: '/tabs'} }},
        {path: '/dropdown', name: 'Dropdown', component: Dropdown, meta: { next: {name: 'Steps', path: '/steps'}, previous: {name: 'Breadcrumb', path: '/breadcrumb'} }},
        {path: '/steps', name: 'Steps', component: Steps, meta: { next: {name: 'Dialog', path: '/dialog'}, previous: {name: 'Dropdown', path: '/dropdown'} }},

        {path: '/dialog', name: 'Dialog', component: Dialog, meta: { next: {name: 'Tooltip', path: '/tooltip'}, previous: {name: 'Steps', path: '/steps'} }},
        {path: '/tooltip', name: 'Tooltip', component: Tooltip, meta: { next: {name: 'Popover', path: '/popover'}, previous: {name: 'Dialog', path: '/dialog'} }},
        {path: '/popover', name: 'Popover', component: Popover, meta: { next: {name: 'Card', path: '/card'}, previous: {name: 'Tooltip', path: '/tooltip'} }},
        {path: '/card', name: 'Card', component: Card, meta: { next: {name: 'Carousel', path: '/carousel'}, previous: {name: 'Popover', path: '/popover'} }},
        {path: '/carousel', name: 'Carousel', component: Carousel, meta: { next: {name: 'Collapse', path: '/collapse'}, previous: {name: 'Card', path: '/card'} }},
        {path: '/collapse', name: 'Collapse', component: Collapse, meta: { previous: {name: 'Carousel', path: '/carousel'} }}

    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
})
