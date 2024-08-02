import React from "react";

import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilCloudDownload } from "@coreui/icons";

import Widgets from "../../components/Widgets.jsx";
import MainChart from "../../components/MainChart.jsx";

function Dashboard() {
  return (
    <>
      <Widgets className="mb-4" />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Total Users
              </h4>
              <div className="small text-body-secondary">
                January - July 2023
              </div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {["Day", "Month", "Year"].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === "Month"}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
      </CCard>
      <CRow>
        <CCol xs></CCol>
      </CRow>
    </>
  );
}

export default Dashboard;
