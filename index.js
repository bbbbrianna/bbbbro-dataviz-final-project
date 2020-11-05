import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactDropdown from 'react-dropdown';
import {
  csv,
  scaleLinear,
  scaleOrdinal,
  max,
  format,
  timeFormat,
  extent,
} from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
import { ColorLegend } from './ColorLegend';
import { Dropdown } from './Dropdown';

const width = 960;
const menuHeight = 60;
const height = 500 - menuHeight;
const margin = { top: 20, right: 250, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;
const fadeOpacity = 0.1;

const attributes = [
  { value: 'Tempo', label: 'Tempo' },
  { value: 'Energy', label: 'Energy' },
  { value: 'Dancibility', label: 'Dancibility' },
  { value: 'Loudness', label: 'Loudness' },
  { value: 'Length', label: 'Length' },
  { value: 'Acousticness', label: 'Acousticness' },
  { value: 'Speechiness', label: 'Speechiness' },
  { value: 'Valence', label: 'Valence' },
  { value: 'Popularity', label: 'Popularity' }
];



const attributesColor = [
  { value: 'top genre', label: 'Top Genre' },
  { value: 'artist', label: 'Artist' },
];

const Slider = ({ selectedYear, onSelectedYearChange }) => (
  <input
    type="range"
    //list="tickmarks"
    //id="year"
    //name="year"
    min="2010"
    max="2019"
    step="1"
    onChange={(event) => onSelectedYearChange(event.target.value)}
  />
);

const getLabel = (value) => {
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].value === value) {
      return attributes[i].label;
    }
  }
};

const App = () => {
  const data = useData();
  const [hoveredValue, setHoveredValue] = useState(null);

  const initialXAttribute = 'Tempo';
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = (d) => d[xAttribute];
  const xAxisLabel = getLabel(xAttribute);

  const initialYAttribute = 'Energy';
  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yValue = (d) => d[yAttribute];
  const yAxisLabel = getLabel(yAttribute);
  
  const initialColorAttribute = 'top genre';
  const [colorAttribute, setColorAttribute] = useState(initialColorAttribute);
  const colorValues = (d) => d[colorAttribute];

  const initialYear = '2010';
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const selectedYearValue = (d) => d[selectedYear];
  
  if (!data) {
    return <pre>Loading...</pre>;
  }

  const selectedYearValues = (d) => d.year;
  const filteredData = data.filter((d) => 
        selectedYear === selectedYearValues(d)).slice(0,20);

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const colorLegendLabel = colorAttribute;
  const colorValue = (d) => d[colorAttribute];
  const filteredDataRegion = filteredData.filter(
    (d) => hoveredValue === colorValue(d)
  );

  const xAxisTickFormat = format('.2s');
  const tooltipValue = (d) => d[xAttribute];

  const xScale = scaleLinear()
    .domain(extent(filteredData, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(filteredData, yValue))
    .range([innerHeight, 0]);

  const colorScale = scaleOrdinal()
    .domain(filteredData.map(colorValue))
    .range(['#800000','#DC143C','#DAA520','#808000','#137B80', 
            '#000080','#3CB371', '#8E6C8A','#2F4F4F','#4682B4',
            '#87CEEB','#008000','#8A2BE2','#8B008B','#DA70D6',
            '#FF1493','#8B4513','#BC8F8F','#708090','#00FF00'
    ]);

  const circleRadius = 12;

  return (
    <>
      <div className="menus-container">
      <label className="dropdown-label" for="year">Year</label>
        <Slider
          selectedYear={selectedYear}
          onSelectedYearChange= {setSelectedYear}
        />
        <span className="dropdown-label">Color</span>
        <ReactDropdown
          options={attributesColor}
          id="Year-select"
          value={colorAttribute}
          onChange={({ value }) => setColorAttribute(value)}
        />
        <span className="dropdown-label">X</span>
        <ReactDropdown
          options={attributes}
          id="x-select"
          value={xAttribute}
          onChange={({ value }) => setXAttribute(value)}
        />
        <span className="dropdown-label">Y</span>
        <ReactDropdown
          options={attributes}
          id="Y-select"
          value={yAttribute}
          onChange={({ value }) => setYAttribute(value)}
        />


      </div>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
            tickOffset={5}
          />
          <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${
              innerHeight / 2
            }) rotate(-90)`}
          >
            {yAxisLabel}
          </text>
          <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            {xAxisLabel}
          </text>
           <g transform={`translate(${innerWidth + 20}, 60)`}>
            <text x={46} y={-25} className="axis-label" textAnchor="middle">
              {colorLegendLabel}
            </text>
            <ColorLegend
              tickSpacing={18}
              tickSize={5}
              tickTextOffset={6}
              tickSize={6}
              colorScale={colorScale}
              colorValue={colorValue}
              onHover={setHoveredValue}
              hoveredValue={hoveredValue}
              fadeOpacity={fadeOpacity}
            />
          </g>
          <g opacity={hoveredValue ? 0.2 : 1}>
            <Marks
              data={filteredData}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              colorScale={colorScale}
              colorValue={colorValue}
              tooltipValue={(d) =>
                'title:' +
                d.title +
                '			Artist:' +
                d.artist +
                '     Top Genre:' +
                d['top genre']
              }
              //fadeOpacity={fadeOpacity}
              circleRadius={circleRadius}
            />
          </g>
          <Marks
            data={filteredDataRegion}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            fadeOpacity={fadeOpacity}
            colorScale={colorScale}
            colorValue={colorValue}
            tooltipValue={(d) =>
                'title:' +
                d.title +
                '				Artist:' +
                d.artist +
                '     	Top Genre:' +
                d['top genre']
            }
            circleRadius={circleRadius}
          />
          
       <text
          className="axis-label"
          x={-30}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
       {selectedYear}
        </text>
        </g>
      </svg>
    </>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
