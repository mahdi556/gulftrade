import styles from "components/user/User.module.css";
import Input from "rsuite/Input";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
const AddProduct = () => {
  const editorRef = useRef();

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <div className={`  py-3 mt-4 ${styles.newPrCard}`}>
        <div className={` px-3  ${styles.titleCard}`}>
          <h3 className="titr">Edit Product</h3>
          <span className="text-muted">* indicates required fields</span>
        </div>
        <div className="px-3 mt-3 col-12">
          <div className="row col-8">
            <div className="form-group col-7 me-auto">
              <label className="control-label" for="">
                Name:
              </label>
              <Input className="form-control" placeholder="" />
            </div>
            <div className="form-group col-4">
              <label className="control-label" for="">
                * Price FOB in USD:
              </label>
              <Input className="form-control" placeholder="" />
            </div>
          </div>
          <div className="form-group mt-3 col-8">
            <label className="control-label" for="">
              * Product Detailed Description:
            </label>
            {/* <Input
              className="form-control"
              as="textarea"
              rows={5}
              placeholder="Textarea"
            />{" "} */}
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              apiKey="i54nwci0dd1kausb1g7zvrr6c4l56jj53au5x3glhaazil7b"
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | casechange blocks | bold italic backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>
          <div className="row col-10 mt-3 ">
            <div className="form-group col-5 me-auto">
              <label className="control-label" for="">
                Seller Product Code:
              </label>
              <Input className="form-control" placeholder="" />
            </div>
            <div className="form-group col-5  ">
              <label className="control-label" for="">
                Product Standards:
              </label>
              <Input className="form-control" placeholder="" />
            </div>
          </div>
          <button
            className="btn btn-light mt-3 border-primary border botder-1"
            type="submit"
          >
            next{" "}
          </button>
        </div>
      </div>
    </>
  );
};
export default AddProduct;
