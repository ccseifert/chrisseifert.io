import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

// eslint-disable-next-line
export const IndexPageTemplate = ({ title, mainpitch, description, intro }) => {
    return (
        <div>
            <section className="section section--gradient">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <div className="content">
                                    <div className="tile">
                                        <h1 className="title">{mainpitch.title}</h1>
                                    </div>
                                    <div className="tile">
                                        <h3 className="subtitle">{mainpitch.description}</h3>
                                    </div>
                                </div>
                                <Features gridItems={intro.blurbs} />
                                <div className="column is-12">
                                    <h3 className="has-text-weight-semibold is-size-3">Latest stories</h3>
                                    <BlogRoll />
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn" to="/blog">
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
    title: PropTypes.string,
    mainpitch: PropTypes.object,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
}

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <IndexPageTemplate title={frontmatter.title} mainpitch={frontmatter.mainpitch} intro={frontmatter.intro} />
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                mainpitch {
                    title
                    description
                }
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
                            }
                        }
                        text
                    }
                }
            }
        }
    }
`
