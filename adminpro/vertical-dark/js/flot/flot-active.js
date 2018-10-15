(function ($) {
 "use strict";

            var data1 = [
                [0,4],[1,8],[2,30],[3,10],[4,4],[5,16],[6,5],[7,19],[8,6],[9,11],[10,30],[11,10],[12,13],[13,4],[14,40],[15,3],[16,6]
            ];
            var data2 = [
                [0,1],[1,0],[2,2],[3,0],[4,1],[5,3],[6,1],[7,5],[8,16],[9,3],[10,2],[11,1],[12,0],[13,2],[14,2],[15,0],[16,0]
            ];
            $("#flot-dashboard-chart").length && $.plot($("#flot-dashboard-chart"), [
                data1, data2
            ],
                    {
                        series: {
                            lines: {
                                show: false,
                                fill: true
                            },
                            splines: {
                                show: true,
                                tension: 0.4,
                                lineWidth: 1,
                                fill: 0.4
                            },
                            points: {
                                radius: 0,
                                show: true
                            },
                            shadowSize: 2
                        },
                        grid: {
                            hoverable: true,
                            clickable: true,
                            tickColor: "#393939",
                            borderWidth: 1,
                            color: '#393939'
                        },
                        colors: ["#03a9f4", "#000"],
                        yaxis: {tickLength:0}, 
						xaxis: {tickLength:0},
                        tooltip: false
                    }
            );


			


 
})(jQuery); 

