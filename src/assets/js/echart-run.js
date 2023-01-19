//== For Attendance ========================================================================================================================

var dom = document.getElementById("chartOne");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '';
option = {
    color: ['rgb(194, 53, 49)'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Dep 1', 'Dep 2', 'Dep 3', 'Dep 4', 'Dep 5', 'Dep 6', 'Dep 7'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: 'Dep',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
    }]
};

myChart.setOption(option);

//== For mission ========================================================================================================================
var dom2 = document.getElementById("chartThree");
var myChart3 = echarts.init(dom2);
var app = {};
option = null;
app.title = '';
option = {
    color: ['rgb(247, 210, 32)'],
    xAxis: {
        type: 'category',
        data: ['Dep 1', 'Dep 2', 'Dep 3', 'Dep 4', 'Dep 5', 'Dep 6', 'Dep 7']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        }
    }]
};


myChart3.setOption(option);
//== For Excuse ========================================================================================================================

var dom1 = document.getElementById("chartTwo");
var myChart2 = echarts.init(dom1);
var app = {};
option = null;
app.title = '';
option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '1%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Dep 1', 'Dep 2', 'Dep 3', 'Dep 4', 'Dep 5', 'Dep 6', 'Dep 7'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: 'Dep',
        type: 'bar',
        barWidth: '50%',
        data: [10, 52, 200, 334, 390, 330, 220]
    }]
};

myChart2.setOption(option);
//== Sick Vacation ========================================================================================================================

var dom4 = document.getElementById("chartFour");
var myChart4 = echarts.init(dom4);
var app = {};
option = null;
app.title = '';
option = {
    color: ['rgb(22, 67, 149)'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Department']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.1]
    },
    yAxis: {
        type: 'category',
        data: ['Dep 1', 'Dep 2', 'Dep 3', 'Dep 4', 'Dep 5', 'Dep 6']
    },
    series: [{
        name: 'Department',
        type: 'bar',
        data: [100, 300, 50, 444, 45, 230]
    }]
};

myChart4.setOption(option);

//== For Turn Over ========================================================================================================================
var dom5 = document.getElementById("chartFive");
var myChart5 = echarts.init(dom5);
var app = {};
option = null;
app.title = '';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        data: ['Type #1', 'Type #2', 'Type #3', 'Type #4', 'Type #5']
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['Dept #1', 'Dept #2', 'Dept #3', 'Dept #4', 'Dept #5', 'Dept #6', 'Dept #7']
    },
    series: [{
            name: 'Type #1',
            type: 'bar',
            stack: 'same',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 15, 17, 20, 15, 27]
        },
        {
            name: 'Type #2',
            type: 'bar',
            stack: 'same',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 15, 17, 20, 10, 27]
        },
        {
            name: 'Type #3',
            type: 'bar',
            stack: 'same',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 15, 17, 20, 5, 27]
        },
        {
            name: 'Type #4',
            type: 'bar',
            stack: 'same',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 15, 17, 20, 10, 27]
        },
        {
            name: 'Type #5',
            type: 'bar',
            stack: 'same',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 15, 17, 20, 30, 27]
        }
    ]
};

myChart5.setOption(option);
//== For Pentaly ========================================================================================================================
var dom6 = document.getElementById("chartSix");
var myChart6 = echarts.init(dom6);
var app = {};
option = null;
app.title = '';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['Dept #1', 'Dept #2', 'Dept #3', 'Dept #4', 'Dept #5', 'Dept #6', 'Dept #7']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Dept #1', 'Dept #2', 'Dept #3', 'Dept #4', 'Dept #5', 'Dept #6', 'Dept #7']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: 'Type 1',
            type: 'bar',
            stack: '1',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Type 2',
            type: 'bar',
            stack: '1',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Type 3',
            type: 'bar',
            stack: '1',
            data: [150, 232, 201, 154, 190, 330, 410]
        },

    ]
};


myChart6.setOption(option);

//== For Violation ========================================================================================================================
var dom7 = document.getElementById("chartSeven");
var myChart7 = echarts.init(dom7);
var app = {};
option = null;
app.title = '';
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        data: ['Type #1', 'Type #2', 'Type #3', 'Type #4', 'Type #5']
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['Dept #1', 'Dept #2', 'Dept #3', 'Dept #4', 'Dept #5', 'Dept #6', 'Dept #7']
    },
    series: [{
            name: 'Type #1',
            type: 'bar',
            stack: 'same',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 15, 17, 20, 15, 27]
        },
        {
            name: 'Type #2',
            type: 'bar',
            stack: 'same',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 15, 17, 20, 10, 27]
        },
        {
            name: 'Type #3',
            type: 'bar',
            stack: 'same',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 15, 17, 20, 5, 27]
        },
        {
            name: 'Type #4',
            type: 'bar',
            stack: 'same',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
            },
            data: [10, 20, 15, 17, 20, 10, 27]
        },

        {
            name: 'Type #5',
            type: 'bar',
            stack: 'same',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 15, 17, 20, 30, 27]
        }
    ]
};

myChart7.setOption(option);
//== For Expired document ========================================================================================================================
var dom8 = document.getElementById("chartEight");
var myChart8 = echarts.init(dom8);
var app = {};
option = null;
app.title = '';
option = {
    color: ['rgb(22, 67, 149)'],
    xAxis: {
        type: 'category',
        data: ['Dep 1', 'Dep 2', 'Dep 3', 'Dep 4', 'Dep 5', 'Dep 6', 'Dep 7']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        }
    }]
};


myChart8.setOption(option);
//== For Most Requested Materials ========================================================================================================================
// var dom1 = document.getElementById("MostRequestedMaterials");
// var myChart2 = echarts.init(dom1);
// var app = {};
// option = null;
// option = {
//     title: {
//         text: '',
//         subtext: '',
//         x: 'center'
//     },
//     tooltip: {
//         trigger: 'item',
//         formatter: "{a} <br/>{b} : {c} ({d}%)"
//     },
//     legend: {
//         orient: 'horizontal',
//         left: 'left',
//         data: ['Concrete', 'Papers', 'Wood', 'Inkjet', 'Cotton', 'PVC', 'Wires']
//     },
//     series: [{
//         name: 'name',
//         type: 'pie',
//         radius: '55%',
//         center: ['50%', '60%'],
//         data: [{
//                 value: 335,
//                 name: 'Concrete'
//             },
//             {
//                 value: 310,
//                 name: 'Papers'
//             },
//             {
//                 value: 234,
//                 name: 'Wood'
//             },
//             {
//                 value: 135,
//                 name: 'Inkjet'
//             },
//             {
//                 value: 1148,
//                 name: 'Cotton'
//             },
//             {
//                 value: 684,
//                 name: 'PVC'
//             },
//             {
//                 value: 184,
//                 name: 'Wires'
//             }
//         ],
//         itemStyle: {
//             emphasis: {
//                 shadowBlur: 10,
//                 shadowOffsetX: 0,
//                 shadowColor: 'rgba(0, 0, 0, 0.5)'
//             }
//         }
//     }]
// };
// myChart2.setOption(option);