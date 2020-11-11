import React from "react";
import { Box, Card, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import HightChart from "./HighChart";
import moment from 'moment'
import Icon from './Icon'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const checkLevelAqi = (aqi) => {
  if (parseInt(aqi) > 0 && parseInt(aqi) <= 50) {
    return { colorAqi: '#1bbe58', levelAqi: 'Tốt', colorTitle: '#179947', colorText: "#fff", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI1.png' };
  }
  if (parseInt(aqi) > 50 && parseInt(aqi) <= 100) {
    return { colorAqi: '#ffd600', levelAqi: 'Trung bình', colorTitle: '#cdac01', colorText: "#000", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI2.png' };
  }
  if (parseInt(aqi) > 100 && parseInt(aqi) <= 150) {
    return { colorAqi: '#ff7e00', levelAqi: 'Kém', colorTitle: '#cd6601', colorText: "#fff", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI3.png' };
  }
  if (parseInt(aqi) > 150 && parseInt(aqi) <= 200) {
    return { colorAqi: '#d52827', levelAqi: 'Xấu', colorTitle: '#ab2120', colorText: "#fff", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI4.png' };
  }
  if (parseInt(aqi) > 200 && parseInt(aqi) <= 300) {
    return { colorAqi: '#8f3f97', levelAqi: 'Rất xấu', colorTitle: '#8a0c96', colorText: "#fff", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI5.png' };
  }
  if (parseInt(aqi) > 300) {
    return { colorAqi: '#7e0023', levelAqi: 'Nguy hại', colorTitle: '#66011d', colorText: "#fff", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI6.png' };
  }
  return { colorAqi: '#818181', levelAqi: 'N/A', colorText: "#fff", imageAQI: 'https://pamair.org/assets/images/aqifaces/AQI0.png' };
}

export default function InfoDetail(props) {
  const classes = useStyles();
  const { info, city, city1 } = props;

  return (
    <div>
      <Box>
        <Card className={classes.root} style={{ backgroundColor: checkLevelAqi(info.aqi_vn_1h).colorAqi }} variant="outlined">
          <CardContent>
            <div
              className="card"
              style={{ display: "flex", flexDirection: "column", color: checkLevelAqi(info.aqi_vn_1h).colorText }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: checkLevelAqi(info.aqi_vn_1h).colorTitle,
                  marginBottom: 10,
                  padding: "8px 4px",
                }}
              >
                <div>
                  {info.name}
                </div>
                <div>
                  {city.name} - {city1.name} ({parseFloat(info.lat).toFixed(4)} -  {parseFloat(info.lng).toFixed(4)})
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: 8,
                  paddingRight: 8,
                  boxSizing: 'border-box'
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div><span>VN AQI</span></div>
                  <div>
                    <span style={{ fontSize: 24, fontWeight: 700 }}>{info.aqi_vn_1h ? (info.aqi_vn_1h) : 'N/A'}</span>
                  </div>
                </div>
                <div>
                  <div>
                    <Avatar
                      className="classes.large"
                      src={checkLevelAqi(info.aqi_vn_1h).imageAQI}
                    />
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span>{checkLevelAqi(info.aqi_vn_1h).levelAqi}</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 10,
                  marginTop: 10,
                }}
              >
                <div>
                  <div style={{ textAlign: 'center' }}>
                    <span>{parseFloat(info.children[0]?.lastaveragehour).toFixed(1)}</span>
                  </div>
                  <div>
                    <span>PM 2.5 (µg/m3)</span>
                  </div>
                </div>
                <div>
                  <div style={{ textAlign: 'center' }}>
                    <span>74.1</span>
                  </div>
                  <div>
                    <span>Độ ẩm (%)</span>
                  </div>
                </div>
                <div>
                  <div style={{ textAlign: 'center' }}>
                    <span>24.3</span>
                  </div>
                  <div>
                    <span>Nhiệt độ (°C)</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span>Cập nhật:{moment(new Date(info.children[0]?.aqi_us_1h_longtime)).format('DD/MM/YYYY HH:mm')}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Card>
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div>
                  <span>PM 2.5 24h gần nhất (Lo - Hi)</span>
                </div>
                <div>
                  <span>{parseFloat(info.children[0]?.min_last_24h_value).toFixed(1)} - {parseFloat(info.children[0]?.max_last_24h_value).toFixed(1)}</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div>
                  <span>Rank</span>
                </div>
                <div>
                  <span>#{info.children[0]?.rank_all_value}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Card>
          <CardContent>
            {info.nguondata?.filter((item) => {
              return item.language === 'vi';
            }).map((item, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div>Đóng góp bởi: </div>
                    &nbsp;
                  <div><img src={item.logo} alt="logo" style={{ height: 32 }} /></div>
                </div>
                <div style={{ textAlign: 'center' }}>{item.name}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Card>
          <CardContent>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span>Lịch sử AQI</span>
            </div>
            <div style={{ marginLeft: -20 }}>
              <HightChart />
            </div>
          </CardContent>
        </Card>
      </Box>
      <div style={{ display: 'none' }}>
        <Icon levelAqi={checkLevelAqi(info.aqi_vn_1h)} />
      </div>
    </div>
  );
};
