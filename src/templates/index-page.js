import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import BlogRoll from '../components/BlogRoll'

// eslint-disable-next-line
export const IndexPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content

    return (
        <div>
            <section className="section section--gradient">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <div className="content">
                                    <div className="tile">
                                        <h1 className="title">{title}</h1>
                                    </div>
                                    <div className="tile">
                                        <h3 className="subtitle">
                                            <PageContent className="content" content={content} />
                                        </h3>
                                    </div>
                                </div>

                                <div className="column is-12 blog-latest">
                                    <h3 className="has-text-weight-semibold is-size-4">Latest</h3>
                                    <BlogRoll />
                                    <div className="column is-12 has-text-centered">
                                        <Link classname="btn" to="/blog">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

IndexPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <IndexPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
    query IndexPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`
