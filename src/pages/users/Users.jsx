import React, { Suspense, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CContainer, CSpinner } from "@coreui/react";

const initialRows = [
  {
    id: 1,
    userName: "Kylpyhuone",
    email: "sebastian@gmail.com",
    name: "Sebastian Herbst",
    activity: "2024-07-31T18:12:54Z",
  },
  {
    id: 2,
    userName: "Kylpyhuone",
    email: "jari@gmail.com",
    name: "Jari Siikavirta",
    activity: "2024-07-31T18:12:54Z",
  },
  {
    id: 3,
    userName: "Kylpyhuone",
    email: "/",
    name: "Jari Siikavirta",
    activity: "2024-07-31T18:12:54Z",
  },
  {
    id: 4,
    userName: "Kylpyhuone",
    email: "/",
    name: "Jari Siikavirta",
    activity: "2024-07-31T18:12:54Z",
  },
  {
    id: 5,
    userName: "Kylpyhuone",
    email: "/",
    name: "Jari Siikavirta",
    activity: "2024-07-31T18:12:54Z",
  },
];

export default function DevicesList() {
  const [rows, setRows] = useState(initialRows);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userName",
      headerName: "Username",
      width: 160,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 180,
      editable: false,
    },
    {
      field: "name",
      headerName: "Name",
      width: 160,
      editable: false,
    },
    {
      field: "activity",
      headerName: "Activity",
      type: "timeStamp",
      width: 160,
      editable: false,
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
        sx={{
          "& .MuiDataGrid-row": {
            backgroundColor: "#f3f4f7",
          },
        }}
      />
      <Suspense />
    </CContainer>
  );
}
