import Flag from "./Flag";

const Region = () => {
  return (
    <>
      <div className="d-flex flex-column mt-3 m-4">
        <div className="d-flex align-items-end">
          <h3>Suppliers By Region</h3>
        </div>
        <hr
          style={{
            width: "100%",
            height: 3,
          }}
        />
        <div className="row row-cols-6 gx-5 gy-4 px-3">
          <Flag country='USA' fl='us' />
          <Flag country='QATAR' fl='qa' />
          <Flag country='OMAN' fl='om' />
          <Flag country='UAE' fl='us' />
          <Flag country='IRAN' fl='ir' />
          <Flag country='TURKEY' fl='tr' />
          <Flag country='JAPAN' fl='jp' />
          <Flag country='INDIA' fl='in' />
          <Flag country='IRAQ' fl='iq' />
          <Flag country='South Korea (Republic Of Korea)' fl='kr' />
          
        </div>
      </div>
    </>
  );
};
export default Region;
