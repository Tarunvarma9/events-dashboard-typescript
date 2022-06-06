import React, { useState, useEffect } from "react";
// import "@progress/kendo-theme-default/dist/all.css";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { process } from "@progress/kendo-data-query";
import { v4 } from "uuid";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Modal } from "react-bootstrap";
import EditForm from "./editForm";

const EditCommandCell = (props) => {
  return (
    <td>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary me-3"
        onClick={() => props.enterEdit(props.dataItem)}
      >
        Edit
      </button>

      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
        onClick={() => {
          if (window.confirm("Are you sure you wish to delete this item?"))
            props.deleteState(props.dataItem.id);
        }}
      >
        Delete
      </button>
    </td>
  );
};

function StateMaster() {
  const [openForm, setOpenForm] = useState(false);
  const [editItem, setEditItem] = useState({
    ProductID: 1,
  });
  const [show, setShow] = useState(false);
  const [stateList, setState] = useState([]);

  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");

  const handleClose = () => {
    setShow(false);
    setCountryName("");
    setStateName("");
  };
  const handleShow = () => setShow(true);

  /* Model Box Finsihs */

  const enterEdit = (item) => {
    setOpenForm(true);
    setEditItem(item);
  };

  const handleSubmit = (event) => {
    console.log(event);
    let newData = stateList.map((item) => {
      if (event.id === item.id) {
        item = { ...event };
      }

      return item;
    });
    setState(newData);
    setOpenForm(false);
  };

  const handleCancelEdit = () => {
    setOpenForm(false);
  };

  const MyEditCommandCell = (props) => (
    <>
      <EditCommandCell
        {...props}
        enterEdit={enterEdit}
        deleteState={deleteState}
      />
    </>
  );

  /* Model Box Finsihs */

  function onAddState(e) {
    e.preventDefault();
    const newState = {
      countryName,
      stateName,
      createdBy: "Ram",
      createdOn: "2003-07-28T03:02:46.787Z",
      id: v4(),
    };
    stateList.push(newState);
    handleClose();
  }

  function deleteState(id) {
    const filterdList = stateList.filter((eachState) => {
      if (id !== eachState.id) {
        return eachState;
      }
    });
    setState(filterdList);
  }

  useEffect(() => {
    fetch("https://6269069daa65b5d23e7e6e5b.mockapi.io/state/stateapi")
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  const initialDataState = {
    sort: [
      {
        field: "code",
        dir: "asc",
      },
    ],
    take: 5,
    skip: 0,
  };

  const _export = React.useRef(null);
  const [dataState, setDataState] = React.useState(initialDataState);

  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save();
    }
  };

  return (
    <>
      <div className="state-container">
        <div>
          <h4>Details Page</h4>
        </div>
        <>
          <ExcelExport data={stateList} ref={_export}>
            <Grid
              data={process(stateList, dataState)}
              reorderable
              resizable
              {...dataState}
              pageable={true}
              sortable={true}
              filterable={true}
              style={{
                width: "100%",
                margin: "auto",
                minHeight: "400px",
              }}
              onDataStateChange={(e) => {
                setDataState(e.dataState);
              }}
            >
              <GridToolbar>
                
                <button
                  title="Add New "
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                  onClick={handleShow}
                >
                  Add New 
                </button>
                <span className="export-button-container">
                <button title="Pdf Export" onClick={excelExport} className='export-button'>
                <img className="icon" src="https://res.cloudinary.com/santoshk/image/upload/v1652165138/admin/pdf-export_jddorh.png"/>
                </button>
                <button title="Excel Export" onClick={excelExport} className='export-button'>
                
                  <img src="https://res.cloudinary.com/santoshk/image/upload/v1652166465/admin/excel-export_jvz3mo.png" className="icon"/>
                </button>
                </span>
                
              </GridToolbar>
              <GridColumn field="stateName" title=" Name" />
              <GridColumn field="countryName" title=" Name" />
              <GridColumn field="createdBy" title=" By" />
              <GridColumn field="createdOn" title=" On" />
              <GridColumn
                field="Action"
                filterable={false}
                sortable={false}
                cell={MyEditCommandCell}
              />
            </Grid>
          </ExcelExport>
          {openForm && (
            <EditForm
              cancelEdit={handleCancelEdit}
              onSubmit={handleSubmit}
              item={editItem}
            />
          )}
        </>

        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={true}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add State</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={onAddState}>
                <div className="form-group mt-3">
                  <input
                    value={countryName}
                    onChange={(e) => setCountryName(e.target.value)}
                    minLength={2}
                    required
                    type="text"
                    className="form-control"
                    id="countryName"
                    aria-describedby="emailHelp"
                    placeholder="Enter Country Name"
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                    required
                    minLength={2}
                    type="text"
                    className="form-control"
                    id="stateName"
                    placeholder="Enter State Name"
                  />
                </div>

                <button
                  type="submit"
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary mt-4"
                >
                  Add State
                </button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <button
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                onClick={handleClose}
              >
                Close
              </button>
            </Modal.Footer>
          </Modal>
          {/* Model Box Finsihs */}
        </div>
      </div>

    </>
  );
}

export default StateMaster;
