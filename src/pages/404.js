import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>This page doesn&#39;t exist.</p>
    <Link to="/" className="button">
      Back to Home page
    </Link>
  </Layout>
)

export default NotFoundPage
