import React from "react";
import { Box, Card, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import HightChart from "./highChart";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    backgroundColor: "#ccac25",
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

export default function InfoDetail(props) {
  const classes = useStyles();
  const {info, city, city1} = props;
  function(number) {
    return 
  }
  return (
    <div>
      <Box>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div
              className="card"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#a48a1c",
                  marginBottom: 10,
                  padding: "8px 4px"
                }}
              >
                <div>{info.name}</div>
              <div>{city.name} - {city1.name} ({info.lat} -  {info.lng})</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>VN AQI</div>
                  <div>
                    <span>{info.aqi_vn_1h}</span>
                  </div>
                </div>
                <div>
                  <div>
                    <Avatar
                      className="classes.large"
                      src="https://picsum.photos/200/300"
                    />
                  </div>
                </div>
                <div>Trung bình</div>
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
                  <div>
              <span>{info.children[0]?.min_last_24h_value}</span>
                  </div>
                  <div>
                    <span>PM 2.5 (µg/m3)</span>
                  </div>
                </div>
                <div>
                  <div>
                    <span>74.1</span>
                  </div>
                  <div>
                    <span>Độ ẩm (%)</span>
                  </div>
                </div>
                <div>
                  <div>
                    <span>24.3</span>
                  </div>
                  <div>
                    <span>Nhiệt độ (°C)</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
              <span>Cập nhật:{info.children[0]?.aqi_us_1h_longtime}</span>
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
                  <span>17.7 - 80.8</span>
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
                  <span>#140</span>
                </div>
              </div>
            </div>
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
    </div>
  );
};
