import ContactForm from '../../components/contact';
import Head from 'next/head';
import { Fragment } from 'react';

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Ivan Blogs</title>
        <meta name="description" content="I post about javascript" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
