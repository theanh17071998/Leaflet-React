import React, { Component } from 'react';
import checkLevelAqi from './InfoDetail'



export default class SVGIconComponent extends Component {
    render() {
        const checkLevelAqi = (aqi) => {
            if (parseInt(aqi) > 0 && parseInt(aqi) <= 50) {
                return { colorAqi: '#c2ebd1bf', levelAqi: 'Tốt', colorTitle: '#179947', colorText: "#fff", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI1.png' };
            }
            if (parseInt(aqi) > 50 && parseInt(aqi) <= 100) {
                return { colorAqi: '#f2f582ab', levelAqi: 'Trung bình', colorTitle: '#d6b400', colorText: "#000", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI2.png' };
            }
            if (parseInt(aqi) > 100 && parseInt(aqi) <= 150) {
                return { colorAqi: '#fdc793ad', levelAqi: 'Kém', colorTitle: '#ff7e00', colorText: "#fff", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI3.png' };
            }
            if (parseInt(aqi) > 150 && parseInt(aqi) <= 200) {
                return { colorAqi: '#f981805c', levelAqi: 'Xấu', colorTitle: '#c30504', colorText: "#fff", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI4.png' };
            }
            if (parseInt(aqi) > 200 && parseInt(aqi) <= 300) {
                return { colorAqi: '#e680f1bd', levelAqi: 'Rất xấu', colorTitle: '#8a0c96', colorText: "#fff", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI5.png' };
            }
            if (parseInt(aqi) > 300) {
                return { colorAqi: '#f57498c7', levelAqi: 'Nguy hại', colorTitle: '#66011d', colorText: "#fff", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI6.png' };
            }
            return { colorAqi: '#adadadba', levelAqi: 'N/A', colorTitle: '#585858', colorText: "#fff", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI0.png' };
        }
        const perc = this.props.perc || 0;
        return (
            <svg width="44px" height="44px" viewBox="0 0 42 42" className="donut" aria-labelledby="beers-title beers-desc" role="img">
                <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill={checkLevelAqi(perc)?.colorTitle} role="presentation"></circle>
                <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke={checkLevelAqi(perc)?.colorAqi} strokeWidth="7" role="presentation"></circle>
                {/* <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" strokeWidth="3" strokeDasharray={`${perc} ${100 - perc}`} strokeDashoffset="25" aria-labelledby="donut-segment-1-title donut-segment-1-desc">
                </circle> */}
                <g className="chart-text">
                    <text className="chart-number" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill={checkLevelAqi(perc)?.colorText}>
                        {perc}
                    </text>
                </g>
            </svg>
        );
    }
}