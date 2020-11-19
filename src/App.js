import './App.css';
import React from 'react';

function App() {

  const [description, setDescription] = React.useState();
  const [result, setResult] = React.useState();
  const [displayError, setDisplayError] = React.useState(false);
  const [displayForm, setDisplayForm] = React.useState(true)

  React.useEffect(() => {
    if (result !== undefined) {
      setDisplayForm(false);
    } else {
      setDisplayForm(true);
    }
  }, [result])


  const getResult = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dXNlcjp1c2Vy");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "description": description });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://enigmatic-cove-22949.herokuapp.com/api/v1.0/predict", requestOptions)
      .then(response => response.text())
      .then(result => setResult(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }

  return (
    <div className="App">

      <div style={{
        background: '#727272',
        height: '300px',
        width: '900px',
        margin: 'auto',
        opacity: '90%',
        borderRadius: '10px'
      }}>
        {displayForm &&
          <div>
            <div style={{
              display: 'flex',
              marginTop: '20px',
              paddingLeft: '10px',
              paddingRight: '10px'
            }}
            >
              <p style={{
                color: 'white',
                fontSize: 'medium',
                fontWeight: '700',
                fontFamily: '-webkit-body'
              }}>Description : </p>
            </div>

            <div style={{
              display: 'flex',
              paddingLeft: '10px',
              paddingRight: '10px',
              flexDirection: 'column'
            }}
            >
              <textarea className="form-control" id="textToPredit" rows="3" placeholder="Full description of the ticket"
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
                value={description}
                style={{
                  minHeight: '120px',
                  height: '125px',
                  maxHeight: '130px'
                }}
              />
              {displayError && <p style={{
                color: '#a80000',
                fontSize: 'medium',
                fontWeight: '700',
                fontFamily: '-webkit-body'
              }}>* &nbsp; Please enter description</p>}
            </div>
            <div style={{
              display: 'flex',
              marginTop: '20px',
              paddingLeft: '10px',
              paddingRight: '10px'
            }}
            >
              <button type="submit" className="btn btn-primary" onClick={(e) => {
                if (description === undefined) {
                  e.preventDefault();
                  setDisplayError(true);
                  return false;
                }
                setDisplayError(false);
                getResult();
              }}>Submit</button>
            </div>

          </div>}
        {displayForm === false &&
          <div style={{
            marginTop: '20px',
            paddingLeft: '10px',
            paddingRight: '10px'
          }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'start'
            }}
            >
              <p style={{
                color: 'white',
                fontSize: 'medium',
                fontWight: '600',
                fontFamily: 'fangsong',
              }}>Entered description :</p> <p style={{
                color: 'white',
                fontSize: 'medium',
                fontWight: '600',
                fontFamily: 'fangsong',
              }}>{result && result.output[0].description}</p></div>
            <p style={{
              color: 'white',
              fontSize: 'medium',
              fontWight: '600',
              fontFamily: 'fangsong',
            }}>Predicted Result : {result && result.output[0].result}</p>
            <p style={{
              color: 'red',
              fontSize: 'medium',
              fontWight: '600',
              fontFamily: 'fangsong',
            }}>
              <a href="" onClick={() => {
                setResult(undefined);
              }}
                style={{ color: '#e1ff68' }} >Click Here to Try Again</a>
            </p>
          </div>
        }
      </div>
    </div >
  );
}

export default App;
