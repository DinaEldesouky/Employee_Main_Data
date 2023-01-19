// DebtorChart
$(document).ready(function(){
    var DebtorChart = echarts.init(document.getElementById('DebtorChart'));
    var labelOption = {
        normal: {
            show: false,
        }
    };
    var optionDebtor = {
        title: {
            textStyle:{
                color: '#555',
                fontSize: '15'
            },
            text: 'Option Debtor'
        },
        color: ['#003366', '#236fa1', '#749f83', '#c23531', '#ca8622'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            top: 10,
            padding: 20,
            textStyle:{
                fontSize: '11'
            },
            data: ['Total Debit', 'Total Discount', 'Total Retune', 'Total Rejection', 'Total Paid']
        },
        toolbox: {
            show: false,
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLabel:{
                    show: true,
                    rotate: 45,
                    verticalAlign: 'middle',
                },
                data: ['Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19', 'Jul-19', 'Aug-19', 'Sep-19', 'Oct-19', 'Nov-19', 'Dec-19']
        }
    ],
        yAxis: [
            {
                type: 'value',
                axisTick: {show:false},
                axisLabel:{
                    rotate: 45,
                    verticalAlign: 'middle'
                },
        }
    ],
        series: [
            {
                name: 'Total Debit',
                type: 'bar',
                barGap: 0,
label: labelOption,
                data: [1250083000, 2550083000, 2254866200, 2550083000, 1850083000, 2750083000, 2550083000, 1250083000, 1850083000, 1050083000, 2050083000, 2350083000 ]
        },
            {
                name: 'Total Discount',
                type: 'bar',
                label: labelOption,
                data: [62504150, 127504150, 112743310, 127504150, 92504150, 137504150, 127504150, 62504150, 92504150, 52504150, 102504150, 117504150 ]
        },
            {
                name: 'Total Retune',
                type: 'bar',
                label: labelOption,
                data: [37502490, 76502490, 67645986, 76502490, 55502490, 82502490, 76502490, 37502490, 55502490, 31502490, 61502490, 70502490 ]
        },
            {
                name: 'Total Rejection',
                type: 'bar',
                label: labelOption,
                data: [250016600, 510016600, 450973240, 510016600, 370016600, 550016600, 510016600, 250016600, 370016600, 210016600, 410016600, 470016600 ]
        },
            {
                name: 'Total Paid',
                type: 'bar',
                label: labelOption,
                data: [900059760, 1836059760, 1623503664, 1836059760, 1332059760, 1980059760, 1836059760, 900059760, 1332059760, 756059760, 1476059760, 1692059760 ]
        }
    ]
    };
    DebtorChart.setOption(optionDebtor);  
   });

// BalanceChart
$(document).ready(function(){
var BalanceChart = echarts.init(document.getElementById('BalanceChart'));
    var labelOption = {
        normal: {
            show: false,
        }
    };
    var optionBalance = {
        title: {
                textStyle:{
                color: '#555',
                fontSize: '15'
            },
          
            padding: [5, 20],
            text: 'Top 10 Customer Balance on 31/01/2019'
        },
        color: ['#003366'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            top: 10,
            padding: 20,
            textStyle:{
                fontSize: '11'
            },
            data: ['Balance on 31/01/2019']
        },
        toolbox: {
            show: false,
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLabel:{
                    show: true,
                    rotate: 45,
                    verticalAlign: 'middle',
                },
                data: ['Customer 01','Customer 02','Customer 03','Customer 04','Customer 05','Customer 06','Customer 07','Customer 08','Customer 09','Customer 10']
        }
    ],
        yAxis: [
            {
                type: 'value',
                axisTick: {show:false},
                axisLabel:{
                    rotate: 45,
                    verticalAlign: 'middle'
                },
        }
    ],
        series: [
            {
                name: 'Balance on 31/01/2019',
                type: 'bar',
                barGap: 0,
label: labelOption,
                data: [2000000, 6000000, 8521000, 7850000, 4325111, 6874215, 3524365, 2542369, 4587593, 9875354 ]
        }
    ]
    };
    BalanceChart.setOption(optionBalance);
}); 

// RejectionChart
$(document).ready(function(){
    var RejectionChart = echarts.init(document.getElementById('RejectionChart'));
    var labelOption = {
        normal: {
            show: false,
        }
    };
    var optionRejection = {
        title: {
                textStyle:{
                color: '#555',
                fontSize: '15'
            },
           padding: [5, 20],
            text: 'Monthly Rejection'
        },
        color: ['#003366', '#c23531'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            top: 10,
            padding: 20,
            textStyle:{
                fontSize: '11'
            },
            data: ['Total Debit', 'Total Rejection']
        },
        toolbox: {
            show: false,
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLabel:{
                    show: true,
                    rotate: 45,
                    verticalAlign: 'middle',
                },
                data: ['Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19', 'Jul-19', 'Aug-19', 'Sep-19', 'Oct-19', 'Nov-19', 'Dec-19']
        }
    ],
        yAxis: [
            {
                type: 'value',
                axisTick: {show:false},
                axisLabel:{
                    rotate: 45,
                    verticalAlign: 'middle'
                },
        }
    ],
        series: [
            {
                name: 'Total Debit',
                type: 'bar',
                barGap: 0,
                label: labelOption,
                data: [1250083000, 2550083000, 2254866200, 2550083000, 1850083000, 2750083000, 2550083000, 1250083000, 1850083000, 1050083000, 2050083000, 2350083000 ]
        },
            {
                name: 'Total Rejection',
                type: 'bar',
                label: labelOption,
                data: [1250016600, 510016600, 450973240, 510016600, 370016600, 550016600, 510016600, 250016600, 370016600, 210016600, 410016600, 470016600 ]
        }
    ]
    };
    RejectionChart.setOption(optionRejection);  
   });

// companyAging Chart 
$(document).ready(function(){
    var companyAgingChart = echarts.init(document.getElementById('companyAgingChart'));
    var labelOption = {
        normal: {
            show: false,
        }
    };
    var optionCompanyAging = {
        title: {
                textStyle:{
                color: '#555',
                fontSize: '15'
            },
            padding: [5, 20],
            text: 'Total company Aging '
        },
        color: ['#003366'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            top: 10,
            padding: 20,
            textStyle:{
                fontSize: '11'
            },
            data: ['Claim Remaining']
        },
        toolbox: {
            show: false,
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLabel:{
                    show: true,
                    rotate: 45,
                    verticalAlign: 'middle',
                },
                data: ['Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19', 'Jul-19', 'Aug-19', 'Sep-19', 'Oct-19', 'Nov-19', 'Dec-19']
        }
    ],
        yAxis: [
            {
                type: 'value',
                axisTick: {show:false},
                axisLabel:{
                    rotate: 45,
                    verticalAlign: 'middle'
                },
        }
    ],
        series: [
            {
                name: 'Claim Remaining',
                type: 'bar',
                barGap: 0,
label: labelOption,
                data: [875058100, 1785058100, 1578406340, 1785058100, 1295058100, 1925058100, 1785058100, 875058100, 1295058100, 735058100, 1435058100, 1645058100 ]
        }
    ]
    };
    companyAgingChart.setOption(optionCompanyAging);  
   });

// Customer Chart
$(document).ready(function(){
    var CustomerChart = echarts.init(document.getElementById('CustomerChart'));
    var labelOption = {
        normal: {
            show: false,
        }
    };
    var optionCustomer = {
        title: {
                textStyle:{
                color: '#555',
                fontSize: '15'
            },
          
            padding: [5, 20],
            text: 'Less 10 Customer Balance on 31/01/2019'
        },
        color: ['#003366'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            top: 10,
            padding: 20,
            textStyle:{
                fontSize: '11'
            },
            data: ['Balance on 31/01/2019']
        },
        toolbox: {
            show: false,
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLabel:{
                    show: true,
                    rotate: 45,
                    verticalAlign: 'middle',
                },
                data: ['Customer 01','Customer 02','Customer 03','Customer 04','Customer 05','Customer 06','Customer 07','Customer 08','Customer 09','Customer 10']
        }
    ],
        yAxis: [
            {
                type: 'value',
                axisTick: {show:false},
                axisLabel:{
                    rotate: 45,
                    verticalAlign: 'middle'
                },
        }
    ],
        series: [
            {
                name: 'Balance on 31/01/2019',
                type: 'bar',
                barGap: 0,
label: labelOption,
                data: [100000, 20000, 250, 854, 1000, 5448, 87789, 5000, 1000, 4558 ]
        }
    ]
    };
    CustomerChart.setOption(optionCustomer);  
   });