import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { CRow, CCol, CWidgetStatsA } from "@coreui/react";
import { getStyle } from "@coreui/utils";

function Widgets(props) {
  const widgetChartRef1 = useRef(null);
  const widgetChartRef2 = useRef(null);

  useEffect(() => {
    document.documentElement.addEventListener("ColorSchemeChange", () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor =
            getStyle("--cui-primary");
          widgetChartRef1.current.update();
        });
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor =
            getStyle("--cui-info");
          widgetChartRef2.current.update();
        });
      }
    });
  }, [widgetChartRef1, widgetChartRef2]);

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="success"
          value={<>1345 </>}
          title={
            <span style={{ marginBottom: "20px", display: "block" }}>
              Devices Online
            </span>
          }
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="secondary"
          value={<>1345 </>}
          title={
            <span style={{ marginBottom: "20px", display: "block" }}>
              Devices Offline
            </span>
          }
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="danger"
          value={<>1345 </>}
          title={
            <span style={{ marginBottom: "20px", display: "block" }}>
              Total Errors
            </span>
          }
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="info"
          value={<>1345 </>}
          title={
            <span style={{ marginBottom: "20px", display: "block" }}>
              Total Users
            </span>
          }
        />
      </CCol>
    </CRow>
  );
}

Widgets.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
};

export default Widgets;
