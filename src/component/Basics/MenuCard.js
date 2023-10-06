import React from "react";

const MenuCard = ({ Menudata }) => {
  //   console.log(Menudata);
  return (
    <>
      <section className="main-card--container">
        {Menudata.map((curElem) => {
          return (
            <>
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {curElem.id}
                    </span>

            
                    <span className="card-author subtle">{curElem.name}</span>

                    <h2 className="card-title"> {curElem.name}</h2>
                    <span className="card-description subtle">
                      {curElem.description}
                      <div className="card-read">Read</div>
                      <img
                        src={curElem.image}
                        alt="images"
                        className="card-media"
                      />
                      <span
                        className="card-author subtle"
                        style={{ color: "red" }}
                      >
                        Order now
                      </span>
                    </span>
                  </div>
                </div>

                <h1>Welcome to Gajanan Beer Bar</h1>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
export default MenuCard;
