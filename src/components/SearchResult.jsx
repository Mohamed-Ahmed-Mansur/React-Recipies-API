import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const SearchResult = ({ filteredData }) => {
  const [displayCount, setDisplayCount] = useState(20);

  if (!filteredData) {
    return (
      <div className="text-center">
        <ClipLoader color="#198754" />
      </div>
    );
  }

  if (filteredData.length === 0) {
    return <h3>No data found</h3>;
  }

  function handleClick(meal) {
    console.log(meal);
  }

  const handleShowMore = () => {
    setDisplayCount(displayCount + 4);
  };

  return (
    <div style={{ marginBlock: '5em' }}>
      <div className="container-fluid">
        <div className="row g-5 mx-auto">
          {filteredData.slice(0, displayCount)?.map((data) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={data.idMeal}>
                <div
                  className="overflow-hidden position-relative h-100"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleClick([data])}
                >
                  <div className="border rounded h-100">
                    <div className="w-100">
                      <img
                        className="w-100"
                        src={data.strMealThumb}
                        alt={data.strMeal}
                      />
                      <div
                        className="position-absolute bg-white rounded py-1 px-2"
                        style={{ top: '10px', right: '20px' }}
                      >
                        {/* <i class="bi bi-bookmark"></i> */}
                        <i
                          className="bi bi-bookmark-fill"
                          style={{ color: '#198754' }}
                        ></i>
                      </div>
                    </div>

                    <div className="p-3">
                      <h5 className="fw-700">{data.strMeal}</h5>
                      <p className="m-0 text-muted">{data.strArea}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {filteredData.length > displayCount && (
          <button className="btn btn-primary" onClick={handleShowMore} style={{ margin: "1rem 45%",  }}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
