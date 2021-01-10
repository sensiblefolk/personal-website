import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Anyi Michael | Software Engineer'}</title>
        <html lang={lang || 'en'} />
        <meta
          name="keywords"
          content="sensiblefolk, michael anyi, javascript, typescript, python, go, css, graphql, hasura, GCP, Azure, git, REST Api, frontend, backend, fullstack, React, NextJs, Gatsby, Angular, SvelteJs, Nigeria, Rust"
        />
        <meta
          name="description"
          content="I am fullstack developer web developer with enthusiasm for building responsive frontend and backend applications. I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field. | Developer"
        />
      </Helmet>
      <App />
    </>
  );
};
