import React from "react";
import { FaBahai } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import jwt_img from "../../images/jwt-workflow.webp";
import jwt_img2 from '../../images/workflow_jwt.png'
import "./Blogs.css";
import "react-photo-view/dist/react-photo-view.css";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs');
  return (
    <div>
      <div className=" text-slate-200  mx-5">
        <h2 className="flex justify-center items-center gap-3 mt-3 text-3xl  font-bold underline dark:text-slate-800">
          <span className="spin-animation">
            <FaBahai />
          </span>
          <span>Coder's Blogs House!</span>
          <span className="spin-animation">
            <FaBahai />
          </span>
        </h2>
        <div className="w-full md:w-3/4 mx-auto blog-container grid  grid-cols-1 gap-y-[100px] mt-8">
          <div className="card w-full bg-slate-800 bg-opacity-80 shadow-2xl rounded-none">
            <div className="card-body">
              <h2 className="card-title">
                Q1: What is the differences between SQL and NoSQL?
              </h2>
              <div className="ml-5">
                <p>
                  SQL means Structured Query Language whereas NoSQL means Not
                  only SQL.
                </p>
                <br />
                <h5 className="text-lg mb-2 underline">
                  The more differences between them are discussed below:
                </h5>
                <ul className="list-decimal list-inside space-y-3">
                  <li>
                    Type: SQL databases are primarily called as Relational
                    Databases (RDBMS); whereas NoSQL database are primarily
                    called as non-relational or distributed database.
                  </li>
                  <li>
                    Language: SQL databases defines and manipulates data based
                    structured query language (SQL). Seeing from a side this
                    language is extremely powerful. <br />A NoSQL database has
                    dynamic schema for unstructured data. Data is stored in many
                    ways which means it can be document-oriented,
                    column-oriented, graph-based or organized as a KeyValue
                    store.
                  </li>
                  <li>
                    Scalability: In almost all situations SQL databases are
                    vertically scalable. But on the other hand NoSQL databases
                    are horizontally scalable.
                  </li>
                  <li>
                    Property followed: SQL databases follow ACID properties
                    (Atomicity, Consistency, Isolation and Durability) whereas
                    the NoSQL database follows the Brewers CAP theorem
                    (Consistency, Availability and Partition tolerance).
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card w-full bg-slate-800 bg-opacity-80 shadow-2xl rounded-none">
            <div className="card-body">
              <h2 className="card-title">
                Q2: What is JWT, and how does it work?
              </h2>
              <div className="ml-5">
                <p>
                  A JSON web token(JWT) is JSON Object which is used to securely
                  transfer information over the web(between two parties). It can
                  be used for an authentication system and can also be used for
                  information exchange.The token is mainly composed of header,
                  payload, signature.
                  <div className="flex flex-col sm:flex-row gap-3">
                    <PhotoProvider>
                      <PhotoView src={jwt_img}>
                        <img
                          className="cursor-pointer w-full sm:w-1/2  mx-auto my-3 rounded-lg border-2 p-0.5 border-slate-500 hover:border-slate-400"
                          src={jwt_img}
                          alt=""
                        />
                      </PhotoView>
                      <PhotoView src={jwt_img2}>
                        <img
                          className="cursor-pointer  w-full sm:w-1/2 mx-auto my-3 rounded-lg border-2 p-0.5 border-slate-500 hover:border-slate-400"
                          src={jwt_img2}
                          alt=""
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  These three parts are separated by dots(.). JWT defines the
                  structure of information we are sending from one party to the
                  another, and it comes in two forms - Serialized, Deserialized.
                  The Serialized approach is mainly used to transfer the data
                  through the network with each request and response. While the
                  deserialized approach is used to read and write data to the
                  web token.
                </p>
              </div>
            </div>
          </div>
          <div className="card w-full bg-slate-800 bg-opacity-80 shadow-2xl rounded-none">
            <div className="card-body">
              <h2 className="card-title">
                Q3: What is the difference between javascript and NodeJS?
              </h2>
              <div className="ml-5">
                <p>
                  Javascript is a programming language. On the other hand,
                  Nodejs is a javascript runtime. Nodejs allows Javascript code
                  to run outside the browser. Nodejs comes with a lot of modules
                  and mostly used in web development.
                </p>
                <br />
                <h5 className="text-lg mb-2 underline">
                  The differences between them are discussed below:
                </h5>
                <ul className="list-decimal list-inside space-y-3">
                  <li>
                    Javascript is a programming language that is used for
                    writing scripts on the website.But NodeJS is a Javascript
                    runtime environment.
                  </li>
                  <li>
                    Javascript can only be run in the browsers. We can run
                    Javascript outside the browser with the help of NodeJS.
                  </li>
                  <li>
                    It is basically used on the client-side. It is mostly used
                    on the server-side.
                  </li>
                  <li>
                    Javascript is capable enough to add HTML and play with the
                    DOM. Nodejs does not have capability to add HTML tags.
                  </li>
                  <li>
                    Javascript is used in frontend development. Nodejs is used
                    in server-side development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card w-full bg-slate-800 bg-opacity-80 shadow-2xl rounded-none">
            <div className="card-body">
              <h2 className="card-title">
                Q4: How does NodeJS handle multiple requests at the same time?
              </h2>
              <div className="ml-5">
                <p>
                  We know NodeJS application is single-threaded. Say, if
                  processing involves request A that takes 10 seconds, it does
                  not mean that a request which comes after this request needs
                  to wait 10 seconds to start processing because NodeJS event
                  loops are only single-threaded. The entire NodeJS architecture
                  is not single-threaded.
                </p>
                <br />
                <h5 className="text-lg mb-2 underline">
                  How NodeJS handle multiple client requests?
                </h5>
                <p>
                  NodeJS receives multiple client requests and places them into
                  EventQueue. NodeJS is built with the concept of event-driven
                  architecture. NodeJS has its own EventLoop which is an
                  infinite loop that receives requests and processes them.
                  EventLoop is the listener for the EventQueue. If NodeJS can
                  process the request without I/O blocking then the event loop
                  would itself process the request and sends the response back
                  to the client by itself. But, it is possible to process
                  multiple requests parallelly using the NodeJS cluster module
                  or worker_threads module.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Blogs;
