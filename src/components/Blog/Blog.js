import React from 'react';

const Blog = () => {
    return (
        <div className='py-10 px-2 dark:bg-black'>
            <div className="container mx-auto mb-4 p-6 overflow-hidden rounded-lg shadow bg-green-500 text-gray-100 dark:border">
                <article>
                    <h2 className="text-xl font-bold">What is CORS?</h2>
                    <p className="mt-4 text-gray-100 text-justify">Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. <br /><br />

                        An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json. <br /><br />

                        For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers. <br /><br />
                        The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.
                    </p>
                </article>
            </div>
            <div className="container mx-auto p-6 mb-4 overflow-hidden rounded-lg shadow bg-green-500 text-gray-100  dark:border">
                <article>
                    <h2 className="text-xl font-bold">Why are you using `firebase`?</h2>
                    <p className="mt-4 text-gray-100 text-justify">Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices <br /><br />
                    </p>

                    <h2 className="text-xl font-bold">What other options do you have to implement authentication?</h2>
                    <p className="mt-4 text-gray-100 text-justify">Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.<br /><br />
                    </p>
                </article>
            </div>
            <div className="container mx-auto p-6 mb-4 overflow-hidden rounded-lg shadow bg-green-500 text-gray-100  dark:border">
                <article>
                    <h2 className="text-xl font-bold">How does the private route work?</h2>
                    <p className="mt-4 text-gray-100 text-justify">The private route component is used to protect selected pages in a React app from unauthenticated users. <br />

                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </p>
                </article>
            </div>
            <div className="container mx-auto p-6 mb-4 overflow-hidden rounded-lg shadow bg-green-500 text-gray-100 dark:border ">
                <article>
                    <h2 className="text-xl font-bold">What is Node.js?</h2>
                    <div className="mt-4 text-gray-100">
                        <p>✔ Node.js is an open source server environment</p>
                        <p>✔ Node.js is free</p>
                        <p>✔ Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</p>
                        <p>✔ Node.js uses JavaScript on the server</p>
                    </div>
                    <br />

                    <h2 className="text-xl font-bold">How does Node.js work?</h2>
                    <p className="mt-4 text-gray-100 text-justify">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.<br /><br />
                    </p>
                </article>
            </div>
        </div>
    );
};

export default Blog;