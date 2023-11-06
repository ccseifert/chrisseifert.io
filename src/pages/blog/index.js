import * as React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div className="margin-top-0">
                    <h1
                        className="headline-container has-text-weight-bold is-size-1"
                        style={{
                            color: 'black',
                        }}
                    >
                        Latest Posts
                    </h1>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <BlogRoll />
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
