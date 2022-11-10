import React from 'react';

const Blog = () => {
    return (
        <div className='w-2/3 mx-auto my-12'>
            <div className='border p-5 mb-8 '>
                <h3 className="text-2xl text-blue-500 mb-4">Difference between SQL and NoSQL</h3>
                <p>Perhaps the most significant difference is in the query language. SQL (Structured Query Language) is a standard, declarative programming language widely used for querying relational databases. In contrast, NoSQL databases generally use more specialized query languages.</p>
                <p>For example, MongoDB uses its own query language based on JavaScript. Other popular query languages for NoSQL databases include Apache Cassandra’s Query Language (CQL) and Amazon DynamoDB’s Query Language.</p>
            </div>
            <div className='border p-5 mb-8'>
                <h3 className="text-2xl text-blue-500 mb-4">What is JWT, and how does it work?</h3>
                <p>For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.
             </p>
                <p>
                    JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz
                </p>
            </div>
            <div className='border p-5 mb-8'>
                <h3 className="text-2xl text-blue-500 mb-4">How does NodeJS handle multiple requests at the same time?</h3>
                <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
            <div className='border p-5 '>
                <h3 className="text-2xl text-blue-500 mb-4">What is the difference between javascript and NodeJS?</h3>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                
            </div>
        </div>
    );
};

export default Blog;