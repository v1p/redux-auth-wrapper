const React = require('react');
const { connect } = require('react-redux');

export default function Home({ number, increase, decrease }) {
  return (
    <div>
      <h4>{"Welcome! Why dont you login and check out Foo? Or log in as an admin and click Admin"}</h4>
      <h4>{"Or just try to navigate there and you will be redirected"}</h4>
      <h4>{"Dont forget to try logging out on any page!"}</h4>
    </div>
  );
};
