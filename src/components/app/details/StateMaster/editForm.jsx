import * as React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input} from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";


const EditForm = (props) => {
  return (
    <Dialog title={`Edit ${props.item.ProductName}`} onClose={props.cancelEdit}>
      <Form
        onSubmit={props.onSubmit}
        initialValues={props.item}
        render={(formRenderProps) => (
          <FormElement
            style={{
              maxWidth: 650,
            }}
          >
            <fieldset className={"k-form-fieldset"}>
              <div className="mb-3">
                <Field
                  name={"countryName"}
                  component={DropDownList}
                  textField={"CountryName"}
                  label={"Country Name"}
                />
              </div>

              <div className="mb-3">
                <Field
                  name={"stateName"}
                  component={Input}
                  label={"State Name"}
                />
              </div>
            </fieldset>
            <div className="k-form-buttons">
              <button
                type={"submit"}
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                disabled={!formRenderProps.allowSubmit}
              >
                Update
              </button>
              <button
                type={"submit"}
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                onClick={props.cancelEdit}
              >
                Cancel
              </button>
            </div>
          </FormElement>
        )}
      />
    </Dialog>
  );
};

export default EditForm;
