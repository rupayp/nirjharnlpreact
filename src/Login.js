import React from 'react';


const LoginScreen = ({
    submitCallBack
}) => {

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <div id="main-container">
            <div className="outer-circle">
                <div className="inner-circle">
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>
            <div style={{
                marginTop: '20px'
            }}>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        id="username"
                        aria-describedby="emailHelp"
                        placeholder="Username" style={{
                            'width': '300px',
                            'margin': 'auto'
                        }}
                        value={userName}
                        onChange={(v) => {
                            setUserName(v.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Password" style={{
                        'width': '300px',
                        'margin': 'auto'
                    }}
                        onChange={(v) => {
                            setPassword(v.target.value);
                        }}
                    />
                </div>
                <div className="form-group" style={{
                    'display': 'flex',
                    justifyContent: 'center'
                }}>
                    <button type="submit" className="btn btn-primary"
                        onClick={() => {
                            submitCallBack(userName, password);
                        }}
                    >Submit</button>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;