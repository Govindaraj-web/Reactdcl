import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CodeBlock from "../CodeSnippet//CodeBlock";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function GoogleLoginweb() {
  const [profile, setProfile] = useState(null);

  // Code snippet for Google Login 
  const snippets1 = [
    { code: `npx create-react-app google-login-app`, theme: a11yDark },
    { code: `cd google-login-app`, theme: a11yDark }
  ];

  const snippets2 = [
    { code: `npm install @react-oauth/google`, theme: a11yDark },
    { code: `npm install jwt-decode`, theme: a11yDark },
    { code: `npm install @react-oauth/google jwt-decode (above 2 comment at one line)`, theme: a11yDark },
    {
      code: `import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider } from "@react-oauth/google";

function GoogleLoginweb() {
  const [profile, setProfile] = useState(null);

  return (
    <GoogleOAuthProvider clientId="1056439595907-u11pnoqp7c3ic04h0q2gf55g9bekslug.apps.googleusercontent.com">
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {!profile ? (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log("Decoded User Info:", decoded);
            setProfile(decoded); // Save profile in state
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      ) : (
        <div>
          <h2>Welcome {profile.name}</h2>
          <p>Email: {profile.email}</p>
          <img src={profile.picture} alt="User" />
        </div>
      )}
    </div>
    </GoogleOAuthProvider>

  );
}
export default GoogleLoginweb`, theme: a11yDark
    }

  ];

  return (
    <>
      <GoogleOAuthProvider clientId="1056439595907-u11pnoqp7c3ic04h0q2gf55g9bekslug.apps.googleusercontent.com">
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          {!profile ? (
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log("Decoded User Info:", decoded);
                setProfile(decoded); // Save profile in state
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          ) : (
            <div>
              <h2>Welcome {profile.name}</h2>
              <p>Email: {profile.email}</p>
              <img src={profile.picture} alt="User" />
            </div>
          )}
        </div>
      </GoogleOAuthProvider>

      {/*  Displaying the code snippet */}
      <div style={{ marginTop: "100px" }}>
        <h1><u>Google Login Web code step-by-step</u></h1>
        {snippets1.map((item, index) => (
          <CodeBlock
            key={index}
            code={item.code}
            theme={item.theme}
          />
        ))}

        <h3> then open Google console Link: <a href="https://console.cloud.google.com/apis/credentials"> https://console.cloud.google.com/apis/credentials</a> create project then Client ID for Web application, inside set Authorized JavaScript origins and Authorized redirect URIs with localhost number(http://localhost:3000)</h3>
        {snippets2.map((item, index) => (
          <CodeBlock
            key={index}
            code={item.code}
            theme={item.theme}
          />
        ))}

      </div>
    </>

  );
}
export default GoogleLoginweb




