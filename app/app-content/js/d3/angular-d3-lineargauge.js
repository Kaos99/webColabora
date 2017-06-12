'use strict';
(function () {
    var ui = {};
    var Gauge = function(element, options) {
        this.element = element;
        this.options = options;
    };

    Gauge.prototype.drawGauge = function() {
        d3.select(this.element).select("svg").remove();
        var that = this;

        var baseLineLength = parseInt((this.options.size - 20), 10);
        this.initialY = this.options.size / 2;
        this.baseLine = that.CreateUnitLine(baseLineLength,0);

        var svg = d3.select(this.element)
            .append('svg')
            .attr("width", this.options.size)
            .attr("height", this.options.size);
        this.drawBaseLine(svg, this.baseLine, 'bLine', { "stroke": this.options.scale.baseLineColor, "stroke-width": .55,"fill":"none" });//grosor linea
        var unit = parseInt(this.options.unit);
        this.unitCount = parseFloat(baseLineLength / unit);
        var majorUnit = parseInt(this.options.majorUnit);
        
        
        that.drawUnits(svg, this.unitCount, majorUnit);
        that.drawText(svg, this.unitCount, majorUnit);
        if (this.options.markers.length > 0) {
            that.drawMarkers(svg, this.unitCount,this.options.markers);
        }
        this.drawPointers(svg, 403,  { "stroke": "black", "stroke-width": .5,"fill":"black" });
        //this.drawPointers(svg, baseLineLength - 10,  { "stroke": "orange", "stroke-width": .5,"fill":"orange" });
        function onMarkerMouseOver() {
            var coords = d3.mouse(this.parentNode);
            var x = coords[0] - (that.options.size / 2);
            var y = coords[1] - (that.options.size / 2);
            //interaction(x, y, true);
        }
    };
    Gauge.prototype.drawUnits = function (svg, quantity, mUnit) {
        var count = 0;
        var yPos = this.initialY;
        var data = d3.range(parseInt(this.options.unit) + 1).map(function (e) {
            var cnt = count;
            var y = 15;
            if ((e % mUnit) > 0) {
                y = 10;
            }
            count = count + quantity ;
            return {
                x1: cnt,
                y1: yPos,
                x2: cnt,
                y2: yPos + y
            };
        });
        svg.selectAll("line")
        .data(data)
        .enter().append("line")
        .attr({
            x1: function (d) {
                return d.x1;
            },
            y1: function (d) {
                return d.y1;
            },
            x2: function (d) {
                return d.x2;
            },
            y2: function (d) {
                return d.y2;
            },
            //size de lineas de los numeros
            "stroke-width": .45,
            "stroke": this.options.scale.minorUnitColor
        });
    }
    Gauge.prototype.drawBaseLine = function (svg, li, label, style) {
        var line = d3.svg.line()
            .x(function (d) { return d.x; })
            .y(function (d) { return d.y; })
            .interpolate("linear");
        //var lineData = [{ "x": x, "y": y }];
        svg.append('path')
            .attr('d', line(li))
            .style(style);
            //.attr('transform', 'translate(' + ((this.options.size)) + ', ' + ((this.options.size)) + ')');
    };
    Gauge.prototype.CreateUnitLine = function(x, y) {
        //'M10,20 L500,20'
        if (y === 0) {
            return [{ "x": 0, "y": this.initialY }, { "x": x, "y": this.initialY }];
        }
        
            return [{ "x": x, "y": 5 }, { "x": x, "y": y }];
        
    };
    Gauge.prototype.drawPointers = function(svg,xPos,style){
      var line = d3.svg.line()
            .x(function (d) { return d.x; })
            .y(function (d) { return d.y; })
          function getPointerDim(xPos, yPos) {
            yPos = yPos - 2;
            xPos = xPos - 5;
            return 'M' + xPos + "," + yPos + ' L' + (xPos - 6) + ',' + (yPos - 6) + ' L' + (xPos - 6) + ',' + (yPos - 12)
                    + ' L' + (xPos) + ',' + (yPos - 6) + ' L' + (xPos + 6) + ',' + (yPos - 12) + ' L' + (xPos + 6) + ',' + (yPos - 6)
                     + ' L' + (xPos) + ',' + (yPos);

        }
        svg.append('path')
            .attr('d', getPointerDim(xPos,this.initialY))
            .style(style);
            //.on('mousedown',pMouseDown);
            d3.selectAll('path').on('mousedown',pMouseDown)
            function pMouseDown(d,i,e){
               d3.select(this).on('mousemove',pMouseMove)
            .on('mouseup',pMouseUp);
                    /**
                    var pointer = 'M' + eX + "," + currentY + ' L' + (eX - 15) + ',' + (currentY - 15) + ' L' + (eX - 5) + ',' + (currentY - 15)
                    + ' L' + (eX) + ',' + (currentY - 8) + ' L' + (eX + 5) + ',' + (currentY - 15) + ' L' + (eX + 15) + ',' + (currentY - 15)
                     + ' L' + (eX) + ',' + (currentY);
                    var pointer = getPointerDim(eX, currentY);
                    selectedElement.setAttribute("d", pointer);*/
            }
            function pMouseMove(d,i){
               d3.select(this);
                /**
                    var pointer = 'M' + eX + "," + currentY + ' L' + (eX - 15) + ',' + (currentY - 15) + ' L' + (eX - 5) + ',' + (currentY - 15)
                    + ' L' + (eX) + ',' + (currentY - 8) + ' L' + (eX + 5) + ',' + (currentY - 15) + ' L' + (eX + 15) + ',' + (currentY - 15)
                     + ' L' + (eX) + ',' + (currentY);
                    var pointer = getPointerDim(eX, currentY);
                    selectedElement.setAttribute("d", pointer);*/
            }
            function pMouseUp(e){
              d3.select(this).off('mousemove',pMouseMove)
            .off('mouseup',pMouseUp);
            }
    };
    Gauge.prototype.drawText = function (svg, quantity, mUnit) {
        var count = 0;
        //quantity = quantity / mUnit;
        var yPos = this.initialY + 10;
        var data = d3.range(parseInt(this.options.unit) + 1).map(function (e) {
            var cnt = count;
            var y = 15;
            if ((e % mUnit) > 0) {
                y = 10;
            }
            count = count + quantity;
            if (y === 10) {
                return {
                    x: cnt,
                    y: yPos,
                    text: ""
                }
            } else if(cnt > 0) {
                cnt = cnt - 3;
            }
            return {
                x: cnt,
                y: yPos + 14,
                text: e
            };
        });
        svg.selectAll("text")
        .data(data)
        .enter().append("text")
        .attr({
            x: function (d) {
                return d.x;
            },
            y: function (d) {
                return d.y;
            },
            //text: function (d) {
            //    return d.text;
            //},
            //size of number
            "stroke": "none",
            "font-size": "15px",
            "fill": "black"
        })
        .text(function(d) {
            return d.text;
        });
    };
    Gauge.prototype.drawMarkers = function (svg, quantity,markers) {
         var count = 0;
        //quantity = quantity / mUnit;
         var yPos = this.initialY;
         var validMarkers = [];
        var ttlUnits = this.options.unit;
        angular.forEach(this.options.markers, function (marker, index) {
            if (parseInt(marker.unit) <= ttlUnits) {
                validMarkers.push(marker);
            }
        });
        var data = d3.range(validMarkers.length).map(function (e) {
            var cnt = count;
            var marker = markers[e];
            cnt = marker.unit * quantity;
            return {
                cx: cnt,
                cy: yPos,
                stroke: marker.color,
                fill: marker.color
            };
        });
        svg.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr({
            cx: function (d) {
                return d.cx;
            },
            cy: function (d) {
                return d.cy;
            },
            stroke: function (d) {
                return d.stroke;
            },
            fill: function(d) {
                return d.fill;
            },
            /**text: function (d) {
                return d.text;
            },*/
            "stroke-width": "15px",//size indicador
            "r":4
        })
        .text(function(d) {
            return d.text;
        });
    };
    ui.Gauge = Gauge;
    ui.gaugeDirective = function() {
        return {
            restrict: 'E',
            scope: {
                options: '='
            },
            link: function(scope, element) {
                var defaultOptions = {
                    size: 50,
                    
                    unit: "100",
                    minorUnit: "1",
                    majorUnit: "10",
                    min: "",
                    max: "",
                    pointers: [],
                    indicators: [],
                    trackColor: "rgba(0,0,0,0)",
                    barColor: "rgba(255,0,0,.5)",
                    textColor: '#222',
                    fontSize: 'auto',
                    bgColor: 'rgba(255,0,0,.5)',
                    scale: {
                        baseLineColor: "rgba(255,0,0,.5)",
                        majorUnitColor: "rgba(255,0,0,.5)",
                        minorUnitColor: "#222"
                    },
                    markers : []
                }
                scope.options = angular.merge(defaultOptions, scope.options);
                var gauge = new ui.Gauge(element[0], scope.options);

                scope.$watch('options', function() {
                    var newOptions = angular.merge(defaultOptions, scope.options);
                    gauge = new ui.Gauge(element[0], newOptions);
                    drawgauge();

                }, true);
                var drawgauge = function() {
                    gauge.drawGauge(function() {
                        scope.$apply(function() {
                        });
                    });
                };

                drawgauge();
            }
        };
    };
    angular.module('ui.gauge', []).directive('uiGauge', ui.gaugeDirective);
})();