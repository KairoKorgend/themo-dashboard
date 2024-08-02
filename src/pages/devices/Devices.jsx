import React, { Suspense, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CContainer, CSpinner, CButton } from "@coreui/react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const initialRows = [
  {
    id: 1,
    deviceName: "Kylpyhuone",
    info: "/",
    client: "Jari Siikavirta",
    deviceType: "FLOOR/_/_",
    power: "_",
    timeStamp: "0001-01-01T00:00:00",
  },
  {
    id: 2,
    deviceName: "Kylpyhuone",
    info: "/",
    client: "Jari Siikavirta",
    deviceType: "FLOOR/_/_",
    power: "_",
    timeStamp: "0001-01-01T00:00:00",
  },
  {
    id: 3,
    deviceName: "Kylpyhuone",
    info: "/",
    client: "Jari Siikavirta",
    deviceType: "FLOOR/_/_",
    power: "_",
    timeStamp: "0001-01-01T00:00:00",
  },
  {
    id: 4,
    deviceName: "Kylpyhuone",
    info: "/",
    client: "Jari Siikavirta",
    deviceType: "FLOOR/_/_",
    power: "_",
    timeStamp: "0001-01-01T00:00:00",
  },
  {
    id: 5,
    deviceName: "Kylpyhuone",
    info: "/",
    client: "Jari Siikavirta",
    deviceType: "FLOOR/_/_",
    power: "_",
    timeStamp: "0001-01-01T00:00:00",
  },
];

export default function DevicesList() {
  const [rows, setRows] = useState(initialRows);

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleEdit = (id) => {
    // Add your edit logic here
    console.log(`Edit row with id: ${id}`);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "deviceName",
      headerName: "Device name",
      width: 160,
      editable: false,
    },
    {
      field: "info",
      headerName: "Info",
      width: 140,
      editable: false,
    },
    {
      field: "client",
      headerName: "Client",
      width: 160,
      editable: false,
    },
    {
      field: "deviceType",
      headerName: "Device type",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "power",
      headerName: "Power",
      width: 110,
      editable: false,
    },
    {
      field: "timeStamp",
      headerName: "Timestamp (UTC)",
      type: "timeStamp",
      width: 160,
      editable: false,
    },
    {
      width: 150,
      renderCell: (params) => (
        <CContainer className="px-4" lg>
          <EditIcon
            onClick={() => handleEdit(params.id)}
            style={{
              cursor: "pointer",
              color: "green",
              marginLeft: "20px",
              marginRight: "8px",
            }}
          />
          <DeleteIcon
            onClick={() => handleDelete(params.id)}
            style={{
              cursor: "pointer",
              color: "red",
            }}
          />
        </CContainer>
      ),
    },
  ];

  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}></Suspense>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      <Suspense />
    </CContainer>
  );
}
