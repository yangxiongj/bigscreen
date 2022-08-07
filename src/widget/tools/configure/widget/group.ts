const group = {
	code: 'widget-group',
	type: 'group',
	label: '组',
	widgets: [],
	configure: [
		{
			type: 'SketchPicker',
			label: '背景颜色',
			name: 'backgroundColor',
			required: false,
			placeholder: '请选择背景颜色'
		}
	],
	configureValue: {
		backgroundColor: ''
	},
	// 坐标值
	coordinateValue: {
		left: 0,
		top: 0,
		width: 500,
		height: 500
	},
	dataValue: {
		dataType: 'mock',
		mock: {
			value: '文本框'
		},
		url: '',
		method: 'get',
		field: 'value'
	},
	data: [
		{
			type: 'Select',
			label: '数据类型',
			name: 'dataType',
			required: false,
			placeholder: '',
			options: [
				{ code: 'mock', name: 'mock数据' },
				{ code: 'dynamic', name: '动态数据' }
			]
		},
		{
			type: 'TextArea',
			label: '接口地址',
			name: 'url',
			required: false,
			placeholder: '',
			relationField: 'dataType',
			relationValue: 'dynamic'
		},
		{
			type: 'JsonEdit',
			label: '真实数据',
			name: 'data',
			required: false,
			placeholder: '',
			relationField: 'dataType',
			relationValue: 'dynamic'
		},
		{
			type: 'Select',
			label: '接口方式',
			name: 'method',
			required: false,
			placeholder: '请选择接口方式',
			relationField: 'dataType',
			relationValue: 'dynamic',
			options: [
				{ code: 'get', name: 'GET' },
				{ code: 'post', name: 'POST' }
			]
		},
		{
			type: 'JsonEdit',
			label: '接口参数',
			name: 'params',
			required: false,
			placeholder: '',
			relationField: 'dataType',
			relationValue: 'dynamic'
		}
	]
};

export default group;
